$('.menu-btn').click(function() {
  $('.header__wrap').slideToggle();
  $(this).toggleClass('menu-btn--close');
})