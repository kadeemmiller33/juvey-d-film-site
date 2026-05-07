/* =========================================================
   SCENE ANIMATION
========================================================= */
const scenes = document.querySelectorAll(".scene");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        } else {
            entry.target.classList.remove("active");
        }

    });

}, {
    threshold: 0.4
});

scenes.forEach(scene => observer.observe(scene));


/* =========================================================
   PITCH DECK SLIDER
========================================================= */
document.addEventListener("DOMContentLoaded", function () {

    const slides =
        document.querySelectorAll(".slide");

    const nextBtn =
        document.getElementById("nextBtn");

    const prevBtn =
        document.getElementById("prevBtn");

    if (!slides.length || !nextBtn || !prevBtn) {
        console.warn("Pitch deck slider not initialized.");
        return;
    }

    let currentSlide = 0;

    function showSlide(index) {

        slides.forEach(slide => {
            slide.classList.remove("active");
        });

        slides[index].classList.add("active");
    }

    /* NEXT */
    nextBtn.addEventListener("click", function () {

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);
    });

    /* PREV */
    prevBtn.addEventListener("click", function () {

        currentSlide--;

        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        showSlide(currentSlide);
    });

    /* INIT */
    showSlide(currentSlide);

});


/* =========================================================
   HERO / INTRO SLIDER
========================================================= */
document.addEventListener("DOMContentLoaded", function () {

    const introSlides =
        document.querySelectorAll(".intro-slide");

    const introNext =
        document.getElementById("introNext");

    const introPrev =
        document.getElementById("introPrev");

    if (!introSlides.length || !introNext || !introPrev) {
        console.warn("Intro slider not initialized.");
        return;
    }

    let introCurrent = 0;

    function showIntroSlide(index) {

        introSlides.forEach(slide => {
            slide.classList.remove("active");
        });

        introSlides[index].classList.add("active");
    }

    /* NEXT */
    introNext.addEventListener("click", function () {

        introCurrent++;

        if (introCurrent >= introSlides.length) {
            introCurrent = 0;
        }

        showIntroSlide(introCurrent);
    });

    /* PREV */
    introPrev.addEventListener("click", function () {

        introCurrent--;

        if (introCurrent < 0) {
            introCurrent = introSlides.length - 1;
        }

        showIntroSlide(introCurrent);
    });

    /* AUTO PLAY */
    setInterval(function () {

        introCurrent++;

        if (introCurrent >= introSlides.length) {
            introCurrent = 0;
        }

        showIntroSlide(introCurrent);

    }, 5000);

    /* INIT */
    showIntroSlide(introCurrent);

});


/* =========================================================
   VIDEO SLIDER
========================================================= */
document.addEventListener("DOMContentLoaded", function () {

    const videoSlides =
        document.querySelectorAll(".video-slide");

    const videoPrev =
        document.getElementById("videoPrev");

    const videoNext =
        document.getElementById("videoNext");

    const sectionTitle =
        document.getElementById("videoSectionTitle");

    const sectionDescription =
        document.getElementById("videoSectionDescription");

    if (
        !videoSlides.length ||
        !videoPrev ||
        !videoNext ||
        !sectionTitle ||
        !sectionDescription
    ) {
        console.warn("Video slider not initialized.");
        return;
    }

    let videoIndex = 0;

    /* TITLES */
    const titles = [
        "Origin Story",
        "Award Speech"
    ];

    /* DESCRIPTIONS */
    const descriptions = [
        "Discover the beginnings of <em>Stepping Off with Juvey-D</em>.",
        "Moments from the film’s festival recognition and celebration."
    ];

    function showVideoSlide(index) {

        /* hide all slides */
        videoSlides.forEach(slide => {

            slide.classList.remove("active");

            const video =
                slide.querySelector("video");

            if (video) {
                video.pause();
                video.currentTime = 0;
            }

        });

        /* show active slide */
        videoSlides[index].classList.add("active");

        /* update title */
        sectionTitle.textContent =
            titles[index];

        /* update description */
        sectionDescription.innerHTML =
            descriptions[index];
    }

    /* NEXT */
    videoNext.addEventListener("click", function () {

        videoIndex++;

        if (videoIndex >= videoSlides.length) {
            videoIndex = 0;
        }

        showVideoSlide(videoIndex);

    });

    /* PREV */
    videoPrev.addEventListener("click", function () {

        videoIndex--;

        if (videoIndex < 0) {
            videoIndex = videoSlides.length - 1;
        }

        showVideoSlide(videoIndex);

    });

    /* INIT */
    showVideoSlide(videoIndex);

});