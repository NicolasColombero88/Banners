$(document).ready(function(){
jQuery.fx.interval = 2;

/*
$('.descubre').css({'opacity':'0'})
$('.reducir').css({'opacity':'0'})
$('.information').css({'opacity':'1'})
*/

     

/* Frame 1 Time1 Delay 0*/

	$('#q-icon').animate({'left':'0'},500)
    ;
	
	$('#copy1').animate({'left':'0'},500)
	.delay(500)
	.animate({'top':'-12'},500)
    .delay(500)
    .animate({'top':'-21'},500)
    ;
	
    $('#copy2').delay(1000).animate({'left':'0'},500)
    .delay(500)
    .animate({'top':'-9'},500)
    ;
    
    $('#emphasis').delay(1400).animate({'opacity':'1'}, 500)
    .delay(100)
    .animate({'top':'-9'},500)
    ;
    
    $('#copy3').delay(2400).animate({'left':'0'},500)
    ;
    
    $('#footnote').delay(3000).animate({'opacity':'1'},300)
    ;
    
    $('#frame1').delay(6300).animate({'opacity':'0'},300)
    ;
    
    
/* Frame 2 delay 7000*/
    
    $('#brand').delay(6600).animate({'left':'0'},400)
    .delay(3000)
    .animate({'opacity':'0'})
    ;
    
/* Frame 3 delay 10400*/
    
    $('#c-icon').delay(10000).animate({'left':'0'},500)
    .delay(3000)
    .animate({'opacity':'0'},400)
    ;
    
    $('#copy4').delay(10500).animate({'left':'0'},500)
    .delay(3000)
    .animate({'opacity':'0'},300)
    ;
    
/*Frame 4 Delay 14300*/
    
    $('#card').delay(14400).animate({'left':'0'},400)
    ;
    
    $('#cta').delay(14600).animate({'opacity':'1'},400)
    ;
    
    $('#code').delay(14600).animate({'opacity':'1'},400)
    ;
    
    
    
 });
 
 