$(document).ready(function () {
    $('.slick-carousel').slick({
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        infinite: true,
        asNavFor: '.sub-carousel'
    });
    $('.sub-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slick-carousel'
    });
});

