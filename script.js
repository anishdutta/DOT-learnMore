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
			$(".pro-gif").hide( "slide", {direction: "left" }, 2000/*speed*/ );
			$("svg").hide("clip",{direction: "vertical"}, 2500/*speed*/);
                        $(".app-img").hide( "slide", {direction: "right"}, 2500 );


        }
        else {

			$(".pro-gif").show( "slide", {direction: "left" }, 2000 );
                        $(".app-img").show( "slide", {direction: "right"}, 2500 );
			$("svg").show("clip",{direction: "vertical"}, 2500);


        }
		lastScrollTop = st;
		
		

	})
	$(document).ready(function () {
		$(window).scroll(function (e) {
			parallax();
		});
	
		function parallax() {
			var scrolled = $(window).scrollTop();
			$('.dash-img').css('top', (scrolled * 0.0715) + 'rem');
		};
	});