// Crear el mapa sin coordenadas geográficas
var map = L.map('map', {
    minZoom: 0,
    maxZoom: 2,
    crs: L.CRS.Simple,
    maxBounds: [[0, 0], [1000, 1000]], // Establece los límites del mapa
    maxBoundsViscosity: 0.5 // Hace que el mapa sea "pegajoso" en los bordes
});

// Cargar imagen del mapa
var bounds = [[0, 0], [1000, 1000]]; // Ajusta el tamaño según tu imagen
L.imageOverlay('../assets/images/gta_3_map.webp', bounds).addTo(map);
map.fitBounds(bounds);

// Crear un control de referencia
var referenceBox = L.control({ position: 'topright' });

referenceBox.onAdd = function(map) {
    var div = L.DomUtil.create('div', 'reference-box');
    div.innerHTML = '<h4>Referencias</h4>' +
                    '<div id="salto-unico-ref"><img src="../assets/images/salto_unico.webp" alt="Salto único" style="width:50px;height:50px;vertical-align:middle;">' +
                    '<span style="vertical-align:middle;"> Salto único (0/20)</span></div>' +
                    '<div id="paquetes-ref"><img src="../assets/images/paquete.webp" alt="Otra ubicación" style="width:50px;height:30px;vertical-align:middle;">' +
                    '<span style="vertical-align:middle;"> Paquetes ocultos (0/100)</span></div>';
    return div;
};


// Añadir el control de referencia al mapa
referenceBox.addTo(map);

function toggleMarker(marker, refId) {
    var currentOpacity = marker.options.opacity;
    var newOpacity = currentOpacity === 1 ? 0.5 : 1;
    marker.setOpacity(newOpacity);

    var popupContent = marker.getPopup().getContent();
    var newButtonText = newOpacity === 1 ? 'OCULTAR' : 'MOSTRAR';
    marker.setPopupContent(popupContent.replace(/(OCULTAR|MOSTRAR)/, newButtonText));

    if (newOpacity === 0.5) {
        var refElement = document.getElementById(refId);
        var currentCount = parseInt(refElement.textContent.match(/\d+/)[0]);
        refElement.textContent = refElement.textContent.replace(/\d+/, currentCount + 1);
    }
}


// Agregar pines interactivos
var marker1 = L.marker([150, 800], { opacity: 1 }).addTo(map)
.bindPopup("<b>Salto único</b><br>Este es un salto único.<br><button onclick='toggleMarker(marker1, \"salto-unico-ref\")'>OCULTAR</button>");

var marker2 = L.marker([700, 300], { opacity: 1 }).addTo(map)
.bindPopup("<b>Otra ubicación</b><br>Descripción de este lugar.<br><button onclick='toggleMarker(marker2, \"otra-ubicacion-ref\")'>OCULTAR</button>");