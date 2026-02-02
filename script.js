function move(btn) {
  btn.style.transform =
    `translate(${Math.random()*200-100}px, ${Math.random()*40-20}px)`;
}

no1.onmouseover = () => move(no1);
no3.onmouseover = () => move(no3);

// Screen navigation
yes1.onclick = () => s1.classList.add("hidden") || s2.classList.remove("hidden");
next2.onclick = () => s2.classList.add("hidden") || s3.classList.remove("hidden");

yes3.onclick = () => {
  choice.classList.remove("hidden");
  next3.classList.remove("hidden");
};

next3.onclick = () => s3.classList.add("hidden") || s4.classList.remove("hidden");
next4.onclick = () => s4.classList.add("hidden") || s5.classList.remove("hidden");

// Candle
candle.onclick = () => {
  candle.style.display = "none";
  love.classList.remove("hidden");
};

// Chibi timing
const chibi = document.getElementById("chibi");
const chibiText = document.getElementById("chibiText");

setTimeout(() => {
  chibi.classList.add("hug");
  chibiText.innerText = "This feels nice… 🤍";
}, 1800);

setTimeout(() => {
  chibi.classList.remove("hug");
  chibi.classList.add("kiss");
  chibiText.innerText = "Okay okay… now kiss 😘";
}, 3300);
