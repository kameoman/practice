let daytime = document.querySelector(".daytime");
let car = document.querySelector(".car");
let bazz = document.querySelector(".bazz");

addEventListener("click", () => {
    daytime.classList.toggle("moving");
    car.classList.toggle("suspention");
    bazz.classList.toggle("fly");
  });




div.addEventListener("click", () => {
  if (i === winner) {
    div.textContent = "win!";
    div.classList.toggle("win");
  } else {
    div.textContent = "Lose";
    div.classList.toggle("lose");
  }
});