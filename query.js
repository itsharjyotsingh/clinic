gsap.from(
    ".link", {
        y: '-100px',
        stagger: 0.2
},
)

gsap.from(
    "#image", {
        x: '-400px',
        filter: blur('10px')
    }
)

gsap.from(
    ".navRightContent", {
        x: '400px',
        stagger: 0.2
    }
)

gsap.from(
    "#bubble1", {
    y: '600px',
    duration: 2
},
)

gsap.from(
    "#bubble2", {
    y: '400px',
        duration: 2,
        delay: 0.5
},
)

gsap.from(
    "#bubble3", {
        y: '600px',
        delay: 0.1,
        duration: 1.5
},
)

var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});