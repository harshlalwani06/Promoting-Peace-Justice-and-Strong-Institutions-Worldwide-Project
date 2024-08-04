let slideIndex = 0;

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

function moveSlide(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

// Initialize the slider
showSlides(slideIndex);

// Optional: Auto-slide
setInterval(function() {
    moveSlide(1);
}, 5000); // Change slide every 5 seconds
