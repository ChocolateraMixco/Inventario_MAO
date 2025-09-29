import { vista } from "../vista.js";

function obtenerUsuarioActual() {
    const usuario = sessionStorage.getItem('usuarioLogueado');
    return usuario ? JSON.parse(usuario) : null;
}

function contabilidad() {
    const datosGuardados = localStorage.getItem('contabilidadEditados');
    const datosContabilidad = datosGuardados ? JSON.parse(datosGuardados) : [
        { cantidad: 1, producto: "Cpu INTEL ® CORE ™ I5-10210U CPU@ 1.60GHZ 2.10GHZ RAM 8.00GB", codigo: "/", departamento: "CONTABILIDAD", responsable: "KATERIN CASTILLO" },
        { cantidad: 1, producto: "Monitor HP", codigo: "/", departamento: "CONTABILIDAD", responsable: "KATERIN CASTILLO" },
        { cantidad: 1, producto: "Teclado HP", codigo: "696737-162", departamento: "CONTABILIDAD", responsable: "KATERIN CASTILLO" },
        { cantidad: 1, producto: "Mouse HP", codigo: "622652-001", departamento: "CONTABILIDAD", responsable: "KATERIN CASTILLO" },
        { cantidad: 1, producto: "IMPRESORA EPSON MODELO PA71A", codigo: "Q75YJ28487", departamento: "CONTABILIDAD", responsable: "KATERIN CASTILLO" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "CONTABILIDAD", responsable: "KATERIN CASTILLO" },
        { cantidad: 1, producto: "Monitor HP", codigo: "/", departamento: "CONTABILIDAD", responsable: "MARGARITA HERNANDEZ" },
        { cantidad: 1, producto: "Cpu AMD RYZEN 53500 UWITH RADEON VEGA MOBILE GFX 2.10GHZ RAM 8.00GB", codigo: "/", departamento: "CONTABILIDAD", responsable: "MARGARITA HERNANDEZ" },
        { cantidad: 1, producto: "Mouse HP", codigo: "672662-001", departamento: "CONTABILIDAD", responsable: "MARGARITA HERNANDEZ" },
        { cantidad: 1, producto: "Teclado HP", codigo: "697737-162", departamento: "CONTABILIDAD", responsable: "MARGARITA HERNANDEZ" },
        { cantidad: 1, producto: "IMPRESORA CANON PIXMA", codigo: "KMLT85001", departamento: "CONTABILIDAD", responsable: "MARGARITA HERNANDEZ" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "CONTABILIDAD", responsable: "MARGARITA HERNANDEZ" },
        { cantidad: 1, producto: "Escaner CANON", codigo: "KKJD51306", departamento: "CONTABILIDAD", responsable: "MARGARITA HERNANDEZ" },
        { cantidad: 1, producto: "Cpu AMD E1-6010APU WITH AMD RADEON R2 GRANDFITHS 1.35GHZ RAM 8.00GB ", codigo: "/", departamento: "CONTABILIDAD", responsable: "MARGARITA HERNANDEZ" },
        { cantidad: 1, producto: "Monitor HP", codigo: "/", departamento: "CONTABILIDAD", responsable: "MARGARITA HERNANDEZ" },
        { cantidad: 1, producto: "Teclado Brocs", codigo: "/", departamento: "CONTABILIDAD", responsable: "MARGARITA HERNANDEZ" },
        { cantidad: 1, producto: "Mouse Microsoft", codigo: "X821908-014", departamento: "CONTABILIDAD", responsable: "MARGARITA HERNANDEZ" },
        { cantidad: 1, producto: "Cpu INTEL ® CORE ™ I5-4460 CPU@ 3.20GHZ 3.20GHZ RAM 8.00GB", codigo: "/", departamento: "CONTABILIDAD", responsable: "MARGARITA HERNANDEZ" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "/", departamento: "CONTABILIDAD", responsable: "MARGARITA HERNANDEZ" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "CONTABILIDAD", responsable: "MARGARITA HERNANDEZ" },
        { cantidad: 1, producto: "Teclado Brocs", codigo: "/", departamento: "CONTABILIDAD", responsable: "MARGARITA HERNANDEZ" },
        { cantidad: 2, producto: "Teléfonos", codigo: "Parasonic Extensión 106", departamento: "CONTABILIDAD", responsable: "MARGARITA HERNANDEZ" },
    ];

    const section = document.createElement('section');
    section.className = "conta-section";

    const titulo = document.createElement('h2');
    titulo.textContent = "Inventario de Contabilidad";
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
    table.className = "conta-table";

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

    datosContabilidad.forEach((item) => {
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
    contVolver.className = "conta-cont-volver";
    section.appendChild(contVolver);

    const botonVolver = document.createElement('button');
    botonVolver.textContent = "Volver";
    botonVolver.className = "conta-boton-volver";
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
            localStorage.setItem('contabilidadEditados', JSON.stringify(nuevosDatos));
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
                [1, "Nuevo Producto", "/", "CONTABILIDAD", ""].forEach(text => {
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
                    localStorage.removeItem('contabilidadEditados');
                    document.getElementById('root').innerHTML = "";
                    document.getElementById('root').appendChild(contabilidad());
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

export { contabilidad };
