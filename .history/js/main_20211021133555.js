const menu = document.querySelector('.navbar__list');
const menuIcon = document.querySelector('.navbar__icons')
const overlay = document.querySelector("#overlay")

menuIcon.addEventListener('click', () =>{
  menu.classList.toggle('navbar__open');
  menuIcon.classList.toggle('open');
  overlay.classList.toggle('show');
})
overlay.addEventListener('click', () =>{
  menu.classList.toggle('navbar__open');
  menuIcon.classList.toggle('open');
  overlay.classList.toggle('show');
})
AOS.init();