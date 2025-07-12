

var imagesToLoad = 0;
var imagesLoaded = 0;




window.onload = function(e){
  loadImage('bg1', 'assets/bg1.jpg')
  loadImage('bg2', 'assets/bg2.jpg')
  loadImage('logo2', 'assets/logo2.png')
  loadImage('vial', 'assets/vial.png')
  // loadImage('cta-arrow', 'assets/cta-arrow.png')
}
 function onImageLoad(evt) {
  imagesLoaded++;
  console.log(imagesLoaded +" | "+ imagesToLoad)
  if(imagesLoaded == imagesToLoad) {

    setTimeout(function(){
      doAnimation();
    }, 500);
  }
}
function loadImage(container, content){
  console.log("image "+container+ " "+content)
  var image = document.getElementById(container);
  imagesToLoad++;
  image.addEventListener('load', onImageLoad) 
  image.setAttribute('src', content);
}
 doAnimation = function(){
    var tl = new TimelineLite();

  tl
  .pause()

  .to(stage, .2, {opacity:1, ease: Quad.linear}, 0)
  // FRAME 1
  .from(copy13, 0.2, {opacity:0,  ease: Quad.linear}, 0.5)
  .from(lineTop, 0.2, {scale:5, opacity:0, ease: Quad.linear}, 0.75)
  .from(copy12, 0.2, {opacity:0,  ease: Quad.linear}, 1)
  .from(lineButton, 0.2, {scale:5, opacity:0, ease: Quad.linear}, 1.25)
  .from(copy14, 0.2, {opacity:0, ease: Quad.linear}, 1.5)
  
  // FRAME 2
  
  .to(copy13, 0.2, {opacity:0, ease: Quad.linear}, 3)
  .from(copy132, 0.2, {opacity:0, ease: Quad.linear}, 3.5)
  .to(copy12, 0.2, {opacity:0, ease: Quad.linear}, 3)
  .from(copy122, 0.2, {opacity:0, ease: Quad.linear}, 3.5)
  .to(copy14, 0.2, {opacity:0, ease: Quad.linear}, 3)
  .from(copy142, 0.2, {opacity:0, ease: Quad.linear}, 3.5)


  
  // FRAME 3
 
  .to(frame1, 1, {opacity:0, ease: Quad.linear}, 5.5)
  .to(copycontainer2, 0.5,{opacity:1, ease: Quad.linear}, 5.5)
  .to(sponsor, 0,{top:2, ease: Quad.linear}, 5.5)
  .to(sponsor, 0.5,{opacity:1, ease: Quad.linear}, 5.5)

  .from(logo2, 0.5, {top:-80, ease: Quad.linear}, 5.5)
  .to(footer, 0.1, {opacity: 1,ease: Quad.linear}, 5.5)
  .to(footer, 0.5, {bottom: -250,ease: Quad.linear}, 5.7)

  
  // FRAME 4

  .to(bg2, 0.5, {opacity:0}, 8.5)
  .to(copy2a, 0., {opacity:0}, 8.5)
  .to(copy2b, 0.5, {opacity:0}, 8.5)
  .to(frame3, 0.5,{opacity:1}, 8.5)

  
// //  FRAME 5
  
   .to(copycontainer5, 0.5 ,{left:0}, 9)
  .to(copycontainer5, 0.5 ,{left:-300}, 13.5)

  
// //  FRAME 6

 .to(copy3, 0.5, {left:-289, ease: Quad.linear}, 14)
  .to(vial, 0.5, {left:0, ease: Quad.linear}, 14.25)

  .from(stage, 0.5,{backgroundPosition:"-200px -360px", ease: Quad.linear}, 16.75)
  .to( vial, 0.5, {left:-250,opacity:0, ease: Quad.linear}, 16.75)
  .to( copy3, 0.5, {left:-520, ease: Quad.linear}, 16.75)
 

//  //  ENDFRAME

  .to(copycontainer6, 0.5 ,{left:0}, 17)
  .from(cta,0.5, {scale:0}, 17.5)
  .to(ctaClick,0, {css:{left:"98px"}}, 17.5)

   setTimeout(function(){ tl.play() }, 200);
  console.log("duration is: " + tl.duration());

 }