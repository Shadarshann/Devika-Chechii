// ===============================
// Elements
// ===============================

const startBtn = document.getElementById("startBtn");
const wishBtn = document.getElementById("wishBtn");

const music1 = document.getElementById("music1");
const music2 = document.getElementById("music2");

const hiddenSections = document.querySelectorAll(".hidden");

const petals = document.getElementById("petals");

const wishArea = document.getElementById("wishArea");
const sendWish = document.getElementById("sendWish");
const wishInput = document.getElementById("wishInput");
const finalMessage = document.getElementById("finalMessage");


// ===============================
// Open Surprise
// ===============================

startBtn.addEventListener("click", () => {

    hiddenSections.forEach((section, index) => {

        setTimeout(() => {

            section.classList.remove("hidden");
            section.classList.add("show");

        }, index * 700);

    });

    setTimeout(() => {

        document.querySelector(".letter").scrollIntoView({
            behavior: "smooth"
        });

    }, 600);

    music1.play().catch(err => console.log(err));

    celebrate();

});


// ===============================
// Auto Play Second Song
// ===============================

music1.addEventListener("ended", () => {

    music2.play();

});


// ===============================
// Blow The Candles
// ===============================

wishBtn.addEventListener("click", () => {

    wishArea.style.display = "block";

    wishArea.classList.remove("hidden");

    wishArea.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

});


// ===============================
// Send Wish
// ===============================
// ===============================
// Send Wish
// ===============================

sendWish.addEventListener("click", () => {

    if (wishInput.value.trim() === "") {

        alert("❤️ Please write your wish first.");

        return;

    }

    celebrate();
    launchFireworks();

    wishInput.disabled = true;
    sendWish.disabled = true;

    // Show the reply area
    finalMessage.style.display = "block";
    finalMessage.style.marginTop = "40px";
    finalMessage.style.textAlign = "center";
    finalMessage.innerHTML = "";

    const lines = [

        "You wished for something...",

        "I hope it comes true...",

        "But before today ends...",

        "I want you to remember one thing...",

        "No gift in this world could ever replace the bond we share.",

        "Because...",

        "❤️ I am your biggest treasure.",

        "And you'll always be mine.",

        "No matter where life takes us...",

        "I'll always be by your side.",

        "Happy Birthday Chechii ❤️",

        "❤️ Love,", 

        "Your Kannan Mon ❤️"

    ];

    let line = 0;

    function typeNextLine() {

        if (line >= lines.length) return;

        const p = document.createElement("p");

        p.style.fontSize = "22px";
        p.style.lineHeight = "1.8";
        p.style.margin = "18px 0";
        p.style.color = "#ff4fa3";

        finalMessage.appendChild(p);

        let letter = 0;

        const typing = setInterval(() => {

            p.textContent += lines[line].charAt(letter);

            letter++;

            if (letter >= lines[line].length) {

                clearInterval(typing);

                line++;

                setTimeout(typeNextLine, 1400);

            }

        }, 45);

    }

    typeNextLine();

});

// ===============================
// Cherry Blossom Petals
// ===============================

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
// Confetti
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

// ===============================
// Fireworks
// ===============================

function launchFireworks() {

    const duration = 4000;
    const end = Date.now() + duration;

    (function frame() {

        confetti({

            particleCount: 80,
            startVelocity: 55,
            spread: 360,
            ticks: 100,

            origin: {

                x: Math.random(),
                y: Math.random() * 0.5

            }

        });

        if (Date.now() < end) {

            requestAnimationFrame(frame);

        }

    })();

}
