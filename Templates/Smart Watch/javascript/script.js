AOS.init();

$(document).ready(function(){
    $('nnn').hover(function(){
        $(this).css('color', '#aaa');
    },
    function(){
       $(this).css('color', '#f3f3f3');
    });
});