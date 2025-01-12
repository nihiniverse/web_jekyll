// Global variables
var selectedFiles = [];
var currentImageIndex = 0;
var screenWidth = window.screen.width;
var screenHeight = window.screen.height;
var browserWidth = window.innerWidth;
var browserHeight = window.innerHeight;
var started = false;

//objects
var fullscreenButton = document.getElementById("fullscreenButton");
var fileInput = document.getElementById("fileInput");
var previousBtn = document.getElementById("previousBtn");
var nextBtn = document.getElementById("nextBtn");
var fixHeightInput = document.getElementById("fixHeightInput");
var fixWidthInput = document.getElementById("fixWidthInput");
var sizeOptionInput = document.getElementById("sizeOptions");
var gallery = document.getElementById("gallery");

// Function to handle file selection
function handleFileSelect(event) {
  selectedFiles = event.target.files;
  console.log(selectedFiles);
  currentImageIndex = 0;
  loadImages();
}
fileInput.addEventListener('change', handleFileSelect);
// Function to load the selected images
function loadImages() {
  if (selectedFiles.length > 0) {
      showImageAtIndex(currentImageIndex, false);
      updateNavigationButtons();
  } else {
      alert("No images selected!");
  }
}
// Function to show the previous image
function previousImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        updateNavigationButtons();
        changeImageAtIndex(currentImageIndex);
    }
}
// Function to show the next image
function nextImage() {
    if (currentImageIndex < selectedFiles.length - 1) {
        currentImageIndex++;
        updateNavigationButtons();
        changeImageAtIndex(currentImageIndex);
    }
}
// Function to update the state of navigation buttons
function updateNavigationButtons() {
    previousBtn.disabled = currentImageIndex === 0;
    nextBtn.disabled = currentImageIndex === selectedFiles.length - 1;
}
function showImageAtIndex(index, fullscreen) {
  gallery.innerHTML = ""; // Clear the existing images

  var image = new Image();
  image.onload = function() {
    var img = document.createElement("img");
    img.src = image.src;

    var imageContainer = document.createElement("div");
    imageContainer.classList.add("image");

    var sizeOption = sizeOptionInput.value;
    if (fullscreen === false){
      var fixHeight = fixHeightInput.value;
      var fixWidth = fixWidthInput.value;
      if (fixHeight > screenHeight || fixHeight < 0){
        alert ("The height should be fixed in 0 to " + screenHeight + ".");
        return
        }
        if (fixWidth > screenWidth || fixWidth < 0){
          alert ("The width should be fixed in 0 to " + screenWidth + ".");
          return
        }
        if (sizeOption === "fixHeight") {
            img.style.height = fixHeight + "px";
            img.style.width = "auto";
        } else if (sizeOption === "fixWidth") {
            img.style.width = fixWidth + "px";
            img.style.height = "auto";
          }
          else if (sizeOption === "default"){
            img.style.width = browserWidth * 0.8 + "px";
            img.style.height = "auto";
          }
      } else {
        var fixHeight = screenHeight;
        var fixWidth = screenWidth;
      }

    if (sizeOption === "fixHeight") {
      img.style.height = fixHeight + "px";
      img.style.width = "auto";
    } else if (sizeOption === "fixWidth") {
      img.style.width = fixWidth + "px";
      img.style.height = "auto";
    }

    imageContainer.appendChild(img);
    gallery.appendChild(imageContainer);
  };
  if (started === false){
    image.src = URL.createObjectURL(selectedFiles[index]);
    started = true;
  }
  else{
    image.src = URL.createObjectURL(selectedFiles[index]);
  }
}
function changeImageAtIndex(index) {
    gallery.innerHTML = "";

    var image = new Image();
    image.classList.add("fade-in");
    var imageContainer = document.createElement("div");
    imageContainer.classList.add("image");
    imageContainer.appendChild(image);
    gallery.appendChild(imageContainer);
    image.src = URL.createObjectURL(selectedFiles[index]);
    // Remove the fade-in class after a short delay
    setTimeout(function() {
      image.classList.remove("fade-in");
    }, 100);
}
function changeImageSize() {
    var sizeOption = sizeOptionInput.value;
  
    if (sizeOption === "original") {
      fixHeightInput.style.display = "none";
      fixWidthInput.style.display = "none";
    } else if (sizeOption === "fixHeight") {
      fixHeightInput.style.display = "inline-block";
      fixWidthInput.style.display = "none";
    } else if (sizeOption === "fixWidth") {
      fixHeightInput.style.display = "none";
      fixWidthInput.style.display = "inline-block";
    }
    showImageAtIndex(currentImageIndex, false);
}
document.addEventListener("keydown", function(event) {
  if (event.key === "ArrowLeft") {
    // Trigger action for the left button
    document.getElementById("previousBtn").click();
  } else if (event.key === "ArrowRight") {
    // Trigger action for the right button
    document.getElementById("nextBtn").click();
  } else if (event.key === "ArrowDown") {
    // Trigger action for the enter button
    document.getElementById("loadBtn").click();
  }
});
//Utilize Tooltips
// $(function () {
//   $('[data-toggle="tooltip"]').tooltip();
// });
fullscreenButton.addEventListener("click", function() {
  showImageAtIndex(currentImageIndex, true);
    if (gallery.requestFullscreen) {
      gallery.requestFullscreen();
    } else if (gallery.mozRequestFullScreen) { // For Firefox
      gallery.mozRequestFullScreen();
    } else if (gallery.webkitRequestFullscreen) { // For Chrome, Safari, and Opera
      gallery.webkitRequestFullscreen();
    } else if (gallery.msRequestFullscreen) { // For Internet Explorer
      gallery.msRequestFullscreen();
    }
});