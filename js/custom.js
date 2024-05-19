var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    centeredSlides: true,
    loop:false,
    spaceBetween: 30,
    autoplay: {
        delay: 1500,
      },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  document.querySelector('#profile-tab').addEventListener('click', function(){
    document.querySelector('.bottom-tabs-before').style.left = '154px';
  });
  document.querySelector('#home-tab').addEventListener('click', function(){
    document.querySelector('.bottom-tabs-before').style.left = '0';
  });

  