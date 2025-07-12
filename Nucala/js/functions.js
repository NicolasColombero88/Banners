
window.onload = function(e){

  var tl = new TimelineLite();

  tl
    .pause()
    .to(stage, 0.2,{opacity:1}, 0)
    .to(frame1, 0.5,{opacity:0, ease: Quad.linear}, 4.5)
    .to(sponsor_click, 0, {top:-2, ease: Quad.linear}, 4.5)
    //.to(footer, 0.5, {opacity:0,ease: Quad.linear}, 4.5)
    //.to(footer, 0.1, {bottom: -130,ease: Quad.linear}, 5)
    .from(logo2, 0.5, {top:-80, ease: Quad.linear}, 5.25)
    //.from(arrowClicktag, 0.5, {top:-80, ease: Quad.linear}, 4.75)
    .to(copycontainer1, 0.25, {opacity:0}, 5.25)
  
  
    //.to(footer, 0.1, {opacity: 1,ease: Quad.linear}, 5.15)
    //.to(footer, 0.5, {bottom: 0,ease: Quad.linear}, 5.25)
    .to(copycontainer2, 0.5, {opacity:1, ease: Quad.linear}, 5.25)
    .to(copycontainer2, 0.5, {left:-300, ease: Quad.linear}, 10.5)
  
  
    .to(stage, 0.5,{backgroundPosition:"-200px -360px", ease: Quad.linear}, 10.5)
    .to(copycontainer3, 0.5, {left:0, ease: Quad.linear}, 11.25)
    .to(vial, 0.5, {left:0, ease: Quad.linear}, 11.75)
    .to(copycontainer3, 0.5, {left:-300, ease: Quad.linear}, 13.75)
  
  
    .to(vial, 0.5, {left:-300, ease: Quad.linear}, 13.75)
    .to(stage, 0.5,{backgroundPosition:"center", ease: Quad.linear}, 14)
    .to(copycontainer4, 0.5, {left:0, ease: Quad.linear}, 14.5)
    .from(cta,0.5, {scale:0}, 14.5)
    

    setTimeout(function(){ tl.play() }, 200);

  console.log("duration is: " + tl.duration());

}
 