// Initialises the canvas element, it's context and
import { Player } from "./classes/Player";
import { Renderer } from "./classes/Renderer";
import { Sprite } from "./classes/Sprite";
import { startAnimating } from "./loop";

export let bg: Sprite
export let player: Player;
export const globalRenderer = new Renderer(1600, 900);

const update = () => {
    startAnimating(150);
    console.log(player);
}

const main = () => {
    // create instances
    // const path = import.meta.url;
    // alert(path);
    // return;
    const huskyInitialSprite = new Sprite(100, 100, "file:///src/assets/sprites/player/idle/left.png")

    player = new Player(globalRenderer.ctx, { x: 100, y: 100, w: 75, h: 75 }, "red", huskyInitialSprite)

    bg = new Sprite(0, 0, "https://i.pinimg.com/originals/7c/93/a3/7c93a3299b7645f70e1f364174c43ccf.jpg");

    update();
}

// call the main function
main();