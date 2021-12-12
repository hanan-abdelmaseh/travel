const header = document.querySelector('.header');
const navbar = document.getElementById('navbar');
const btnClose = document.querySelector('#btn-close');
const menuBtn = document.querySelector('#menu-btn');
const searchBtn = document.getElementById('search-btn');
const searchForm = document.querySelector('.search-form');
const searchClose = document.getElementById('formClose');
console.log(searchClose)

menuBtn.addEventListener('click', () => {
    navbar.classList.add('active')
});
btnClose.addEventListener('click', () => {
    navbar.classList.remove('active')
});
window.onscroll = () => {
    navbar.classList.remove('active');
    if (window.scrollY > 0) {
        header.classList.add('active');
    } else {

        header.classList.remove('active');

    }
}
window.onload = () => {

    if (window.scrollY > 0) {
        header.classList.add('active');
    } else {

        header.classList.remove('active');

    }
}
searchBtn.addEventListener('click', function() {
    searchForm.classList.add('active')
});
searchClose.addEventListener('click', function() {
    searchForm.classList.remove('active')
});

var swiper = new Swiper(".home-slider", {
    loop: true,
    grebCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper = new Swiper(".review-slider", {
    loop: true,
    grebCursor: true,
    spaceBetween: 20,

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },

    }
});
var swiper = new Swiper(".product-slider", {
    loop: true,
    grebCursor: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        }
    }
});
var swiper = new Swiper(".blog-slider", {
    loop: true,
    grebCursor: true,
    spaceBetween: 20,

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },

    }
});
var swiper = new Swiper(".client-slider", {
    loop: true,
    grebCursor: true,
    spaceBetween: 20,

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },


    }
});