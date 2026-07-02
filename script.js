
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

    celebrate();

    document.body.classList.add("celebration");

    alert("🎉 Make a wish! Happy Birthday Devika Chechii ❤️🎂");

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



// ===============================
// Confetti Celebration
// ===============================

function celebrate() {

    const duration = 5000;
    const end = Date.now() + duration;

    (function frame() {

        confetti({
            particleCount: 6,
            angle: 60,
            spread: 70,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 6,
            angle: 120,
            spread: 70,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }

    })();

}


// Start celebration when opening surprise
startBtn.addEventListener("click", () => {

    celebrate();

});


// Celebrate again after blowing candles
wishBtn.addEventListener("click", () => {

    celebrate();

});


// ===============================
// Floating Hearts
// ===============================

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";

    heart.style.animationDuration = (4 + Math.random() * 3) + "s";

    heart.style.fontSize = (20 + Math.random() * 20) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 7000);

}

setInterval(createHeart, 900);
