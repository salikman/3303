"use strict";

(function($) {
	$("#skltbsResponsive").skeletabs({
		// equalHeights: true,
		// animation: "fade-scale",
		responsive: {
			breakpoint: 480,
			headingTagName: "h4"
		}
	});


	$('.navbar__collapse').on('click', () => {
		$('#nav').toggleClass('open-menu');
		$('body').toggleClass('hidden');
	})
	///////////////////////////
	// Mobile dropdown
	$('.has-dropdown a').on('click', function(e) {
		e.preventDefault();
		$(this).parent().toggleClass('open-drop');
	});
	$('.navbar-menu--close').on('click', function() {
		$('#nav').removeClass('open-menu');
		$('body').removeClass('hidden');
	})
    ///////////////////////////
	// On Scroll
	$(window).on('scroll', function() {
		var wScroll = $(this).scrollTop();

		// Fixed nav
		wScroll > 100 ? $('#nav').addClass('fixed-nav') : $('#nav').removeClass('fixed-nav');

	});

	$('.js-slider').slick({
		dots: true,
		dotsClass: 'slider-dots',
        arrows: false,
        draggable: true,
		fade: true
	});
	

	$(window).on('load resize', function () {
		if ($(window).width() < 768) {
			$('.js-secondary-menu:not(.slick-initialized)').slick({
				infinite: true,
				slidesToShow: 3,
				slidesToScroll: 1,
				prevArrow: "<button class='slider-arrow slider-arrow__prev'><svg viewBox='0 0 41 82' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M40 1L1 41L40 81' stroke='#000' stroke-width='2' stroke-linejoin='round'/></svg></button>",
				nextArrow: "<button class='slider-arrow slider-arrow__next'><svg viewBox='0 0 42 82' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 1L41 41L1 81' stroke='#000' stroke-width='2' stroke-linejoin='round'/></svg></button>",
				draggable: true,
				responsive: [
					{
						breakpoint: 610,
						settings: {
							slidesToShow: 2,
						}
					},
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 1,
						}
					}
				]
			});
		} else {
			$(".js-secondary-menu.slick-initialized").slick("unslick");
		}
	});
})(jQuery);