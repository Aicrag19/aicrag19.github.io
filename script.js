let proyecto1= document.querySelector("#proyecto1");
let proyecto2=document.querySelector("#proyecto2");
let proyecto3=document.querySelector("#proyecto3");
let proyecto4=document.querySelector("#proyecto4");

function ocultarProyecto(){
proyecto1.style.display="none";
proyecto2.style.display="none";
proyecto3.style.display="none";
proyecto4.style.display="none";
}
function mostrarProyecto(proyectoid){
    ocultarProyecto();
  document.querySelector(proyectoid).style.display="block";

}
ocultarProyecto();