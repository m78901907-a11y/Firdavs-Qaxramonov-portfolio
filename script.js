// Final uchrashuvi vaqti: 2026-yil 31-may 00:00:00 (Toshkent vaqti)
const finalDate = new Date("May 31, 2026 00:00:00").getTime();

const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = finalDate - now;

    // Faqat Kun va Soatni hisoblaymiz
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    // HTML-ga faqat bor elementlarni chiqaramiz
    if (document.getElementById("days")) {
        document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    }
    if (document.getElementById("hours")) {
        document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    }

    // Agar vaqt tugasa
    if (distance < 0) {
        clearInterval(countdown);
        document.querySelector(".football-subtitle").innerText = "🏆 O'YIN BOSHLANDI! OLG'A!";
        if(document.getElementById("days")) document.getElementById("days").innerText = "00";
        if(document.getElementById("hours")) document.getElementById("hours").innerText = "00";
    }
}, 1000);