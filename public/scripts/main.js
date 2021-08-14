$(document).ready(textShift);
$(window).resize(textShift);

var pathToggle = 0;
var psdToggle = 0;

$(".home-south").click(function() {
    var offset = 60;
    if($(window).width() < 992) {
        offset = 54;
    }
    $('html,body').animate({
        scrollTop: $(".about-me").offset().top - offset
    }, 'slow');
});

function textShift() {
    var width = $(window).width();
}

var mouseOverToggle = 1;
function mouseOver() {
    mouseOverToggle++;

    if(mouseOverToggle % 2 == 0) {
        $('.backBlur').css({
            "-webkit-transition":"all 0.3s ease-out",
            "transition":"all 0.3s ease-out",
            "background-color":"rgba(0,0,0,0)"
        });
    }
    else {
        $('.backBlur').css({
            "-webkit-transition":"all 0.3s ease-out",
            "transition":"all 0.3s ease-out",
            "background-color":"rgba(0,0,0,0.5)"
        });
    }
}
