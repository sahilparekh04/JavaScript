let btn = document.querySelector(".btn");
let box = document.querySelector(".color-box");
let para = document.querySelector(".value");

btn.addEventListener("click", () => {
  let r = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  let g = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  let b = Math.floor(Math.random() * (255 - 0 + 1) + 0);

  let value = `rgba(${r},${g},${b})`;

  para.innerText = value;
  para.style.color = value;
  box.style.backgroundColor = value;
});
