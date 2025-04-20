const cercles = document.querySelectorAll(".cercle");
const mouse = { x: 0, y: 0 };

cercles.forEach(cercle => {
  cercle.x = 0;
  cercle.y = 0;
});

window.addEventListener("mousedown", () => {
  cercles.forEach(c => c.classList.add("scale"));
});
window.addEventListener("mouseup", () => {
  cercles.forEach(c => c.classList.remove("scale"));
});

window.addEventListener("mousemove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

// animate
function animate() {
  let x = mouse.x;
  let y = mouse.y;

  cercles.forEach((cercle,index) => {

    cercle.x += (x - cercle.x) * 0.5;

    cercle.y += (y - cercle.y) * 0.5;

    cercle.style.left = `${cercle.x - 6}px`;
    cercle.style.top = `${cercle.y - 6}px`;

    cercle.style.scale = 1 - index / cercles.length**5;

    x = cercle.x;
    y = cercle.y;
  });

  requestAnimationFrame(animate);
}

animate();
