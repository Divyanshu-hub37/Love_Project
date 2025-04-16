document.querySelectorAll(".journey-box-up").forEach(card => {
    card.addEventListener("mouseenter", () => {
        gsap.to(card, { scale: 1.1, duration: 0.5, ease: "power2.out", boxShadow: "0 20px 40px rgba(214, 51, 132, 0.5)" });
        // gsap.to(card.querySelector(".pehli-mulaqat"), { opacity: 1, y: -20, duration: 0.5, ease: "power2.out" });
    });
    card.addEventListener("mouseleave", () => {
        gsap.to(card, { scale: 1, rotation: 0, duration: 0.5, ease: "power2.out", boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" });
        // gsap.to(card.querySelector(".pehli-mulaqat"), { opacity: 0, y: 0, duration: 0.5, ease: "power2.out" });
    });
});

document.querySelectorAll(".journey-box-down").forEach(card => {
    card.addEventListener("mouseenter", () => {
        gsap.to(card, { scale: 1.1, duration: 0.5, ease: "power2.out", boxShadow: "0 20px 40px rgba(214, 51, 132, 0.5)" });
        // gsap.to(card.querySelector(".pehli-mulaqat"), { opacity: 1, y: -20, duration: 0.5, ease: "power2.out" });
    });
    card.addEventListener("mouseleave", () => {
        gsap.to(card, { scale: 1, rotation: 0, duration: 0.5, ease: "power2.out", boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" });
        // gsap.to(card.querySelector(".pehli-mulaqat"), { opacity: 0, y: 0, duration: 0.5, ease: "power2.out" });
    });
});

const cursor = document.querySelector(".custom-cursor");
document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1, ease: "power2.out" });
});

var crsr = document.querySelector(".cursor")
var blur = document.querySelector(".cursor-blur")
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x + 10 + "px" 
    crsr.style.top = dets.y + "px"
    blur.style.left = dets.x  + "px" 
    blur.style.top = dets.y + "px"
})

function showSurpriseMessage() {
    const messages = [
        "You are my sunshine on the darkest days! ☀️",
        "Every moment with you is my favorite adventure! ❤️",
        "Love is not about how many days, months, or years—it's about how much we cherish each moment! 💕",
        "तेरे बिना मैं अधूरा हूँ, जैसे किताब के बिना पन्ना।",
        "You are the missing piece that makes my heart complete! 🧩",
        "Ruhi, you make my world a better place just by being in it! ✨",
        "दिल में तुम हो, आँखों में तुम हो, हर साँस में बस तुम हो।",
        "Our love story is my favorite—because it’s forever! 💖",
        "मोहब्बत का नाम आज भी मोहब्बत है, ये न कभी बदली है और न ही कभी बदलेगी।",
        
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const messageElement = document.getElementById("surprise-message");
    
    messageElement.textContent = randomMessage;
    messageElement.style.opacity = "1"; // Make the text visible
}

function updateCountdown() {
    let anniversaryDate = new Date('March 26, 2025 00:00:00');
    let now = new Date();
    let distance = anniversaryDate - now;

    if (distance < 0) {
        document.getElementById("countdown").style.display = "none";
        document.getElementById("burstEffect").style.display = "block";
        setTimeout(() => {
            document.getElementById("burstEffect").style.display = "none";
            document.getElementById("celebrationMessage").style.display = "block";
        }, 3000);
        return;
    }

    let anniversaryYear = anniversaryDate.getFullYear();
    let anniversaryMonth = anniversaryDate.getMonth();
    let anniversaryDay = anniversaryDate.getDate();

    let currentYear = now.getFullYear();
    let currentMonth = now.getMonth();
    let currentDay = now.getDate();

    let months = anniversaryMonth - currentMonth;
    let days = anniversaryDay - currentDay;
    if (days < 0) {
        months -= 1;
        let lastMonth = new Date(anniversaryYear, anniversaryMonth, 0).getDate();
        days += lastMonth;
    }
    if (months < 0) {
        months += 12;
    }

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let remainingHours = 23 - hours;
    let remainingMinutes = 59 - minutes;
    let remainingSeconds = 59 - seconds;

    document.getElementById("countdown").innerHTML = 
        `<div>${months} Months</div>
        <div>${days} Days</div>
        <div>${remainingHours} Hours</div>
        <div>${remainingMinutes} Minutes</div>
        <div>${remainingSeconds} Seconds</div>`;
}

setInterval(updateCountdown, 1000);
updateCountdown();