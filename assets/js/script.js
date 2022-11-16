function hamburger() {
  button.classList.toggle('active');

  if(button.classList.contains('active')){
    menu.classList.add('active');
    guidance.classList.add('active');
  } else {
    menu.classList.remove('active');
    guidance.classList.add('active');
  }
}

let button = document.getElementById('hamburger-btn');

let menu = document.getElementById('menu-container');

let guidance = document.querySelector('.guidance-text');

button.addEventListener('click', hamburger);