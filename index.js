window.onload = function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
    flowField.animate();
}

class FlowFieldEffect {
    #ctx;
    #width;
    #height;

    constructor(ctx, width, height) {
        this.#ctx = ctx;
        this.#ctx.strokeStyle = '#ffffff';
        this.#width = width;
        this.#height = height;
        this.x = 0;
        this.y = 0;
    }

    #draw(x, y) {
        const length = 400;
        this.#ctx.beginPath();
        this.#ctx.moveTo(x, y);
        this.#ctx.lineTo(x + length, y + length);
        this.#ctx.stroke();
    }

    animate() {
        this.#ctx.clearRect(0, 0, this.#width, this.#height);
        this.#draw(this.x, this.y);
        this.x += 2;
        this.y += .5;
        // call animate fn every frame
        requestAnimationFrame(this.animate.bind(this));
    }
}