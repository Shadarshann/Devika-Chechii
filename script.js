
// ===============================
// Elements
// ===============================

const startBtn = document.getElementById("startBtn");
const wishBtn = document.getElementById("wishBtn");

const music1 = document.getElementById("music1");
const music2 = document.getElementById("music2");

const hiddenSections = document.querySelectorAll(".hidden");


// ===============================
// Open Surprise
// ===============================

startBtn.addEventListener("click", () => {

    // Reveal hidden sections
    hiddenSections.forEach((section, index) => {

        setTimeout(() => {

            section.classList.remove("hidden");
            section.classList.add("show");

        }, index * 700);

    });

    // Smooth scroll
    setTimeout(() => {

        document.querySelector(".letter").scrollIntoView({
            behavior: "smooth"
        });

    }, 600);

    // Play first music
    music1.play().catch(err => {
        console.log("Audio couldn't start:", err);
    });

});


// ===============================
// Auto Play Second Song
// ===============================

music1.addEventListener("ended", () => {

    music2.play();

});


// ===============================
// Cake Button
// ===============================

wishBtn.addEventListener("click", () => {

    alert("🎉 Happy Birthday Devika Chechii ❤️🎂");

});
