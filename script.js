// ===============================
// Elements
// ===============================

const startBtn = document.getElementById("startBtn");
const wishBtn = document.getElementById("wishBtn");

const music1 = document.getElementById("music1");
const music2 = document.getElementById("music2");

const hiddenSections = document.querySelectorAll(".hidden");

const petals = document.getElementById("petals");

const wishDialog = document.getElementById("wishDialog");
const sendWish = document.getElementById("sendWish");
const wishInput = document.getElementById("wishInput");

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

    music1.play().catch(err => {
        console.log(err);
    });

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

    wishDialog.showModal();

});

sendWish.addEventListener("click", () => {

    const wish = wishInput.value.trim();

    if (wish === "") {

        alert("❤️ Please write your wish first.");

        return;

    }

    wishDialog.close();

    celebrate();
    launchFireworks();

    setTimeout(() => {

        document.body.innerHTML = `

<div style="
height:100vh;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
background:linear-gradient(135deg,#ffd6ec,#ffeef8,#f6e8ff);
text-align:center;
padding:30px;
font-family:Poppins;
">

<h1 style="
font-family:Parisienne;
font-size:70px;
color:#ff4fa3;
">

Happy Birthday ❤️

</h1>

<h2>Devika Chechii</h2>

<p style="
max-width:700px;
font-size:22px;
line-height:2;
margin-top:30px;
">

Every wish is beautiful...

<br><br>

But remember one thing...

<br><br>

🎁

<br><br>

Your biggest gift

has always been

<b>Kannan Mon ❤️</b>

<br><br>

No matter where life takes us,

I'll always be by your side.

</p>

</div>

`;

        launchFireworks();

    }, 2000);

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
