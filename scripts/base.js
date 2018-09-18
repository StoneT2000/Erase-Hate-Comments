$(document).ready(function () {
  $( '.footer_fascade' ).mouseenter(
    function() {
      $('.footer').css('transform','translateY(0px)');
    }
  ).mouseleave(function(){
    $('.footer').css('transform','translateY(60px)');
  });
  $('.footer').mouseenter(function() {
    $('.footer').css('transform','translateY(0px)');
  })
  $('.footer').mouseleave(function() {
      $('.footer').css('transform','translateY(60px)');
    });
});