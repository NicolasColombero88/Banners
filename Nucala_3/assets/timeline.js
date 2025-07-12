window.doAnimation = function(e){
  var tl = new TimelineLite();
    

  tl
  .pause()
    .from(footer, 0.57, {x: 300}, 5.1)

  
    setTimeout(function(){ tl.play() }, 200);

    console.log("duration is: " + tl.duration());
	

    

}