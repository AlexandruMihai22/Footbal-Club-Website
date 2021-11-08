
function salut(){

x=prompt("Cum te numesti?");
var a=document.getElementById("salut");
a.innerHTML="Salut, "+x+"!";

setTimeout(aa,2000);
function aa(){
    var a=document.getElementById("salut");
a.innerHTML="";
}

}

