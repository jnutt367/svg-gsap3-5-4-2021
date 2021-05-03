gsap.registerPlugin(ScrollTrigger)



let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".cls-26-1",
        start: "top center",
        end: "top 100px",
        toggleActions: "restart none none reset"
    }
})

.fromTo("#red-car", { x: -10 }, { duration: 3, y: -20, x: 1000, ease: "back.in" })
    .to("#guy", { y: -10 }, 0)
    .fromTo("#surfer", { x: -200, y: -100 }, { duration: 10, x: 200, ease: "bounce.in", y: -150 }, 0)
    .fromTo(".cls-26-1", { fill: "black" }, { fill: "white" }, 3)
    .to("#guy", { duration: 3, x: 100, y: 100 }, 2)
    .fromTo(".cls-17-1", { fill: "#4a3745" }, { fill: "yellow" }, 1)