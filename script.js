
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





// ===============================
// Cherry Blossom Petals
// ===============================

const petals = document.getElementById("petals");

function createPetal() {

    const petal = document.createElement("div");

    petal.classList.add("petal");

    petal.style.left = Math.random() * window.innerWidth + "px";

    petal.style.animationDuration = (5 + Math.random() * 5) + "s";

    petal.style.opacity = Math.random();

    petal.style.transform =
        `rotate(${Math.random() * 360}deg)`;

    petals.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 10000);

}

setInterval(createPetal, 300);
