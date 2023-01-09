const sliderConfig = {
  slidesToShow: {
    mobile: 1,
    tablet: 2,
    desktop: 4,
  },
  slidesToScroll: 1,
};

const sliders = document.querySelectorAll('[data-slider]');

const getSliderElements = (slider) => {
  return {
    sliderContainer: slider.querySelector('[data-slider-container]'),
    sliderBar: slider.querySelector('[data-slider-list]'),
    sliderItems: slider.querySelectorAll('[data-slider-item]'),
    sliderButtonPrev: slider.querySelector('[data-slider-prev]'),
    sliderButtonNext: slider.querySelector('[data-slider-next'),
  };
};

const moveFirstItemToEnd = (items) => {
  const firstItem = items[0];
  items.splice(0, 1);
  items.push(firstItem);
};

const moveLastItemToStart = (items) => {

};

const renderSliderBar = (sliderBar, sliderItems, sliderState) => {
  const updatedSliderBar = sliderBar.cloneNode(false);
  //updatedSliderBar.style.transform = `translateX(${offset}px)`;
  console.log(updatedSliderBar);
  updatedSliderBar.append(...sliderItems);
  console.log(updatedSliderBar);
  console.log(sliderBar);
  sliderBar.replaceWith(updatedSliderBar);
  console.log(sliderBar);
  //sliderBar.replaceWith(updatedSliderBar);
};

const moveSlider = (sliderBar, offset) => {
  sliderBar.style.transform = `translateX(${offset}px)`;
};

const setSliderNextClickHandler = (sliderBar, sliderState) => {
  return () => {
    const visibleWidth = sliderConfig.slidesToShow.desktop * sliderState.itemWidth;
    const leftToEnd = sliderBar.scrollWidth - Math.abs(sliderState.position) - visibleWidth;

    if (leftToEnd < sliderConfig.slidesToScroll * sliderState.itemWidth) {
      console.log(sliderState.items);
      moveFirstItemToEnd(sliderState.items);
      console.log(sliderState.items);
      moveSlider(sliderBar, sliderState.position);
      renderSliderBar(sliderBar, sliderState.items);
      return;
    }

    sliderState.position -= sliderState.itemWidth;
    moveSlider(sliderBar, sliderState.position);

    /*if (sliderState.position === 0) {
      moveFirstItemToEnd(sliderState.sliderItems);
      renderSliderBar(sliderBar, sliderState.sliderItems);
      return;
    }

    sliderState.position--;
    moveSliderBar();*/
  };
};

const setSliderPrevClickHandler = (sliderBar, sliderState) => {
  return () => {
    const leftToEnd = Math.abs(sliderState.position);

    if (leftToEnd < sliderConfig.slidesToScroll * sliderState.itemWidth) {
      return;
    }

    sliderState.position += sliderState.itemWidth;
    moveSlider(sliderBar, sliderState.position);
  };
};

const setDefaultSliderState = (slidesContainer, sliderItems) => {
  const containerWidth = slidesContainer.scrollWidth;
  const itemWidth = containerWidth / sliderItems.length;

  return {
    position: 0,
    items: sliderItems,
    itemWidth,
  };
};

const setupSlider = (slider) => {
  const {
    sliderContainer,
    sliderBar,
    sliderItems,
    sliderButtonPrev,
    sliderButtonNext,
  } = getSliderElements(slider);

  const sliderState = setDefaultSliderState(sliderContainer, [...sliderItems]);

  const sliderPrevClickHandler = setSliderPrevClickHandler(sliderBar, sliderState);
  const sliderNextClickHandler = setSliderNextClickHandler(sliderBar, sliderState);

  sliderButtonPrev.addEventListener('click', sliderPrevClickHandler);
  sliderButtonNext.addEventListener('click', sliderNextClickHandler);
};

const initSliders = () => {
  if (!sliders || !sliders.length) {
    return;
  }

  sliders.forEach((slider) => setupSlider(slider));
};

export {initSliders};
