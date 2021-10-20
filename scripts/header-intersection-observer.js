const header =  document.querySelector(".secondary-header");
const headerPrimary = document.querySelector(".nav__bar")
const sectionOne = document.querySelector(".section-one");
const headerLogo = document.querySelector(".nav__bar__logo")
const headerLinks = document.querySelectorAll(".nav-link")
console.log(headerLinks.length)




const sectionOneOptions = {
    rootMargin: "-640px 0px 0px 0px"

}


const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
        // console.log(entry.target);
        header.classList.add("unactive")
        //  headerPrimary.style.padding = "1em 3em"
        // headerLogo.style.fontSize = "2rem";
        for(let i = 0; i < headerLinks.length; i++ ) {
            // headerLinks[i].style.paddingLeft = "3em";
            headerLinks[i].classList.remove('header')

            headerLinks[i].classList.remove('header-link-padding-before-scroll');
            headerLinks[i].classList.add('header-link-padding-after-scroll');

            console.log(i)
        }
       
        }
        else {
            for(let i = 0; i < headerLinks.length; i++ ) {
                // headerLinks[i].style.paddingLeft = "6em";

                headerLinks[i].classList.remove('header-link-padding-after-scroll');
                headerLinks[i].classList.add('header-link-padding-before-scroll');
                console.log(i)
            }

            header.classList.remove("unactive")
            // headerPrimary.style.padding = "1em 3em 1em 3em";
            // headerLogo.style.fontSize = "3rem";
        
        }

        
    })
    }, sectionOneOptions);

    sectionOneObserver.observe(sectionOne);