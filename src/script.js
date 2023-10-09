// Obtenemos los elementos de html
const porcentaje5 = document.querySelector('.porcentaje5');
const porcentaje10 = document.querySelector('.porcentaje10');
const porcentaje15 = document.querySelector('.porcentaje15');
const porcentaje25 = document.querySelector('.porcentaje25');
const porcentaje50 = document.querySelector('.porcentaje50');
const cantidadpersonas =document.querySelector('.cantidadpersonas');
const factura = document.querySelector('.factura');
const propinapersona = document.querySelector('.propinapersona');
const propinatotal = document.querySelector('.propinatotal');
const reset = document.querySelector('.reset');


// Añadimos eventos de escucha a los elementos
reset.addEventListener('click', deleteAll); // Al hacer clic los porcentajes




function deleteAll(){
    propinatotal.innerHTML = "";
    propinapersona.innerHTML = "";
    cantidadpersonas.value="";
    factura.value = '';
}

