const usuarios = [
    {
        username: "admin",
        password: "admin123",
        rol: "admin",
        nombre: "Administrador Principal",
        permisos: ["ver", "editar", "eliminar"]
    },
    {
        username: "editor1",
        password: "editor123",
        rol: "editor", 
        nombre: "Editor Uno",
        permisos: ["ver", "editar"]
    },
    {
        username: "editor2", 
        password: "editor456",
        rol: "editor",
        nombre: "Editor Dos",
        permisos: ["ver", "editar"]
    },
    {
        username: "vista",
        password: "vista123",
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