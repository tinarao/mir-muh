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

    public clearScreen(canvas: HTMLCanvasElement) {
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}