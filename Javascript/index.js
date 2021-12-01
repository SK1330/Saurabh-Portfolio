
AOS.init();


// function addDarkmodeWidget() {
//   new Darkmode().showWidget();
// }
// window.addEventListener('load', addDarkmodeWidget);

// for typing
// import Typed from 'typed.js';


var options = {
  strings: ['Saurabh', 'Web devloper'],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
};

var typed = new Typed('.auto_input', options);



// 'background':'-webkit-linear-gradient(red,white,green)'
//hover on saurabh kavhar
$(document).ready(function () {

  $('.my_name').mouseenter(function () {
    $('.my_name').css({
      'color': '',
      'transform': 'scale(1.2)',
      'transition': '0.6s',
      'background': '-webkit-linear-gradient(45deg, rgba(255,11,11,1) 0%, rgba(252,131,25,1) 54%, rgba(249,243,36,1) 100%)',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent'
    })
  });

  $('.my_name').mouseleave(function () {
    $('.my_name').css({
      '-webkit-text-fill-color': '',
      'transform': 'scale(1)',
      // 'color': '#ffc20b'
    });

  });

});



// on hover education section

$('.single_degree').hover(function () {
  $(this).css({
    'background': '#ffc20b',
    'transition': '0.6s',
    'transform':'scale(1.1)',
  });
}, function () {
  $(this).css({'background':'white',
  'transition': '0.6s',
  'transform':'scale(1)'});
});



// preloader

$(window).on("load", function(){
  $(".loader-wrapper").fadeOut('slow');
});