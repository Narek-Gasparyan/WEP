$(function() {

    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arroes__left" src="img/arrows-left.svg" alt=""> </img>',
        nextArrow: '<img class="slider-arrows slider-arroes__right" src="img/arrows-right.svg" alt=""> </img>',
        asNavFor: '.slider-dotshead',
    });

    $('.slider-dotshead').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.slider-map',
    })

    $('.sorf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arroes__left" src="img/arrows-left.svg" alt=""> </img>',
        nextArrow: '<img class="slider-arrows slider-arroes__right" src="img/arrows-right.svg" alt=""> </img>',
    })

    $('.slider-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.sorf-slider',
        focusOnSelect: true
    })
});