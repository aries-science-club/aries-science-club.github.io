document.addEventListener("DOMContentLoaded", function () {

    // --- 1. HAMBURGER MENU ---
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });

        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });
        });
    }

    // --- 2. GALLERY SWIPER (Only runs if a gallery exists) ---
    if (document.querySelector(".gallerySwiper")) {
        new Swiper(".gallerySwiper", {
            slidesPerView: "auto",
            spaceBetween: 20,
            grabCursor: true,
            speed: 500,
            preventClicks: false,
            preventClicksPropagation: false,
            mousewheel: { forceToAxis: true },
        });
    }

    // --- 3. MEMBERS SWIPER (Only runs if members exist) ---
    if (document.querySelector(".membersSwiper")) {
        new Swiper(".membersSwiper", {
            slidesPerView: "auto",
            spaceBetween: 20,
            centerInsufficientSlides: true,
            grabCursor: true,
            speed: 500,
            mousewheel: { forceToAxis: true },
            pagination: { el: ".swiper-pagination", clickable: true },
        });
    }
});

// --- 4. SCROLL ANIMATIONS ---
if (typeof AOS !== 'undefined') {
    AOS.init({
        once: false,
        offset: 100,
    });
}

