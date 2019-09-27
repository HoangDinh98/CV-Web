$(document).ready(function () {
	var mainContainer = $("#main-container");
	var trigger = $("#collapse-btn");
	var closeNavBtn = $("#close-nav-btn");
	var sidebar = $("#sidebar");
	var isClosed = false;

	trigger.click(function () {
		collapseNavbar();      
	});

	closeNavBtn.click( collapseNavbar );

	function collapseNavbar() {
		mainContainer.toggleClass("open");	
	}
	
	$("#navbar a").click(function(event){
		var section = $(this).data('nav-section');
		var currentViewWidth = window.innerWidth;
		if (currentViewWidth < 992) {
			mainContainer.toggleClass("open");
		}

		$('html, body').animate({
			scrollTop: $('[data-section="' + section + '"]').offset().top - 30
		}, 800);
	})

	var navActive = function(section) {
		var $el = $('#navbar > ul');
		$el.find('li').removeClass('active');
		$el.each(function(){
			$(this).find('a[data-nav-section="'+ section +'"]').closest('li').addClass('active');
		});

	};

	var $section = $('section[data-section]');

	$section.waypoint(function(direction) {

		if (direction === 'down') {
			navActive($(this.element).data('section'));
		}
	}, {
		offset: '350px'
	});

	$section.waypoint(function(direction) {
		if (direction === 'up') {
			navActive($(this.element).data('section'));
		}
	}, {
		offset: function() { return -$(this.element).height() + 155; }
	});
});