const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('#nav-links-dropdown');
const linkIsClicked = document.querySelectorAll('.nav-link');
const body = document.getElementById('body');
let isOpen = new Boolean(false);
let canClose = new Boolean(false);


menu.addEventListener('click', function() {
    if(isOpen === true){
        menu.classList.remove('is-active');
        menuLinks.classList.remove('active');
        isOpen = false;

    }
    else{
        menu.classList.add('is-active');
        menuLinks.classList.add('active');
        isOpen = true;
        canClose = false;
}
    
    console.log("From menu: " + isOpen);
});


linkIsClicked.forEach(link => {
    link.addEventListener('click', function() {
        menu.classList.remove('is-active');
        menuLinks.classList.remove('active');
        console.log("From link: " + isOpen)
        isOpen = false;
        canClose = false;
    })
});

// body.addEventListener('click', function() {
//     // menu.classList.toggle('is-active');
//     // menuLinks.classList.toggle('active');
//     console.log("clicked body")
// });


window.addEventListener('click', function (event) {
    if(canClose === true && event.target != menuLinks && event.target != menu){
        menu.classList.remove('is-active');
        menuLinks.classList.remove('active');
        console.log("From window: " + isOpen)
        isOpen = false;
        // console.log('outside');
    }
    else{
        console.log('inside');
        canClose = true;
        // console.log(isOpen);
    }
})

// document.getElementById('body').onclick = function(e) {
//     if(!e.target == menuLinks) {
//         console.log('You clicked outside');
//     } else {
//         console.log('You clicked inside');
//     }
//   }