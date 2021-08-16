$(function() {
    var top = $('.about-me').offset().top
    $('.home-south').click(function() {
        var offset = 60;
        if($(window).width() < 992) {
            offset = 54;
        }

        $('html, body').animate({
            scrollTop: top - offset
        }, 50)
    })
});
