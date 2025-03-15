const submitQuery = document.querySelector("button");
const passwordInput = document.getElementById("password")

const generateRandom = () => {
    const randomNum = Math.floor(Math.random() * 90);
    return randomNum + "%";
}



submitQuery.addEventListener("mouseover", () => {
    console.log("Submit Button Clicked"); 
    if (passwordInput.value !== "password123"){
        submitQuery.style.position = "absolute";
        submitQuery.style.width = 10 + "%";
        submitQuery.style.top = generateRandom();
        submitQuery.style.left = generateRandom();
    }
});

submitQuery.addEventListener("click", () => {
    location.href = "index.html"
})



