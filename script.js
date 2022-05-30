var slideIndex = 1;
showSlides(slideIndex)

function plusSlides(n) {
    showSlides(slideIndex += n)
    resetSlideDelay()
    setSlideDelay()

}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

// Slideshow

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides")
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    slides[slideIndex - 1].style.display = "block"
}

// Slideshow autoplay

function setSlideDelay() {
    delay = setTimeout(showSlidesAuto, 10000)
}

function resetSlideDelay() {
    clearTimeout(delay)

}

var slideIndex = 0
showSlidesAuto()

function showSlidesAuto() {
    var i
    var slides = document.getElementsByClassName("mySlides")
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    slideIndex++
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block"
    setSlideDelay()

}


