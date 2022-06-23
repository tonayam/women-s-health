const toggleMenu = document.querySelector(`.toggleBar`);
const closeMenu = document.querySelector(`.bi-x-lg`);
const menuItems = document.querySelector(`.mob-nav-items`);
const container = document.querySelector(`.nav-cont`);
console.log(container);

toggleMenu.addEventListener(`click`, function () {
  menuItems.classList.add(`show-nav`);
  closeMenu.classList.add(`show-x`);
  toggleMenu.style.display = `none`;
  container.style.background = `#ebfbfb`;
});

closeMenu.addEventListener(`click`, function () {
  menuItems.classList.remove(`show-nav`);
  closeMenu.classList.remove(`show-x`);
  toggleMenu.style.display = `block`;
  container.style.background = `white`;
});
