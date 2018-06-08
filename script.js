document.addEventListener("DOMContentLoaded", function() {

// attach event to buttons
var buttonsArr = document.querySelectorAll('.more-content')

for (var i = 0; i < buttonsArr.length; i++) {
	buttonsArr[i].addEventListener('click', function() {
		alert('Not Done!')
	})
}


// attach event to pictures

var locationPhotos = document.querySelectorAll('.location')

for (var i = 0; i < locationPhotos.length; i++) {
	locationPhotos[i].addEventListener('click', function() {
		window.open("https://www.cargocollective.com/jodich")
	})
}















});