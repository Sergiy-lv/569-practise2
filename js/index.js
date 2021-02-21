const images = [
    'img/s5.jpg',
    'img/m4-2.JPG',
    'img/q7.jpg',
    'img/340i.JPG',
    'img/instagram.jpg',
    'img/A6.jpg'
]
let currIdx = 0;

function showCurrentImage() {
    const imgContainer = document.querySelector('.current');
    imgContainer.src = images[currIdx];
}
showCurrentImage();

function nextImage() {
    currIdx++;
    if (currIdx >= images.length) currIdx = 0;
    showCurrentImage();

}

function prevImage() {
    currIdx--;
    if (currIdx < 0) currIdx = images.length - 1;
    showCurrentImage();
}
document.querySelector(''.prev).addEventListener('click', prevImage);
document.querySelector(''.next).addEventListener('click', prevImage);