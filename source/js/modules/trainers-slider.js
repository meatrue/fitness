const sliderElement = document.querySelector('[data-trainers-slider]');
const sliderNext = document.querySelector('[data-trainers-slider-next]');
const sliderPrev = document.querySelector('[data-trainers-slider-prev]');

const initTrainersSlider = () => {
  if (!sliderElement) {
    return;
  }

  // eslint-disable-next-line
  new Swiper(sliderElement, {
    navigation: {
      nextEl: sliderNext,
      prevEl: sliderPrev,
    },

    loop: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 22,
        initialSlide: 0,
      },

      767: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 0,
        initialSlide: 0,
      },

      1200: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 0,
        initialSlide: 0,
      },
    },
  });
};

export {initTrainersSlider};
