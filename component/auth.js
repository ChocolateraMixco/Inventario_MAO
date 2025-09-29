const usuarios = [
    {
        username: "Admin MAO",
        password: "adminmao123",
        rol: "admin",
        nombre: "Administrador Principal",
        permisos: ["ver", "editar", "eliminar"]
    },
    {
        username: "Editor MAO 1",
        password: "editormao123",
        rol: "editor", 
        nombre: "Editor Uno",
        permisos: ["ver", "editar"]
    },
    {
        username: "Editor MAO 2", 
        password: "editormao456",
        rol: "editor",
        nombre: "Editor Dos",
        permisos: ["ver", "editar"]
    },
    {
        username: "Vista MAO",
        password: "vistamao123",
        rol: "vista",
        nombre: "Usuario de Solo Vista",
        permisos: ["ver"]
    }
];

function verificarLogin(username, password) {
    return usuarios.find(user => 
        user.username === username && user.password === password
    );
}

function obtenerUsuarioActual() {
    const usuario = sessionStorage.getItem('usuarioLogueado');
    return usuario ? JSON.parse(usuario) : null;
}


export { verificarLogin, obtenerUsuarioActual };