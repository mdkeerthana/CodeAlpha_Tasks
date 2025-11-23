let images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg"
];

let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = images[currentIndex];
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function changeImage(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    document.getElementById("lightbox-img").src = images[currentIndex];
}

function filterImages(category) {
    let boxes = document.getElementsByClassName("image-box");

    for (let box of boxes) {
        if (category === "all" || box.classList.contains(category)) {
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }
    }
}
