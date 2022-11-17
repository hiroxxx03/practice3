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



//                guidance-img

let pics_src = new Array("mainvisual1","mainvisual2","mainvisual3");

let num = 0;

let img = document.querySelector(".guidance-img");

let background = window.getComputedStyle(img).backgroundImage;

num = 1;

function slideshow1(){
  if(num == 3) {
    num = 0;
    let replaceUrl = background.replace('mainvisual1', pics_src[num]);
    img.style.backgroundImage = replaceUrl;
    num++;
  }else{
    let replaceUrl = background.replace('mainvisual1', pics_src[num]);
    img.style.backgroundImage = replaceUrl;
    num++;
  }
}

setInterval(slideshow1, 5000);



//          reason-content

window.addEventListener('scroll', function(){
  const scroll = window.pageYOffset;


  const reasonL = document.querySelector('.reason-content-box .reason-content:first-of-type');

  const clientRectL = reasonL.getBoundingClientRect().top;

  const reasonLY = scroll + clientRectL;


  const reasonR = document.querySelector('.reason-content-box .reason-content:last-of-type');

  const clientRectR = reasonR.getBoundingClientRect().top;

  const reasonRY = scroll + clientRectR;


  let wh = window.innerHeight;
  wh = wh / 1.5;

  if(scroll + wh > reasonLY){
    reasonL.classList.add('scroll-up');
  }

  if(scroll + wh > reasonRY){
    reasonR.classList.add('scroll-up');
  }
})