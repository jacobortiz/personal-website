$(document).ready(textShift);
$(window).resize(textShift);

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
