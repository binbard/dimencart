/* bs offbar */

(function () {
  'use strict'
  document.querySelector('#navbarSideCollapse').addEventListener('click', function () {
    document.querySelector('.offcanvas-collapse').classList.toggle('open');
  })
})()

// var mswiper = document.querySelector(".swiper");
// /* fix swiper offbar index*/
// var z0=0;
// var mswiper = document.querySelector(".swiper");
// var minput = document.querySelector("input");
// document.querySelector('#navbarSideCollapse').addEventListener("click", function(){
//   if(z0==0){
//     z0=-1;mswiper.setAttribute('style','z-index: -1');}
//   else if(z0=='-1'){
//     z0=0;mswiper.setAttribute('style','z-index: 0');}
// });

/* navbar ux */
// function menuNavClicked(e){
//   e.setAttribute('class','');
// }

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
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

/* user ui */

function refreshPage() {
  location.reload();
}

var cart = JSON.parse(localStorage.getItem('cart'))
var wlist = JSON.parse(localStorage.getItem('wlist'))

if (cart === null) {
  cart={}
  localStorage.setItem('cart', JSON.stringify(cart))
}

if (wlist === null) {
  wlist={}
  localStorage.setItem('wlist', JSON.stringify(wlist))
}

var loggedIn = localStorage.getItem('isLoggedIn')
var username = localStorage.getItem('username')
if (loggedIn === null) {
  console.log("user is not logged in")
}
else {
  document.querySelector("#ic1").classList.remove("d-none")
  document.querySelector("#ic3").classList.remove("d-none")
  document.querySelector("#ic4").classList.remove("d-none")
  document.querySelector("#ic5").classList.add("d-none")
  document.querySelector("#i-nav__uname").innerHTML = "Hi " + username
}

function logout() {
  localStorage.removeItem('isLoggedIn')
  refreshPage();
  // document.querySelector("#ic1").classList.add("d-none");
  // document.querySelector("#ic3").classList.add("d-none");
  // document.querySelector("#ic4").classList.add("d-none");
  // document.querySelector("#ic5").classList.remove("d-none");
}

$('.ui.button.toggle').state()

