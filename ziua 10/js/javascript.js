//changing images on click
var y = document.getElementsByClassName("img1");

for(var i = 0; i < y.length; i++){
  y[i].addEventListener("click", function(){change(this)}, false);
}

var bigImage = document.getElementById("pic1");

function change(event){
  var c;
  c = event.src;
  bigImage.src = c;

  for(var i = 0; i < y.length; i++){
    y[i].classList.remove("activ");
    y[i].classList.add("inactiv");
  }

  event.classList.remove("inactiv");
  event.classList.add("activ");

}

//collapse informations - jquery
$(document).ready(function(){

  $('#accordion').on('shown.bs.collapse hidden.bs.collapse', function (e) {
   $(e.target).prev('.panel-heading').find("span.glyphicon").toggleClass('glyphicon glyphicon-triangle-bottom glyphicon glyphicon-remove',200, "easeOutSine" );
  });
});

//changing the background / class for buttons on click
for(var n = 0; n<3; n++){
  var product = document.getElementsByClassName("sizeD")[n].children[0];
  product.addEventListener("click", change2, false);
}

function change2(){
  for(var z = 0; z < 3; z++ ){
      var prd =document.getElementsByClassName("sizeD")[z].children[0];
      if(prd.classList.contains("active")){
        prd.classList.remove("active");
      }
  }
  event.currentTarget.classList.add("active");
}

//increase - decrease the number of products you want to buy
var cantitate = document.getElementsByClassName("quantity")[0].children;
var cantitate_comandata = document.getElementsByClassName("unu")[0];
var number = 2;
cantitate[1].addEventListener("click", scade, false);
cantitate[3].addEventListener("click", aduna, false);

function scade(){
  number--;
  if(number < 0){
    cantitate_comandata.innerHTML = 0;
    number = 0;
  } else {
    cantitate_comandata.innerHTML = number;
  }
}

function aduna(){
  number++;
    cantitate_comandata.innerHTML = number;
}
//ps: we have unlimited stoc of products
