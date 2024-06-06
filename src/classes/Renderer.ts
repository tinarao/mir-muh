export class Renderer {
    public ctx: CanvasRenderingContext2D;

    constructor(canv: HTMLCanvasElement) {
        const c = canv.getContext('2d');
        if (!c) throw new Error("Could not initialize ctx");
        this.ctx = c;
    }

    public clearScreen(canvas: HTMLCanvasElement) {
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}