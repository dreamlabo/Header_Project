const sectionFour = document.querySelector(".section-four");



const sectionFourOptions = {
    threshold: .3
}
const sectionFourObserver = new IntersectionObserver(function(entries, sectionFourObserver){

    entries.forEach(entry => {
        if(entry.isIntersecting) {
            console.log("intersecting");

            let startSlideshow = document.createElement("script");
            startSlideshow.setAttribute("src", "/scripts/slideshow_section-four.js");
            document.body.appendChild(startSlideshow);

            let startSlideShowText = document.createElement("script");
            startSlideShowText.setAttribute("src", "/scripts/slideshow_section_four_text.js");
            document.body.appendChild(startSlideShowText);

            sectionFourObserver.unobserve(entry.target);
        }
    });

}, sectionFourOptions);

sectionFourObserver.observe(sectionFour);