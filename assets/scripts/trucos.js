document.querySelector('.menu').addEventListener('click', function (event) {
    if (event.target.classList.contains('plataforma')) {
        // Obtener la plataforma seleccionada
        const plataformaSeleccionada = event.target.getAttribute('data-plataforma');
  
        // Remover la clase 'selected' de todas las plataformas para quitar el borde
        document.querySelectorAll('.plataforma').forEach(plataforma => {
            plataforma.classList.remove('selected');
        });
  
        // Agregar la clase 'selected' al elemento clicado para aplicar el borde celeste
        event.target.classList.add('selected');
  
        // Mostrar u ocultar las secciones de trucos
        document.querySelectorAll('.trucos').forEach(seccion => {
            seccion.classList.remove('active');
        });
  
        const trucoActivo = document.getElementById(plataformaSeleccionada);
        if (trucoActivo) {
            trucoActivo.classList.add('active');
        }
    }
  });