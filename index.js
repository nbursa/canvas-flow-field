let canvas,
ctx,
flowField,
flowFieldAnimation;

window.onload = function() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
    flowField.animate();
}

window.addEventListener('resize', function() {
    cancelAnimationFrame(flowFieldAnimation);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
    flowField.animate();
})

class FlowFieldEffect {
    #ctx;
    #width;
    #height;

    constructor(ctx, width, height) {
        this.#ctx = ctx;
        this.#ctx.strokeStyle = '#ffffff';
        this.#width = width;
        this.#height = height;
        this.angle = 0;
    }

    #draw(x, y) {
        const length = 400;
        this.#ctx.beginPath();
        this.#ctx.moveTo(x, y);
        this.#ctx.lineTo(x + length, y + length);
        this.#ctx.stroke();
    }

    animate() {
        this.angle += .1;
        this.#ctx.clearRect(0, 0, this.#width, this.#height);
        this.#draw(this.#width / 2 + Math.sin(this.angle) * 100, this.#height / 2 + Math.cos(this.angle) * 100);
        // call animate fn every frame
        flowFieldAnimation = requestAnimationFrame(this.animate.bind(this));
    }
}