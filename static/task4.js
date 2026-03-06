
window.addEventListener("load", function () {
  const hero = document.getElementById("hero-image");

  setTimeout(function () {
    hero.src = "https://picsum.photos/id/1015/2200/1400";
  }, 2500);
});

setTimeout(function () {
  const slot = document.getElementById("late-image-slot");
  const img = document.createElement("img");
  img.src = "https://picsum.photos/id/1025/900/700";
  img.alt = "Late loaded lamp image";

  slot.appendChild(img);
}, 2000);


document.getElementById("cta-btn").addEventListener("click", function () {
  const review = document.getElementById("review-text");

  const start = performance.now();
  while (performance.now() - start < 2000) {}

  review.textContent =
    "Clicked. The page just did a lot of unnecessary JavaScript work.";
});

const start = performance.now();
while (performance.now() - start < 1000) {}