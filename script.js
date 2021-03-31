
// const tl = gsap.timeline({defaults: {
//     duration: 2,
//     ease: "power1.in",
//     y: -657,
// }});

// tl.to(".d",{}).to(".e",{},"<.5").to(".s",{},"<.5").to(".i",{},"<.5").to(".g",{},"<.5").to(".n",{},"<.5");

gsap.to(".design",{
    scrollTrigger: {
        triger: ".design",
        scrub: true,
        start: "bottom 93%",
        end: "bottom top",
        pin: ".design"
    },
    duration: 3,
})
gsap.to(".d",{
    scrollTrigger: {
        trigger: ".d",
        scrub: true,
        start: "bottom 95.5%",
        end: "bottom 35.5%",
    },
    y: -637,
    ease: "power2.in",
    duration: 3
});
gsap.to(".e",{
    scrollTrigger: {
        trigger: ".e",
        scrub: true,
        start: "bottom 80.5%",
        end: "bottom 20.5%",
    },
    y: -637,
    ease: "power2.in",
    duration: 3
});
gsap.to(".s",{
    scrollTrigger: {
        trigger: ".s",
        scrub: true,
        start: "bottom 65.5%",
        end: "bottom 5.5%",
    },
    y: -637,
    ease: "power2.in",
    duration: 3
});
gsap.to(".i",{
    scrollTrigger: {
        trigger: ".i",
        scrub: true,
        start: "bottom 50.5%",
        end: "bottom -10.5%",
    },
    y: -637,
    ease: "power2.in",
    duration: 3
});
gsap.to(".g",{
    scrollTrigger: {
        trigger: ".g",
        scrub: true,
        start: "bottom 35.5%",
        end: "bottom -25.5%",
    },
    y: -637,
    ease: "power2.in",
    duration: 3
});
gsap.to(".n",{
    scrollTrigger: {
        trigger: ".n",
        scrub: true,
        start: "bottom 20.5%",
        end: "bottom -40.5%",
    },
    y: -637,
    ease: "power2.in",
    duration: 3
});

gsap.to(".steady-text",{
    scrollTrigger: {
        trigger: ".steady-text",
        start: "bottom 42%",
        end: "bottom -300%",
        pin: ".content",
    }
});
gsap.to(".changing-text1",{
    scrollTrigger: {
        trigger: ".changing-text1",
        start: "bottom 42%",
        end: "bottom 37%",
        scrub: true,
    },
    opacity: 1,
    duration: 3,
});
gsap.to(".text1",{
    scrollTrigger: {
        trigger: ".text1",
        start: "500% 42%",
        end: "500% -2%",
        scrub: true,
    },
    opacity: 1,
    duration: 3,
    ease: "power3.out"
});
gsap.to(".text1",{
    scrollTrigger: {
        trigger: ".text1",
        start: "500% 3%",
        end: "500% -2%",
        scrub: true,
    },
    opacity: 0,
    duration: 3,
    ease: "power3.out"
});
gsap.to(".text2",{
    scrollTrigger: {
        trigger: ".text2",
        start: "1000% 42%",
        end: "1000% -2%",
        scrub: true,
    },
    opacity: 1,
    duration: 3,
    ease: "power3.out"
});
gsap.to(".text2",{
    scrollTrigger: {
        trigger: ".text2",
        start: "1000% 3%",
        end: "1000% -2%",
        scrub: true,
    },
    opacity: 0,
    duration: 3,
    ease: "power3.out"
});
gsap.to(".text3",{
    scrollTrigger: {
        trigger: ".text3",
        start: "1500% 42%",
        end: "1500% -2%",
        scrub: true,
    },
    opacity: 1,
    duration: 3,
    ease: "power3.out"
});
gsap.to(".text3",{
    scrollTrigger: {
        trigger: ".text3",
        start: "1500% 3%",
        end: "1500% -2%",
        scrub: true,
    },
    opacity: 0,
    duration: 3,
    ease: "power3.out"
});
gsap.to(".text4",{
    scrollTrigger: {
        trigger: ".text4",
        start: "2000% 42%",
        end: "2000% -2%",
        scrub: true,
    },
    opacity: 1,
    duration: 3,
    ease: "power3.out"
});
gsap.to(".text4",{
    scrollTrigger: {
        trigger: ".text4",
        start: "2000% 3%",
        end: "2000% -2%",
        scrub: true,
    },
    opacity: 0,
    duration: 3,
    ease: "power3.out"
});
gsap.to(".text5",{
    scrollTrigger: {
        trigger: ".text5",
        start: "2500% 42%",
        end: "2500% -2%",
        scrub: true,
    },
    opacity: 1,
    duration: 3,
    ease: "power3.out"
});
gsap.to(".companies",{
    scrollTrigger: {
        trigger: ".companies",
        start: "bottom bottom",
        end: "bottom -180%",
        scrub: true,
        pin: ".companies"
    },
    duration: 3,
});
gsap.to(".usingCompanies",{
    scrollTrigger: {
        trigger: ".usingCompanies",
        start: "bottom 10%",
        end: "bottom 10%",
        scrub: true,
    },
    opacity: 0,
    duration: 3,
});
gsap.to(".airbnb",{
    scrollTrigger: {
        trigger: ".airbnb",
        start: "300% 100%",
        end: "300% 60%",
        scrub: true,
    },
    opacity: 1,
    duration: 3,
});
gsap.to(".airbnb",{
    scrollTrigger: {
        trigger: ".airbnb",
        start: "300% 60%",
        end: "300% 60%",
        scrub: true,
    },
    opacity: 0,
    duration: 3,
});
gsap.to(".ideo",{
    scrollTrigger: {
        trigger: ".ideo",
        start: "2000% 90%",
        end: "2000% 50%",
        scrub: true,
    },
    opacity: 1,
    duration: 3,
});
gsap.to(".ideo",{
    scrollTrigger: {
        trigger: ".ideo",
        start: "2000% 50%",
        end: "2000% 50%",
        scrub: true,
    },
    opacity: 0,
    duration: 3,
});
gsap.to(".esquire",{
    scrollTrigger: {
         trigger: ".esquire",
         start:"1500% 100%",
         end: "1500% 50%",
         scrub: true,
    },
    opacity: 1,
    duration: 3
});
gsap.to(".esquire",{
    scrollTrigger: {
        trigger: ".esquire",
        start: "1500% 50%",
        end: "1500% 50%",
        scrub: true,
    },
    opacity: 0,
    duration: 3,
});
gsap.to(".conde-nast",{
    scrollTrigger: {
        trigger: ".conde-nast",
        start: "1950px 100%",
        end: "1950px 60%",
        scrub: true,
    },
    opacity: 1,
    duration: 3
});
gsap.to(".conde-nast",{
    scrollTrigger: {
        trigger: ".conde-nast",
        start: "1950px 60%",
        end: "1950px 60%",
        scrub: true,
    },
    opacity: 0,
    duration: 3,
});
gsap.to(".forbes",{
    scrollTrigger: {
        trigger: ".forbes",
        start: "2700% 80%",
        end: "2700% 60%",
        scrub: true,
    },
    opacity: 1,
    duration: 3
});


