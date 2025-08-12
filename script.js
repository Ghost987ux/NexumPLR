const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

let width, height;
let particlesArray = [];

function initCanvas() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight * 0.9; // só hero
}

class Particle {
  constructor() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.size = Math.random() * 2 + 1;
    this.speedX = (Math.random() - 0.5) * 0.2;
    this.speedY = (Math.random() - 0.5) * 0.2;
    this.opacity = Math.random() * 0.25 + 0.1;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > width || this.x < 0) this.speedX = -this.speedX;
    if (this.y > height || this.y < 0) this.speedY = -this.speedY;
  }

  draw() {
    ctx.fillStyle = `rgba(0, 255, 136, ${this.opacity})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function createParticles(num = 90) {
  particlesArray = [];
  for (let i = 0; i < num; i++) {
    particlesArray.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, width, height);
  particlesArray.forEach((p) => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

window.addEventListener("resize", () => {
  initCanvas();
  createParticles();
});

initCanvas();
createParticles();
animate();


// WhatsApp redirect with message for each produto button
const numeroZap = "5562991125182";

document.querySelectorAll(".zap-btn").forEach(botao => {
  botao.addEventListener("click", (e) => {
    e.preventDefault();
    const produto = e.currentTarget.getAttribute("data-produto");
    const mensagem = `Olá, tenho interesse no ${produto}. Pode me enviar mais informações, por favor?`;
    const url = `https://wa.me/${numeroZap}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  });
});
