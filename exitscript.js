const extendBtn = document.getElementById("game-btn");
const gameScreen = document.querySelector("body");
const exitBtn = document.getElementById("exit");

let screenHeight = 200
let buttonPosition = 180

const extendScreen = () => {
    gameScreen.style.height = screenHeight + "vh";
    extendBtn.style.top = buttonPosition + "%";
    console.log(gameScreen.style.height);
    screenHeight += 100;
    buttonPosition += 100;
}

extendBtn.addEventListener("click", () => {
    extendScreen();
    console.log("button pressed");
});

exitBtn.addEventListener("click" , () => {
    location.href =  "index.html"
})
