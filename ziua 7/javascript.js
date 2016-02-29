// Sliderul se activeaza fie on click pe butoanele laterale,
// fie cand folosim tastele: left arrow sau right arrow
var butonStanga = document.getElementsByClassName("dr")[0];
var butonDreapta = document.getElementsByClassName("cr")[0];
var count = 1;
var slide = document.getElementsByClassName("madagascar")[0];
//on click
butonDreapta.addEventListener("click", sliderRight, false);
butonStanga.addEventListener("click", sliderLeft, false);
//on key down
document.onkeydown = function() {

    switch (window.event.keyCode) {
                case 39:
                      sliderRight();
                      break;
                case 37:
                      sliderLeft();
                      break;
    }
};



function sliderRight(){
  count++;
  if(count == 7){
    count = 1;
  }
  if(count == 0){
    count = 6;
  }
  for(var x = 1; x < 7; x++){
    slide.classList.remove("magadascar"+x);
  }

  slide.classList.add("magadascar"+ count);

}
function sliderLeft(){
  count--;
  if(count == 7){
    count = 1;
  }
  if(count == 0){
    count = 6;
  }

  for(var x = 1; x < 7; x++){
    slide.classList.remove("magadascar"+x);
  }
  slide.classList.add("magadascar"+ count);

}
