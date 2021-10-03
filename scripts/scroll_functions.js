
function scrollToSection(idToScrollTo) {
    const element = document.getElementById(idToScrollTo);
    const box = document.querySelector('.nav__bar');
    const offset = box.offsetHeight;;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
}