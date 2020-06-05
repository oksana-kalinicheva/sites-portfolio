$(document).ready(function () {	
    // Фиксированное меню на desktops
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.header').addClass("nav-fixed");
            $('.top-contacts,.user').addClass("d-none");
            $('body').css('margin-top', function (heightElem) {
                var heightMenu = $('.nav-fixed').innerHeight();
                if(window.matchMedia('(min-width: 1200px)').matches){
                    return heightMenu*2.2;
                } 
                else if(window.matchMedia('(min-width: 768px)').matches) {
                    return heightMenu*1.7;
                }
                else {
                    return 0;
                }
            });
            $('.navbar-brand').css({'padding-top':'3px', 'padding-bottom':'0' })
        } else {
            $('.header').removeClass("nav-fixed");
            $('.top-contacts,.user').removeClass("d-none");
            $('body').css('margin-top', '0');
        }
    });
	// Галерея Fancybox
	$("a.gallery").fancybox();
	$("a.group").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200,
	});
	// Слайдер для блока программы
	var mySwiper = new Swiper ('.programms.swiper-container', {
    // Параметры
    direction: 'horizontal',
    speed: 200,
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
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 20,
  }
},

keyboard: {
   enabled: true,
   onlyInViewport: false,
},
    // Кнопки навигации
    navigation: {
    	nextEl: '.swiper-btn-next',
    	prevEl: '.swiper-btn-prev',
    },
})

	// Слайдер для блока клиенты
	var mySwiper = new Swiper ('.customers__slider.swiper-container', {
    // Параметры
    direction: 'horizontal',
    slidesPerGroup: 1,
    slidesPerView: 3,
    spaceBetween: 5,
    speed: 200,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
    },
    breakpoints: {
    // when window width is <= 640px
    320: {
      slidesPerGroup: 1,
      slidesPerView: 1,
      spaceBetween: 20,
  },
  767: {
      slidesPerGroup: 1,
      slidesPerView: 3,
      spaceBetween: 20,
  }
},

keyboard: {
   enabled: true,
   onlyInViewport: false,
},
    // Кнопки навигации
    navigation: {
    	nextEl: '.swiper-btn-next',
    	prevEl: '.swiper-btn-prev',
    },
})
});
