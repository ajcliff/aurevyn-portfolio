window.addEventListener("scroll", () => {
    document.querySelectorAll(".card").forEach(card => {
        let top = card.getBoundingClientRect().top;
        if(top < window.innerHeight - 50){
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }
    });
});
function openLightbox(src) {
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("lightbox-img").src = src;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});
