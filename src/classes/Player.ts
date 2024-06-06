import { Entity } from "./Entity";

// Physic instance, can move this with kbd, can only be created once per game
export class Player extends Entity {
    public speed: number;
    constructor(ctx: CanvasRenderingContext2D, rect: Rect, color: string, vel: Velocity, speed: number) {
        super(ctx, rect, color, vel);
        this.speed = speed;
    }

    public move(dir: Directions) {
        let currY = this.getY();
        let currX = this.getX();
        switch (dir) {
            case "up":
                this.setY(currY - this.speed);
                break;
            case "down":
                this.setY(currY + this.speed);
                break;
        }
    }
}