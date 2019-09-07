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
		mainContainer.toggleClass("open");
		$('html, body').animate({
			scrollTop: $('[data-section="' + section + '"]').offset().top - 30
		}, 800);
	})

	// function hamburger_cross() {

	// 	if (isClosed == true) {          
	// 		overlay.hide();
	// 		trigger.removeClass('is-open');
	// 		trigger.addClass('is-closed');
	// 		isClosed = false;
	// 	} else {   
	// 		overlay.show();
	// 		trigger.removeClass('is-closed');
	// 		trigger.addClass('is-open');
	// 		isClosed = true;
	// 	}
	// }

	// $('[data-toggle="offcanvas"]').click(function () {
	// 	$('#wrapper').toggleClass('toggled');
	// });  
});