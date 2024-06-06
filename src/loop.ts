import { bg, globalRenderer, player } from ".";

var frameCount = 0;
let fpsInterval: number;
let startTime: number;
let now: number;
let then: number;
let elapsed: number;

export const startAnimating = (fps: number) => {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    animate();
}

function animate() {
    // request another frame
    requestAnimationFrame(animate);

    // calc elapsed time since last loop

    now = Date.now();
    elapsed = now - then;

    // if enough time has elapsed, draw the next frame

    if (elapsed > fpsInterval) {

        // Get ready for next frame by setting then=now, but also adjust for your
        // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
        then = now - (elapsed % fpsInterval);

        // Put your drawing code here
        globalRenderer.clearScreen(globalRenderer.canv);
        bg.draw(globalRenderer.ctx);
        player.updatePosition(globalRenderer.canv);


        // debug
        var sinceStart = now - startTime;
        var currentFps = Math.round(1000 / (sinceStart / ++frameCount) * 100) / 100;

        globalRenderer.ctx.font = "20px serif";
        globalRenderer.ctx.fillText(`FPS: ${currentFps}`, 10, 50);
    }
}

// HOW I MADE LOOP INITIALLY
// export const loopg = (events: () => void) => {
//     const animate = () => {
//         requestAnimationFrame(animate);
//         events();
//     }
//     animate();
// }