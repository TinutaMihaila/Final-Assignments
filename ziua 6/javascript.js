var buttons = document.getElementsByClassName("leftborder");
for(var i = 0; i < buttons.length; i++){
  buttons[i].addEventListener("click", function(){get(this);}, false);
}
function get(event){
    var valoare = event.children[0];
    var ecran = document.getElementsByClassName("bigtext")[0];

    if(valoare.classList.contains('puncte')){
      ecran.innerHTML = "$50.00";
    }else{
      ecran.innerHTML = valoare.innerHTML;
    }

}
