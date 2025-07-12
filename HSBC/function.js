window.onload = function (e) {
    var tl = new TimelineLite();
    
    
    tl
    .set(".sprite", {display:"block"})

    .to('#logo', .25, {opacity:1})
    .to('#copy1', .25, {opacity:1})
    .to('#copy1', .25, {opacity:0}, 2)
    .to('#copy2', .25, {opacity:1}, 2)

    .from("#visa1", 3, {top:65, left:280}, 2)
    .from("#visa2", 3.5, {top:300, left:-200}, 2)

    .to('#copy2', .25, {opacity:0}, 3.5)
    .to('#copy3', .25, {opacity:1}, 3.5)

    .from("#master1", 3, {top:70, left:350, rotation:"12deg"}, 3.5)
    .from("#master2", 3.5, {top:280, left:280}, 3.5)

    .to('#copy3', .5, {opacity:0}, 5)
    .to('#copy4', .5, {opacity:1}, 5)

    .from("#master3", 1, {top:300, left:280, rotation:"12deg"}, 5)
    .from("#visa3", .75, {top:0, left:-220}, 5)
    .repeat(1)

    tl.eventCallback("onComplete", callLegal);

    function callLegal() {
        let tlegal = new TimelineLite();
        tlegal.to('#legalShow', 1, {opacity:1, display:"block"})
        
        var totalTime = (tl.duration() * 2) + tlegal.duration();

        console.log('Animacion finalizada.')
        console.log('Tiempo final de animación: ' + totalTime)
    }

}

   
    function showLegal() {
        let show = new TimelineMax();
    show
    .to(['#logo', '#copy4'], 0.5, {opacity:0})
    .to('#legalShow', 0.5, {opacity:0, display:"none"}, "<")
    .to('#legalHide', 0.5, {opacity:1, display:"block"}, "<")
    .to('#visa3', 1, {rotation:"-9deg", scale:0.9, top:-30, left:-32, ease: Power1.easeOut}, 0.25)
    .to('#master3', 1.5, {rotation:"-3deg",scale:0.7, top:8, left:109, ease: Power1.easeOut}, 0.25)
    .to(['#legal', '#iso'], 1, {opacity:1, ease: Power1.easeOut}, 0.5)
    .to('#veladura', 1, {opacity:0.6, ease: Power1.easeOut}, 0.5)
    }

    function hideLegal() {
        let hide = new TimelineMax();
    hide
    .to('#legalHide', 0.5, {opacity:0, display:"none"})
    .to('#legalShow', 0.5, {opacity:1, display:"block"}, "<")
    .to(['#legal', '#iso', '#veladura'], 1, {opacity:0, ease: Power1.easeOut}, "<")
    .to("#visa3", 1, {top:-10, left:-12, rotation: "12deg", ease: Power2.easeOut}, 0.25)
    .to('#master3', 1.5, {top:140, left:67, rotation: "3deg", scale:0.9, ease: Power2.easeOut}, "<")
    .to('#logo', 1, {opacity:1}, 0.75)
    .to('#copy4', 1, {opacity:1}, 1)
    }
