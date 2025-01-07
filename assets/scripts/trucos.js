document.getElementById('plataforma').addEventListener('change', function () {

    const secciones = document.querySelectorAll('.trucos');
  
    secciones.forEach(seccion => {
      seccion.classList.remove('active');
    });
  

    const plataformaSeleccionada = this.value;
  

    const trucoActivo = document.getElementById(plataformaSeleccionada);
    if (trucoActivo) {
      trucoActivo.classList.add('active');
    }
  });
  