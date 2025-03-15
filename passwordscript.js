const userInput = document.getElementById("user-input");
const submitBtn = document.getElementById("submit");
const outputSpan = document.getElementById("output");
const exitBtn = document.getElementById("exit")


exitBtn.addEventListener("click", () => {
    return location.href = "index.html"
})

const checkPass = () => {
    const userInputValue = userInput.value;
    const regex = /^[a-zA-Z0-9]+$/
    console.log(userInputValue);

    if (userInputValue == "password123"){
        outputSpan.innerText = "CONGRATULATIONS!";
    }else if (regex.test(userInputValue)){
        outputSpan.innerText = "PASSWORD MUST CONTAIN SPECIAL CHARACTERS!"
    }else {
        outputSpan.innerText = "PASSWORD INVALID! SPECIAL CHARACTERS NOT ALLOWED"
    }
}


submitBtn.addEventListener("click", checkPass);
document.addEventListener("keydown", (e) => {
    if (e.key == "Enter"){
        return checkPass();
    }
})

