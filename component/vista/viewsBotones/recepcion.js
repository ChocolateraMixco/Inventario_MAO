import { vista } from "../vista.js";

function obtenerUsuarioActual() {
    const usuario = sessionStorage.getItem('usuarioLogueado');
    return usuario ? JSON.parse(usuario) : null;
}

function recepcion() {
    const datosGuardados = localStorage.getItem('recepcionEditados');
    const datosCompras = datosGuardados ? JSON.parse(datosGuardados) : [
        { cantidad: 1, producto: "Bocinas Genius", codigo: "/", departamento: "RECEPCIÓN", responsable: "SUSANA ROLDAN" },
        { cantidad: 1, producto: "Teclado Inalambrico", codigo: "18475c10fjq8", departamento: "RECEPCIÓN", responsable: "SUSANA ROLDAN" },
        { cantidad: 1, producto: "Cpu 11TH GEN INTEL I5 -11600K @3.90 GHZ RAM 4GB", codigo: "/", departamento: "RECEPCIÓN", responsable: "SUSANA ROLDAN" },
        { cantidad: 1, producto: "Monitor", codigo: "100721", departamento: "RECEPCIÓN", responsable: "SUSANA ROLDAN" },
        { cantidad: 1, producto: "Radio", codigo: "/", departamento: "RECEPCIÓN", responsable: "SUSANA ROLDAN" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "RECEPCIÓN", responsable: "SUSANA ROLDAN" },
        { cantidad: 1, producto: "Televisor RCA", codigo: "/", departamento: "RECEPCIÓN", responsable: "SUSANA ROLDAN" },
        { cantidad: 1, producto: "Mouse Brocs", codigo: "/", departamento: "RECEPCIÓN", responsable: "RECEPCIÓN 2" },
        { cantidad: 1, producto: "Teclado Microsoft", codigo: "/", departamento: "RECEPCIÓN", responsable: "RECEPCIÓN 2" },
        { cantidad: 1, producto: "Monitor HP", codigo: "/", departamento: "RECEPCIÓN", responsable: "RECEPCIÓN 2" },
        { cantidad: 1, producto: "Cpu INTEL I -3330 RAM 6GB", codigo: "/", departamento: "RECEPCIÓN", responsable: "RECEPCIÓN 2" },
        { cantidad: 16, producto: "CamarasEpcom", codigo: "/", departamento: "RECEPCIÓN", responsable: "RECEPCIÓN 2" },
        { cantidad: 1, producto: "Monitor lg", codigo: "/", departamento: "RECEPCIÓN", responsable: "RECEPCIÓN 2" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "RECEPCIÓN", responsable: "RECEPCIÓN 2" },
        { cantidad: 1, producto: "Extensión Telefónica", codigo: "100 / 101 / 102", departamento: "RECEPCIÓN", responsable: "" },
    ];

    const section = document.createElement('section');
    section.className = "inventario-recepcion-section";

    const titulo = document.createElement('h2');
    titulo.textContent = "Inventario de Recepción";
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
    table.className = "inventario-recepcion-table";

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

    datosCompras.forEach((item) => {
        const tr = document.createElement('tr');
        [item.cantidad, item.producto, item.codigo, item.departamento, item.responsable].forEach(text => {
            const td = document.createElement('td');
            td.textContent = text;
            tr.appendChild(td);
        });

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

    const contVolver = document.createElement('div');
    contVolver.className = "recepcion-volver-container";
    section.appendChild(contVolver);

    const botonVolver = document.createElement('button');
    botonVolver.textContent = "Volver";
    botonVolver.className = "recepcion-btn-volver";
    contVolver.appendChild(botonVolver);

    botonVolver.addEventListener('click', () => {
        document.getElementById('root').innerHTML = "";
        document.getElementById('root').appendChild(vista());
    });

    if (usuario && (usuario.rol === 'editor' || usuario.rol === 'admin')) {
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
            localStorage.setItem('recepcionEditados', JSON.stringify(nuevosDatos));
            return nuevosDatos;
        }

        if (usuario.rol === 'admin') {
            const botonAgregar = document.createElement('button');
            botonAgregar.textContent = "➕ Agregar";
            botonAgregar.className = "btn-agregar";
            botonAgregar.style.marginLeft = "10px";
            contVolver.appendChild(botonAgregar);

            const botonRestaurar = document.createElement('button');
            botonRestaurar.textContent = "🔄 Restaurar";
            botonRestaurar.className = "btn-restaurar";
            botonRestaurar.style.marginLeft = "10px";
            contVolver.appendChild(botonRestaurar);

            botonAgregar.addEventListener('click', () => {
                const nuevaFila = document.createElement('tr');
                [1, "Nuevo Producto", "/", "RECEPCIÓN", ""].forEach(text => {
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
                    localStorage.removeItem('recepcionEditados');
                    document.getElementById('root').innerHTML = "";
                    document.getElementById('root').appendChild(recepcion());
                }
            });
        }

        const botonGuardar = document.createElement('button');
        botonGuardar.textContent = "Guardar Cambios";
        botonGuardar.className = "btn-guardar";
        botonGuardar.style.marginLeft = "10px";
        contVolver.appendChild(botonGuardar);

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

    return section;
}

export { recepcion };
