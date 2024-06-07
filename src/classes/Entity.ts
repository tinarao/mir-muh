import { gRenderer } from "..";

export class Entity {
    protected rectangle: Rect;
    protected velocity: Velocity = { xvel: 0, yvel: 0 };
    protected sprite: HTMLImageElement;

    public lives: number = 5;

    constructor(rect: Rect, filepath: string) {
        this.rectangle = rect;

        this.sprite = new Image();
        this.sprite.onload = () => {
            this.sprite.width = this.rectangle.w;
            this.sprite.height = this.rectangle.h;
        }
        this.sprite.src = filepath;
    }

    public draw() {
        gRenderer.ctx.drawImage(this.sprite, this.rectangle.x, this.rectangle.y);
    }

    public recieveDamage(dmg: number) {
        this.lives = this.lives - dmg;
    }

    public update() {
        this.rectangle.x += this.velocity.xvel;
        this.rectangle.y += this.velocity.yvel;

        if (this.lives <= 0) {
            alert("Ты проиграл!")
        }

        this.draw();
    }

    public getX() {
        return this.rectangle.x;
    }

    public getY() {
        return this.rectangle.y;
    }
}
