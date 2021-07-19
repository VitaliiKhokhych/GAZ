const menu = document.querySelector('[data-menu]');
const modal = document.querySelector('[data-modal]');

menu.onclick = function () {
  modal.classList.toggle('block');
};