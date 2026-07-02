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

    wishArea.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

});


// ===============================
// Send Wish
// ===============================

sendWish.addEventListener("click", () => {

    const wish = wishInput.value.trim();

    if (wish === "") {

        alert("❤️ Please write your wish first.");

        return;

    }

    celebrate();

    launchFireworks();

    wishInput.disabled = true;
    sendWish.disabled = true;

    finalMessage.innerHTML = "";

    const lines = [

        "You wished for something...",

        "I hope it comes true...",

        "But before today ends...",

        "I want you to remember one thing...",

        "No gift in this world could ever replace the bond we share.",

        "Happy Birthday Chechii ❤️",

        "No matter where life takes us...",

        "I'll always be by your side.",

        "❤️ Love,\nKannan Mon"

    ];

    let currentLine = 0;

    function typeLine() {

        if (currentLine >= lines.length) return;

        let text = lines[currentLine];

        let index = 0;

        const p = document.createElement("p");

        finalMessage.appendChild(p);

        const typing = setInterval(() => {

            p.innerHTML += text.charAt(index);

            index++;

            if(index >= text.length){

                clearInterval(typing);

                currentLine++;

                setTimeout(typeLine,1200);

            }

        },45);

    }

    typeLine();

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
