import { vista } from "../vista.js";

function obtenerUsuarioActual() {
    const usuario = sessionStorage.getItem('usuarioLogueado');
    return usuario ? JSON.parse(usuario) : null;
}

function recursosHumanos() {
    const datosGuardados = localStorage.getItem('recursosHumanosEditados');
    const datosCompras = datosGuardados ? JSON.parse(datosGuardados) : [
        { cantidad: 1, producto: "Monitor Brocs", codigo: "brocs195h18080214", departamento: "RECURSOS HUMANOS ", responsable: "MERCEDES GRAMAJO" },
        { cantidad: 1, producto: "Laptop HP 11TH GEN INTEL (TN) 13-1125 G4 @2.00GHZ RAM 16GB", codigo: "5CP1417D4M", departamento: "RECURSOS HUMANOS ", responsable: "MERCEDES GRAMAJO" },
        { cantidad: 1, producto: "Teclado Logitech ", codigo: "/", departamento: "RECURSOS HUMANOS ", responsable: "MERCEDES GRAMAJO" },
        { cantidad: 1, producto: "Impresora Canon ", codigo: "100282", departamento: "RECURSOS HUMANOS ", responsable: "MERCEDES GRAMAJO" },
        { cantidad: 1, producto: "Bocinas Brocs", codigo: "/", departamento: "RECURSOS HUMANOS ", responsable: "MERCEDES GRAMAJO" },
        { cantidad: 1, producto: "Radio", codigo: "x/", departamento: "RECURSOS HUMANOS ", responsable: "MERCEDES GRAMAJO" },
        { cantidad: 1, producto: "Mouse Klip Extreme ", codigo: "/", departamento: "RECURSOS HUMANOS ", responsable: "MERCEDES GRAMAJO" },
        { cantidad: 1, producto: "Ipad", codigo: "MNV62CL/A", departamento: "RECURSOS HUMANOS ", responsable: "MERCEDES GRAMAJO" },
        { cantidad: 1, producto: "CPU INTEL 2 DUO E8400 RAM 4GB", codigo: "/", departamento: "RECURSOS HUMANOS ", responsable: "JANETT CARDONA" },
        { cantidad: 1, producto: "Monitor HP", codigo: "100016", departamento: "RECURSOS HUMANOS ", responsable: "JANETT CARDONA" },
        { cantidad: 1, producto: "Teclado DELL", codigo: "/", departamento: "RECURSOS HUMANOS ", responsable: "JANETT CARDONA" },
        { cantidad: 1, producto: "Mouse Optica", codigo: "/", departamento: "RECURSOS HUMANOS ", responsable: "JANETT CARDONA" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "RECURSOS HUMANOS ", responsable: "JANETT CARDONA" },
        { cantidad: 1, producto: "Monitor LG", codigo: "/", departamento: "RECURSOS HUMANOS ", responsable: "BEVERLY LOPEZ" },
        { cantidad: 1, producto: "Cpu Intel Core i7 7th", codigo: "/", departamento: "RECURSOS HUMANOS", responsable: "BEVERLY LOPEZ" },
        { cantidad: 1, producto: "Teclado Klip Extreme", codigo: "/", departamento: "RECURSOS HUMANOS", responsable: "BEVERLY LOPEZ" },
        { cantidad: 1, producto: "Television Daevoo", codigo: "/", departamento: "RECURSOS HUMANOS", responsable: "" },
        { cantidad: 1, producto: "Impresora Xerox", codigo: "FX1A_Fax", departamento: "RECURSOS HUMANOS", responsable: "" },
        { cantidad: 1, producto: "Emplasticadora TaHSIN", codigo: "TCC-330", departamento: "RECURSOS HUMANOS ", responsable: "" },
        { cantidad: 1, producto: "Extención Telefónica", codigo: "1033", departamento: "RECURSOS HUMANOS ", responsable: "MERCEDES GRAMAJO -- JANETT CARDONA  BEVERLY LOPEZ" },
    ];

    const section = document.createElement('section');
    section.className = "inventario-section";

    const titulo = document.createElement('h2');
    titulo.textContent = "Inventario de Recursos Humanos";
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
    table.className = "inventario-table";

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

    datosCompras.forEach((item, index) => {
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

    // Contenedor botones
    const contVolver = document.createElement('div');
    contVolver.className = "volver-container";
    section.appendChild(contVolver);

    const botonVolver = document.createElement('button');
    botonVolver.textContent = "Volver";
    botonVolver.className = "btn-volver";
    contVolver.appendChild(botonVolver);

    botonVolver.addEventListener('click', () => {
        document.getElementById('root').innerHTML = "";
        document.getElementById('root').appendChild(vista());
    });

    // Funcionalidades de edición
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
            localStorage.setItem('recursosHumanosEditados', JSON.stringify(nuevosDatos));
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
                [1, "Nuevo Producto", "/", "RECURSOS HUMANOS", ""].forEach(text => {
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
                    localStorage.removeItem('recursosHumanosEditados');
                    document.getElementById('root').innerHTML = "";
                    document.getElementById('root').appendChild(recursosHumanos());
                }
            });
        }

        // Botón guardar cambios
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

export { recursosHumanos };
