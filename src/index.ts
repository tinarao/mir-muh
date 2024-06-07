import { Enemy } from "./classes/Enemy";
import { Player } from "./classes/Player";
import { Renderer } from "./classes/Renderer";
import { Sprite } from "./classes/Sprite";

export const gRenderer = new Renderer(1920, 1080);
export const bg = new Sprite({ x: 0, y: 0, w: gRenderer.canv.width, h: gRenderer.canv.height }, "https://i.pinimg.com/originals/7c/93/a3/7c93a3299b7645f70e1f364174c43ccf.jpg");
export const player = new Player({ x: 100, y: 100, w: 64, h: 112 }, "https://ibb.org.ru/images/2024/06/07/left.png");

export const enemy1 = new Enemy({ x: 1555, y: 200, w: 64, h: 112 }, "https://ibb.org.ru/images/2024/06/07/left6ed4cd29a0ad8f24.png", 50, 500);

const main = () => {
    gRenderer.loop(120);
}


main();