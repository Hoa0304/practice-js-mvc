export const toggleMenu = () => {
  const menuToggleButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.sidebar');

  menuToggleButton.onclick = () => {
    nav.classList.toggle('active');
  };
};
