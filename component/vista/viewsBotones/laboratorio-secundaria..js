import { vista } from "../vista.js";

function obtenerUsuarioActual() {
    const usuario = sessionStorage.getItem('usuarioLogueado');
    return usuario ? JSON.parse(usuario) : null;
}

function laboSecu() {
    const datosGuardados = localStorage.getItem('laboratorioSecundariaEditados');
    const datosCompras = datosGuardados ? JSON.parse(datosGuardados) : [
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000619", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000682", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000716", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000673", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000710", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000694", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000668", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000675", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000551", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000670", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000594", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000542", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000692", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000549", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000547", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000715", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000693", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000667", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000615", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000671", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000721", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000690", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000728", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000703", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000700", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000658", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000593", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000565", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000704", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000676", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000720", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000661", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC P.", codigo: "VBLP8HA000550", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC P.", codigo: "DYOC9JA000446", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor LG", codigo: "908TPBF2A317", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 33, producto: "Teclados Klip Xtreme", codigo: "/", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 33, producto: "Mouse Klip Xtreme", codigo: "/", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "iPad", codigo: "/", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Proyector EPSON", codigo: "/", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Camara GO PRO", codigo: "/", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Teclado", codigo: "/", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 33, producto: "CPU INTEL ® CORE ™ I5-10400CPU @ 2.90GHZ 2.90GHZ RAM 8.00GB", codigo: "/", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ I7-7700CPU @ 3.60GHZ 3.60GHZ RAM 4.00GB", codigo: "/", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
    ];

    const section = document.createElement('section');
    section.className = "inventario-compras-section";
    
    const titulo = document.createElement('h2');
    titulo.textContent = "Inventario de Laboratorio de Secundaria";
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
    table.className = "inventario-compras-table";
    
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
    
    let contVolver = document.createElement('div');
    contVolver.className = "compras-volver-container";
    section.appendChild(contVolver);
    
    let botonVolver = document.createElement('button');
    botonVolver.textContent = "Volver";
    botonVolver.className = "compras-btn-volver";
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
            localStorage.setItem('laboratorioSecundariaEditados', JSON.stringify(nuevosDatos));
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
                [1, "Nuevo Producto", "/", "LABORATORIO DE SECUNDARIA ", ""].forEach(text => {
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
                    localStorage.removeItem('laboratorioSecundariaEditados');
                    document.getElementById('root').innerHTML = "";
                    document.getElementById('root').appendChild(laboSecu());
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

export { laboSecu };
