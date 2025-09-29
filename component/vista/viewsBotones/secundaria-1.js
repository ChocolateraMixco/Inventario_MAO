import { vista } from "../vista.js";

function obtenerUsuarioActual() {
    const usuario = sessionStorage.getItem('usuarioLogueado');
    return usuario ? JSON.parse(usuario) : null;
}

function secundaria1() {
    const datosGuardados = localStorage.getItem('secundaria1Editados');
    const datosCompras = datosGuardados ? JSON.parse(datosGuardados) : [
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ I7-7700CPU @ 3.60GHZ 3.60GHZ RAM 4.00GB", codigo: "/", departamento: "SECUNDARIA 102", responsable: "" },
        { cantidad: 1, producto: "Monitor HP", codigo: "CN922035B", departamento: "SECUNDARIA 102", responsable: "" },
        { cantidad: 1, producto: "Monitor HP", codigo: "CNC9301409", departamento: "SECUNDARIA 102", responsable: "" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "SECUNDARIA 102", responsable: "" },
        { cantidad: 1, producto: "Teclado", codigo: "/", departamento: "SECUNDARIA 102", responsable: "" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "SECUNDARIA 102", responsable: "" },
        { cantidad: 1, producto: "Proyector OPTAMA", codigo: "/", departamento: "SECUNDARIA 102", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ I7-7700CPU @ 3.60GHZ 3.60GHZ RAM 4.00GB", codigo: "/", departamento: "SECUNDARIA 103", responsable: "" },
        { cantidad: 1, producto: "Monitor HP", codigo: "CNC922030W", departamento: "SECUNDARIA 103", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "DYOC9JA00442", departamento: "SECUNDARIA 103", responsable: "" },
        { cantidad: 1, producto: "Teclado", codigo: "/", departamento: "SECUNDARIA 103", responsable: "" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "SECUNDARIA 103", responsable: "" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "SECUNDARIA 103", responsable: "" },
        { cantidad: 1, producto: "Proyector OPTAMA", codigo: "/", departamento: "SECUNDARIA 103", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ I7-7700CPU @ 3.60GHZ 3.60GHZ RAM 4.00GB", codigo: "/", departamento: "SECUNDARIA 105", responsable: "" },
        { cantidad: 1, producto: "Monitor HP", codigo: "CNC930147X", departamento: "SECUNDARIA 105", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "DYOC9JA002242", departamento: "SECUNDARIA 105", responsable: "" },
        { cantidad: 1, producto: "Teclado DELL", codigo: "/", departamento: "SECUNDARIA 105", responsable: "" },
        { cantidad: 1, producto: "Mouse Microsoft", codigo: "/", departamento: "SECUNDARIA 105", responsable: "" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "SECUNDARIA 105", responsable: "" },
        { cantidad: 1, producto: "Proyector OPTAMA", codigo: "/", departamento: "SECUNDARIA 105", responsable: "" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "SECUNDARIA 105", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ I7-7700CPU @ 3.60GHZ 3.60GHZ RAM 4.00GB", codigo: "/", departamento: "SECUNDARIA 106", responsable: "" },
        { cantidad: 1, producto: "Monitor HP", codigo: "CNC93013HG", departamento: "SECUNDARIA 106", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "DYOC9JA002247", departamento: "SECUNDARIA 106", responsable: "" },
        { cantidad: 1, producto: "Teclado Manhatan", codigo: "/", departamento: "SECUNDARIA 106", responsable: "" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "SECUNDARIA 106", responsable: "" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "SECUNDARIA 106", responsable: "" },
        { cantidad: 1, producto: "Proyector OPTAMA", codigo: "/", departamento: "SECUNDARIA 106", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ I7-7700CPU @ 3.60GHZ 3.60GHZ RAM 4.00GB", codigo: "/", departamento: "SECUNDARIA 107", responsable: "" },
        { cantidad: 1, producto: "Monitor HP", codigo: "CNC930147W", departamento: "SECUNDARIA 107", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "DYOC9JA002277", departamento: "SECUNDARIA 107", responsable: "" },
        { cantidad: 1, producto: "Teclado", codigo: "/", departamento: "SECUNDARIA 107", responsable: "" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "SECUNDARIA 107", responsable: "" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "SECUNDARIA 107", responsable: "" },
        { cantidad: 1, producto: "Proyector OPTAMA", codigo: "/", departamento: "SECUNDARIA 107", responsable: "" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "SECUNDARIA 107", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ I5-10400CPU @ 2.90GHZ 2.90GHZ RAM 8.00GB", codigo: "/", departamento: "SECUNDARIA 108", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "BYOC9JA000446", departamento: "SECUNDARIA 108", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "BLP8HA000550", departamento: "SECUNDARIA 108", responsable: "" },
        { cantidad: 1, producto: "Teclado DELL", codigo: "/", departamento: "SECUNDARIA 108", responsable: "" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "SECUNDARIA 108", responsable: "" },
        { cantidad: 1, producto: "Proyector EPSON", codigo: "/", departamento: "SECUNDARIA 108", responsable: "" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "SECUNDARIA 108", responsable: "" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "SECUNDARIA 108", responsable: "" },
        { cantidad: 1, producto: "iPad", codigo: "/", departamento: "SECUNDARIA 108", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ I7-7700CPU @ 3.60GHZ 3.60GHZ RAM 4.00GB", codigo: "/", departamento: "SECUNDARIA 201", responsable: "" },
        { cantidad: 1, producto: "Monitor HP", codigo: "CNC930147M", departamento: "SECUNDARIA 201", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "DYOC9JA002203", departamento: "SECUNDARIA 201", responsable: "" },
        { cantidad: 1, producto: "Teclado", codigo: "/", departamento: "SECUNDARIA 201", responsable: "" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "SECUNDARIA 201", responsable: "" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "SECUNDARIA 201", responsable: "" },
        { cantidad: 1, producto: "Proyector", codigo: "/", departamento: "SECUNDARIA 201", responsable: "" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "SECUNDARIA 201", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ I7-7700CPU @ 3.60GHZ 3.60GHZ RAM 4.00GB", codigo: "/", departamento: "SECUNDARIA 202", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ I5-3330 @ 3.00GHZ 3.00GHZ RAM 4.00GB", codigo: "/", departamento: "SECUNDARIA 202", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ I5-3330 @ 3.00GHZ 3.00GHZ RAM 4.00GB", codigo: "/", departamento: "SECUNDARIA 202", responsable: "" },
        { cantidad: 3, producto: "Teclado", codigo: "/", departamento: "SECUNDARIA 202", responsable: "" },
        { cantidad: 3, producto: "Mouse", codigo: "/", departamento: "SECUNDARIA 202", responsable: "" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "SECUNDARIA 202", responsable: "" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "SECUNDARIA 202", responsable: "" },
        { cantidad: 1, producto: "Proyector OPTAMA", codigo: "/", departamento: "SECUNDARIA 202", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "DYOC9JA002209", departamento: "SECUNDARIA 202", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "DYOC9JA002234", departamento: "SECUNDARIA 202", responsable: "" },
        { cantidad: 1, producto: "Monitor LG", codigo: "908DPUH2A295", departamento: "SECUNDARIA 202", responsable: "" },
        { cantidad: 1, producto: "Monitor HP", codigo: "CNC93013HB", departamento: "SECUNDARIA 202", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ I7-7700CPU @ 3.60GHZ 3.60GHZ RAM 4.00GB", codigo: "/", departamento: "SECUNDARIA 203", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "DYOC9JA000477", departamento: "SECUNDARIA 203", responsable: "" },
        { cantidad: 1, producto: "Monitor HP", codigo: "CNC92203GW", departamento: "SECUNDARIA 203", responsable: "" },
        { cantidad: 1, producto: "Teclado", codigo: "/", departamento: "SECUNDARIA 203", responsable: "" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "SECUNDARIA 203", responsable: "" },
        { cantidad: 1, producto: "Proyector OPTAMA", codigo: "/", departamento: "SECUNDARIA 203", responsable: "" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "SECUNDARIA 203", responsable: "" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "SECUNDARIA 203", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ I7-7700CPU @ 3.60GHZ 3.60GHZ RAM 4.00GB", codigo: "/", departamento: "SECUNDARIA 205", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "DYOC9JA002281", departamento: "SECUNDARIA 205", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "DYOC9JA002195", departamento: "SECUNDARIA 205", responsable: "" },
        { cantidad: 1, producto: "Teclado Brocs", codigo: "/", departamento: "SECUNDARIA 205", responsable: "" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "SECUNDARIA 205", responsable: "" },
        { cantidad: 1, producto: "Proyector OPTAMA", codigo: "/", departamento: "SECUNDARIA 205", responsable: "" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "SECUNDARIA 205", responsable: "" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "SECUNDARIA 205", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ I7-7700CPU @ 3.60GHZ 3.60GHZ RAM 4.00GB", codigo: "/", departamento: "SECUNDARIA 206", responsable: "" },
        { cantidad: 1, producto: "Monitor HP", codigo: "CNC9301323", departamento: "SECUNDARIA 206", responsable: "" },
        { cantidad: 1, producto: "Monitor Brocs", codigo: "185202212220D560", departamento: "SECUNDARIA 206", responsable: "" },
        { cantidad: 1, producto: "Teclado Logitech", codigo: "/", departamento: "SECUNDARIA 206", responsable: "" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "SECUNDARIA 206", responsable: "" },
        { cantidad: 1, producto: "Proyector OPTAMA", codigo: "/", departamento: "SECUNDARIA 206", responsable: "" },
        { cantidad: 1, producto: "Par de Bocinas Logitech", codigo: "/", departamento: "SECUNDARIA 206", responsable: "" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "SECUNDARIA 206", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CELERON ™ G6900  3.40GHZ 3.40GHZ RAM 8.00GB", codigo: "/", departamento: "SECUNDARIA 207", responsable: "" },
        { cantidad: 1, producto: "Monitor HP", codigo: "CNC9301481", departamento: "SECUNDARIA 207", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "A93C6BA003932", departamento: "SECUNDARIA 207", responsable: "" },
        { cantidad: 1, producto: "Teclado DELL", codigo: "/", departamento: "SECUNDARIA 207", responsable: "" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "SECUNDARIA 207", responsable: "" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "SECUNDARIA 207", responsable: "" },
        { cantidad: 1, producto: "Proyector OPTAMA", codigo: "/", departamento: "SECUNDARIA 207", responsable: "" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "SECUNDARIA 207", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ I7-7700CPU @ 3.60GHZ 3.60GHZ RAM 4.00GB", codigo: "/", departamento: "SECUNDARIA 208", responsable: "" },
        { cantidad: 1, producto: "Monitor HP", codigo: "CNC930141V", departamento: "SECUNDARIA 208", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "FNCD4HA021120", departamento: "SECUNDARIA 208", responsable: "" },
        { cantidad: 1, producto: "Teclado", codigo: "/", departamento: "SECUNDARIA 208", responsable: "" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "SECUNDARIA 208", responsable: "" },
        { cantidad: 1, producto: "Proyector OPTAMA", codigo: "/", departamento: "SECUNDARIA 208", responsable: "" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "SECUNDARIA 208", responsable: "" },
    ];

    const section = document.createElement('section');
    section.className = "inventario-secundaria-section";
    
    const titulo = document.createElement('h2');
    titulo.textContent = "Inventario de Secundaria 1";
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
    table.className = "inventario-secundaria-table";
    
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
    contVolver.className = "secundaria-volver-container";
    section.appendChild(contVolver);
    
    let botonVolver = document.createElement('button');
    botonVolver.textContent = "Volver";
    botonVolver.className = "secundaria-btn-volver";
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
            localStorage.setItem('secundaria1Editados', JSON.stringify(nuevosDatos));
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
                [1, "Nuevo Producto", "/", "SECUNDARIA", ""].forEach(text => {
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
                    localStorage.removeItem('secundaria1Editados');
                    document.getElementById('root').innerHTML = "";
                    document.getElementById('root').appendChild(secundaria1());
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

export { secundaria1 };
