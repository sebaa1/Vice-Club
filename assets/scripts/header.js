const header = document.getElementById('header');
const logoContainer = document.getElementById('logo-container');
const dropdownContent = document.getElementById('dropdown-content');
function openMenu() {
  dropdownContent.style.display = 'flex';  // Muestra el menú
}
function closeMenu() {
  dropdownContent.style.display = 'none';  // Oculta el menú
}
logoContainer.addEventListener('mouseenter', openMenu);
header.addEventListener('mouseleave', closeMenu);
