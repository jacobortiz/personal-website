$(document).ready(textShift);
$(window).resize(textShift);

var path_toggle = 0;
var psd_toggle = 0;

$('.home-south').click(function() {
    console.log('clicked!')
    var offset = 60;
    if($(window).width() < 992) {
        offset = 54;
    }

    $('html, body').animate({
        scrollTop: $('.about-me').offset().top - offset
    }, 'slow');
});

var mouse_over_toggle = 1;
function mouseOver() {
    mouse_over_toggle++;

    if(mouse_over_toggle % 2 == 0) {
        $('.back-blur').css({
            "-webkit-transition":"all 0.3s ease-out",
            "transition":"all 0.3s ease-out",
            "background-color":"rgba(0,0,0,0)"
        })
    } else {
        $('.back-blur').css({
            "-webkit-transition":"all 0.3s ease-out",
            "transition":"all 0.3s ease-out",
            "background-color":"rgba(0,0,0,0.5)"
        });
    }
}