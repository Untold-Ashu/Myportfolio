const heading = document.querySelector("#home");
const play = document.querySelector("#play");
heading.addEventListener("mouseenter", function() {
  gsap.to(play, {
     opacity: 1,
     scale: 1 
    });
})
heading.addEventListener("mouseleave", function(){
  gsap.to(play, { 
    opacity: 0, 
    scale: 0 });
})
heading.addEventListener("mousemove", function(dets) {
  const x = dets.clientX - play.offsetWidth / 2;
  const y = dets.clientY - play.offsetHeight / 2;
  gsap.to(play, {
    left:x,
    top:y
  });
})