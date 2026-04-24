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

// --- LIVE SEARCH & CHIP FILTER ---
function filterEvents() {
    let searchQuery = document.getElementById('searchInput') ? document.getElementById('searchInput').value.toLowerCase() : "";
    
    // Find which chip is currently active
    let activeChip = document.querySelector('.chip.active');
    let selectedTag = activeChip ? activeChip.innerText.replace('#', '').toLowerCase() : "all";
    
    let cards = document.getElementsByClassName('filterDiv');

    for (let i = 0; i < cards.length; i++) {
        let cardText = cards[i].innerText.toLowerCase();
        let cardClasses = cards[i].className;

        let matchesSearch = cardText.includes(searchQuery);
        let matchesTag = (selectedTag === "all") || cardClasses.includes(selectedTag);

        if (matchesSearch && matchesTag) {
            cards[i].style.display = "flex";
        } else {
            cards[i].style.display = "none";
        }
    }
}

// When a chip is clicked, change the active color and trigger the filter
function filterSelection(tag) {
    // Remove active class from all chips
    let chips = document.getElementsByClassName('chip');
    for (let i = 0; i < chips.length; i++) {
        chips[i].classList.remove('active');
        // Add active class to the clicked chip
        if (chips[i].innerText.replace('#', '').toLowerCase() === tag) {
            chips[i].classList.add('active');
        }
    }
    // Re-run the filter
    filterEvents();
}