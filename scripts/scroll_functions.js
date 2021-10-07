
function scrollToSection(idToScrollTo, toScrollFrom) {
    const element = document.getElementById(idToScrollTo);
    const box = document.querySelector(toScrollFrom);
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