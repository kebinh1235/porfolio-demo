const menu = document.querySelector('.navbar__list');
const menuIcon = document.querySelector('.navbar__icons')

menuIcon.addEventListener('click', () =>{
  menu.classList.toggle('navbar__open');
  menuIcon.classList.toggle('open');
})
