(function ($) {
	"use strict";

	jQuery(document).ready(function($){


		$("ul.nav.navbar-nav li a").on('click', function(){
			$(".navbar-collapse").removeClass("in");
		});


		/*----------------------------------
		   	slider active js
	    ------------------------------------ */
		$('#main-slider').owlCarousel({
			items:1,
			loop: true,
			autoplay: true,
			smartSpeed: 1200,
			dots: false,
			nav:true,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],

		});

		$("#main-slider").on("translate.owl.carousel", function(){
		   $(".caption h2, .caption p").removeClass("animated fadeInUp").css("opacity", "0");
		   $(".caption .btn-1").removeClass("animated fadeInDown").css("opacity", "0");
	   });

	   $("#main-slider").on("translated.owl.carousel", function(){
		   $(".caption h2, .caption p").addClass("animated fadeInUp").css("opacity", "1");
		   $(".caption .btn-1").addClass("animated fadeInDown").css("opacity", "1");
	   });

	    /*----------------------------------
	    	Venobox Gallery active js
	    ------------------------------------ */
	    $('.venobox_custom').venobox({
	        framewidth: '700px', // default: ''
	        frameheight: '500px', // default: ''
	        border: '2px', // default: '0'
	        bgcolor: '#fff', // default: '#fff'
	        titleattr: 'data-title', // default: 'title'
	        numeratio: true, // default: false
	        infinigall: true // default: false
	    });
		/*---------------------
		    Counter active js
		--------------------- */
		$('.counterup').counterUp({
	        delay: 10,
	        time: 1000
	    });


		/*--------------------------
			scrollUp
		---------------------------- */
		$(function(){
			$("#scroll").fadeOut();
			$(window).scroll(function(){
			if($(this).scrollTop() > 100){
				$("#scroll").fadeIn(500);
			}else{
				$("#scroll").fadeOut(600);
			}
			});
			$("#scroll").click(function(){
				$("html,body").animate({scrollTop:0},800);
				return false;
			});
		});
	});




})(jQuery);
