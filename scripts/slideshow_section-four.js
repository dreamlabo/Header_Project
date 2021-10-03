var slideIndex = 0;

var slides = document.getElementsByClassName("section-four__image");

showSlides();

function showSlides() {
    var i;

    for (i = 0; i < slides.length; i++) {
        slides[i].setAttribute("class", "section-four__image");
        slides[i].style.display = "none";
    }

    slideIndex++

    if(slideIndex == slides.length){
        slides[slideIndex - 1].style.display = "block";
        slides[slideIndex - 1].setAttribute("class", "section-four__image slide-out");
        
        slideIndex = 0;

        slides[slideIndex].style.display = "block";
        slides[slideIndex].setAttribute("class", "section-four__image slide-in");
    }
    else {
        slides[slideIndex - 1].style.display = "block";
        slides[slideIndex - 1].setAttribute("class", "section-four__image slide-out");

        slides[slideIndex].style.display = "block";
        slides[slideIndex].setAttribute("class", "section-four__image slide-in");
    }
    
    setTimeout(showSlides, 4000); // Change image every 4 seconds
} 