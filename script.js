const button = document.querySelector("button");
const explosion = document.querySelector(".explosion");

function removeClass() {
    explosion.classList.remove("blow");
}

function blowRun() {
    explosion.classList.add("blow");
    setTimeout(removeClass, 800);
};

button.addEventListener("click", blowRun);