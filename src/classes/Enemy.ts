import { gRenderer, player } from "..";
import { Entity } from "./Entity";

export class Enemy extends Entity {
    private damage = 1;
    private isAttacked = false;
    private spritesSet = {
        idle: {
            left: "https://ibb.org.ru/images/2024/06/07/left6ed4cd29a0ad8f24.png",
            right: "https://ibb.org.ru/images/2024/06/07/righte9f53e29276638d9.png"
        }
    }

    constructor(rect: Rect, filepath: string, damage: number, hp: number) {
        super(rect, filepath)
        this.damage = damage;
        this.lives = hp;
    }

    public updatePosition() {
        this.update();
        this.velocity.xvel = 0;

        if (this.rectangle.y + this.rectangle.h + this.velocity.yvel < gRenderer.canv.height) {
            this.velocity.yvel += 1;
        } else {
            this.velocity.yvel = 0;
        }

        const distance = player.getX() - this.rectangle.x

        if (Math.abs(distance) <= 200) {
            if (distance < 0) {
                this.velocity.xvel -= 1;
            } else if (distance > 0) {
                this.velocity.xvel += 1;
            }
        }

        if (Math.abs(distance) <= 50) {
            // attack ONCE PER SECOND!
            if (!this.isAttacked) {
                this.attackPlayer();
                this.velocity.xvel += 50;
                console.log("attack")
                this.isAttacked = true;
            }

            setTimeout(() => {
                this.isAttacked = false;
            }, 1000)
        }

    }

    public attackPlayer() {
        player.lives--;
    }
}