// Initialises the canvas element, it's context and
import { Entity } from "./classes/Entity";
import { Player } from "./classes/Player";
import { Renderer } from "./classes/Renderer";
import { Canvas } from "./classes/Window";

let player: Player;

const gameLoop = () => {
    document.addEventListener("keydown", (e) => {
        const key = e.key;
        console.log(key);

        switch (key) {
            case "w":
                player.move("up");
                break;
            case "s":
                player.move("down");
                break;
        }
    })
}

const update = (renderer: Renderer, canv: HTMLCanvasElement) => {
    const render = (): void => {
        window.requestAnimationFrame(render);
        renderer.clearScreen(canv);
        // >> loop starts here <<

        gameLoop();
        player.update();

        // loop ends here
    }

    render();
}

const main = () => {
    // init
    const canvas = new Canvas(1920, 1080);
    const renderer = new Renderer(canvas.canv);
    const ctx = renderer.ctx;

    // create instances
    // player = new Entity(ctx, { x: 100, y: 100, w: 100, h: 100 }, "red", { xvel: 0, yvel: 0.5 });
    player = new Player(ctx, { x: 100, y: 100, w: 100, h: 100 }, "red", { xvel: 0, yvel: 0.5 }, 0.1);
    // update the screen
    update(renderer, canvas.canv);
}

// call the main function
main();