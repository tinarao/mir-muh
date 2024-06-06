export class Sprite {
    private x: number;
    private y: number;
    private image: HTMLImageElement;

    constructor(x: number, y: number, filepath: string) {
        this.x = x;
        this.y = y;
        this.image = new Image();
        this.image.src = filepath;
    }

    public draw(canv: CanvasRenderingContext2D) {
        if (!this.image) return alert("No image!")
        console.log(this.image);
        canv.drawImage(this.image, this.x, this.y, 1920, 1080);
    }
}