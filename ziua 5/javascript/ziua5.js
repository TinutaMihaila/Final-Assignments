// change image on click
var y = document.getElementsByClassName("img1");

for(var i = 0; i < y.length; i++){
  y[i].addEventListener("click", function(){change(this)}, false);
}

var bigImage = document.getElementById("pic1");

function change(event){
  var c;
  c = event.src;
	event.src = bigImage.src;
  bigImage.src = c;

}

// open image in a new tab
var show = document.getElementById("pic1");
show.addEventListener("click", showImage, false);

function showImage() {
	var image1 = document.getElementById('pic1');
	var sursa = document.getElementById('schimba');
	var c;

	if(image1.src.match("nike3.jpg")){
		sursa.href = "http://www.freerun4.com/images/Nike-Roshe-Run-Men-Black-White-4.jpg";
	}
	if(image1.src.match("1")){
		sursa.href = "http://www.yomister.com/image/data/0/nike-all/Nike-Casual-Mens/Nike-Roshe-Running/Nike-Roshe-Run-Mens-Shoes-Breathable-For-Summer-Black-New-Arrival-4361_1.jpg";
	}
	 if(image1.src.match("nike2")){
		sursa.href = "http://images.nike.com/is/image/DotCom/511881_E_V1?&$img=511881_010_E_PREM&$PDP_HERO$";
	}
}
 //change color of size on click
 var marime = document.getElementsByClassName("marime")[0].children[0];

for(var n = 2; n< 6; n++){
  var ceva = marime.children[n].children[0];
  ceva.addEventListener("click", function(){change1();});
}

 function change1(){
   var marime = document.getElementsByClassName("marime")[0].children[0];
   for(var z = 2; z < 6; z++ ){
       var tinta =marime.children[z].children[0];
       if(tinta.classList.contains("active")){
         tinta.classList.remove("active");
       }

   }
   event.currentTarget.classList.add("active");
 }

 //change color of button on click

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
