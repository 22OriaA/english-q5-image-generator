let numButtonClicks = 0;
function buttonClicked() {
    numButtonClicks = numButtonClicks + 1;
    document.getElementById("mainDiv").textContent = "Button Clicked times: " + numButtonClicks;
}

function getRandomImageUrl() {
    return `https://picsum.photos/700/500?random=${Math.random()}`;
}

function generateImages() {
    const imagesContainer = document.getElementById("images");
    imagesContainer.innerHTML = "";
    const img = document.createElement("img");
    img.src = getRandomImageUrl();
    imagesContainer.appendChild(img);
}

function generatePastPaperImages() {
    const imagesContainer = document.getElementById("images");
    imagesContainer.innerHTML = "";
    const img = document.createElement("img");
    img.src = "past_paper_images/" + getRandomInt(22) + ".png";
    imagesContainer.appendChild(img);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
}