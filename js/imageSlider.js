var houseId = document.getElementById("house");
var backArrow = document.getElementById("backArrow");
var nextArrow = document.getElementById("nextArrow");

// show first image, hide the rest
var numberOfImages = houseId.children.length;

for (i=1; i < numberOfImages; i++) {
    houseId.children[i].style.display = "none";
}

backArrow.addEventListener("click", moveLeft);
nextArrow.addEventListener("click", moveRight);

var counter = 0;
var currentImage = houseId.children[counter];
var nextImage = houseId.children[counter + 1];
var lastImage = houseId.children[numberOfImages-1];

function moveRight() {

    if (counter < numberOfImages-1) {

	counter = counter + 1;
	nextImage = houseId.children[counter];
	nextImage.style.display = "block";
	currentImage = houseId.children[counter - 1];
	currentImage.style.display = "none";
	
    } else {
	counter = 0;
	nextImage = houseId.children[counter];
	nextImage.style.display = "block";
	currentImage = houseId.children[numberOfImages - 1];
	currentImage.style.display = "none";
    }
   
}

var backCounter = numberOfImages - 1;
function moveLeft() {

    if (counter > 0) {
	
	currentImage = houseId.children[counter];
	currentImage.style.display = "none";
	counter = counter - 1;
	prevImage = houseId.children[counter];
	prevImage.style.display = "block";
    } else {
	currentImage = houseId.children[counter];
	currentImage.style.display = "none";
	counter = numberOfImages - 1;
	prevImage = houseId.children[counter];
	prevImage.style.display = "block";
	
    }

}


