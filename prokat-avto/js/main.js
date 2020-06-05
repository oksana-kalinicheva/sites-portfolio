$(document).ready(function() {
	//Datapicker calendar
	$.datepicker.setDefaults($.datepicker.regional['ru']);
	$( ".datepicker" ).datepicker({
		changeMonth: true,
		changeYear: true,
		minDate: new Date(),
	});
	$.datepicker.setDefaults($.datepicker.regional['ru']);
	$( "#id_date" ).datepicker({
		changeMonth: true,
		changeYear: true,
	});

	//Swiper
	var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    spaceBetween: 37,
    breakpointsInverse: true,
    // Responsive breakpoints
    breakpoints: {
    // when window width is <= 640px
    320: {
    	slidesPerGroup: 1,
    	slidesPerView: 1,
    	spaceBetween: 20,
    },
    767: {
    	slidesPerGroup: 1,
    	slidesPerView: 2,
    	spaceBetween: 20,
    }
},

keyboard: {
	enabled: true,
	onlyInViewport: false,
},

    // Navigation arrows
    navigation: {
    	nextEl: '.slide-next',
    	prevEl: '.slide-prev',
    },
})

	/*Swiper 2*/
	var mySwiper2 = new Swiper ('.swiper-container-bottom', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
    breakpointsInverse: true,
    // Responsive breakpoints
    breakpoints: {
    // when window width is <= 640px
    320: {
    	slidesPerGroup: 1,
    	slidesPerView: 1,
    	spaceBetween: 20,
    },
    767: {
    	slidesPerGroup: 1,
    	slidesPerView: 2,
    	spaceBetween: 20,
    },
    1199: {
    	slidesPerGroup: 1,
    	slidesPerView: 3,
    	spaceBetween: 20,
    },
},

keyboard: {
	enabled: true,
	onlyInViewport: false,
},

    // Navigation arrows
    navigation: {
    	nextEl: '.slide-next',
    	prevEl: '.slide-prev',
    },
})

  // Фиксированное меню
  $(window).scroll(function(){
  	if ($(this).scrollTop() > 180) {
  		$('.desktop-menu').addClass('fixed_desktop');
  		$('.tablet-panel').addClass('tablet-fixed');
  		/*if($(".tablet-panel").hasClass("tablet-fixed"))
  		$(".header").css({'margin-top':'70px'});*/
  	} else {
  		$('.desktop-menu').removeClass('fixed_desktop');
  		$('.tablet-panel').removeClass('tablet-fixed');
  		/*$(".header").css({'margin-top':'0'});*/
  	}
  });
  // Мобильное меню
  $('.top-contacts__menu-icon').click(function () {
  	$('.menu__icon').toggleClass('menu__icon_active');
  	$('.mobile-menu').toggleClass('mobile-menu_active');

  	$('.mobile-menu a').click(function () {
  		$('.menu__icon').removeClass('menu__icon_active');
  		$('.mobile-menu').removeClass('mobile-menu_active');
  	});
  	$('.mobile-menu_active .close-btn').click(function () {
  		/*$('.mobile-menu').addClass('hide');*/
  		$('.mobile-menu').removeClass('mobile-menu_active');
  	});
  });	

	// Аккордеон

	$('.inner').hide();// Hide all tabs
	$('#first-acc').show();

	$('.toggle').click(function(j) {

		var arrow = $(this).find('.accordeon-arrow');
		var arrow2 = $(this).find('.accordeon-arrow-2');
		var coloredBg = $(this).closest('.acc__card');

		$('.accordeon-arrow').removeClass('accordeon-arrow_active');
		$('.accordeon-arrow-2').removeClass('accordeon-arrow-2_active');
		$('.toggle').removeClass('colored');
		$('.pseudo').removeClass('pseudo-2');


		var dropDown = $(this).closest('.acc__card').find('.inner');
		$(this).closest('.accordion').find('.inner').not(dropDown).slideUp();

		

		if ($(this).hasClass('active')) {
			$(this).removeClass('active');

			// Effects
			/*$(arrow).removeClass('accordeon-arrow-2_active');*/
			$(this).removeClass('colored');
		} else {
			$(this).closest('.accordion').find('.toggle.active').removeClass('active');
			$(this).addClass('active');

			// Effects
			$(arrow).addClass('accordeon-arrow_active');

			$(arrow2).addClass('accordeon-arrow-2_active');
			$(this).addClass('colored');

			$(coloredBg).addClass('pseudo-2');
		}

		dropDown.stop(false, true).slideToggle();
		j.preventDefault();
	});
	// Phone mask
	$(".phone_mask").mask("+7(999)999-99-99");

	// Tabs
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})
});