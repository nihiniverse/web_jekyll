var identifier = document.querySelector('.containers');
if (identifier .getAttribute('title') === null){
    identifier .setAttribute("title", "");

  var uploadInput = document.getElementById('uploadInput');
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var colorInput = document.getElementById('colorInput');
  var customColorInput = document.getElementById("customColorInput");
  var width = 0;
  var height = 0;
  var padding = 0;
  var ratio =0;
  var img = null;

  uploadInput.addEventListener('change', handleFileUpload);

  function handleFileUpload(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
    
      reader.onload = function (event) {
        img = new Image();
        img.onload = function () {
          width = img.width;
          height = img.height;
          ratio = height / width;
          const paddingColor = colorInput.value;
    
          if (ratio > 5 / 4) {
            const newWidth = height / (5/4);
            padding = (newWidth - width) / 2;
            canvas.width = newWidth;
            canvas.height = height;
            ctx.fillStyle = paddingColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, padding, 0, width, height);
          } else {
            canvas.width = width;
            canvas.height = height;
            ctx.fillStyle = paddingColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, width, height);
          }
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }

  colorInput.addEventListener("change", function () {
      var paddingColor = colorInput.value;
      if (this.value === "custom") {
        paddingColor = customColorInput.value;
      } else if (this.value === "auto") {
          paddingColor = calculateAutoColor();
      } else {
          paddingColor = colorInput.value;
      }
      console.log(paddingColor);
    
      ctx.fillStyle = paddingColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    
      if (ratio > 5 / 4) {
          ctx.drawImage(img, padding, 0, width, height);
      } else {
          ctx.drawImage(img, 0, 0, width, height);
      }
  });
  customColorInput.addEventListener("change", function () {
    if (colorInput.value === "custom"){
      paddingColor = this.value;
    }
  });

  function calculateAutoColor() {
    var leftBorderColors = getBorderColors(0, canvas.height);
    var rightBorderColors = getBorderColors(canvas.width - 1, canvas.height);
  
    var avgRed = (leftBorderColors.red + rightBorderColors.red) / 2;
    var avgGreen = (leftBorderColors.green + rightBorderColors.green) / 2;
    var avgBlue = (leftBorderColors.blue + rightBorderColors.blue) / 2;
  
    return rgbToHex(avgRed, avgGreen, avgBlue);
  }

  function getBorderColors(x, height) {
      var imageData = ctx.getImageData(x, 0, 1, height).data;
      var red = 0, green = 0, blue = 0;
    
      for (var i = 0; i < imageData.length; i += 4) {
          red += imageData[i];
          green += imageData[i + 1];
          blue += imageData[i + 2];
      }
    
      var pixelCount = height * 4;
      return {
          red: Math.floor(red / pixelCount),
          green: Math.floor(green / pixelCount),
          blue: Math.floor(blue / pixelCount)
      };
  }

  function rgbToHex(red, green, blue) {
      var rgb = (red << 16) | (green << 8) | blue;
      return "#" + (0x1000000 + rgb).toString(16).slice(1);
  }
}
