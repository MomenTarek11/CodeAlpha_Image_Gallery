let galletyItem = document.getElementsByClassName("item");
let lightBoxContainer = document.createElement("div");
let lightBoxContent = document.createElement("div");
let lightBoximg = document.createElement("img");
let lightBoxPrev = document.createElement("div");
let lightBoxNext = document.createElement("div");
// Create ClassList
lightBoxContainer.classList.add("lightBox");
lightBoxContent.classList.add("lightBox-content");
lightBoxPrev.classList.add("fa", "fa-angle-left", "lightBox-prev");
lightBoxNext.classList.add("fa", "fa-angle-right", "lightBox-next");
// Append Contnet to the container
lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoximg);
lightBoxContainer.appendChild(lightBoxNext);
lightBoxContainer.appendChild(lightBoxPrev);
document.body.appendChild(lightBoxContainer);
let index = 1;

// Create Function
function showLightBox(n) {
  if (n > galletyItem.length) {
    index = 1;
  } else if (n < 1) {
    index = galletyItem.length;
  }
  let imageLocation = galletyItem[index - 1].children[0].getAttribute("src");
  lightBoximg.setAttribute("src", imageLocation);
}
function currentImage() {
  lightBoxContainer.style.display = "block";
  let imageIndex = parseInt(this.getAttribute("data-index"));
  showLightBox((index = imageIndex));
}
for (let i = 0; i < galletyItem.length; i++) {
  galletyItem[i].addEventListener("click", currentImage);
}
function sliderImage(n) {
  showLightBox((index += n));
}
function prevImage() {
  sliderImage(-1);
}
function nextImage() {
  sliderImage(1);
}
lightBoxContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("lightBox-prev")) {
    prevImage();
  }

  if (event.target.classList.contains("lightBox-next")) {
    nextImage();
  }
});

// close lightbox

function closeLightBox() {
  if (this === event.target) {
    lightBoxContainer.style.display = "none";
  }
}
lightBoxContainer.addEventListener("click", closeLightBox);
