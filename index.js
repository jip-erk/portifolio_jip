gsap.registerPlugin(ScrollTrigger);

// --- main ---

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".main",
        scrub: true,
        pin: true,

        start: "50% 50%",
        end: "+=120%"
    }
})


.to(".main", {
    scale: 9,
    opacity: 0
})

.to(".test", {
    opacity: 1
})







/* function update(e){
  var x = e.clientX || e.touches[0].clientX
  var y = e.clientY || e.touches[0].clientY

  document.documentElement.style.setProperty('--cursorX', x + 'px')
  document.documentElement.style.setProperty('--cursorY', y + 'px')
}

document.addEventListener('mousemove',update)
document.addEventListener('touchmove',update) */

//scrolltrigger