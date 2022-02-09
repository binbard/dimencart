/* bs offbar */
var mswiper = document.querySelector(".swiper");
(function () {
    'use strict'
    document.querySelector('#navbarSideCollapse').addEventListener('click', function () {
      document.querySelector('.offcanvas-collapse').classList.toggle('open');
    })
  })()

// /* fix swiper offbar index*/
var z0=0;
var mswiper = document.querySelector(".swiper");
var minput = document.querySelector("input");
document.querySelector('#navbarSideCollapse').addEventListener("click", function(){
  if(z0==0){
    z0=-1;mswiper.setAttribute('style','z-index: -1');}
  else if(z0=='-1'){
    z0=0;mswiper.setAttribute('style','z-index: 0');}
});

/* navbar ux */
function menuNavClicked(e){
  e.setAttribute('class','');
}

/* search bar */
var categoryContent = [
  { category: 'Sounds & Electronics', title: 'NIU Bass Enhancer C89' },
  { category: 'Sounds & Electronics', title: 'Yen Speaker 290T' },
  { category: 'Sounds & Electronics', title: 'Rhot Max D66 pro Neckband Earphone' },
  { category: 'Bags & Luggages', title: 'Fern Hold Bag' },
  { category: 'Camera & Shooter', title: 'Erpo Macro Camera 95G' },
  { category: 'Camera & Shooter', title: 'Grano DSLR Camera 450A/W Lens' },
  { category: 'Camera & Shooter', title: 'Pero Motioncapture Camera Lite 220U' },
  { category: 'Phones', title: 'Senpi 18I Gaming Mobile Phone' },
  { category: 'Phones', title: 'Fero 33G Android Phone' },
  { category: 'Phones', title: 'Mu 2F Keypad JBL Mobile' },
  { category: 'Phones', title: 'Ersoft 99P Dualboot Android Phone' },
  { category: 'Cosmetics', title: 'Never settle 24h long lasting lipstick shade' },
  { category: 'Cosmetics', title: 'Bluefron lipstick red bright' },
];
$('.ui.search').search({
    type: 'category',
    source: categoryContent
  });
  

/* swiper view */
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });