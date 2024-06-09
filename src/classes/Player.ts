import { gRenderer } from "..";
import { Entity } from "./Entity";

export class Player extends Entity {
    constructor(rect: Rect, filepath: string) {
        super(rect, filepath);
    }

    private spriteSet = {
        idle: {
            left: "https://ibb.org.ru/images/2024/06/07/left.png",
            right: "https://ibb.org.ru/images/2024/06/07/right.png"
        }
    }

    private keys = {
        d: { pressed: false },
        a: { pressed: false },
        space: { pressed: false },
        enter: { pressed: false },
    }

    private facing: FacingDirections = "right";

    public allowDoubleJump = false;
    public updatePosition() {
        this.update();
        switch (this.facing) {
            case "left":
                this.sprite.src = this.spriteSet.idle.left;
                break;
            case "right":
                this.sprite.src = this.spriteSet.idle.right;
                break;
        }

        this.velocity.xvel = 0;

        if (this.keys.a.pressed) {
            this.velocity.xvel = -2;
        } else if (this.keys.d.pressed) {
            this.velocity.xvel = 2;
        }

        // gravity
        if (this.rectangle.y + this.rectangle.h + this.velocity.yvel < gRenderer.canv.height) {
            this.velocity.yvel += 0.1;
        } else {
            this.velocity.yvel = 0;
        }

        window.addEventListener("keydown", e => {
            switch (e.key) {
                case "d":
                    this.keys.d.pressed = true;
                    this.facing = "right";
                    break;
                case "a":
                    this.keys.a.pressed = true;
                    this.facing = "left";
                    break;
                case " ": // space
                    if (this.keys.space.pressed) {
                        break;
                    }
                    this.keys.space.pressed = true;
                    this.velocity.yvel = -5;
                    break;
                case "Enter":
                    this.keys.enter.pressed = true;
                    console.log("Shoot!");
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
                case "Enter":
                    this.keys.enter.pressed = false;
                    break;
            }
        })
    }
}