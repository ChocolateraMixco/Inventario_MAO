import { loginAdmin } from "../admin/loginAdmin.js";
import { loginEditor } from "../editor/loginEditor.js";
import { loginVista } from "../vista/loginVista.js";

function seleccion(){
    let seccionSele = document.createElement('section');
    seccionSele.className = "section-sele";

    let headerSele = document.createElement('header');
    headerSele.className = "header-sele";

    // BOTÓN DE DOCUMENTACIÓN EN EL HEADER
    let btnDocumentacion = document.createElement('button');
    btnDocumentacion.className = "documentacion";
    btnDocumentacion.textContent = "📋 Descargar Documentación PDF";
    btnDocumentacion.title = "Descargar documentación del sistema";

    let titulo = document.createElement('h1');
    titulo.textContent = "Colegio Manos a la Obra";

    let logo = document.createElement('img');
    logo.src = "./img/logo.avif"

    headerSele.appendChild(titulo);
    headerSele.appendChild(logo);
    headerSele.appendChild(btnDocumentacion);
    seccionSele.appendChild(headerSele);

    let divBotones = document.createElement('div')
    divBotones.className = "div-botones-main"

    let buttonAdmin = document.createElement('button');
    buttonAdmin.className = "admin"
    buttonAdmin.textContent = "Administracion"
    divBotones.appendChild(buttonAdmin);

    let buttonEditor = document.createElement('button');
    buttonEditor.className = "editor"
    buttonEditor.textContent = "Editor"
    divBotones.appendChild(buttonEditor);

    let buttonView = document.createElement('button');
    buttonView.className = "view"
    buttonView.textContent = "Vista"
    divBotones.appendChild(buttonView);

    seccionSele.appendChild(divBotones)

    // Eventos de click
    buttonAdmin.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(loginAdmin()); 
    });

    buttonEditor.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(loginEditor()); 
    });

    buttonView.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(loginVista()); 
    });

    // Evento para descargar PDF directamente
    btnDocumentacion.addEventListener('click', descargarPDFDirectamente);

    return seccionSele;
}

// FUNCIÓN CORREGIDA - RUTA EXACTA
function descargarPDFDirectamente() {
    // Ruta corregida según tu estructura
    const enlace = document.createElement('a');
    enlace.href = './documentacion/Documentación Inventario MAO.pdf';
    enlace.download = 'Documentacion-Inventario-MAO.pdf';
    enlace.style.display = 'none';
    
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
}

export { seleccion }