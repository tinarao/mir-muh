import { gravity } from "../constants"

export class Entity {
    protected rectangle: Rect;
    protected velocity: Velocity
    private color: string = "red";
    private ctx: CanvasRenderingContext2D;
    private sprite?: HTMLImageElement;

    constructor(ctx: CanvasRenderingContext2D, rect: Rect, color: string, vel: Velocity) {
        this.rectangle = rect;
        this.ctx = ctx;
        this.color = color;
        this.velocity = vel;
    }

    public setSprite(spr: HTMLImageElement) {
        this.sprite = spr;
    }

    public getX() {
        return this.rectangle.x;
    }

    public getY() {
        return this.rectangle.y;
    }

    public getW() {
        return this.rectangle.w;
    }

    public getH() {
        return this.rectangle.h;
    }

    public setX(x: number) {
        this.rectangle.x = x;
    }

    public setY(y: number) {
        this.rectangle.y = y;
    }

    public draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(
            this.rectangle.x,
            this.rectangle.y,
            this.rectangle.w,
            this.rectangle.h,
        )
    }

    public update() {
        // TODO: delete; wrote this for debug purposes
        this.rectangle.x += this.velocity.xvel;
        this.rectangle.y += this.velocity.yvel;

        this.draw();
    }
}
