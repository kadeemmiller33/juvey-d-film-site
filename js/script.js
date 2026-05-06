/* ===== SCENE ANIMATION ===== */
const scenes = document.querySelectorAll('.scene');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.6 });

scenes.forEach(scene => observer.observe(scene));


/* ===== SLIDER (FULLY ROBUST) ===== */
document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".slide");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");

    // 🔍 DEBUG (optional – you can remove later)
    console.log("Slides found:", slides.length);
    console.log("Next button:", nextBtn);
    console.log("Prev button:", prevBtn);

    // 🚨 SAFETY CHECK (this is what you were missing)
    if (!slides.length || !nextBtn || !prevBtn) {
        console.error("Slider not initialized properly");
        return;
    }

    let current = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
        });

        slides[index].classList.add("active");
    }

    function nextSlide() {
        current = (current + 1) % slides.length;
        showSlide(current);
    }

    function prevSlide() {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
    }

    // 🎯 BUTTON EVENTS (clean + reliable)
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    // ✅ FORCE INITIAL STATE
    showSlide(0);
});