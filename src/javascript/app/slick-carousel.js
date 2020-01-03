$(document).ready(function () {
    $('.slick-carousel').slick({
        centerMode: true,
        centerPadding: '0',
        infinite: true,
        slidesToShow: 3,
        asNavFor: '.sub-carousel',
        responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                centerMode: false
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                centerMode: false
            }
        }
        ]
    });
    $('.sub-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slick-carousel'
    });
});

