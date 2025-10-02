import { seleccion } from "../seleccion/seleccion.js";
import { vista } from "./vista.js";
import { iniciarSesion } from "../auth.js";  // ← Importar desde auth.js

function loginVista() {
    let contenedorLogin = document.createElement('div');
    contenedorLogin.className = "pantalla-login2";

    let cajaLogin = document.createElement('div');
    cajaLogin.className = "contenedor-login2";

    let tituloLogin = document.createElement('h2');
    tituloLogin.textContent = "Iniciar Sesión";
    cajaLogin.appendChild(tituloLogin);

    let formulario = document.createElement('form');
    formulario.className = "formulario-login2";

    let inputUsuario = document.createElement('input');
    inputUsuario.type = "text";
    inputUsuario.placeholder = "Usuario";
    inputUsuario.className = "input-usuario2";
    inputUsuario.required = true;
    formulario.appendChild(inputUsuario);

    let inputContrasena = document.createElement('input');
    inputContrasena.type = "password";
    inputContrasena.placeholder = "Contraseña";
    inputContrasena.className = "input-contrasena2";
    inputContrasena.required = true;
    formulario.appendChild(inputContrasena);

    let botonIngresar = document.createElement('button');
    botonIngresar.type = "submit";
    botonIngresar.textContent = "Ingresar";
    botonIngresar.className = "boton-ingresar2";
    formulario.appendChild(botonIngresar);

    cajaLogin.appendChild(formulario);

    let botonVolver = document.createElement('button');
    botonVolver.textContent = "Volver";
    botonVolver.className = "boton-volver2";
    cajaLogin.appendChild(botonVolver);

    let mensajeError = document.createElement('p');
    mensajeError.className = "mensaje-error";
    mensajeError.style.color = "red";
    mensajeError.style.display = "none";
    cajaLogin.appendChild(mensajeError);

    contenedorLogin.appendChild(cajaLogin);

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
        }
    });

    botonVolver.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(seleccion()); 
    });

    return contenedorLogin;
}

export { loginVista };