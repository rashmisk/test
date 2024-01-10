$( document ).ready(function() {
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,      
    autoplay:true,
autoplayTimeout:5000,
autoplayHoverPause:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            dots:true,
            items:5
        }
    }
})

});