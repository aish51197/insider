 // $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// })
$('.owl-carousel').owlCarousel({
    loop:true,
    center:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            margin: 0,
            center: false,
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:true
        },
        1400:{
            items:4,
            nav:true,
            loop:true,
            margin: 30
        },
        1500:{
            items:5,
            nav:true,
            loop:true,
            margin:50
        }
    }
})

$('owl-carousel.carousel-2').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
