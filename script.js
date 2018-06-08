// service unavailable
let buttons = document.querySelectorAll(".btn-further");

let featureDown = function() {
  alert("The feature is not available yet.");
}

buttons.forEach(function(button) {
  button.addEventListener("click", featureDown);
})

// select an array of all images
let images = document.querySelectorAll(".location");

let openLink = function() {
  window.open("https://www.google.com");
}

images.forEach(function(image) {
  image.addEventListener("click", openLink);
})