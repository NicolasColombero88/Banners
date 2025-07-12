
window.onload = function(e){

  var tl = new TimelineLite();

  tl
  .pause()
  /*FRAME 1 - COPY 11*/
  .to(copycontainer1, 0, {opacity:1 }, 0 )
  .from(let111, 0.6, {scale:6, ease: Circ.easeOut }, 0 )
  .from(let111, 0.3, {opacity:0, ease: Circ.easeOut }, 0 )
  
  .from(let112, 0.6, {scale:6, ease: Circ.easeOut }, 0.1 )
  .from(let112, 0.3, {opacity:0, ease: Circ.easeOut }, 0.1)
  
  .from(let113, 0.6, {scale:6, ease: Circ.easeOut }, 0.2 )
  .from(let113, 0.3, {opacity:0, ease: Circ.easeOut }, 0.2 )
  
  .from(let114, 0.6, {scale:6, ease: Circ.easeOut }, 0.3 )
  .from(let114, 0.3, {opacity:0, ease: Circ.easeOut }, 0.3 )
  
  .from(let115, 0.6, {scale:6, ease: Circ.easeOut }, 0.4 )
  .from(let115, 0.3, {opacity:0, ease: Circ.easeOut }, 0.4 )
  
  .from(let116, 0.6, {scale:6, ease: Circ.easeOut }, 0.5 )
  .from(let116, 0.3, {opacity:0, ease: Circ.easeOut }, 0.5 )
  
  /*FRAME 1 - COPY 12*/
  
  .from(let121, 0.6, {scale:6, ease: Circ.easeOut }, 0.3 )
  .from(let121, 0.3, {opacity:0, ease: Circ.easeOut }, 0.3 )
  
  .from(let122, 0.6, {scale:6, ease: Circ.easeOut }, 0.3 )
  .from(let122, 0.3, {opacity:0, ease: Circ.easeOut }, 0.3 )
  
  .from(let123, 0.6, {scale:6, ease: Circ.easeOut }, 0.4 )
  .from(let123, 0.3, {opacity:0, ease: Circ.easeOut }, 0.4 )
  
  .from(let124, 0.6, {scale:10, ease: Circ.easeOut }, 0.2 )
  .from(let124, 0.3, {opacity:0, ease: Circ.easeOut }, 0.2 )
  
  .from(let125, 0.6, {scale:6, ease: Circ.easeOut }, 0.3 )
  .from(let125, 0.3, {opacity:0, ease: Circ.easeOut }, 0.3 )
  
  .from(let126, 0.6, {scale:6, ease: Circ.easeOut }, 0.4 )
  .from(let126, 0.3, {opacity:0, ease: Circ.easeOut }, 0.4 )
  
  /*LineTop*/
  
  .from(lineTop, 0.6, {scale:6, ease: Circ.easeOut }, 0.2 )
  .from(lineTop, 0.3, {opacity:0, ease: Circ.easeOut }, 0.2 )
  
  /*FRAME 1 - COPY 13*/
  
  .from(let131, 0.6, {scale:6, ease: Circ.easeOut }, 0.3 )
  .from(let131, 0.3, {opacity:0, ease: Circ.easeOut }, 0.3 )
  
  .from(let132, 0.6, {scale:6, ease: Circ.easeOut }, 0.4 )
  .from(let132, 0.3, {opacity:0, ease: Circ.easeOut }, 0.4 )
  
  .from(let133, 0.6, {scale:6, ease: Circ.easeOut }, 0.5 )
  .from(let133, 0.3, {opacity:0, ease: Circ.easeOut }, 0.5 )
  
  .from(let134, 0.6, {scale:6, ease: Circ.easeOut }, 0.6 )
  .from(let134, 0.3, {opacity:0, ease: Circ.easeOut }, 0.6 )
  
  .from(let135, 0.6, {scale:6, ease: Circ.easeOut }, 0.7 )
  .from(let135, 0.3, {opacity:0, ease: Circ.easeOut }, 0.7 )
  
  .from(let136, 0.6, {scale:6, ease: Circ.easeOut }, 0.8 )
  .from(let136, 0.3, {opacity:0, ease: Circ.easeOut }, 0.8 )
  
  /*LineButtom*/
  
  .from(lineButton, 0.6, {scale:6, ease: Circ.easeOut }, 0.9 )
  .from(lineButton, 0.3, {opacity:0, ease: Circ.easeOut }, 0.9 )
  
  /*FRAME 2*/
  
  .to(copycontainer1, 0.75, {scale:(0.47), bottom:51, right:71, ease: Quad.linear}, 1.75)
  .to([copycontainer2, bg12], 0.75, {opacity:1}, 1.75 )

 
  
  /*FRAME 3*/
   .to(sponsor, 0, {top:2, ease: Quad.linear}, 4.5)
   .to(sponsor, 0.5, {opacity:1, ease: Quad.linear}, 4.5)
   .to(frame1, 0.5, {opacity:0, ease: Quad.linear}, 4.5)
  
   .to([copycontainer4, footer, frame3 ], 0.5,{opacity:1}, 4.6)
   .to(vial, 0.5, {left:0, ease: Quad.linear}, 4.6)
   .to(footer, 0,{top:163},4.6)
  
  /*FRAME 4*/
  
  .to(vial, 1, {left:-300, ease: Quad.linear}, 7.5)
  .to(copycontainer4, 1,{left:-300, ease: Quad.linear}, 7.5)
  .from(stage, 0.5,{backgroundPosition:"-200px -360px", ease: Quad.linear}, 7.75)
  .to(copycontainer5, 0.5 ,{left:0}, 8.25)


  /*FRAME 5*/
  
  .to(copycontainer5, 0.5 ,{left:-300}, 12.25)
  .to(copycontainer6, 0.5 ,{left:0}, 12.25)
  .from(cta,0.5, {scale:0}, 12.5)
  .from(ctaClick,0, {left:-330}, 12.5)

   setTimeout(function(){ tl.play() }, 200);
  console.log("duration is: " + tl.duration());

}
 