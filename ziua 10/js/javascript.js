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


$(document).ready(function(){

  $('#accordion').on('shown.bs.collapse hidden.bs.collapse', function (e) {
   $(e.target).prev('.panel-heading').find("span.glyphicon").toggleClass('glyphicon glyphicon-triangle-bottom glyphicon glyphicon-remove',200, "easeOutSine" );
  });
});


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
