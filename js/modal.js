const open = document.getElementById('abrir');
const modal_container1 = document.getElementById('modal_container1');
const close = document.getElementById('cerrar');

open.addEventListener('click', () => {
  modal_container1.classList.add('show');  
});

close.addEventListener('click', () => {
  modal_container1.classList.remove('show');
});