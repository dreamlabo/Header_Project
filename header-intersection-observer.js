const header =  document.querySelector(".secondary-header");
const headerPrimary = document.querySelector(".nav__bar")
const sectionOne = document.querySelector(".section-one");
const headerLogo = document.querySelector(".nav__bar__logo")
const headerLinks = document.querySelectorAll(".nav-link")
console.log(headerLinks.length)




const sectionOneOptions = {
    rootMargin: "-500px 0px 0px 0px"
    

}


const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
        // console.log(entry.target);
        header.classList.add("unactive")
         headerPrimary.style.padding = "1em 3em"
        headerLogo.style.fontSize = "2rem";
        for(let i = 0; i < headerLinks.length; i++ ) {
            headerLinks[i].style.paddingLeft = "3em";
            console.log(i)
        }
       
        }
        else {
            for(let i = 0; i < headerLinks.length; i++ ) {
                headerLinks[i].style.paddingLeft = "6em";
                console.log(i)
            }

            header.classList.remove("unactive")
            headerPrimary.style.padding = "5em 3em 2em 3em";
            headerLogo.style.fontSize = "2rem";
        
        }

        
    })
    }, sectionOneOptions);

    sectionOneObserver.observe(sectionOne);