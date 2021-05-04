gsap.registerPlugin(ScrollTrigger)



let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".cls-26-1",
        start: "top center",
        end: "top 100px",
        toggleActions: "restart none none reset"
    }
})

.fromTo("#red-car", { x: -10 }, { duration: 3, y: -20, x: 400, ease: "back.in" })
    .to("#guy", { y: -10 }, 0)
    .fromTo("#surfer", { x: 370, y: -400 }, { duration: 10, x: 600, y: -600, ease: "elastic", repeat: -1 }, 0)
    .fromTo(".cls-26-1", { fill: "black" }, { fill: "white" }, 3)
    .to("#guy", { duration: 3, x: 100, y: 100 }, 2)
    .fromTo(".cls-17-1", { fill: "#4a3745", strokeWidth: "6" }, { stroke: "#5dc2a6", strokeWidth: "6", fill: "yellow" }, 1)
    .fromTo(".cls-26-2", { fill: "black" }, { fill: "blanchedalmond", opcaity: 0.1 }, +4)