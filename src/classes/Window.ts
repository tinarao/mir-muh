export class Canvas {

    public canv: HTMLCanvasElement;

    constructor(w: number, h: number) {
        this.canv = document.getElementById('canvas') as HTMLCanvasElement;
        this.canv.height = h;
        this.canv.width = w;
    }
}