import { seleccion } from "./component/seleccion/seleccion.js";

function cargarDOM(){
    let DOM = document.querySelector('#root');
    DOM.className = "dom";

    DOM.appendChild(seleccion());

    return DOM;
}

cargarDOM();
