$('.hamburger_wrapper').on('click', function () {
    $('.hamburger_wrapper, .menu, .social_media_top, .menu_container, .menu_bgc').toggleClass('active');
    $('body').toggleClass('no-scroll');
})

$('.menu_item').on('click', function () {
    $('.hamburger_wrapper, .menu, .social_media_top, .menu_container, .menu_bgc').removeClass('active');
    $('body').removeClass('no-scroll');
})

$('.menu_item, .caret, .go_top_arrow').on('click', function () {
    const dataSection = "[data-section=" + $(this).attr('scroll-id') + "]";
    $('body, html').animate({
        scrollTop: $(dataSection).offset().top
    }, 1000)
})

$(window).on('scroll', function () {
    if ($(window).scrollTop() > $('.logo_wrap').height()) {
        $('.go_top_arrow').addClass('showed');
    } else {
        $('.go_top_arrow').removeClass('showed');
    }
})

$(document).on('scroll', function () {
    const windowHeight = $(window).height();
    const scrollValue = $(this).scrollTop();
    const $aboutSection = $('.about');
    const aboutSectionFromTop = $aboutSection.offset().top;
    const aboutSectionHeight = $aboutSection.outerHeight(true);
    const $offerSection = $('.offer_container');
    const offerSectionFromTop = $offerSection.offset().top;
    const offerSectionHeight = $offerSection.outerHeight(true);
    const $gallerySection = $('.gallery');
    const gallerySectionFromTop = $gallerySection.offset().top;
    const gallerySectionHeight = $gallerySection.outerHeight(true);


    if (scrollValue > aboutSectionFromTop + aboutSectionHeight - windowHeight * 3) {
        $aboutSection.addClass('scrolled');
    }

    if (scrollValue < 100) {
        $aboutSection.removeClass('scrolled');
    }

    if (scrollValue > offerSectionFromTop + offerSectionHeight - windowHeight * 2.5) {
        $offerSection.addClass('scrolled');
    }

    if (scrollValue < 300) {
        $offerSection.removeClass('scrolled');
    }

    if (scrollValue > gallerySectionFromTop + gallerySectionHeight - windowHeight * 2.5) {
        $gallerySection.addClass('scrolled');
    }

    if (scrollValue < 500) {
        $gallerySection.removeClass('scrolled');
    }
})