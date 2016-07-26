$(function (){
  $('[scroll-to]').click(function () {
    scroll_target = $(this).attr('scroll-to');
    $('html,body').animate({
      scrollTop: $(scroll_target).offset().top - 27*3
    })
  })
  return false;
})