export const loop = (events: () => void) => {
    const animate = () => {
        requestAnimationFrame(animate);
        events();
    }

    animate();
}

