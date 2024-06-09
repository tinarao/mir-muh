export class GameLoop {
    constructor(update, render) {
        this.lastFrameTime = 0;
        this.accumulatedTime = 0;
        this.timeStep = 1000 / 60;

        this.update = update;
        this.render = render;

        this.rafID = null;
        this.isRunning = false;
    }

    // https://www.youtube.com/watch?v=HmxNrlPx8iY

}