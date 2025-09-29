import { seleccion } from "../seleccion/seleccion.js";
import { admisiones } from "./viewsBotones/admisiones.js";
import { caja } from "./viewsBotones/caja.js";
import { compras } from "./viewsBotones/compras.js";
import { recepcion } from "./viewsBotones/recepcion.js";
import { recursosHumanos } from "./viewsBotones/recursos-humanos.js";
import { contabilidad } from "./viewsBotones/contabilidad.js";
import { coordiPrepi } from "./viewsBotones/coordinacion-preprimaria.js";
import { salonesPrepri } from "./viewsBotones/salones-preprimaria.js";
import { secundaria1 } from "./viewsBotones/secundaria-1.js";
import { coordiSecu } from "./viewsBotones/coordinacion-secundaria.js";
import { laboPro } from "./viewsBotones/laboratorio-1-progrentis.js";
import { PrimaSupe } from "./viewsBotones/primaria-superior.js";
import { laboPrima } from "./viewsBotones/laboratorio-2-primaria.js";
import { coordiElemen } from "./viewsBotones/coordinacion-primaria-elemental.js";
import { primaElemen } from "./viewsBotones/salones-primaria-elemental.js";
import { laboSecu } from "./viewsBotones/laboratorio-secundaria..js";
import { carritoSecu } from "./viewsBotones/carrito-ipad-secundaria.js";
import { carritoPrimaSupe } from "./viewsBotones/carrito-ipad-primaria-superior.js";
import { carritoPrimaElemn } from "./viewsBotones/carrito-ipad-primaria-elemental.js";
import { carritoPrepri } from "./viewsBotones/carrito-ipad-preprimaria.js";
import { homeSchool } from "./viewsBotones/home-school.js";
import { gerenFinan } from "./viewsBotones/gerencia-financiera.js";
import { direTecni } from "./viewsBotones/direccion-tecnica.js";
import { enfermeria } from "./viewsBotones/enfermeria.js";
import { pae } from "./viewsBotones/pae.js";
import { coordiSuperior } from "./viewsBotones/coordinacion-superior.js";
import { direTecnica2 } from "./viewsBotones/direccion-tecnica-2.js";
import { diseño } from "./viewsBotones/diseno.js";
import { eventos } from "./viewsBotones/coordinacion-eventos.js";
import { administrativo } from "./viewsBotones/asistente-administrativo.js";

