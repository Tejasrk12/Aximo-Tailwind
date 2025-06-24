var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4, // 2 full slides and half on each side
    spaceBetween: 20, // Space between slides
    centeredSlides: true, // Center the active slide
    loop: true, // Enable looping
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is <= 499px
        199: {
            slidesPerView: 1.2,
            spaceBetweenSlides: 20,
            centeredSlides: true,
        },
        499: {
            slidesPerView: 1,
            spaceBetweenSlides: 20,
            centeredSlides: true,
        },
        // when window width is <= 999px
        999: {
            slidesPerView: 3.5,
            spaceBetweenSlides: 20,
            centeredSlides: true,
        }
    }
});
const btn = document.get

$(document).ready(function () {
    $('.accordion-item').click(function () {
        $('.accordion-item').removeClass("active");
        $(this).addClass("active");
    })
})

// Counter Start 
$('.counter').each(function () {
    var $this = $(this),
        countTo = $this.attr('data-count');
    $({ countNum: $this.text() }).animate({
        countNum: countTo
    },
        {
            duration: 1000,
            easing: 'linear',
            step: function () {
                $this.text(Math.floor(this.countNum));
            },
            complete: function () {
                $this.text(this.countNum);
                // alert('finished');
            }
        });
});
// Counter End

// Menu Start 
const burgerToggle = document.querySelector('.menu').onclick = toggleMenu;

function toggleMenu() {
    document.querySelector('#show').classList.toggle('show');
    document.querySelector('.hamburger').classList.toggle('close');
    document.querySelector('body').classList.toggle('active');
    document.querySelector('section').classList.toggle('bg-overlay');
};

// Menu End

// Bottom To Top Start
var bottombtn = $('#button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        bottombtn.addClass('show');
    } else {
        bottombtn.removeClass('show');
    }
});

bottombtn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '100');
});
// Bottom To Top End