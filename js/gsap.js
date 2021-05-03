gsap.registerPlugin(ScrollTrigger)



let tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#red-car",
        start: "top center",
        end: "top 100px",
        toggleActions: "restart none none reset"
    }
})

.fromTo("#red-car", { x: -10 }, { duration: 3, x: 350, ease: "elastic.in" })
    .to("#guy", { y: -10 }, 0)