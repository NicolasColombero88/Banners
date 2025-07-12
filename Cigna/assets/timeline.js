window.onload = function(e){

  var open = document.getElementById("open");
  
  var tl = new TimelineMax();

    var _copy1 = document.getElementById('copy1').offsetWidth;
    var _copy2 = document.getElementById('copy2').offsetWidth;

    var copy1Length = _copy1 + 100 ;
    var copy2Length = _copy2 + 100 ;


  tl.from(banner, 0, {autoAlpha:0})
  
  // FRAME 1
  
    .from(footer, 0.25, {height:250, ease: Strong.easeNone}, 2)
    .to(logo, 0.25, {scale:0.54, x:92, y:100, ease: Strong.easeNone}, 2)

  // FRAME 2

    .from(copy1, 0.5, {left:-copy1Length, ease: Strong.easeOut}, 2.5)
    .from(copy2, 0.5, {left:-copy2Length, ease: Strong.easeOut}, 4)   
    .to([copy1, copy2], 0.25, {opacity:0}, 7.5) 
 
  //ENDFRAME  
  
    .from(bg2, 0.5, {height:0}, 8)
    .to(Head, 0.5, {left:9, ease: Strong.easeOut}, 8.25)
    .from(bg2Sub, 0.5, {height: 0}, 8.5)
    .to(subHead, 0.5, {left:9, ease: Strong.easeOut}, 8.75)
    .to(cta, 0.5, {opacity: 1, scale: 1, display:"block", ease: Strong.easeOut }, 9)
  
    .set(open, {display:"block"}, 8.5)
    .from(open, 0.5, {opacity: 0}, 8.5);

  console.log("duration is: " + tl.duration());


}

function glitters() {
  TweenLite.to(glitter, 0.4, {x: 350, ease: Strong.easeOut, onComplete: glitterPos});
}
function glitterPos(){
  TweenLite.set(glitter, {x:-250});
}
function showIt(){
  document.getElementById("disclosure").style.display = "block";
  document.getElementById("close").style.display = "block";
  document.getElementById("open").style.display = "none";
}
function hideIt(){
  document.getElementById("disclosure").style.display = "none";
  document.getElementById("close").style.display = "none";
  document.getElementById("open").style.display = "block";
}
  document.getElementById("cta").addEventListener("mouseover", glitters);
  document.getElementById("open").addEventListener("click", showIt);
  document.getElementById("close").addEventListener("click", hideIt);
