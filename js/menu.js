(() => {
  const refs = {
    openMenuBtn: document.querySelector('.open_menu_btn'),
    closeMenuBtn: document.querySelector('.close_menu_btn'),
    menu: document.querySelector('.mob-menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();