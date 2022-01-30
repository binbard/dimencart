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
  { category: 'South America', title: 'Brazil' },
  { category: 'South America', title: 'Peru' },
  { category: 'North America', title: 'Canada' },
  { category: 'Asia', title: 'South Korea' },
  { category: 'Asia', title: 'Japan' },
  { category: 'Asia', title: 'China' },
  { category: 'Europe', title: 'Denmark' },
  { category: 'Europe', title: 'England' },
  { category: 'Europe', title: 'France' },
  { category: 'Europe', title: 'Germany' },
  { category: 'Africa', title: 'Ethiopia' },
  { category: 'Africa', title: 'Nigeria' },
  { category: 'Africa', title: 'Zimbabwe' },
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