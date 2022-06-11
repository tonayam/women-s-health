const toggleMenu = document.querySelector(`.bi-list`);
const closeMenu = document.querySelector(`.bi-x-lg`);
const menuItems = document.querySelector(`.mob-nav-items`);

toggleMenu.addEventListener(`click`, function () {
  menuItems.classList.add(`show-nav`);
  closeMenu.classList.add(`show-x`);
  toggleMenu.style.display = `none`;
});

closeMenu.addEventListener(`click`, function () {
  menuItems.classList.remove(`show-nav`);
  closeMenu.classList.remove(`show-x`);
  toggleMenu.style.display = `block`;
});
