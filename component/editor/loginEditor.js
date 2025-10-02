import { seleccion } from "../seleccion/seleccion.js";
import { iniciarSesion } from "../auth.js";  // ← Importar desde auth.js
import { vista } from "../vista/vista.js";

function loginEditor() {
    // Contenedor principal
    let contenedorLogin = document.createElement('div');
    contenedorLogin.className = "pantalla-login3";

    // Caja interna
    let cajaLogin = document.createElement('div');
    cajaLogin.className = "contenedor-login3";

    // Título
    let tituloLogin = document.createElement('h2');
    tituloLogin.textContent = "Iniciar Sesión";
    cajaLogin.appendChild(tituloLogin);

    // Formulario
    let formulario = document.createElement('form');
    formulario.className = "formulario-login3";

    // Input usuario
    let inputUsuario = document.createElement('input');
    inputUsuario.type = "text";
    inputUsuario.placeholder = "Usuario";
    inputUsuario.className = "input-usuario3";
    inputUsuario.required = true;
    formulario.appendChild(inputUsuario);

    // Input contraseña
    let inputContrasena = document.createElement('input');
    inputContrasena.type = "password";
    inputContrasena.placeholder = "Contraseña";
    inputContrasena.className = "input-contrasena3";
    inputContrasena.required = true;
    formulario.appendChild(inputContrasena);

    // Botón ingresar
    let botonIngresar = document.createElement('button');
    botonIngresar.type = "submit";
    botonIngresar.textContent = "Ingresar";
    botonIngresar.className = "boton-ingresar3";
    formulario.appendChild(botonIngresar);

    cajaLogin.appendChild(formulario);

    // Botón volver
    let botonVolver = document.createElement('button');
    botonVolver.textContent = "Volver";
    botonVolver.className = "boton-volver3";
    cajaLogin.appendChild(botonVolver);

    // Mensaje de error
    let mensajeError = document.createElement('p');
    mensajeError.className = "mensaje-error";
    mensajeError.style.display = "none"; // oculto por defecto
    cajaLogin.appendChild(mensajeError);

    // Agregar caja al contenedor principal
    contenedorLogin.appendChild(cajaLogin);

    // Evento de login
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = inputUsuario.value.trim();
        const password = inputContrasena.value.trim();
        
        const usuario = iniciarSesion({username, password});
        
        if (usuario) {
            sessionStorage.setItem('usuarioLogueado', JSON.stringify(usuario));
            const root = document.getElementById('root');
            root.innerHTML = ""; 
            root.appendChild(vista());
        } else {
            mensajeError.textContent = "Usuario o contraseña incorrectos";
            mensajeError.style.display = "block";
            mensajeError.style.color = "red";
        }
    });

    // Evento de volver
    botonVolver.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(seleccion()); 
    });

    return contenedorLogin;
}

export { loginEditor };
