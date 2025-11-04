// نضمن أن الكود يتنفذ بعد تحميل DOM
document.addEventListener("DOMContentLoaded", function() {
    let days = 352;
    let hours = 5;
    let minutes = 49;
    let seconds = 20;

    function updateTime() {
        seconds++;
        if (seconds >= 60) { seconds = 0; minutes++; }
        if (minutes >= 60) { minutes = 0; hours++; }
        if (hours >= 24) { hours = 0; days++; }

        document.getElementById('days').textContent = days + ' D';
        document.getElementById('hours').textContent = hours + ' H';
        document.getElementById('minutes').textContent = minutes + ' M';
        document.getElementById('seconds').textContent = seconds + ' S';
    }

    setInterval(updateTime, 1000);
});
const images = [
    "images/hom.png",
  "images/c1.PNG",
  "images/c2.PNG",
  "images/c3.PNG"
 
];

let currentIndex = 0;
const mainImage = document.getElementById("main-image");
const nextButton = document.getElementById("next-image");

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  mainImage.src = images[currentIndex];
});
const imag = [
    "images/Frame 239197.png",
    "images/caa.PNG",
    "images/caa1.PNG",
    "images/caa2.PNG",
    "images/caa3.PNG",
    "images/caa4.PNG"

  ];

  let currntIndex = 0;
  const maiImage = document.getElementById("maiImage");
  const nextImageBtn = document.getElementById("nextImageBtn");

  nextImageBtn.addEventListener("click", () => {
    currntIndex = (currntIndex + 1) % imag.length; 
    maiImage.src = imag[currntIndex];
  });
const figures = document.querySelectorAll(".vision");
const modal = document.getElementById("modal");
const modalName = document.getElementById("modalName");
const modalInfo = document.getElementById("modalInfo");
const closeBtn = document.querySelector(".close");

figures.forEach((figure) => {
  figure.addEventListener("click", () => {
    modalName.textContent = figure.dataset.name;
    modalInfo.textContent = figure.dataset.info;
    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll('.num');

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const current = +counter.innerText.replace(/\D/g, ''); // حذف أي + أو رموز
      const increment = Math.ceil(target / 100); // سرعة التزايد

      if (current < target) {
        counter.innerText = current + increment;
        setTimeout(updateCount, 20); // تكرار كل 20ms
      } else {
        counter.innerText = target.toLocaleString(); // عرض الرقم النهائي
      }
    };
    updateCount();
  });
});
