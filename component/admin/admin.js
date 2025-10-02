import { obtenerUsuarioActual, usuarioExiste } from "../auth.js";
import { seleccion } from "../seleccion/seleccion.js";
import { iniciarSesion } from "../auth.js"; // ← Cambiado a iniciarSesion
import { vista } from "../vista/vista.js";

function adminInfo() {
    let contenedorLogin = document.createElement('div');
    contenedorLogin.className = "pantalla-login";

    let cajaLogin = document.createElement('div');
    cajaLogin.className = "contenedor-login";

    let tituloLogin = document.createElement('h2');
    tituloLogin.textContent = "Login Administrador";
    cajaLogin.appendChild(tituloLogin);

    let formulario = document.createElement('form');
    formulario.className = "formulario-login";

    let inputUsuario = document.createElement('input');
    inputUsuario.type = "text";
    inputUsuario.placeholder = "Usuario";
    inputUsuario.className = "input-usuario";
    inputUsuario.required = true;
    formulario.appendChild(inputUsuario);

    let inputContrasena = document.createElement('input');
    inputContrasena.type = "password";
    inputContrasena.placeholder = "Contraseña";
    inputContrasena.className = "input-contrasena";
    inputContrasena.required = true;
    formulario.appendChild(inputContrasena);

    let botonIngresar = document.createElement('button');
    botonIngresar.type = "submit";
    botonIngresar.textContent = "Ingresar";
    botonIngresar.className = "boton-ingresar";
    formulario.appendChild(botonIngresar);

    cajaLogin.appendChild(formulario);

    let botonVolver = document.createElement('button');
    botonVolver.textContent = "Volver";
    botonVolver.className = "boton-volver";
    cajaLogin.appendChild(botonVolver);

    // Mensaje de error
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
        
        // Usa iniciarSesion con el formato correcto
        const usuario = iniciarSesion({ username, password }); // ← Cambiado
        
        if (usuario && usuario.rol === "admin") {
            // No necesitas guardar nuevamente en sessionStorage
            // porque iniciarSesion ya lo hace
            const root = document.getElementById('root');
            root.innerHTML = ""; 
            root.appendChild(vista());
        } else {
            mensajeError.textContent = "Credenciales incorrectas o no tiene permisos de administrador";
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

function panelAdminUsuarios() {
    const usuario = obtenerUsuarioActual();
    if (!usuario || usuario.rol !== "admin") {
        alert("Acceso denegado. Solo administradores.");
        return document.createElement('div');
    }

    const contenedor = document.createElement('div');
    contenedor.className = "admin-panel";

    const titulo = document.createElement('h2');
    titulo.textContent = "Crear Nuevo Usuario";
    contenedor.appendChild(titulo);

    const form = document.createElement('form');
    form.className = "form-crear-usuario";

    const inputUser = document.createElement('input');
    inputUser.type = "text";
    inputUser.placeholder = "Usuario";
    inputUser.required = true;
    form.appendChild(inputUser);

    const inputPass = document.createElement('input');
    inputPass.type = "password";
    inputPass.placeholder = "Contraseña";
    inputPass.required = true;
    form.appendChild(inputPass);

    const inputNombre = document.createElement('input');
    inputNombre.type = "text";
    inputNombre.placeholder = "Nombre completo";
    inputNombre.required = true;
    form.appendChild(inputNombre);

    const selectRol = document.createElement('select');
    selectRol.required = true;
    ["editor", "vista"].forEach(rol => {
        const option = document.createElement('option');
        option.value = rol;
        option.textContent = rol.charAt(0).toUpperCase() + rol.slice(1);
        selectRol.appendChild(option);
    });
    form.appendChild(selectRol);

    const btnCrear = document.createElement('button');
    btnCrear.type = "submit";
    btnCrear.textContent = "Crear Usuario";
    form.appendChild(btnCrear);

    const mensaje = document.createElement('div');
    mensaje.className = "mensaje-usuario";
    contenedor.appendChild(form);
    contenedor.appendChild(mensaje);

    // --- LISTADO DE USUARIOS CREADOS ---
    const listaUsuarios = document.createElement('div');
    listaUsuarios.className = "lista-usuarios";
    contenedor.appendChild(listaUsuarios);

    function renderUsuarios() {
        listaUsuarios.innerHTML = "";
        const tituloLista = document.createElement('h3');
        tituloLista.textContent = "Usuarios creados:";
        listaUsuarios.appendChild(tituloLista);

        let usuariosGuardados = JSON.parse(localStorage.getItem('usuariosExtra')) || [];
        console.log("Usuarios en localStorage:", JSON.parse(localStorage.getItem('usuariosExtra') || '[]'));

        if (usuariosGuardados.length === 0) {
            const noUsuarios = document.createElement('p');
            noUsuarios.textContent = "No hay usuarios creados.";
            listaUsuarios.appendChild(noUsuarios);
            return;
        }
        usuariosGuardados.forEach((u, idx) => {
            const item = document.createElement('div');
            item.className = "usuario-item";

            const info = document.createElement('span');
            info.textContent = `${u.username} (${u.rol}) - ${u.nombre}`;
            item.appendChild(info);

            const btnEliminar = document.createElement('button');
            btnEliminar.textContent = "Eliminar";
            btnEliminar.className = "btn-eliminar-usuario";
            btnEliminar.onclick = function() {
                let usuariosGuardados = JSON.parse(localStorage.getItem('usuariosExtra')) || [];
                usuariosGuardados.splice(idx, 1);
                localStorage.setItem('usuariosExtra', JSON.stringify(usuariosGuardados));
                renderUsuarios();
            };
            item.appendChild(btnEliminar);

            listaUsuarios.appendChild(item);
        });
    }

    renderUsuarios();

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const nuevoUsuario = {
            username: inputUser.value.trim(),
            password: inputPass.value.trim(),
            rol: selectRol.value,
            nombre: inputNombre.value.trim()
        };

        let usuariosGuardados = JSON.parse(localStorage.getItem('usuariosExtra')) || [];
        if (usuariosGuardados.some(u => u.username === nuevoUsuario.username)) {
            mensaje.textContent = "El usuario ya existe.";
            return;
        }
        usuariosGuardados.push(nuevoUsuario);
        localStorage.setItem('usuariosExtra', JSON.stringify(usuariosGuardados));

        mensaje.textContent = "Usuario creado correctamente.";
        form.reset();
        renderUsuarios();
    });

    // Botón volver
    const botonVolver = document.createElement('button');
    botonVolver.textContent = "Volver";
    botonVolver.className = "boton-volver";
    botonVolver.style.marginTop = "20px";
    botonVolver.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = "";
        root.appendChild(vista());
    });
    contenedor.appendChild(botonVolver);

    return contenedor;
}

export { adminInfo, panelAdminUsuarios };