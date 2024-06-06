import { Entity } from "./Entity";
import type { Sprite } from "./Sprite";

// Physic instance, can move this with kbd, can only be created once per game


export class Player extends Entity {
    // private sprites = {
    //     idle: {
    //         left: "assets/sprites/player/idle/left.png",
    //         right: "assets/sprites/player/idle/right.png",
    //     }
    // }

    constructor(ctx: CanvasRenderingContext2D, rect: Rect, color: string, sprite: Sprite) {
        super(ctx, rect, color, { xvel: 0, yvel: 0 }, sprite);
    }

    private keys = {
        d: { pressed: false },
        a: { pressed: false },
        space: { pressed: false }
    }

    public allowDoubleJump = true;
    public updatePosition(canv: HTMLCanvasElement) {
        this.update();
        this.velocity.xvel = 0;

        if (this.keys.a.pressed) {
            this.velocity.xvel = -2;
        } else if (this.keys.d.pressed) {
            this.velocity.xvel = 2;
        }

        // gravity
        if (this.rectangle.y + this.rectangle.h + this.velocity.yvel < canv.height) {
            this.velocity.yvel += 0.1;
        } else {
            this.velocity.yvel = 0;
        }

        window.addEventListener("keydown", e => {
            switch (e.key) {
                case "d":
                    this.keys.d.pressed = true;
                    break;
                case "a":
                    this.keys.a.pressed = true;
                    break;
                case " ": // space
                    if (this.keys.space.pressed) {
                        break;
                    }

                    this.keys.space.pressed = true;
                    this.velocity.yvel = -5;
                    break;
            }
        })

        window.addEventListener("keyup", e => {
            switch (e.key) {
                case "d":
                    this.keys.d.pressed = false;
                    break;
                case "a":
                    this.keys.a.pressed = false;
                    break;
                case " ":
                    this.keys.space.pressed = false;
                    break;
            }
        })
    }
}