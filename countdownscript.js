const countdownSpan = document.getElementById("countdown");
const clickButton = document.getElementById("click-me");
const message = document.getElementById("wait");

const phraseArr = ["PLEASE WAIT FOR COUNTDOWN TO FINISH!", "HAVE PATIENCE CHILD!", "HOLD YOUR HORSES!", "CHILL ROME WASN'T BUILT IN A DAY....BUT BURNT IN ONE!"]

const startCountdown = () => {
    let i = 10;
    setInterval(() => {
        if (i > 1){
            countdownSpan.innerText = i;
            i--;
        }else {
            countdownSpan.innerText = i;
            Math.round(i /= 10);
        }
    }, 500)
}

clickButton.addEventListener("click", () => {
    randomPhrase = phraseArr[Math.floor((Math.random() * 4))]
    message.innerText = randomPhrase
    setTimeout(() => {
        message.innerText = "";
    }, 1500)
})


document.addEventListener("DOMContentLoaded", () => {
    startCountdown();
})