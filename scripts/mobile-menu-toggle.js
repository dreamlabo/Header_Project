const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('#nav-links-dropdown');
const linkIsClicked = document.querySelectorAll('.nav-link');
const body = document.getElementById('body');

const link = document.querySelectorAll('.nav-link');

let isOpen = new Boolean(false);
let canClose = new Boolean(false);


menu.addEventListener('click', function() {
    if(isOpen === true){
        menu.classList.remove('is-active');
        menuLinks.classList.remove('active');

        isOpen = false;

        for(let  i = 0; i < link.length; i++) {
            linkIsClicked[i].classList.remove('header-link-padding-on-mobile-menu');
        }
    }
    else{
        menu.classList.add('is-active');
        menuLinks.classList.add('active');
        
        for(let  i = 0; i < link.length; i++) {
            linkIsClicked[i].classList.add('header-link-padding-on-mobile-menu');
        }
        isOpen = true;
        canClose = false;
    }
});


linkIsClicked.forEach(link => {
    link.addEventListener('click', function() {
        menu.classList.remove('is-active');
        menuLinks.classList.remove('active');
        isOpen = false;
        canClose = false;
    })
});



window.addEventListener('click', function (event) {
    if(canClose === true && event.target != menuLinks && event.target != menu){
        menu.classList.remove('is-active');
        menuLinks.classList.remove('active');
 
        for(let  i = 0; i < link.length; i++) {
            linkIsClicked[i].classList.remove('header-link-padding-on-mobile-menu');
        }

        isOpen = false;
    }
    else{
        canClose = true;
    }
})


function removeHeaderLinkPadding() {

    if(window.innerWidth > 1150) {
        for(let  i = 0; i < link.length; i++) {            
            linkIsClicked[i].classList.remove('header-link-padding-on-mobile-menu');
        }

        menu.classList.remove('is-active');
        menuLinks.classList.remove('active');

        isOpen = false;
        canClose = false;
    }
}

window.onresize = removeHeaderLinkPadding;