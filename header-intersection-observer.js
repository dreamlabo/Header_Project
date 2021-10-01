const header =  document.querySelector(".secondary-header");
const headerPrimary = document.querySelector(".nav__bar")
const sectionOne = document.querySelector(".section-one");
const headerLogo = document.querySelector(".nav__bar__logo")
const headerNavLinks = document.querySelectorAll("a.nav-links")
console.log(headerNavLinks)
// const links = headerNavLinks.getElementsByTagName("a");

const sectionOneOptions = {
    

}


const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
        console.log(entry.target);
        header.classList.add("unactive")
        headerPrimary.style.padding = "1em 3em"
        headerLogo.style.fontSize = "2rem"
        //  headerNavLinks[4].style.paddingLeft = "5em";
        }
        else {
            header.classList.remove("unactive")
            headerPrimary.style.padding = "4em 3em";
            headerLogo.style.fontSize = "3rem";
             headerNavLinks[4].style.paddingLeft = "0em";
        }

        
    })
    }, sectionOneOptions);

    sectionOneObserver.observe(sectionOne);