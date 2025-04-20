cercles=document.querySelectorAll('.cercle');

window.addEventListener('mousemove', (event) => {
    let x = event.clientX;
    let y = event.clientY;

    // let x


    cercles.forEach((cercle) => {
        cercle.style.left = `${x - 6}px`;
        cercle.style.top = `${y - 6}px`;

        
        // x = x + ;
        // y = y + 10;
    })




    console.log(`Mouse X: ${x}, Mouse Y: ${y}`);
})