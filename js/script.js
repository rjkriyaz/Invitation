document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Countdown Logic
    // SET YOUR WEDDING DATE HERE
    const weddingDate = new Date("November 25, 2024 18:00:00").getTime();

    const timer = setInterval(function() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        // Calculations
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output
        document.getElementById("days").innerText = days < 10 ? "0" + days : days;
        document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

        // When date is reached
        if (distance < 0) {
            clearInterval(timer);
            document.getElementById("timer").innerHTML = "The Wedding Day Has Arrived!";
        }
    }, 1000);

    // 2. Scroll Animation (Intersection Observer)
    // This makes elements fade in when you scroll down
    const reveals = document.querySelectorAll(".reveal");

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                // Optional: Stop observing once revealed to run only once
                // observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });

});
