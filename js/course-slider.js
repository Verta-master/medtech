var breakpoint = window.matchMedia('(min-width: 766px)');
var newsSwiper;
var breakpointChecker = function() {
  if (breakpoint.matches === true) {
    if (newsSwiper !== undefined) newsSwiper.destroy(true, true);
    return;
    } else if (breakpoint.matches === false) {
      return enableSwiper();
    }
};

var enableSwiper = function() {
  newsSwiper = new Swiper ('.course__slider', {
    preventClicks: false,
    preventClicksPropagation: false,
    slidesPerView: 'auto',
    spaceBetween: 12,
  })
};

breakpoint.addListener(breakpointChecker);
breakpointChecker();

