const sliderElement = document.querySelector('[data-reviews-slider]');
const sliderNext = document.querySelector('[data-reviews-slider-next]');
const sliderPrev = document.querySelector('[data-reviews-slider-prev]');

const initReviewsSlider = () => {
  if (!sliderElement) {
    return;
  }

  // eslint-disable-next-line
  new Swiper(sliderElement, {
    navigation: {
      nextEl: sliderNext,
      prevEl: sliderPrev,
    },

    loop: false,
    initialSlide: 0,
  });
};

export {initReviewsSlider};
