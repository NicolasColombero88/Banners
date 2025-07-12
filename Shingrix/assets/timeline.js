window.onload = function (e) {

    var tl = new TimelineLite();

    //Frame1
    tl.set([bg, gsk, header], {opacity: 1}, 0)
        .set([fr1, copy1a, copy1b], {opacity: 1,display: "block"
        }, 0)

        //Frame2
        .to(fr1, 0.25, {opacity: 0,}, 5.5)
        .to(fr1, 0, {display: "none"}, 5.75)
        .to(copy2, 0.25, {opacity: 1}, 5.5)

        //Frame3
        .to(fr2Msk, 1.5, {width: 0}, 6.5)
        .to(fr3Msk, 1.5, {width: 300}, 6.5)
        .to(syringe1, 1.3, {left:-11}, 6.5)

        //Frame4
        .set([fr3Msk, fr3], {clearProps: "right",left: 0,width: 300}, 8.25)
        .to(fr3Msk, 1.5, {width: 0}, 8.25)
        .to(fr4Msk, 1.5, {width: 313}, 8.25)
        .to(syringe2, 1.15, {left:-13}, 8.25)
        .to(plus, 0.25, {opacity:1}, 9.5)

        //Frame5
        .to(copy4, 0.25, {paddingTop:82}, 9.75)
        .to(copy5, 0.25, {opacity: 1}, 9.75)
    
        //Frame6
        .to (fr4,  0.25, {top:-11}, 12.75)
        .to (icons, 0.25, {top:-14}, 12.75)
        .to (fr5, 0.25, {top:-14}, 12.75)
        .to (cta, 0.25, {opacity:1, display:"block"}, 13)



    console.log("duration is: " + tl.duration());
};



function end() {
    self.thumbPosition = parseInt($thumb.css(posiLabel), 10) || 0;

    $("body").removeClass("noSelect");
    $(document).unbind("mousemove", drag);
    $(document).unbind("mouseup", end);
    $thumb.unbind("mouseup", end);
    $track.unbind("mouseup", end);
    document.ontouchmove = document.ontouchend = null;
};
