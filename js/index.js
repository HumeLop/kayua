const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const menu = document.querySelector('.menu');

mobileMenuIcon?.addEventListener('click', () => {
  menu.classList.toggle('show-menu');
});