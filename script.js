const now = new Date();

const hour = now.getHours();
const minute = now.getMinutes();

document.querySelector("#current-time").innerHTML = `${hour}:${minute}`;

const date = now.toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
  weekday: "long",
});

document.querySelector("#current-day").innerHTML = date;

/* TIMER */

const timerDisplay = document.querySelector("#timer-display");
const timerButton = document.querySelector(".timer");

let totalSeconds = 25 * 60;
let timer = null;

timerButton.addEventListener("click", () => {
  if (timer) {
    clearInterval(timer);
    timer = null;
    timerButton.textContent = "Start timer";
    return;
  }

  timer = setInterval(() => {
    totalSeconds--;

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    timerDisplay.textContent = `${minutes}:${seconds
      .toString()
      .padStart(2, "0")}`;

    if (totalSeconds <= 0) {
      clearInterval(timer);
      timer = null;
      timerButton.textContent = "Start timer";
    }
  }, 1000);

  timerButton.textContent = "Pause";
});

/* QUOTES */

const quotes = {
  0: {
    image: "images/pazar.jpg",
    quote: "Kendine inan ve olduğun kişi olmaktan asla vazgeçme.",
    author: "Roy T. Bennett",
  },

  1: {
    image: "images/pazartesi.jpg",
    quote: "Başlamak için mükemmel olman gerekmez.",
    author: "Zig Ziglar",
  },

  2: {
    image: "images/sali.jpg",
    quote: "Hayatta hiçbir şeyden korkmayın; sadece anlayın.",
    author: "Marie Curie",
  },

  3: {
    image: "images/carsamba.jpg",
    quote: "Kendini bil.",
    author: "Sokrates",
  },

  4: {
    image: "images/persembe.jpg",
    quote: "Başarı, her gün tekrarlanan küçük çabaların toplamıdır.",
    author: "Robert Collier",
  },

  5: {
    image: "images/cuma.jpg",
    quote: "İster yapabileceğine inan, ister yapamayacağına; haklısın.",
    author: "Henry Ford",
  },

  6: {
    image: "images/cumartesi.jpg",
    quote: "Başarı, cesaretini kaybetmeden ilerlemektir.",
    author: "Winston Churchill",
  },
};
const today = now.getDay();
const todayQuote = quotes[today];

document.querySelector(".quote").style.backgroundImage =
  `url("${todayQuote.image}")`;

document.querySelector("#quote-text").innerHTML = todayQuote.quote;

document.querySelector("#quote-author").innerHTML = todayQuote.author;
const icons = document.querySelectorAll(".time-icon");

if (hour >= 6 && hour < 12) {
  icons[0].style.display = "inline";
} else if (hour >= 12 && hour < 18) {
  icons[1].style.display = "inline";
} else {
  icons[2].style.display = "inline";
}

/*SIDEBAR-TOOGLE*/
const sidebar = document.querySelector(".sidebar");
const sidebarToggle = document.querySelector("#sidebar-toggle");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("closed");
});
