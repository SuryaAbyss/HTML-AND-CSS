var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 200 + "px";
  blur.style.top = dets.y - 200 + "px";
});




gsap.to("#nav",{ // for border of top 
    backgroundColor : "#000",
    height:"110px", // length of black bar
    duration:0.5,   // apperance time 
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,  // knowing the size and value 
        start:"top -15%", 
        end : "top -11%",
        scrub : 1.4,   //for fading effect of bar while rolling up
    }
})
gsap.to("#main", {    // scrolling page black fade 
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});
