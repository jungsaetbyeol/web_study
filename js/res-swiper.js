window.onload = function () {
  const visual_swiper = new Swiper(".visualSwiper", {
    loop:true,
    slidesPerView:1.5,
    spaceBetween:20,
breakpoints: {
    590:{
        slidesPerView:2.5,
    },
    768:{
        slidesPerView:3.5,
    },
    1050:{
        slidesPerView:4,
    }
},
  });
};
