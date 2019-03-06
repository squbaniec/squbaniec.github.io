$(document).on('scroll', function () {
    const scrollValue = $(this).scrollTop();
    const $topBarGallery = $('.top_bar');

    if (scrollValue > 10) {
        $topBarGallery.addClass('scrolled_bar')
    }

    if (scrollValue < 10) {
        $topBarGallery.removeClass('scrolled_bar')
    }
})

$('.top_bar').on('click', function () {
    $('body, html').animate({
        scrollTop: 0
    }, 1000)
})