function vista(){

    let seccionVista = document.createElement('section');
    seccionVista.className = "seccion-vista";
    
    let headerSele = document.createElement('header');
    headerSele.className = "header-sele2";

    let titulo = document.createElement('h1');
    titulo.textContent = "Colegio Manos a la Obra";
    titulo.className = "titulo-sele2";

    let contCerSes = document.createElement('div');
    contCerSes.className = "cont-volver-vista";
    headerSele.appendChild(contCerSes);

    let botonCerSes = document.createElement('button');
    botonCerSes.textContent = "Cerrar Sesión";
    botonCerSes.className = "boton-cerrar-sesion";
    contCerSes.appendChild(botonCerSes);

    headerSele.appendChild(contCerSes);

    // Evento del botón volver
    botonCerSes.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(seleccion()); 
    });

    let logo = document.createElement('img');
    logo.src = "./img/logo.avif"

    headerSele.appendChild(titulo);
    headerSele.appendChild(logo)
    seccionVista.appendChild(headerSele);

    let divBotones = document.createElement('div')
    divBotones.className = "div-botones"

    let buttonAdmin = document.createElement('button');
    buttonAdmin.className = "btn-vista"
    buttonAdmin.textContent = "Compras"
    divBotones.appendChild(buttonAdmin);
    buttonAdmin.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(compras()); 
    });

    let buttonAdmin2 = document.createElement('button');
    buttonAdmin2.className = "btn-vista"
    buttonAdmin2.textContent = "Recursos Humanos"
    divBotones.appendChild(buttonAdmin2);
    buttonAdmin2.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(recursosHumanos()); 
    });

    let buttonAdmin3 = document.createElement('button');
    buttonAdmin3.className = "btn-vista"
    buttonAdmin3.textContent = "Admisiones"
    divBotones.appendChild(buttonAdmin3);
    buttonAdmin3.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(admisiones()); 
    });

    let buttonAdmin4 = document.createElement('button');
    buttonAdmin4.className = "btn-vista"
    buttonAdmin4.textContent = "Recepción"
    divBotones.appendChild(buttonAdmin4);
    buttonAdmin4.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(recepcion()); 
    });

    let buttonAdmin5 = document.createElement('button');
    buttonAdmin5.className = "btn-vista"
    buttonAdmin5.textContent = "Caja"
    divBotones.appendChild(buttonAdmin5);
    buttonAdmin5.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(caja()); 
    });

    let buttonAdmin6 = document.createElement('button');
    buttonAdmin6.className = "btn-vista"
    buttonAdmin6.textContent = "Contabilidad"
    divBotones.appendChild(buttonAdmin6);
    buttonAdmin6.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(contabilidad()); 
    });

    let buttonAdmin7 = document.createElement('button');
    buttonAdmin7.className = "btn-vista"
    buttonAdmin7.textContent = "Coordinación Preprimaria"
    divBotones.appendChild(buttonAdmin7);
    buttonAdmin7.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(coordiPrepi()); 
    });

    let buttonAdmin8 = document.createElement('button');
    buttonAdmin8.className = "btn-vista"
    buttonAdmin8.textContent = "Salones Preprimaria"
    divBotones.appendChild(buttonAdmin8);
    buttonAdmin8.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(salonesPrepri()); 
    });

    let buttonAdmin9 = document.createElement('button');
    buttonAdmin9.className = "btn-vista"
    buttonAdmin9.textContent = "Secundaria"
    divBotones.appendChild(buttonAdmin9);
    buttonAdmin9.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(secundaria1()); 
    });

    let buttonAdmin10 = document.createElement('button');
    buttonAdmin10.className = "btn-vista"
    buttonAdmin10.textContent = "Cordinación Secundaria"
    divBotones.appendChild(buttonAdmin10);
    buttonAdmin10.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(coordiSecu()); 
    });

    let buttonAdmin11 = document.createElement('button');
    buttonAdmin11.className = "btn-vista"
    buttonAdmin11.textContent = "Laboratorio 1 Progrentis"
    divBotones.appendChild(buttonAdmin11);
    buttonAdmin11.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(laboPro()); 
    });

    let buttonAdmin12 = document.createElement('button');
    buttonAdmin12.className = "btn-vista"
    buttonAdmin12.textContent = "Primaria Superior"
    divBotones.appendChild(buttonAdmin12);
    buttonAdmin12.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(PrimaSupe()); 
    });

    let buttonAdmin13 = document.createElement('button');
    buttonAdmin13.className = "btn-vista"
    buttonAdmin13.textContent = "Laboratorio 2 Primaria"
    divBotones.appendChild(buttonAdmin13);
    buttonAdmin13.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(laboPrima()); 
    });

    let buttonAdmin14 = document.createElement('button');
    buttonAdmin14.className = "btn-vista"
    buttonAdmin14.textContent = "Coordinación Primaria Elemental"
    divBotones.appendChild(buttonAdmin14);
    buttonAdmin14.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(coordiElemen()); 
    });

    let buttonAdmin15 = document.createElement('button');
    buttonAdmin15.className = "btn-vista"
    buttonAdmin15.textContent = "Salones Primaria Elemental"
    divBotones.appendChild(buttonAdmin15);
    buttonAdmin15.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(primaElemen()); 
    });

    let buttonAdmin16 = document.createElement('button');
    buttonAdmin16.className = "btn-vista"
    buttonAdmin16.textContent = "Laboratorio de Secundaria"
    divBotones.appendChild(buttonAdmin16);
    buttonAdmin16.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(laboSecu()); 
    });


    let buttonAdmin18 = document.createElement('button');
    buttonAdmin18.className = "btn-vista"
    buttonAdmin18.textContent = "Carrito de iPad Secundaria"
    divBotones.appendChild(buttonAdmin18);
    buttonAdmin18.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(carritoSecu()); 
    });

    let buttonAdmin19 = document.createElement('button');
    buttonAdmin19.className = "btn-vista"
    buttonAdmin19.textContent = "Carrito de iPad Primaria Superior"
    divBotones.appendChild(buttonAdmin19);
    buttonAdmin19.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(carritoPrimaSupe()); 
    });

    let buttonAdmin20 = document.createElement('button');
    buttonAdmin20.className = "btn-vista"
    buttonAdmin20.textContent = "Carrito de iPad Primaria Elemental"
    divBotones.appendChild(buttonAdmin20);
    buttonAdmin20.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(carritoPrimaElemn()); 
    });

    let buttonAdmin21 = document.createElement('button');
    buttonAdmin21.className = "btn-vista"
    buttonAdmin21.textContent = "Carrito de iPad de Preprimaria"
    divBotones.appendChild(buttonAdmin21);
    buttonAdmin21.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(carritoPrepri()); 
    });

    let buttonAdmin22 = document.createElement('button');
    buttonAdmin22.className = "btn-vista"
    buttonAdmin22.textContent = "Home School"
    divBotones.appendChild(buttonAdmin22);
    buttonAdmin22.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(homeSchool()); 
    });

    let buttonAdmin23 = document.createElement('button');
    buttonAdmin23.className = "btn-vista"
    buttonAdmin23.textContent = "Gerencia financiera"
    divBotones.appendChild(buttonAdmin23);
    buttonAdmin23.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(gerenFinan()); 
    });

    let buttonAdmin24 = document.createElement('button');
    buttonAdmin24.className = "btn-vista"
    buttonAdmin24.textContent = "Dirección Técnica"
    divBotones.appendChild(buttonAdmin24);
    buttonAdmin24.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(direTecni()); 
    });

    let buttonAdmin25 = document.createElement('button');
    buttonAdmin25.className = "btn-vista"
    buttonAdmin25.textContent = "Enfermería"
    divBotones.appendChild(buttonAdmin25);
    buttonAdmin25.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(enfermeria()); 
    });

    let buttonAdmin26 = document.createElement('button');
    buttonAdmin26.className = "btn-vista"
    buttonAdmin26.textContent = "PAE"
    divBotones.appendChild(buttonAdmin26);
    buttonAdmin26.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(pae()); 
    });

    let buttonAdmin27 = document.createElement('button');
    buttonAdmin27.className = "btn-vista"
    buttonAdmin27.textContent = "Coordinación Superior"
    divBotones.appendChild(buttonAdmin27);
    buttonAdmin27.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(coordiSuperior()); 
    });

    let buttonAdmin28 = document.createElement('button');
    buttonAdmin28.className = "btn-vista"
    buttonAdmin28.textContent = "Dirección Técnica 2"
    divBotones.appendChild(buttonAdmin28);
    buttonAdmin28.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(direTecnica2()); 
    });

    let buttonAdmin29 = document.createElement('button');
    buttonAdmin29.className = "btn-vista"
    buttonAdmin29.textContent = "Diseño"
    divBotones.appendChild(buttonAdmin29);
    buttonAdmin29.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(diseño()); 
    });
   

    let buttonAdmin30 = document.createElement('button');
    buttonAdmin30.className = "btn-vista"
    buttonAdmin30.textContent = "Coordinadora de Eventos"
    divBotones.appendChild(buttonAdmin30);
    buttonAdmin30.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(eventos()); 
    });

    let buttonAdmin31 = document.createElement('button');
    buttonAdmin31.className = "btn-vista"
    buttonAdmin31.textContent = "Asistente Administrativo"
    divBotones.appendChild(buttonAdmin31);
    buttonAdmin31.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(administrativo()); 
    });

    seccionVista.appendChild(divBotones)

    return seccionVista;
}

export { vista }