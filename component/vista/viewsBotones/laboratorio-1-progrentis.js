import { vista } from "../vista.js";

function obtenerUsuarioActual() {
    const usuario = sessionStorage.getItem('usuarioLogueado');
    return usuario ? JSON.parse(usuario) : null;
}

function laboPro() {
    const datosGuardados = localStorage.getItem('laboratorio1ProgrentisEditados');
    const datosCompras = datosGuardados ? JSON.parse(datosGuardados) : [
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA069083", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068504", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA069058", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA069061", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068947", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068031", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA069276", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA069059", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068258", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA069085", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA069297", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068943", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA069270", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068935", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068981", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068024", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068934", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068948", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068937", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068993", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068932", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA069273", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068930", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068928", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068953", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA069073", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068336", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068020", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFM8HA010667", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 29, producto: "Teclado Microsoft", codigo: "/", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 29, producto: "Mouse Microsoft", codigo: "/", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 29, producto: "CPU INTEL ® CORE ™ I5-10400 CPU @2.90GHZ 2.90GHZ RAM 8.00GB", codigo: "/", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
    ];

    const section = document.createElement('section');
    section.className = "inventario-laboratorio-section";
    
    const titulo = document.createElement('h2');
    titulo.textContent = "Inventario de Laboratorio de Progrentis";
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
    table.className = "inventario-laboratorio-table";
    
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
    contVolver.className = "laboratorio-volver-container";
    section.appendChild(contVolver);
    
    let botonVolver = document.createElement('button');
    botonVolver.textContent = "Volver";
    botonVolver.className = "laboratorio-btn-volver";
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
            localStorage.setItem('laboratorio1ProgrentisEditados', JSON.stringify(nuevosDatos));
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
                [1, "Nuevo Producto", "/", "LABORATORIO 1 PROGRENTIS", ""].forEach(text => {
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
                    localStorage.removeItem('laboratorio1ProgrentisEditados');
                    document.getElementById('root').innerHTML = "";
                    document.getElementById('root').appendChild(laboPro());
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

export { laboPro };
