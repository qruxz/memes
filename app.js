let memeImg = document.querySelector(".meme-display img");
let memeBtn = document.getElementById("generateBtn");

let memeInfo = document.querySelector(".meme-info p");

function updateMeme(url, title, author) {
  memeImg.setAttribute("src", url);
  memeInfo.innerHTML = `Title: ${title} <br> Author: ${author}`;
}
function getMeme() {
  fetch("https://meme-api.com/gimme/Meme")
    .then((res) => res.json())
    .then((data) => {
      updateMeme(data.url, data.title, data.author);
    })
    .catch((err) => {
      console.log(err);
    });
}

getMeme();
memeBtn.addEventListener("click", getMeme);
