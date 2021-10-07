var textIndex = 0;

var text = document.getElementsByClassName("section-four__text");

// var text = document.getElementById("section-four__text");

var show_text = new Boolean(true);
console.log(text.length)

showText();


function showText() {
  
    for(let i = 0; i < text.length; i++){
        if(i == textIndex) {
             text[i].style.opacity = '1'; 
        }
        else {
            text[i].style.opacity = '0' 
        }
    }
         
    textIndex++;

    if(textIndex == text.length){
        textIndex = 0;
    }
    
    setTimeout(showText, 12000); 
}
