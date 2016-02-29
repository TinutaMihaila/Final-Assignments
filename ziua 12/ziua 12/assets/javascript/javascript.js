
//changing colors on click function
var colors = document.getElementsByClassName("aici");

for(var i = 0; i< colors.length; i++){
  colors[i].addEventListener("click", change, false);
}

function change(){
  var x = document.getElementsByClassName('aici');

  for(var i = 0; i < x.length; i++){
    x[i].classList.add("darker");

    if(x[i].classList.contains("lighter")){
      x[i].classList.remove("lighter");

    }
  }
    event.currentTarget.classList.add("lighter");
}

//slider

//event listener for slider
var previousButton = document.getElementsByClassName("butonul-stang");
previousButton[0].addEventListener("click", previous, false);

var nextButton = document.getElementsByClassName("butonul-drept");
nextButton[0].addEventListener("click", next, false);

//global variables
var content = document.getElementsByClassName('header')[0];
var littleTitle = content.children[0];
var bigTitle = content.children[1];
var text = content.children[3];
var variabila = 0;

//first content
var inner0 = "Welcome";
var inner02 = "SUMMONER";
var inner03 = "<b>W</b>e are the <b>Ministry</b>, a resource for <b>League of Legends</b> players and <b>MOBA</b> enthusiasts alike. We strive to provide a learning environment where beginners to the <b>MOBA</b> genre can learn, and where veteran players can master their skills.";

//second content
var inner1 = "Discover";
var inner12 = "LEONA";
var inner13 = "<b>Lorem Ipsum</b> is simply dummy text of the <b>printing</b> and <b>typesetting industry.</b> Lorem Ipsum has been the industry's standard dummy text ever since the <b>1500s</b>, when an unknown printer took a galley of type and scrambled it to make a type book. "

//third content

var inner2 = "Visit";
var inner22 = "NOCTURNE";
var inner23 = "<b>There</b> are many variations of passages of <b>Lorem Ipsum</b> available, but the majority have suffered <b>alteration</b> in some form, by injected humour, or randomised words which don't look even slightly believable,look even slightly believable now ener and.";

//fourth content

var inner3 = "Thanks";
var inner32 = "DEMOCIAA!";
var inner33 = "<b>Duis</b> aute irure dolor in <b>reprehenderit</b> in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <b>Excepteur</b> sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum, mollit anim id est laborum.";

//find the right content
function find(i){
  if(i == 4){
    i = 0;
    variabila = 0;
  }

  if(i == -1){
    i = 3;
    variabila = 3;
  }

  if(i == 0){
    littleTitle.innerHTML = inner0;
    bigTitle.innerHTML = inner02;
    text.innerHTML = inner03;
  }

  if(i == 1){
    littleTitle.innerHTML = inner1;
    bigTitle.innerHTML = inner12;
    text.innerHTML = inner13;
  }

  if(i == 2){
    littleTitle.innerHTML = inner2;
    bigTitle.innerHTML = inner22;
    text.innerHTML = inner23;
  }

  if(i == 3){
    littleTitle.innerHTML = inner3;
    bigTitle.innerHTML = inner32;
    text.innerHTML=inner33;
  }
}

function next(){
  variabila++;
  find(variabila);
}

function previous(){
 variabila--;
 find(variabila);
}

//end slider

//add-remove content functions

//add elemente
var addButton  = document.getElementById("adauga");
addButton.addEventListener("click", function(){(new modify()).adding()}, false);
//delete element
var deleteButton  = document.getElementById("sterge");
deleteButton.addEventListener("click", function(){(new modify()).removing()}, false);


//global variables
  var numerotare = 0;

//base function
  function modify(){

  var here = document.getElementsByClassName('first-row')[0];

  var bigBox = here.children[3].children[1];

  var firstDiv = document.createElement("div");
  firstDiv.className = "col-23 juma";

  var dupNode = bigBox.cloneNode(true);

  firstDiv.appendChild(dupNode);


//inner function - add
  this.adding = function(){
    numerotare++;
    //always first and the fifth element has a different height
    if(numerotare ==1 || numerotare%4 == 1)
      here.appendChild(firstDiv);
      else {
        firstDiv.className = "col-3 juma";
        here.appendChild(firstDiv);
      }
  };

//inner function - remove
  this.removing = function(){
    //only added elements can be removed
    if(numerotare == 0){
      alert("Aceste elemente nu pot fi sterse!");
      return false;
    }
    var item = here.lastElementChild;
    here.removeChild(item);
    numerotare--;
  }

console.log(numerotare);

}

//end add-remove content functions
