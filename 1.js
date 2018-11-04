 $(function(){
 	$(".chuot,.kn").click(function(event) {
 		/* Act on the event */

 		$('body,html').animate({scrollTop:($(".fedu").offset().top)}, 700);
 	});
 	$(".sp").click(function(event) {
 		/* Act on the event */
 		$('body,html').animate({scrollTop:($(".khoisp").offset().top)}, 700);
 	});

 	 	 
 	$(".tt").click(function(event) {
 		/* Act on the event */
 		$('body,html').animate({scrollTop:($(".footer2").offset().top)}, 700);
 	});
  	$(".gt").click(function(event) {
 		/* Act on the event */
 		$('body,html').animate({scrollTop:($(".menutop").offset().top)}, 700);
 	});
 		$(".cm").click(function(event) {
 		/* Act on the event */
 		$('body,html').animate({scrollTop:($(".khoicomment").offset().top)}, 700);
 	});
})  
 