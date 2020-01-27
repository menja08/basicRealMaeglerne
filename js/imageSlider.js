var houseId = document.getElementById("house");
var backArrow = document.getElementById("backArrow");
var nextArrow = document.getElementById("nextArrow");

// show first image, hide the rest
var numberOfImages = houseId.children.length;
//console.log(numberOfImages);

for (i=1; i < numberOfImages; i++) {
    houseId.children[i].style.display = "none";
}

//backArrow.addEventListener("click", moveLeft);
nextArrow.addEventListener("click", moveRight);

function moveRight() {
    console.log(22);

    var currentImage = 0;
    var firstImage = houseId.children[currentImage];
    var lastImage = houseId.children[numberOfImages-1];
    //var currentImage = firstImage;
    var nextImage = currentImage + 1;

    if (currentImage === firstImage) {
	currentImage = nextImage;
    }

    if (currentImage === lastImage) {
	nextImage = firstImage;
    }
}


