$(document).ready(function() {
	// Маска ввода для номера телефона
	$(".phone_mask").mask("+7(999)999-99-99");

	// Placeholder для формы
	$('.input-group__input').focus(function(e) {
		$(this).prev('.input-group_placeholder').addClass('input_active');
	});
	$('.input-group__input').focusout(function(e) {
		if (this.value === '') {
			$(this).prev('.input-group_placeholder').removeClass('input_active');
		}		
	});
	$('.input-group_placeholder').click(function(e) {
		$(this).next().focus();
	});

	// Фиксированное меню
	$(window).scroll(function(){
		if ($(this).scrollTop() > 220) {
			$('.main-menu').addClass('fixed_decstop');
			if($(".main-menu").hasClass("fixed_decstop"))
				$(".description__heading").css({'margin-top':'60px'});
			$('.main-menu').addClass('hide_mobile');
			$('.menu__icon_wrap').addClass('menu__icon_scrolled');
			$('.menu__icon_wrap').addClass('fixed_mobile');
		} else {
			$('.main-menu').removeClass('fixed_decstop');
			$(".description__heading").css({'margin-top':'0'});
			$('.main-menu').removeClass('hide_mobile');
			$('.menu__icon_wrap').removeClass('menu__icon_scrolled');
			$('.menu__icon_wrap').removeClass('fixed_mobile');
		}
	});

	// Мобильное меню
	$('.menu__icon_wrap').click(function () {
		$('.menu__icon').toggleClass('menu__icon_active');
		$('.mobile-menu').toggleClass('mobile-menu_active');

		$('.mobile-menu a').click(function () {
			$('.menu__icon').removeClass('menu__icon_active');
			$('.mobile-menu').removeClass('mobile-menu_active')
		});
	});

	// Popup 
	$(".modal-inline").fancybox({
		margin: 0,
		padding: 10,
		maxWidth: 400,
		autoScale: true,
		transitionIn: 'none',
		transitionOut: 'none',
		type: 'inline',

		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	// Отправка формы
	$('#send-data').submit(function(){
		$.post(
			'post.php',
			{
				name: $('#form-name').val(), 
				phone: $('#form-tel').val(),
			},
			function(msg) {
				var response = $("#mess").html(msg);
				$(response).css({
					'padding-top' : '50px',
					'padding-bottom' : '25px',
					'padding-right' : '25px',
					'padding-left' : '25px',
					'font-size' : '16px',
					'color' : '#141414',
					'border-radius' : '4px',
				});
				$.fancybox.close();
				$.fancybox.open({
					src  : '#mess',
					type : 'inline',
					opts : {
						afterShow : function( instance, current ) {
							setTimeout("$.fancybox.close()", 8000);
						}
					}
				});

			});
		'json'
		return false;
	});
	// Отправка формы 2
	function sendToServer() {
		$.post(
			'post2.php',
			{
				name: $('#name').val(),
				company: $('#company').val(),
				city: $('#city').val(),
				mail: $('#mail').val(),
				tel: $('#tel').val(),
			},
			function(msg) {
				var response = $("#serv-message").html(msg);
				$(response).css({
					'padding-top' : '50px',
					'padding-bottom' : '25px',
					'padding-right' : '25px',
					'padding-left' : '25px',
					'font-size' : '16px',
					'color' : '#141414',
					'border-radius' : '4px',
				});
				$.fancybox.open({
					src  : '#serv-message',
					type : 'inline',
					opts : {
						afterShow : function( instance, current ) {
							/*setTimeout("$.fancybox.close()", 8000);*/
						}
					}
				});

			});
		'json'
		return false;
	}
	// Валидация формы
	$("#validate").validate({
		rules: {
			name: {
				required: true,
			}
		},
		messages: {
			name: {
				required: "Обязательное поле",
			},
			city: {
				required: "Укажите ваш город",
			},
			email: {
				required: "Пожалуйста, заполните все обязательные поля",
				email: "e-mail должен быть указан в формате name@domain.com"
			},
			tel: {
				required: "Пожалуйста, заполните все обязательные поля"
			},
			agree: {
				required: "Вам нужно согласиться с условиями"
			},
		},
		submitHandler: function(form) {
			sendToServer();
		},
	});
	$.validator.addClassRules({
		name: {
			required: true,
		},
		city: {
			required: true,
		},
		email: {
			required: true,
			email: true,
		},
		tel: {
			required: true,
		},
		agree: {
			required: true,
		},
	});	
});

// Слайдер
$('.reviews_slider').slick({
	dots: true,
	dotsClass: 'my-dots',
	infinite: true,
	speed: 500,
	fade: true,
	centerMode: true,
	cssEase: 'linear',
	prevArrow: $('.left'),
	nextArrow: $('.right'),
});



