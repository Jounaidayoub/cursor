const cercles = document.querySelectorAll(".cercle");
const mouse = { x: 0, y: 0 };


cercles.forEach(cercle => {
  cercle.x = 50;
  cercle.y = 50;
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
    
    
    
 
    cercle.x += (x - cercle.x) * 0.3;

    cercle.y += (y - cercle.y) * 0.3;

    const dx = index/cercles.length

    // cercle.style.borderRadius=0.5*(1-index/cercle.length); 
    cercle.style.left = `${cercle.x - 6}px`;
    cercle.style.top = `${cercle.y - 6}px`;
    // const hue = (index / cercles.length) * 360;
    // cercle.style.backgroundColor = `hsl(${hu}, 100%, 50%)`;
    cercle.style.scale = 1 - index*2 / cercles.length;

    // cercle.style.borderRadius = `${(1-dx*2) * 50}%`;

    x = cercle.x;
    y = cercle.y;
  });

  requestAnimationFrame(animate);
}

animate();
