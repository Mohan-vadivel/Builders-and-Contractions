(function ($) {
	//caption hover End
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});
	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 1000);
			return false;
	});
})(jQuery);


$(document).ready(function(){
	$('.menu_bar li ').click(function(){
		$('li').removeClass("active");
		$(this).addClass("active");
	});
});

$(function() {
	$( 'ul.menu_bar li' ).on( 'click', function() {
		$( this ).parent().find( 'li.active' ).removeClass( 'active' );
		$( this ).addClass( 'active' );
	});
});


/* ----------------- Start JS Document ----------------- */
var $ = jQuery.noConflict();
$(function($) {
'use strict';
///////////////////////////////////////////
///////////////// Loading /////////////////
///////////////////////////////////////////
	$(window).load(function () {
		$("#testimonials_slider").show();
		$(".post_slider_media").show();
		$("#loading").delay(1000).fadeOut(500);
		$("#loading-center").click(function() {
			$("#loading").fadeOut(500);
		})
	});
});