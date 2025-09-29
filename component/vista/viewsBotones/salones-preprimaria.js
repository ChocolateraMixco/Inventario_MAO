import { vista } from "../vista.js";

function obtenerUsuarioActual() {
    const usuario = sessionStorage.getItem('usuarioLogueado');
    return usuario ? JSON.parse(usuario) : null;
}

function salonesPrepri() {
    const datosGuardados = localStorage.getItem('salonesPreprimariaEditados');
    const datosCompras = datosGuardados ? JSON.parse(datosGuardados) : [
        { cantidad: 1, producto: "Proyector", codigo: "/", departamento: "PREPRIMARIA L1", responsable: "" },
        { cantidad: 1, producto: "Cpu INTEL ® CORE ™ I7-7700 CPU@3.60GHZ 3.60GHZ RAM4.00GB", codigo: "/", departamento: "PREPRIMARIA L2", responsable: "MISS OLGITA" },
        { cantidad: 1, producto: "Teclado Xtech", codigo: "/", departamento: "PREPRIMARIA L2", responsable: "MISS OLGITA" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "PREPRIMARIA L2", responsable: "MISS OLGITA" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "PREPRIMARIA L2", responsable: "MISS OLGITA" },
        { cantidad: 1, producto: "Bocina Steren", codigo: "/", departamento: "PREPRIMARIA L2", responsable: "MISS OLGITA" },
        { cantidad: 1, producto: "Proyector EPSON", codigo: "/", departamento: "PREPRIMARIA L2", responsable: "MISS OLGITA" },
        { cantidad: 1, producto: "iPad", codigo: "/", departamento: "PREPRIMARIA L2", responsable: "MISS OLGITA" },
        { cantidad: 1, producto: "Proyector", codigo: "/", departamento: "PREPRIMARIA L3", responsable: "MISS PAULA" },
        { cantidad: 1, producto: "Par de Bocinas Logitech", codigo: "/", departamento: "PREPRIMARIA L3", responsable: "MISS PAULA" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "/", departamento: "PREPRIMARIA L3", responsable: "MISS PAULA" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "PREPRIMARIA L3", responsable: "MISS PAULA" },
        { cantidad: 1, producto: "Teclado", codigo: "/", departamento: "PREPRIMARIA L3", responsable: "MISS PAULA" },
        { cantidad: 1, producto: "Monitor HP", codigo: "/", departamento: "PREPRIMARIA L3", responsable: "MISS PAULA" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "PREPRIMARIA L3", responsable: "MISS PAULA" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "PREPRIMARIA L3", responsable: "MISS PAULA" },
        { cantidad: 1, producto: "iPad", codigo: "/", departamento: "PREPRIMARIA L3", responsable: "MISS PAULA" },
        { cantidad: 1, producto: "Monitor Brocs", codigo: "BR173D", departamento: "PREPRIMARIA L4", responsable: "" },
        { cantidad: 1, producto: "Mouse Mircrosoft", codigo: "/", departamento: "PREPRIMARIA L4", responsable: "" },
        { cantidad: 1, producto: "Teclado Microsoft", codigo: "/", departamento: "PREPRIMARIA L4", responsable: "" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "PREPRIMARIA L4", responsable: "" },
        { cantidad: 1, producto: "Bocinas", codigo: "/", departamento: "PREPRIMARIA L4", responsable: "" },
        { cantidad: 1, producto: "Cámara", codigo: "/", departamento: "PREPRIMARIA L4", responsable: "" },
        { cantidad: 1, producto: "Proyector", codigo: "/", departamento: "PREPRIMARIA M1", responsable: "" },
        { cantidad: 1, producto: "iPad", codigo: "/", departamento: "PREPRIMARIA M1", responsable: "" },
        { cantidad: 1, producto: "Proyector EPSON", codigo: "/", departamento: "PREPRIMARIA M2", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "/", departamento: "PREPRIMARIA M2", responsable: "" },
        { cantidad: 1, producto: "Teclado", codigo: "/", departamento: "PREPRIMARIA M2", responsable: "" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "PREPRIMARIA M2", responsable: "" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "PREPRIMARIA M2", responsable: "" },
        { cantidad: 1, producto: "Cpu INTEL ® CORE ™ I5-650CPU @ 3.20GHZ 3.20GHZ RAM 4.00GB", codigo: "/", departamento: "PREPRIMARIA M2", responsable: "" },
        { cantidad: 1, producto: "Proyector EPSON", codigo: "/", departamento: "PREPRIMARIA M3", responsable: "" },
        { cantidad: 1, producto: "iPad", codigo: "/", departamento: "PREPRIMARIA M3", responsable: "" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "PREPRIMARIA M3", responsable: "" },
        { cantidad: 1, producto: "Proyector", codigo: "/", departamento: "PREPRIMARIA M4", responsable: "" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "PREPRIMARIA M4", responsable: "" },
        { cantidad: 1, producto: "Monitor HP", codigo: "/", departamento: "PREPRIMARIA M4", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "/", departamento: "PREPRIMARIA M4", responsable: "" },
        { cantidad: 1, producto: "Cpu INTEL ® CORE ™ I7-7700CPU @ 3.60GHZ 3.60GHZ RAM 4.00GB", codigo: "/", departamento: "PREPRIMARIA M4", responsable: "" },
        { cantidad: 1, producto: "Teclado Klip Xtreme", codigo: "/", departamento: "PREPRIMARIA M4", responsable: "" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "PREPRIMARIA M4", responsable: "" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "PREPRIMARIA M4", responsable: "" },
        { cantidad: 1, producto: "iPad", codigo: "/", departamento: "PREPRIMARIA M4", responsable: "" },
        { cantidad: 1, producto: "Proyector", codigo: "/", departamento: "PREPRIMARIA M5", responsable: "" },
        { cantidad: 1, producto: "Proyector", codigo: "/", departamento: "PREPRIMARIA M6", responsable: "" },
        { cantidad: 1, producto: "Monitor HP", codigo: "", departamento: "PREPRIMARIA M7", responsable: "MISS PAOLA" },
        { cantidad: 1, producto: "Proyector EPSON", codigo: "/", departamento: "PREPRIMARIA M7", responsable: "MISS PAOLA" },
        { cantidad: 1, producto: "Teclado", codigo: "/", departamento: "PREPRIMARIA M7", responsable: "MISS PAOLA" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "PREPRIMARIA M7", responsable: "MISS PAOLA" },
        { cantidad: 1, producto: "Par de Bocinas Logitech", codigo: "/", departamento: "PREPRIMARIA M7", responsable: "MISS PAOLA" },
        { cantidad: 1, producto: "Cpu INTEL ® CORE ™ I7-7700CPU @ 3.60GHZ 3.60GHZ RAM 4.00GB", codigo: "/", departamento: "PREPRIMARIA M7", responsable: "MISS PAOLA" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "PREPRIMARIA M7", responsable: "MISS PAOLA" },
        { cantidad: 1, producto: "iPad", codigo: "/", departamento: "PREPRIMARIA M7", responsable: "MISS PAOLA" },
        { cantidad: 1, producto: "Cpu INTEL ® CORE ™ I7-7700 CPU@ 3.60GHZ 3.60GHZ RAM 4.00GB", codigo: "/", departamento: "PREPRIMARIA M8", responsable: "MISS JACKY" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "PREPRIMARIA M8", responsable: "MISS JACKY" },
        { cantidad: 1, producto: "Teclado", codigo: "/", departamento: "PREPRIMARIA M8", responsable: "MISS JACKY" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "PREPRIMARIA M8", responsable: "MISS JACKY" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "PREPRIMARIA M8", responsable: "MISS JACKY" },
        { cantidad: 1, producto: "Proyector", codigo: "/", departamento: "PREPRIMARIA M8", responsable: "MISS JACKY" },
        { cantidad: 1, producto: "Monitor HP", codigo: "/", departamento: "PREPRIMARIA M8", responsable: "MISS JACKY" },
        { cantidad: 1, producto: "Monitor LG", codigo: "/", departamento: "PREPRIMARIA M9", responsable: "MISS FERNANDA" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "PREPRIMARIA M9", responsable: "MISS FERNANDA" },
        { cantidad: 1, producto: "Proyector EPSON", codigo: "/", departamento: "PREPRIMARIA M9", responsable: "MISS FERNANDA" },
        { cantidad: 1, producto: "iPad", codigo: "/", departamento: "PREPRIMARIA M9", responsable: "MISS FERNANDA" },
        { cantidad: 1, producto: "Teclado", codigo: "/", departamento: "PREPRIMARIA M9", responsable: "MISS FERNANDA" },
        { cantidad: 1, producto: "Cpu INTEL ® CORE ™ I7-700CPU @3.60GHZ 3.60GHZ RAM 4.00GB", codigo: "/", departamento: "PREPRIMARIA M9", responsable: "MISS FERNANDA" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "PREPRIMARIA M9", responsable: "MISS FERNANDA" },
        { cantidad: 1, producto: "Par de Bocinas", codigo: "/", departamento: "PREPRIMARIA M9", responsable: "MISS FERNANDA" },
        { cantidad: 1, producto: "iPad", codigo: "/", departamento: "PREPRIMARIA M10", responsable: "MISS VERENICE" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "PREPRIMARIA M10", responsable: "MISS VERENICE" },
        { cantidad: 1, producto: "Monitor HP", codigo: "/", departamento: "PREPRIMARIA M10", responsable: "MISS VERENICE" },
        { cantidad: 1, producto: "Mouse AOAS", codigo: "/", departamento: "PREPRIMARIA M10", responsable: "MISS VERENICE" },
        { cantidad: 1, producto: "Cpu INTEL ® CORE ™ I7-7700 CPU@3.60GHZ 3.60GHZ RAM 4.00GB ", codigo: "/", departamento: "PREPRIMARIA M10", responsable: "MISS VERENICE" },
        { cantidad: 1, producto: "Proyector", codigo: "/", departamento: "PREPRIMARIA M10", responsable: "MISS VERENICE" },
    ];

    const section = document.createElement('section');
    section.className = "inventario-salones-section";
    
    const titulo = document.createElement('h2');
    titulo.textContent = "Inventario de Salones de Preprimaria";
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
    table.className = "inventario-salones-table";

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

    const contVolver = document.createElement('div');
    contVolver.className = "salones-volver-container";
    section.appendChild(contVolver);

    const botonVolver = document.createElement('button');
    botonVolver.textContent = "Volver";
    botonVolver.className = "salones-btn-volver";
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
            localStorage.setItem('salonesPreprimariaEditados', JSON.stringify(nuevosDatos));
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
                [1, "Nuevo Producto", "/", "PREPRIMARIA", ""].forEach(text => {
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
                    localStorage.removeItem('salonesPreprimariaEditados');
                    document.getElementById('root').innerHTML = "";
                    document.getElementById('root').appendChild(salonesPrepri());
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
            mostrarMensaje('✓ Cambios guardados');
        });
    }

    return section;
}

export { salonesPrepri };
