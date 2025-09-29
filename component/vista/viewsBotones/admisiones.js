import { vista } from "../vista.js";

function obtenerUsuarioActual() {
    const usuario = sessionStorage.getItem('usuarioLogueado');
    return usuario ? JSON.parse(usuario) : null;
}

function admisiones() {
    const datosGuardados = localStorage.getItem('admisionesEditadas');
    const datosCompras = datosGuardados ? JSON.parse(datosGuardados) : [
        { cantidad: 1, producto: "Laptop Lenovo 11TH GEN I3-1115G4 RAM 8GB", codigo: "PF2RAHLE", departamento: "ADMISIONES", responsable: "ALICIA GARCIA" },
        { cantidad: 1, producto: "Laptop Lenovo 11TH GEN I3-1115G4 RAM 8GB", codigo: "PF2RAHMH", departamento: "ADMISIONES", responsable: "ALICIA GARCIA" },
        { cantidad: 1, producto: "Laptop Lenovo 11TH GEN I3-1115G4 RAM 8GB", codigo: "PF2RADMX", departamento: "ADMISIONES", responsable: "ALICIA GARCIA" },
        { cantidad: 1, producto: "Laptop Dell 12HT I3-1215U RAM 8GB", codigo: "/", departamento: "ADMISIONES", responsable: "ALICIA GARCIA" },
        { cantidad: 1, producto: "Bocinas Brocs", codigo: "/", departamento: "ADMISIONES", responsable: "CANDY CONTRERAS" },
        { cantidad: 1, producto: "Monitor Brocs", codigo: "100865", departamento: "ADMISIONES", responsable: "CANDY CONTRERAS" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "ADMISIONES", responsable: "CANDY CONTRERAS" },
        { cantidad: 1, producto: "Teclado Xtech", codigo: "/", departamento: "ADMISIONES", responsable: "CANDY CONTRERAS" },
        { cantidad: 1, producto: "Mouse Xtech", codigo: "170914316", departamento: "ADMISIONES", responsable: "CANDY CONTRERAS" },
        { cantidad: 1, producto: "CPU Intel I5-7400 RAM 8GB", codigo: "/", departamento: "ADMISIONES", responsable: "CANDY CONTRERAS" },
        { cantidad: 1, producto: "Radio", codigo: "/", departamento: "ADMISIONES", responsable: "CANDY CONTRERAS" },
        { cantidad: 1, producto: "Extensión Telefónica", codigo: "1005", departamento: "ADMISIONES", responsable: "CANDY CONTRERAS" },
    ];

    const section = document.createElement('section');
    section.className = "inventario-admisiones-section";

    const titulo = document.createElement('h2');
    titulo.textContent = "Inventario de Admisiones";
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
    table.className = "inventario-admisiones-table";

    // Encabezados
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

    // Filas
    datosCompras.forEach((item, index) => {
        const tr = document.createElement('tr');
        [item.cantidad, item.producto, item.codigo, item.departamento, item.responsable].forEach(text => {
            const td = document.createElement('td');
            td.textContent = text;
            tr.appendChild(td);
        });

        // Acciones (solo admin)
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

    // Contenedor botones
    const contBotones = document.createElement('div');
    contBotones.className = "admisiones-volver-container";

    const botonVolver = document.createElement('button');
    botonVolver.textContent = "Volver";
    botonVolver.className = "admisiones-btn-volver";
    botonVolver.addEventListener('click', () => {
        document.getElementById('root').innerHTML = "";
        document.getElementById('root').appendChild(vista());
    });
    contBotones.appendChild(botonVolver);

    if (usuario && (usuario.rol === 'editor' || usuario.rol === 'admin')) {
        const botonGuardar = document.createElement('button');
        botonGuardar.textContent = "Guardar Cambios";
        botonGuardar.className = "btn-guardar";
        botonGuardar.style.marginLeft = "10px";
        contBotones.appendChild(botonGuardar);

        if (usuario.rol === 'admin') {
            const botonAgregar = document.createElement('button');
            botonAgregar.textContent = "➕ Agregar";
            botonAgregar.className = "boton-agregar";
            botonAgregar.style.marginLeft = "10px";
            botonAgregar.style.backgroundColor = "#28a745";
            contBotones.appendChild(botonAgregar);

            const botonRestaurar = document.createElement('button');
            botonRestaurar.textContent = "🔄 Restaurar";
            botonRestaurar.className = "boton-restaurar";
            botonRestaurar.style.marginLeft = "10px";
            botonRestaurar.style.backgroundColor = "#ffc107";
            contBotones.appendChild(botonRestaurar);

            botonAgregar.addEventListener('click', () => {
                const nuevaFila = document.createElement('tr');
                [1, "Nuevo Producto", "/", "ADMISIONES", ""].forEach(text => {
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
                    localStorage.removeItem('admisionesEditadas');
                    document.getElementById('root').innerHTML = "";
                    document.getElementById('root').appendChild(admisiones());
                }
            });
        }

        // Función para hacer celdas editables
        function hacerCeldasEditables(fila) {
            const celdas = fila.querySelectorAll('td:not(:last-child)');
            celdas.forEach(celda => {
                celda.setAttribute('contenteditable', 'true');
                celda.style.cursor = 'text';
            });
        }

        table.querySelectorAll('tbody tr').forEach(hacerCeldasEditables);

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
            localStorage.setItem('admisionesEditadas', JSON.stringify(nuevosDatos));
            return nuevosDatos;
        }

        botonGuardar.addEventListener('click', () => {
            const datos = guardarCambios();
            mostrarMensaje(`✓ Guardado: ${datos.length} productos`);
        });
    }

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

export { admisiones };
