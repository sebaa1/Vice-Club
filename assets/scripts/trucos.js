const selectPlataforma = document.getElementById('plataforma');
        const trucos = document.querySelectorAll('.trucos');

        // Mostrar los trucos de la plataforma seleccionada
        const mostrarTrucos = () => {
            trucos.forEach(truco => {
                truco.classList.remove('active');
            });
            const seleccion = selectPlataforma.value;
            if (seleccion) {
                document.getElementById(seleccion).classList.add('active');
            }
        };

        // Evento al cambiar la selección
        selectPlataforma.addEventListener('change', mostrarTrucos);

        // Mostrar trucos predeterminados al cargar la página
        window.addEventListener('DOMContentLoaded', mostrarTrucos);