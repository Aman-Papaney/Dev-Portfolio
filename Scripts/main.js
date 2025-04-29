const MouseGlow = document.getElementById("MouseGlow");

// Make mouse glow follow mouse
window.addEventListener("mousemove", (event) => {
    MouseGlow.animate({left: `${event.clientX}px`, top: `${event.clientY}px`}, {duration: 1000, fill: "forwards"});
});
