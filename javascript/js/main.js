"user strict";

console.log('hello');

const num = 10;

const winner = Math.floor(Math.random() * num);

for (let i = 0; i < num; i++) {
  const div = document.createElement("div");
  div.classList.add("box");

  div.addEventListener("click", () => {
    if (i === winner) {
      div.textContent = "win!";
      div.classList.toggle("win");
    } else {
      div.textContent = "Lose";
      div.classList.toggle("lose");
    }
  });

  document.body.appendChild(div);
}