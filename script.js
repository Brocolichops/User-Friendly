//TRANSITION ANIMATION
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }else {
            entry.target.classList.remove("show")
        }
    })
});


const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((el) => observer.observe(el))
//---------------------------------------------------------------------------------

//BUTTON FUNCTIONALITY
const passwordGameBtn = document.getElementById("password-btn");
const exitGameBtn = document.getElementById("exitgame-btn");
const formBtn = document.getElementById("form-btn");
const countdownBtn = document.getElementById("countdown-btn");

passwordGameBtn.addEventListener("click", () => {
    location.href = "passwordgame.html"
});

exitGameBtn.addEventListener("click", () => {
    location.href = "exitgame.html"
});


formBtn.addEventListener("click", () => {
    location.href = "form.html"
});

countdownBtn.addEventListener("click", () => {
    location.href = "countdown.html"
})

