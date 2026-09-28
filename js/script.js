const blobs = document.querySelectorAll(".blob");

document.addEventListener("mousemove",function(e) {
    const x = (e.clientX / window.innerWidth - 0.5) * 100;
    const y = (e.clientY / window.innerHeight - 0.5) * 100;

    blobs[0].style.transform = `translate(${x}px,${y}px)`;
    blobs[1].style.transform = `translate(${-x}px,${-y}px)`;
    blobs[2].style.transform = `translate(${x * 0.5}px,${y * 0.5}px)`;
});