document.querySelector('.menu').addEventListener('click', function (event) {
  if (event.target.classList.contains('plataforma')) {
      const plataformaSeleccionada = event.target.getAttribute('data-plataforma');

      document.querySelectorAll('.trucos').forEach(seccion => {
          seccion.classList.remove('active');
      });

      const trucoActivo = document.getElementById(plataformaSeleccionada);
      if (trucoActivo) {
          trucoActivo.classList.add('active');
      }
  }
});
