/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
        HIDE PRE-LOADER      
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/

$(window).on('load', function () {
	$('#status').fadeOut();
	$('#preloader').delay(200).fadeOut('slow');

});

/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
        OWL CAROUSEL      
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
$(function () { /*$(document).ready(function() short form*/
	$("#team-members").owlCarousel({
		items: 2,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true,
		nav: true,
		dots: false,
		navText: ['<i class= "fa fa-angle-left"></i>', '<i class= "fa fa-angle-right"></i>'],
		responsive: {
			/*breakpoint from 0 up */
			0: {
				items: 1
			},
			/*breakpoint from 480 up */
			480: {
				items: 2
			}
		}
	});
});
/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    PROGRESS BAR ANIMATION     
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
$(function () {
	$("#progress-elements").waypoint(function () {
		$(".progress-bar").each(function () {
			$(this).animate({
				width: $(this).attr("aria-valuenow") + "%"
			}, 1000);
		});
		//    alert("you reached progrss bars");
		this.destroy();
	}, {
		offset: "bottom-in-view"
	});
});


/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
      RESPONSIVE TAB     
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
$(function () {
	/*document ready method not wait for images 
|								to properly load it is earlier time than window load method*/

	$("#services-tabs").responsiveTabs({
		animation: "slide"
	})

});

/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    			PORTFOLIO     
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
$(window).on('load', function () {
	/* initialize isotope */
	$("#isotope-container").isotope({

	});

	/* filter items on button click*/

	$("#isotope-filters").on('click', 'button', function () {
		/* get filter value*/
		var filterValue = $(this).attr('data-filter'); //	alert("you clicked " + filterValue);

		/*filter portfolio */
		$("#isotope-container").isotope({
			filter: filterValue
		});

		/* active button*/
		$("#isotope-filters").find('.active').removeClass('active') // to remove active class again we need to find active class
		$(this).addClass('active');


	});
});


/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    			MAGNIFIER     
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
$(document).ready(function () {

	$("#portfolio-wrapper").magnificPopup({
		delegate: 'a', //chid item selector, by clicking on it poopup will open.
		type: 'image',
		gallery: {
			enabled: true
		}
	});

});
/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    			TESTIMONIAL SECTION     
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
$(function () { /*$(document).ready(function() short form*/
	$("#testimonial-slider").owlCarousel({
		items: 1,
		autoplay: true,
		smartSpeed: 500,
		loop: true,
		autoplayHoverPause: true,
		nav: true,
		dots: false,
		navText: ['<i class= "fa fa-angle-left"></i>', '<i class= "fa fa-angle-right"></i>']
	});
});

/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
		TESTIMONIAL SECTION     
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
$(document).ready(function ($) {
	$('.counter').counterUp({
		delay: 10,
		time: 2000
	});
});


/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
		CLIENT SECTION     
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
$(function () { /*$(document).ready(function() short form*/
	$("#clients-list").owlCarousel({
		items: 6,
		autoplay: true,
		smartSpeed: 500,
		loop: true,
		autoplayHoverPause: true,
		nav: true,
		dots: false,
		navText: ['<i class= "fa fa-angle-left"></i>', '<i class= "fa fa-angle-right"></i>'],
	});
});

/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
		NAVBAR CUSTOMIZATION     
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
/*show and hide white navigation */
$(document).ready(function ($) {

	//first Call:: show/hide nav on page load
	showHideNav();

	$(window).scroll(function () {
		//Second Call:: show/hide nav on Scroll
		showHideNav();
	});

	function showHideNav() {

		if ($(window).scrollTop() > 50) {
			//show whte nav bar
			$("nav").addClass("white-nav-top");
			//show dark logo
			$(".navbar-brand img").attr("src", "img/logo/logo-dark.png");
			//show back-to-top button
			$("#back-to-top").fadeIn();
		} else {
			//show Same nav-bar
			$("nav").removeClass("white-nav-top")
				//show dark logo
			$(".navbar-brand img").attr("src", "img/logo/logo.png");
			//Hide back-to-top button
			$("#back-to-top").fadeOut();

		}
	}
});

/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
		SMOOTH SCROLLING     
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/

$(document).ready(function ($) {

	$("a.smooth-scroll").click(function (event) {
		event.preventDefault();
		// get section id like #about. #services etc.
		var section_id = $(this).attr("href");

		$("html, body").animate({
			scrollTop: $(section_id).offset().top - 64
		}, 1250, "easeInOutExpo");
	});

});




/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
		CLIENT SECTION     
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
$(function () { /*$(document).ready(function() short form*/
	$("#clients-list").owlCarousel({
		items: 6,
		autoplay: true,
		smartSpeed: 500,
		loop: true,
		autoplayHoverPause: true,
		nav: true,
		dots: false,
		navText: ['<i class= "fa fa-angle-left"></i>', '<i class= "fa fa-angle-right"></i>'],
		responsive: {
			/*breakpoint from 0 up */
			0: {
				items: 6
			},
			/*breakpoint from 480 up */
			300: {
				items: 2
			}
		}

	});
});


/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
		CLIENT SECTION     
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
$(document).ready(function ($) {
	//show mobile navigation
	$("#mobile-nav-open-btn").click(function () {
		$("#mobile-nav").css("height", "100%");
	});

	//Hide mobile navigation
	$("#mobile-nav-close-btn , #mobile-nav a").click(function () {
		$("#mobile-nav").css("height", "0%");
	});
});

/*&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
		ANIMATION SECTION     
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&*/
/*Animate on scroll */
$(document).ready(function () {
	new WOW().init();
});

$(window).on('load', function () {
	$("#home-heading1").addClass("animated fadeInDown");
	$("#home-heading2").addClass("animated fadeInLeft");
	$("#home-text").addClass("animated zoomIn");
	$("#home-btn").addClass("animated zoomIn");
	$("#arrow-down i").addClass("animated fadeInDown infinite");
});
