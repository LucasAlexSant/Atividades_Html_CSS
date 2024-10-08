new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,
  
    // paginação
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    //breakpoints responsivos
    breakpoints:{
        0:{
            slidePerView: 1
        },
        768:{
            slidePerView: 2
        },
        1024:{
            slidePerView: 3
        },
    }
  });