// 🏆 UEFA Chempionlar Ligasi finali vaqti (30-May, 2026-yil, soat 21:00:00 Toshkent vaqti)
const finalDate = new Date("May 30, 2026 21:00:00").getTime();

const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = finalDate - now;

    // Kun, soat va minutlarni hisoblash matematikasi
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    // HTML-ga chiroyli va jonli chiqarish
    if (document.getElementById("days")) {
        document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    }
    if (document.getElementById("hours")) {
        document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    }
    if (document.getElementById("minutes")) {
        document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    }

    // Agar vaqt tugasa (o'yin boshlansa)
    if (distance < 0) {
        clearInterval(countdown);
        document.querySelector(".football-subtitle").innerText = "🏆 O'YIN BOSHLANDI! OLG'A!";
        if (document.getElementById("days")) document.getElementById("days").innerText = "00";
        if (document.getElementById("hours")) document.getElementById("hours").innerText = "00";
        if (document.getElementById("minutes")) document.getElementById("minutes").innerText = "00";
    }
}, 1000);