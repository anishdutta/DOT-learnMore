var x =0;
$(window).scroll( function(){
	}) ;
	
	/* dash-img= dash image
	pro-gif= gif 0f dash
	svg= animated wifi
	app-img= app screenshot*/
	var lastScrollTop = 0;
    $(window).on('scroll', function() {
        st = $(this).scrollTop();
        if(st == 0) {
			$(".dash-img").show( "slide", {direction: "up"}, 2000/*speed(ms)*/ );
			$(".pro-gif").hide( "slide", {direction: "left" }, 2000/*speed*/ );
			$("svg").hide("clip",{direction: "vertical"}, 2500/*speed*/);
                        $(".app-img").hide( "slide", {direction: "right"}, 2500 );


        }
        else {
			$(".dash-img").hide( "slide", {direction: "up"}, 2000 );
			$(".pro-gif").show( "slide", {direction: "left" }, 2000 );
                        $(".app-img").show( "slide", {direction: "right"}, 2500 );
			$("svg").show("clip",{direction: "vertical"}, 2500);


        }
		lastScrollTop = st;
		
		

	})
	$(document).ready(function(){
		$(".down-arrow").effect( "bounce", {times:20}, 10000 );
	})