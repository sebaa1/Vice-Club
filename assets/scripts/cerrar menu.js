document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const menuContent = document.getElementById('menuContent');
    let hideTimeout;

    hamburger.addEventListener('click', function() {
        menuContent.classList.toggle('show');
    });

    menuContent.addEventListener('mouseleave', function() {
        hideTimeout = setTimeout(function() {
            menuContent.classList.remove('show');
        }, 300); // Ajusta el tiempo de retraso según sea necesario
    });

    menuContent.addEventListener('mouseenter', function() {
        clearTimeout(hideTimeout);
    });

    hamburger.addEventListener('mouseleave', function(event) {
        if (!menuContent.contains(event.relatedTarget)) {
            hideTimeout = setTimeout(function() {
                menuContent.classList.remove('show');
            }, 300); // Ajusta el tiempo de retraso según sea necesario
        }
    });
});
