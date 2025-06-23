document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const slideCount = slides.length;
    let currentIndex = 0;

    slides.forEach((slide, index) => {
        slide.style.left = `${index * 100}%`;
    });

    function goToSlide(index) {
        track.style.transform = `translateX(-${index * 100}%)`;
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentIndex++;
        track.style.transition = 'transform 1s ease-in-out';
        goToSlide(currentIndex);

        if (currentIndex === slideCount - 1) {
            setTimeout(() => {
                track.style.transition = 'none';
                currentIndex = 0;
                goToSlide(currentIndex);
            }, 1000);
        }
    }

    setInterval(nextSlide, 3000);
});
