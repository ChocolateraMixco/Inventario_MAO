import { vista } from "../vista.js";

function obtenerUsuarioActual() {
    const usuario = sessionStorage.getItem('usuarioLogueado');
    return usuario ? JSON.parse(usuario) : null;
}

function coordiPrepi() {
    const datosGuardados = localStorage.getItem('coordinacionPreprimariaEditados');
    const datosCompras = datosGuardados ? JSON.parse(datosGuardados) : [
        { cantidad: 1, producto: "Cpu INTEL ® CELERON ® G 6900 3.40 GHZ 3.40GHZ RAM 8.00GB", codigo: "/", departamento: "COORDINACIÓN DE PRIMARIA ", responsable: "MARILYN GOMEZ" },
        { cantidad: 1, producto: "Teclado Logitech", codigo: "/", departamento: "COORDINACIÓN DE PRIMARIA ", responsable: "MARILYN GOMEZ" },
        { cantidad: 1, producto: "Mouse Logitech", codigo: "/", departamento: "COORDINACIÓN DE PRIMARIA ", responsable: "MARILYN GOMEZ" },
        { cantidad: 1, producto: "Monitor Brocs", codigo: "/", departamento: "COORDINACIÓN DE PRIMARIA ", responsable: "MARILYN GOMEZ" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "COORDINACIÓN DE PRIMARIA ", responsable: "MARILYN GOMEZ" },
        { cantidad: 1, producto: "Bofer Logitech", codigo: "/", departamento: "COORDINACIÓN DE PRIMARIA ", responsable: "MARILYN GOMEZ" },
        { cantidad: 1, producto: "Par de Bocinas", codigo: "/", departamento: "COORDINACIÓN DE PRIMARIA ", responsable: "MARILYN GOMEZ" },
        { cantidad: 1, producto: "Radio", codigo: "/", departamento: "COORDINACIÓN DE PRIMARIA ", responsable: "MARILYN GOMEZ" },
        { cantidad: 1, producto: "Cámara GO PRO", codigo: "/", departamento: "COORDINACIÓN DE PRIMARIA ", responsable: "MARILYN GOMEZ" },
        { cantidad: 1, producto: "Trípode", codigo: "/", departamento: "COORDINACIÓN DE PRIMARIA ", responsable: "MARILYN GOMEZ" },
        { cantidad: 1, producto: "Cpu INTEL ® CORE ™ I7C-7700 CPU@3.60GHZ 3.60GHZ RAM 8.00GB", codigo: "/", departamento: "COORDINACIÓN DE PRIMARIA ", responsable: "YAZMIN DE BOCALETTI" },
        { cantidad: 1, producto: "Teclado DELL", codigo: "/", departamento: "COORDINACIÓN DE PRIMARIA ", responsable: "YAZMIN DE BOCALETTI" },
        { cantidad: 1, producto: "Mouse Logitech", codigo: "/", departamento: "COORDINACIÓN DE PRIMARIA ", responsable: "YAZMIN DE BOCALETTI" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "COORDINACIÓN DE PRIMARIA ", responsable: "YAZMIN DE BOCALETTI" },
        { cantidad: 1, producto: "Bofer Genius", codigo: "/", departamento: "COORDINACIÓN DE PRIMARIA ", responsable: "YAZMIN DE BOCALETTI" },
        { cantidad: 1, producto: "Par de Bocinas Genius", codigo: "/", departamento: "COORDINACIÓN DE PRIMARIA ", responsable: "YAZMIN DE BOCALETTI" },
        { cantidad: 1, producto: "Cámara GO PRO", codigo: "/", departamento: "COORDINACIÓN DE PRIMARIA ", responsable: "YAZMIN DE BOCALETTI" },
        { cantidad: 1, producto: "Trípode", codigo: "/", departamento: "COORDINACIÓN DE PRIMARIA ", responsable: "YAZMIN DE BOCALETTI" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "/", departamento: "COORDINACIÓN DE PRIMARIA ", responsable: "YAZMIN DE BOCALETTI" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "/", departamento: "COORDINACIÓN DE PRIMARIA ", responsable: "YAZMIN DE BOCALETTI" },
        { cantidad: 1, producto: "Mouse Optical", codigo: "/", departamento: "COORDINACIÓN DE PRIMARIA ", responsable: "YAZMIN DE BOCALETTI" },
        { cantidad: 1, producto: "Extensión de Radio", codigo: "/", departamento: "COORDINACIÓN DE PRIMARIA ", responsable: "" },
    ];

    const section = document.createElement('section');
    section.className = "prepri-section";
    
    const titulo = document.createElement('h2');
    titulo.textContent = "Inventario de Coordinación de Preprimaria";
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
    table.className = "prepri-table";
    
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

    datosCompras.forEach(item => {
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
    
    let contVolver = document.createElement('div');
    contVolver.className = "prepri-cont-volver";
    section.appendChild(contVolver);
    
    let botonVolver = document.createElement('button');
    botonVolver.textContent = "Volver";
    botonVolver.className = "prepri-boton-volver";
    contVolver.appendChild(botonVolver);

    botonVolver.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = "";
        root.appendChild(vista());
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
            localStorage.setItem('coordinacionPreprimariaEditados', JSON.stringify(nuevosDatos));
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
                [1, "Nuevo Producto", "/", "COORDINACIÓN DE PRIMARIA ", ""].forEach(text => {
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
                    localStorage.removeItem('coordinacionPreprimariaEditados');
                    document.getElementById('root').innerHTML = "";
                    document.getElementById('root').appendChild(coordiPrepi());
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

export { coordiPrepi };
