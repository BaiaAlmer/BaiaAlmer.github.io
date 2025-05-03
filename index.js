const date = new Date();
let year = date.getFullYear();

let footerYear =  document.getElementById("footerYear");
footerYear.innerHTML = `© ${year} Baia Almer Winiarto`;

//CAROUSEL
function nextSlide(button) {
    const carousel = button.closest('.carousel');
    const images = carousel.querySelectorAll('.carousel-image');
    let current = Array.from(images).findIndex(img => img.classList.contains('active'));
    images[current].classList.remove('active');
    const next = (current + 1) % images.length;
    images[next].classList.add('active');
}

function prevSlide(button) {
    const carousel = button.closest('.carousel');
    const images = carousel.querySelectorAll('.carousel-image');
    let current = Array.from(images).findIndex(img => img.classList.contains('active'));
    images[current].classList.remove('active');
    const prev = (current - 1 + images.length) % images.length;
    images[prev].classList.add('active');
}