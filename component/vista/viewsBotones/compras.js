import { vista } from "../vista.js";

function obtenerUsuarioActual() {
    const usuario = sessionStorage.getItem('usuarioLogueado');
    return usuario ? JSON.parse(usuario) : null;
}

function compras() {
    const datosGuardados = localStorage.getItem('comprasEditadas');
    const datosCompras = datosGuardados ? JSON.parse(datosGuardados) : [
        { cantidad: 1, producto: "Monitor HP", codigo: "100170", departamento: "COMPRAS", responsable: "ALBERTO PÉREZ" },
        { cantidad: 1, producto: "Cpu 13TH GEN INTEL ® CORE ™ I3 -13100 3.40 GHZ RAM 8.00GB", codigo: "/", departamento: "COMPRAS", responsable: "ALBERTO PÉREZ" },
        { cantidad: 1, producto: "Radio", codigo: "/", departamento: "COMPRAS", responsable: "ALBERTO PÉREZ" },
        { cantidad: 1, producto: "Mouse Logitech", codigo: "/", departamento: "COMPRAS", responsable: "ALBERTO PÉREZ" },
        { cantidad: 1, producto: "Teclado DELL", codigo: "/", departamento: "COMPRAS", responsable: "ALBERTO PÉREZ" },
        { cantidad: 1, producto: "Radio Genius", codigo: "100965", departamento: "COMPRAS", responsable: "ALBERTO PÉREZ" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "COMPRAS", responsable: "ALBERTO PÉREZ" },
        { cantidad: 1, producto: "Monitor Veiwsonic", codigo: "VSB11383", departamento: "COMPRAS", responsable: "ALBERTO PÉREZ" },
        { cantidad: 1, producto: "Consola Lorex", codigo: "100657", departamento: "COMPRAS", responsable: "ALBERTO PÉREZ" },
        { cantidad: 1, producto: "Mouse Optica", codigo: "/", departamento: "COMPRAS", responsable: "ALBERTO PÉREZ" },
        { cantidad: 4, producto: "Cámaras", codigo: "/", departamento: "COMPRAS", responsable: "ALBERTO PÉREZ" },
        { cantidad: 1, producto: "Bocinas Brocs", codigo: "/", departamento: "COMPRAS", responsable: "REINA GONZALES" },
        { cantidad: 1, producto: "Teclado DELL", codigo: "/", departamento: "COMPRAS", responsable: "REINA GONZALES" },
        { cantidad: 1, producto: "Mouse Microsoft ", codigo: "/", departamento: "COMPRAS", responsable: "REINA GONZALES" },
        { cantidad: 1, producto: "Radio", codigo: "/", departamento: "COMPRAS", responsable: "REINA GONZALES" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "A9766BA003862", departamento: "COMPRAS", responsable: "REINA GONZALES" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "COMPRAS", responsable: "REINA GONZALES" },
        { cantidad: 1, producto: "Impresora Lanier", codigo: "LD118", departamento: "COMPRAS", responsable: "" },
        { cantidad: 1, producto: "Impresora Xerox", codigo: "workecenter7835", departamento: "COMPRAS", responsable: "" },
        { cantidad: 1, producto: "Impresora Canon", codigo: "Image class D1520", departamento: "COMPRAS", responsable: "" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "COMPRAS", responsable: "" },
    ];

    const section = document.createElement('section');
    section.className = "compras-section";

    const titulo = document.createElement('h2');
    titulo.textContent = "Inventario de Compras";
    section.appendChild(titulo);

    if (datosGuardados) {
        const indicador = document.createElement('p');
        indicador.textContent = "✓ Mostrando datos guardados";
        indicador.style.color = 'green';
        indicador.style.fontStyle = 'italic';
        indicador.style.marginBottom = '10px';
        section.appendChild(indicador);
    }

    const table = document.createElement('table');
    table.className = "compras-table";

    // Crear encabezados de tabla
    const thead = document.createElement('thead');
    const trHead = document.createElement('tr');
    ["Cantidad", "Producto", "Código", "Departamento", "Responsable", "Acciones"].forEach(text => {
        const th = document.createElement('th');
        th.textContent = text;
        trHead.appendChild(th);
    });
    thead.appendChild(trHead);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    const usuario = obtenerUsuarioActual();

    // Crear filas de productos
    datosCompras.forEach((item, index) => {
        const tr = document.createElement('tr');

        // Celdas de datos
        [item.cantidad, item.producto, item.codigo, item.departamento, item.responsable].forEach(text => {
            const td = document.createElement('td');
            td.textContent = text;
            tr.appendChild(td);
        });

        // Celda de acciones (solo para admin)
        const tdAcciones = document.createElement('td');
        if (usuario && usuario.rol === 'admin') {
            const botonEliminar = document.createElement('button');
            botonEliminar.textContent = "❌";
            botonEliminar.title = "Eliminar producto";
            botonEliminar.style.cssText = 'margin: 0 5px; cursor: pointer; border: none; background: none; font-size: 16px;';
            
            botonEliminar.addEventListener('click', () => {
                if (confirm(`¿Eliminar: ${item.producto}?`)) {
                    tr.remove();
                    guardarCambios();
                    mostrarMensaje('✓ Producto eliminado');
                }
            });
            tdAcciones.appendChild(botonEliminar);
        }
        tr.appendChild(tdAcciones);

        tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    section.appendChild(table);

    // Contenedor de botones
    const contBotones = document.createElement('div');
    contBotones.className = "cont-botones";
    
    // Botón Volver
    const botonVolver = document.createElement('button');
    botonVolver.textContent = "Volver";
    botonVolver.className = "boton-volverCompras";
    botonVolver.addEventListener('click', () => {
        document.getElementById('root').innerHTML = "";
        document.getElementById('root').appendChild(vista());
    });
    contBotones.appendChild(botonVolver);

    // Funcionalidades para editores y admin
    if (usuario && (usuario.rol === 'editor' || usuario.rol === 'admin')) {
        
        // Botón Guardar Cambios
        const botonGuardar = document.createElement('button');
        botonGuardar.textContent = "Guardar Cambios";
        botonGuardar.className = "boton-guardar";
        botonGuardar.style.marginLeft = "10px";
        contBotones.appendChild(botonGuardar);

        // Funcionalidades exclusivas para admin
        if (usuario.rol === 'admin') {
            // Botón Agregar Producto
            const botonAgregar = document.createElement('button');
            botonAgregar.textContent = "➕ Agregar";
            botonAgregar.className = "boton-agregar";
            botonAgregar.style.marginLeft = "10px";
            botonAgregar.style.backgroundColor = "#28a745";
            contBotones.appendChild(botonAgregar);

            // Botón Restaurar Original
            const botonRestaurar = document.createElement('button');
            botonRestaurar.textContent = "🔄 Restaurar";
            botonRestaurar.className = "boton-restaurar";
            botonRestaurar.style.marginLeft = "10px";
            botonRestaurar.style.backgroundColor = "#ffc107";
            contBotones.appendChild(botonRestaurar);

            // Eventos para botones de admin
            botonAgregar.addEventListener('click', () => {
                const nuevaFila = document.createElement('tr');
                [1, "Nuevo Producto", "/", "COMPRAS", ""].forEach(text => {
                    const td = document.createElement('td');
                    td.textContent = text;
                    nuevaFila.appendChild(td);
                });
                
                const tdAcciones = document.createElement('td');
                const botonEliminar = document.createElement('button');
                botonEliminar.textContent = "❌";
                botonEliminar.title = "Eliminar producto";
                botonEliminar.style.cssText = 'margin: 0 5px; cursor: pointer; border: none; background: none; font-size: 16px;';
                botonEliminar.addEventListener('click', () => {
                    if (confirm("¿Eliminar este producto?")) {
                        nuevaFila.remove();
                        guardarCambios();
                    }
                });
                tdAcciones.appendChild(botonEliminar);
                nuevaFila.appendChild(tdAcciones);
                
                tbody.appendChild(nuevaFila);
                hacerCeldasEditables(nuevaFila);
                mostrarMensaje('✓ Nuevo producto agregado');
            });

            botonRestaurar.addEventListener('click', () => {
                if (confirm('¿Restaurar datos originales?')) {
                    localStorage.removeItem('comprasEditadas');
                    document.getElementById('root').innerHTML = "";
                    document.getElementById('root').appendChild(compras());
                }
            });
        }

        // Hacer tabla editable
        function hacerCeldasEditables(fila) {
            const celdas = fila.querySelectorAll('td:not(:last-child)');
            celdas.forEach(celda => {
                celda.setAttribute('contenteditable', 'true');
                celda.style.cursor = 'text';
            });
        }

        // Aplicar edición a todas las filas existentes
        table.querySelectorAll('tbody tr').forEach(hacerCeldasEditables);

        // Función para guardar cambios
        function guardarCambios() {
            const filas = table.querySelectorAll('tbody tr');
            const nuevosDatos = [];
            
            filas.forEach(fila => {
                const celdas = fila.querySelectorAll('td:not(:last-child)');
                if (celdas.length >= 5) {
                    nuevosDatos.push({
                        cantidad: celdas[0].textContent,
                        producto: celdas[1].textContent,
                        codigo: celdas[2].textContent,
                        departamento: celdas[3].textContent,
                        responsable: celdas[4].textContent
                    });
                }
            });
            
            localStorage.setItem('comprasEditadas', JSON.stringify(nuevosDatos));
            return nuevosDatos;
        }

        // Evento Guardar Cambios
        botonGuardar.addEventListener('click', () => {
            const datos = guardarCambios();
            mostrarMensaje(`✓ Guardado: ${datos.length} productos`);
        });
    }

    // Función para mostrar mensajes
    function mostrarMensaje(mensaje) {
        const mensajeElement = document.createElement('div');
        mensajeElement.textContent = mensaje;
        mensajeElement.style.cssText = 'color: green; margin-top: 10px; padding: 10px; background: #f0fff0; border: 1px solid #00ff00; border-radius: 5px;';
        
        const mensajeAnterior = section.querySelector('.mensaje-temporal');
        if (mensajeAnterior) mensajeAnterior.remove();
        
        mensajeElement.className = 'mensaje-temporal';
        section.appendChild(mensajeElement);
        
        setTimeout(() => mensajeElement.remove(), 3000);
    }

    section.appendChild(contBotones);
    return section;
}

export { compras };