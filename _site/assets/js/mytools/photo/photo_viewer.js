var identifier = document.querySelector('.containers');
if (identifier .getAttribute('title') === null){
    identifier .setAttribute("title", "");

    // Global variables
    var selectedFiles = [];
    var currentImageIndex = 0;
    var screenWidth = window.screen.width;
    var screenHeight = window.screen.height;
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
        currentImageIndex = 0;
    }

    // Function to load the selected images
    function loadImages() {
        
        var files = fileInput.files;
        selectedFiles = Array.from(files);
        currentImageIndex = 0;
        showImageAtIndex(currentImageIndex, false, true);
        updateNavigationButtons();
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
      }

      function changeImageAtIndex(index) {
        var image = document.createElement("img");
        image.src = selectedFiles[index];
        image.classList.add("fade-in");
      
        var gallery = document.getElementById("gallery");
        gallery.innerHTML = "";
        var imageContainer = document.createElement("div");
        imageContainer.classList.add("image");
        imageContainer.appendChild(img);
        gallery.appendChild(imageContainer);
      
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
}