import { vista } from "../vista.js";

function obtenerUsuarioActual() {
    const usuario = sessionStorage.getItem('usuarioLogueado');
    return usuario ? JSON.parse(usuario) : null;
}

function carritoPrepri() {
    const datosGuardados = localStorage.getItem('carritoIpadPreprimariaEditados');
    const datosCompras = datosGuardados ? JSON.parse(datosGuardados) : [
        { cantidad: 1, encargado: "Jazmin Bocaletti", departamento: "CARRITO DE IPAD PREPRIMARIA", producto: "IPAD AIR 2", modelo: "MODELO 2014", condicion: "BUENA" },
        { cantidad: 1, encargado: "Jazmin Bocaletti", departamento: "CARRITO DE IPAD PREPRIMARIA", producto: "IPAD AIR 2", modelo: "MODELO 2014", condicion: "BUENA" },
        { cantidad: 1, encargado: "Jazmin Bocaletti", departamento: "CARRITO DE IPAD PREPRIMARIA", producto: "IPAD AIR 2", modelo: "MODELO 2014", condicion: "BUENA" },
        { cantidad: 1, encargado: "Jazmin Bocaletti", departamento: "CARRITO DE IPAD PREPRIMARIA", producto: "IPAD AIR 2", modelo: "MODELO 2014", condicion: "BUENA" },
        { cantidad: 1, encargado: "Jazmin Bocaletti", departamento: "CARRITO DE IPAD PREPRIMARIA", producto: "IPAD AIR 2", modelo: "MODELO 2014", condicion: "BUENA" },
        { cantidad: 1, encargado: "Jazmin Bocaletti", departamento: "CARRITO DE IPAD PREPRIMARIA", producto: "IPAD AIR 2", modelo: "MODELO 2014", condicion: "BUENA" },
        { cantidad: 1, encargado: "Jazmin Bocaletti", departamento: "CARRITO DE IPAD PREPRIMARIA", producto: "IPAD AIR 2", modelo: "MODELO 2014", condicion: "BUENA" },
        { cantidad: 1, encargado: "Jazmin Bocaletti", departamento: "CARRITO DE IPAD PREPRIMARIA", producto: "IPAD AIR 2", modelo: "MODELO 2014", condicion: "BUENA" },
        { cantidad: 1, encargado: "Jazmin Bocaletti", departamento: "CARRITO DE IPAD PREPRIMARIA", producto: "IPAD AIR 2", modelo: "MODELO 2014", condicion: "BUENA" },
        { cantidad: 1, encargado: "Jazmin Bocaletti", departamento: "CARRITO DE IPAD PREPRIMARIA", producto: "IPAD AIR 2", modelo: "MODELO 2014", condicion: "BUENA" },
        { cantidad: 1, encargado: "Jazmin Bocaletti", departamento: "CARRITO DE IPAD PREPRIMARIA", producto: "IPAD AIR 2", modelo: "MODELO 2014", condicion: "BUENA" },
        { cantidad: 1, encargado: "Jazmin Bocaletti", departamento: "CARRITO DE IPAD PREPRIMARIA", producto: "IPAD AIR 2", modelo: "MODELO 2014", condicion: "BUENA" },
        { cantidad: 1, encargado: "Jazmin Bocaletti", departamento: "CARRITO DE IPAD PREPRIMARIA", producto: "IPAD AIR 2", modelo: "MODELO 2014", condicion: "BUENA" },
        { cantidad: 1, encargado: "Jazmin Bocaletti", departamento: "CARRITO DE IPAD PREPRIMARIA", producto: "IPAD AIR 2", modelo: "MODELO 2014", condicion: "BUENA" },
        { cantidad: 1, encargado: "Jazmin Bocaletti", departamento: "CARRITO DE IPAD PREPRIMARIA", producto: "IPAD AIR 2", modelo: "MODELO 2014", condicion: "BUENA" },
        { cantidad: 1, encargado: "Jazmin Bocaletti", departamento: "CARRITO DE IPAD PREPRIMARIA", producto: "IPAD AIR 2", modelo: "MODELO 2014", condicion: "BUENA" },
        { cantidad: 1, encargado: "Jazmin Bocaletti", departamento: "CARRITO DE IPAD PREPRIMARIA", producto: "IPAD AIR 2", modelo: "MODELO 2014", condicion: "BUENA" },
        { cantidad: 1, encargado: "Jazmin Bocaletti", departamento: "CARRITO DE IPAD PREPRIMARIA", producto: "IPAD AIR 2", modelo: "MODELO 2014", condicion: "BUENA" },
        { cantidad: 1, encargado: "Jazmin Bocaletti", departamento: "CARRITO DE IPAD PREPRIMARIA", producto: "IPAD AIR 3", modelo: "MODELO 2015", condicion: "BUENA" },
        { cantidad: 19, encargado: "", departamento: "CARRITO DE IPAD PREPRIMARIA", producto: "IPAD AIR 2/3", modelo: "MODELO 2014/2015", condicion: "BUENA" },
        { cantidad: 6, encargado: "", departamento: "CARRITO DE IPAD PREPRIMARIA", producto: "Cargadores", modelo: "", condicion: "" },
    ];

    const section = document.createElement('section');
    section.className = "ipad-preprimaria-section";
    
    const titulo = document.createElement('h2');
    titulo.textContent = "Inventario de Carrito de iPad de Preprimaria";
    section.appendChild(titulo);
    
    const usuario = obtenerUsuarioActual();

    if (datosGuardados) {
        const indicador = document.createElement('p');
        indicador.textContent = "✓ Mostrando datos guardados";
        indicador.style.color = 'green';
        indicador.style.fontStyle = 'italic';
        indicador.style.marginBottom = '10px';
        section.appendChild(indicador);
    }

    const table = document.createElement('table');
    table.className = "ipad-preprimaria-table";
    
    const thead = document.createElement('thead');
    const trHead = document.createElement('tr');
    ["Cantidad", "Producto", "Modelo", "Condición", "Encargado", "Departamento", "Acciones"].forEach(text => {
        const th = document.createElement('th');
        th.textContent = text;
        trHead.appendChild(th);
    });
    thead.appendChild(trHead);
    table.appendChild(thead);
    
    const tbody = document.createElement('tbody');
    datosCompras.forEach(item => {
        const tr = document.createElement('tr');

        [item.cantidad, item.producto, item.modelo, item.condicion, item.encargado, item.departamento].forEach(text => {
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
    contVolver.className = "ipad-preprimaria-volver-container";
    section.appendChild(contVolver);
    
    let botonVolver = document.createElement('button');
    botonVolver.textContent = "Volver";
    botonVolver.className = "ipad-preprimaria-btn-volver";
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
                if (celdas.length >= 6) {
                    nuevosDatos.push({
                        cantidad: celdas[0].textContent,
                        producto: celdas[1].textContent,
                        modelo: celdas[2].textContent,
                        condicion: celdas[3].textContent,
                        encargado: celdas[4].textContent,
                        departamento: celdas[5].textContent
                    });
                }
            });
            localStorage.setItem('carritoIpadPreprimariaEditados', JSON.stringify(nuevosDatos));
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
                [1, "Nuevo Producto", "", "", "", "CARRITO DE IPAD PREPRIMARIA"].forEach(text => {
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
                    localStorage.removeItem('carritoIpadPreprimariaEditados');
                    document.getElementById('root').innerHTML = "";
                    document.getElementById('root').appendChild(carritoPrepri());
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

export { carritoPrepri };
