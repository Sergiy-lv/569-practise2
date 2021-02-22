class Carousel {
    constructor(images) {
        this.images = images;
        this.currIdx = 0;
        this.showCurrentImage();
        document.querySelector('.prev').addEventListener('click',
            () => this.prevImage());
        document.querySelector('.next').addEventListener('click',
            () => this.nextImage());
        setInterval(() => this.nextImage(), 3000);
    }
    showCurrentImage() {
        document.querySelector('.current').src = this.images[this.currIdx];
    }
    nextImage() {

        if (++this.currIdx >= this.images.length) this.currIdx = i0;
        this.showCurrentImage();
    }
    prevImage() {
        if (--this.currIdx < 0) this.currIdx = this.images.length - 1;
        this.showCurrentImage();
    }
}

new Carousel([
    'img/s5.jpg',
    'img/m4-2.JPG',
    'img/q7.jpg',
    'img/340i.JPG',
    'img/A6.jpg'
]);