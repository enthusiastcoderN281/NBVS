let menu= document.querySelector('.menu-icon');
let navbar = document.querySelector('.menu');
let bell= document.querySelector('.notification');

menu.onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('move');
    bell.classList.remove('active');
}

document.querySelector('#bell-icon').onclick=()=>{
    bell.classList.toggle('active');
}

var swiper = new Swiper(".trending-content", {
    loop:true,
    grabCursor:true,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
        delay:1000,
        disableOnInteraction:false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1068: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });

  window.onscroll= function(){myfunction()};

  function myfunction(){
      var winscroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winscroll/height)*100;
      document.getElementById('scroll-bar').style.width = scrolled + '%';
  }