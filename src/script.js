// Obtenemos los elementos de html
const porcentaje5 = document.querySelector('.porcentaje5');
const porcentaje10 = document.querySelector('.porcentaje10');
const porcentaje15 = document.querySelector('.porcentaje15');
const porcentaje25 = document.querySelector('.porcentaje25');
const porcentaje50 = document.querySelector('.porcentaje50');
const cantidadpersonasInput =document.querySelector('.cantidadpersonas');
const facturaInput = document.querySelector('.factura');
const propinapersona = document.querySelector('.propinapersona');
const propinatotal = document.querySelector('.propinatotal');
const reset = document.querySelector('.reset');


// Añadimos eventos de escucha a los elementos
reset.addEventListener('click', deleteAll); // Al hacer clic los porcentajes
porcentaje5.addEventListener('click', calcularProp); // Al hacer clic los porcentajes
porcentaje10.addEventListener('click', calcularProp);
porcentaje15.addEventListener('click', calcularProp);
porcentaje25.addEventListener('click', calcularProp);
porcentaje50.addEventListener('click', calcularProp);

function calcularProp(event){

    // traemos los elemtos a utilizar
    const porcentaje = parseFloat(event.target.textContent);
    const factura = parseFloat(facturaInput.value);
    const cantidadpersonas =parseFloat(cantidadpersonasInput.value);

    // calculamos la propina
    const propinato = (factura*porcentaje)/100;
    const propina=propinato/cantidadpersonas;

    // imprimimos losvalores en html
    propinapersona.innerHTML='$'+ propina.toFixed(2);
    propinatotal.innerHTML='$'+ propinato.toFixed(2);

}


function deleteAll(){
    propinatotal.innerHTML = "";
    propinapersona.innerHTML = "";
    cantidadpersonas.value="";
    factura.value = "";
}

