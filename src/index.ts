// Initialises the canvas element, it's context and
import { Entity } from "./classes/Entity";
import { Player } from "./classes/Player";
import { Renderer } from "./classes/Renderer";
import { Sprite } from "./classes/Sprite";
import { Canvas } from "./classes/Window";
import { loop } from "./loop";

let player: Player;
let bg: Sprite;

const update = (renderer: Renderer, canv: HTMLCanvasElement) => {
    loop(() => {
        renderer.clearScreen(canv);
        bg.draw(renderer.ctx);
        player.updatePosition(canv);

    })
}

const main = () => {
    // init
    const canvas = new Canvas(1200, 600);
    const renderer = new Renderer(canvas.canv);
    const ctx = renderer.ctx;

    // create instances
    player = new Player(
        ctx,
        { x: 100, y: 100, w: 75, h: 75 },
        "red");

    bg = new Sprite(0, 0, "https://i.pinimg.com/originals/7c/93/a3/7c93a3299b7645f70e1f364174c43ccf.jpg");

    update(renderer, canvas.canv);
}

// call the main function
main();