import { bg, enemy1, player } from "..";
import { Sprite } from "./Sprite";

export class Renderer {
    public ctx: CanvasRenderingContext2D;
    public canv: HTMLCanvasElement;

    constructor(w: number, h: number) {
        this.canv = document.getElementById('canvas') as HTMLCanvasElement;
        this.canv.height = h;
        this.canv.width = w;

        const c = this.canv.getContext('2d');
        if (!c) throw new Error("Could not initialize ctx");
        this.ctx = c;
    }

    public clearScreen() {
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0, 0, this.canv.width, this.canv.height);
    }

    private time = {
        frameCount: 0,
        fpsInterval: 0,
        startTime: 0,
        now: 0,
        then: 0,
        elapsed: 0,
    }

    private animate() {
        requestAnimationFrame(() => this.animate());

        this.time.now = Date.now();
        this.time.elapsed = this.time.now - this.time.then;

        if (this.time.elapsed > this.time.fpsInterval) {
            this.time.then = this.time.now - (this.time.elapsed % this.time.fpsInterval);

            () => this.clearScreen();
            bg.draw();
            enemy1.draw();
            enemy1.updatePosition();
            player.updatePosition();


            // debug
            var sinceStart = this.time.now - this.time.startTime;
            var currentFps = Math.round(1000 / (sinceStart / ++this.time.frameCount) * 100) / 100;

            this.ctx.save();
            this.ctx.fillStyle = "white";
            this.ctx.font = "20px serif";
            this.ctx.fillText(`FPS: ${currentFps}`, 10, 50);
            this.ctx.fillText(`X: ${player.getX()}`, 10, 70);
            this.ctx.fillText(`Y: ${player.getY().toFixed(2)}`, 10, 90);
            this.ctx.fillText(`HP: ${player.lives}`, 10, 110);
            this.ctx.restore();
        }
    }

    public loop(fps: number) {
        this.time.fpsInterval = 1000 / fps;
        this.time.then = Date.now();
        this.time.startTime = this.time.then;

        this.animate();
    }

}