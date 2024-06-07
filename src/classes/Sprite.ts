import { gRenderer } from "..";

export class Sprite {
    private x: number;
    private y: number;
    private w: number;
    private h: number;
    private image: HTMLImageElement;

    constructor(pos: Rect, filepath: string) {
        this.x = pos.x;
        this.y = pos.y;
        this.w = pos.w;
        this.h = pos.h;
        this.image = new Image();
        this.image.src = filepath;
    }

    public draw() {
        if (!this.image) return alert("No image!")
        gRenderer.ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
    }
}