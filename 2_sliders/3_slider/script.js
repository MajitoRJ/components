const btnLeft = document.querySelector(".btn-left"),
      btnRight = document.querySelector(".btn-right"),
      slider = document.querySelector("#slider"),
      sliderSection = document.querySelectorAll(".slider-section"); // cantidad de img

btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRight())

setInterval(() => {
    moveToRight()
}, 3000);

let operacion = 0;
    counter = 0,    
    withImg = 100 / sliderSection.length;
    
function moveToRight() {
    if(counter >= sliderSection.length-1) {
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`
        slider.style.transition = "none"
        return
    }  counter++;
    
        // console.log(counter)
        operacion = operacion + withImg
        slider.style.transform = `translate(-${operacion}%)`
        slider.style.transition = "all ease .6s"
        
       
    }

function moveToLeft() {
    counter--;
    if(counter < 0 ) {
        counter = sliderSection.length-1;
        operacion = withImg * (sliderSection.length-1)
        // console.log(operacion)
        slider.style.transform = `translate(-${operacion}%)`
        return;
    } 
     
        operacion = operacion - withImg
        slider.style.transform = `translate(-${operacion}%)`
        slider.style.transition = "all ease .6s"
    
    
}