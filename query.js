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
gsap.registerPlugin(ScrollTrigger);

// Animate the ".card" elements inside the "#cards" container using ScrollTrigger
gsap.from(".card", {
    y: '-50px',
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#aboutMe", // Use the trigger ID here
        start: "top center", // Animation starts when the top of the trigger element hits the center of the viewport
        end: "center", // Animation ends when the bottom of the trigger element hits the center of the viewport
        scrub: true, // Smoothly animates the element during scrolling
    }
});






var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});