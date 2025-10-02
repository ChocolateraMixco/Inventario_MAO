// auth.js - Añade estas funciones
export function obtenerUsuarioActual() {
    const usuario = sessionStorage.getItem('usuarioActual');
    return usuario ? JSON.parse(usuario) : null;
}

export function iniciarSesion(credenciales) {
    const usuariosPredefinidos = [
        { username: "Admin MAO", password: "adminmao123", rol: "admin", nombre: "Administrador" },
        { username: "Editor MAO 1", password: "editormao123", rol: "editor", nombre: "Editor General 1" },
        { username: "Editor MAO 2", password: "editormao456", rol: "editor", nombre: "Editor General 2" },
        { username: "Vista MAO", password: "vistamao123", rol: "vista", nombre: "Usuario Vista" }
    ];

    // Cambia a localStorage
    const usuariosCreados = JSON.parse(localStorage.getItem('usuariosExtra')) || [];

    const todosUsuarios = [...usuariosPredefinidos, ...usuariosCreados];

    const usuario = todosUsuarios.find(u => 
        u.username === credenciales.username && 
        u.password === credenciales.password
    );

    if (usuario) {
        sessionStorage.setItem('usuarioActual', JSON.stringify(usuario));
        return usuario;
    }
    return null;
}

export function cerrarSesion() {
    sessionStorage.removeItem('usuarioActual');
}

// Nueva función para verificar si usuario existe
export function usuarioExiste(username) {
    const usuariosPredefinidos = [
        { username: "Admin MAO", password: "adminmao123", rol: "admin", nombre: "Administrador" },
        { username: "Editor MAO 1", password: "editormao123", rol: "editor", nombre: "Editor General 1" },
        { username: "Editor MAO 2", password: "editormao456", rol: "editor", nombre: "Editor General 2" },
        { username: "Vista MAO", password: "vistamao123", rol: "vista", nombre: "Usuario Vista" }
    ];
    
    const usuariosCreados = JSON.parse(localStorage.getItem('usuariosExtra')) || [];
    const todosUsuarios = [...usuariosPredefinidos, ...usuariosCreados];
    
    return todosUsuarios.some(u => u.username === username);
}