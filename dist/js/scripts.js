//  Ivan Eremeev - 2021
//  Skype: ivan.eremeev_1
//  Telegram: IvanMessage
//  Email: ivan.frontcoder@gmail.com

$(document).ready(function () {

	// Брэйкпоинты js
	var	breakXl = 1400,
			breakLg = 1250,
			breakMd = 1024,
			breakSm = 769,
			breakXs = 500;
	
	// Slick Slider
	// function slider(slider,sliderFor) {
	//   if (slider.length) {
	//     slider.slick({
	//       slidesToShow: 1, // Сколько слайдов показывать на экране
	//       slidesToScroll: 1, // Сколько слайдов пролистывать за раз
	//       asNavFor: sliderFor, // Связь со слайдерами
	//       dots: true, // Пагинация
	//       arrows: true, // Стрелки
	//       speed: 500, // Скорость перехода слайдов
	//       autoplay: false, // Автопрокрутка
	//       autoplaySpeed: 2000, // Скорость автопрокрутки
	//       centerMode: false, // Задает класс .slick-center слайду в центре
	//       focusOnSelect: true, // Выбрать слайд кликом
	//       infinite: false, // Зацикленное пролистывание
	//       vertical: false, // Вертикальный слайдер
	//       rtl: false, // Слайды листаются справа налево
	//       centerPadding: '0px', // Отступы слева и справа чтоб увидеть часть крайних слайдов
	//       adaptiveHeight: true, // Подгоняет высоту слайдера под элемент слайда
	//       variableWidth: false, // Подгоняет ширину слайдов под размер элемента,
	//       swipe: true, // Перелистывание пальцем
	//       draggable: true, // Перелистывание мышью
	//       swipeToSlide: true, // Свободное перелистывание (на произвольное кол-во слайдов)
	//       responsive: [ // Адаптация
	//         {
	//         breakpoint: 992,
	//           settings: {
	//             arrows: false,
	//           }
	//         },
	//         {
	//         breakpoint: 720,
	//           settings: {
	//             arrows: false,
	//           }
	//         }
	//       ]
	//       // lazyLoad: 'ondemand', // Отложенная загрузка изображений. В тэг надо добавлять атрибут <img data-lazy="img/image.png"/>
	//     });
	    
	//     sliderFor.slick({
	//       slidesToShow: 1, // Сколько слайдов показывать на экране
	//       slidesToScroll: 1, // Сколько слайдов пролистывать за раз
	//       dots: false, // Пагинация
	//       arrows: false, // Стрелки
	//       fade: true, // Плавный переход (анимация исчезновения появления) В false будет листаться
	//       asNavFor: slider // Связь со слайдерами
	//     });
	//   }
	// }
	// slider();
	
	// $('.your-slider').slick('unslick'); // Уничтожить слайдер
	
	// $('.your-slider').slick('setPosition') // Переотрисовка слайдера. Например для использования в табах
	
	// Slick Slider
	function slider(slider) {
	  if (slider.length) {
	    slider.slick({
	      slidesToShow: 3,
	      slidesToScroll: 1,
	      arrows: true,
	      centerMode: true,
	      centerPadding: '0px',
	      autoplay: true,
	      prevArrow: '<div class="section7__prev"><svg width="20" height="35" viewBox="0 0 20 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5 2L3 17.5L18.5 33" stroke-width="4"/></svg ></div>',
	      nextArrow: '<div class="section7__next"><svg width="21" height="35" viewBox="0 0 21 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2L17.5 17.5L2 33" stroke-width="4"/></svg></div>',
	      infinite: true,
	      swipe: true,
	      draggable: true,
	      responsive: [
	        {
	          breakpoint: breakXs,
	          settings: {
	            slidesToShow: 2,
	          }
	        }
	      ]
	    });
	  }
	}
	slider($('#slickSlider'));
	
	// Slick Slider
	function slider2(slider) {
	  if (slider.length) {
	    slider.slick({
	      slidesToShow: 1,
	      slidesToScroll: 1,
	      arrows: true,
	      prevArrow: '<div class="section16__prev"><svg width="29" height="39" viewBox="0 0 29 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 4L7 19.5L26 35" stroke-width="8"/></svg></div>',
	      nextArrow: '<div class="section16__next"><svg width="29" height="39" viewBox="0 0 29 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 4L22 19.5L3 35" stroke-width="8"/></svg ></div>',
	      infinite: true,
	      swipe: true,
	      draggable: true,
	    });
	  }
	}
	slider2($('#slickSlider2'));
	// YandexMap
	if ($('#yandexMap').length) {
	  ymaps.ready(function () {
	    initYandexMap();
	  });
	}
	
	function initYandexMap() {
	  var myMap,
	      mapCenter = $('#yandexMap').data('center'),
	      mapZoom = $('#yandexMap').data('zoom'),
	      mapPoint = $('#yandexMap').data('point'),
	      PointText = $('#yandexMap').data('point-text');
	  myMap = new ymaps.Map("yandexMap", {
	    center: mapCenter, // Центер карты
	    zoom: mapZoom, // Коэффициент масштаба карты
	    controls: [ // Элементы управления
	      'zoomControl',
	      'fullscreenControl',
	    ]
	  });
	  myMap.behaviors.disable('scrollZoom'); // Отключить изменение масштаба скроллом мыши
	  // Добавление метки
	  var myGeoObject = new ymaps.GeoObject({
	    geometry: {
	      type: "Point", // тип геометрии - точка
	      coordinates: mapPoint // координаты точки
	    },
	    properties: {
	      // Контент метки.
	      hintContent: PointText
	    }
	  });
	
	  // Размещение геообъекта на карте.
	  myMap.geoObjects.add(myGeoObject);
	}

	// Запрет перехода по ссылкам с хэшем
	$('a[href="#"]').click(function(e) {
		e.preventDefault();
	});

	// Мобильное меню
	function myMenu(menu) {
		if (menu.length) {
			menu.each(function () {
				var $this = $(this),
						menuBtn = $this.find('#menu-btn'),
						over = $this.find('#menu-over'),
						close = $this.find('#menu-close'),
						body = $('body'),
						scrollbarWidth;
				menuBtn.on('click', toggleOpenMenu);
				over.on('click', menuClose);
				close.on('click', menuClose);
				function menuOpen() { // Открывание меню
					body.addClass('lock');
					menuBtn.addClass('is-active');
					setTimeout(() => {
						$this.addClass('open');
					}, 200);
				}
				function menuClose() { // Закрывание меню
					body.removeClass('lock');
					$this.removeClass('open');
					menuBtn.removeClass('is-active');
				}
				function scrollbarWidthCalc() { // Вычисление ширины скролла
					var documentWidth = parseInt(document.documentElement.clientWidth),
							windowsWidth = parseInt(window.innerWidth);
							scrollbarWidth = windowsWidth - documentWidth;
				}
				function toggleOpenMenu() { // Открывание/закрывание меню
					if ($this.hasClass('open')) {
						menuClose();
					}else {
						menuOpen();
					}
				}
				scrollbarWidthCalc();
				$(window).resize(scrollbarWidthCalc);
			})
		};
	};
	myMenu($('.js-menu'));

	// JQuery MatchHeight | Одинаковая высота у блоков
	if ($('.section3__title').length) {
		$('.section3__title').matchHeight();
	}
	if ($('.section3__item').length) {
		$('.section3__item').matchHeight({
			byRow: false,
		});
	}
	if ($('.section5__title').length) {
		$('.section5__title').matchHeight({
			byRow: false,
		});
	}
	if ($('.section13__tr').length) {
		$('.section13__tr').matchHeight({
			byRow: false,
		});
	}
	function matchHeaigthReinit(block, breakPoint) {
		if ($(window).width() < breakPoint) {
			if (block.length) {
				block.matchHeight({ remove: true });
			}
		} else {
			if (block.length) {
				block.matchHeight({
					byRow: false,
				});
			}
		}
	}
	matchHeaigthReinit($('.section12__content h3'), breakXs);
	matchHeaigthReinit($('.section23__list'), breakXs);
	$(window).resize(function () {
		matchHeaigthReinit($('.section12__content h3'), breakSm);
		matchHeaigthReinit($('.section23__list'), breakSm);
	});

	// Модальное окно
	function modal(modal) {
		$('.modal-trigger').on('click', function() {
			var $this = $(this),
					data = $this.data('modal'),
					thisModal = $(data);
			modalShow(thisModal);
		});
	};
	// Открытие модального окна
	function modalShow(thisModal) {
		var html = $('html'),
				modalClose = thisModal.find($('.modal_close'));
		thisModal.show(0, function() {
			setTimeout(thisModal.addClass('open'),500);
		});
		modalClose.on('click', function() {
			modalHide(thisModal);
		});
		thisModal.on('click', function(e) {
			if (thisModal.has(e.target).length === 0) {
				modalHide(thisModal);
			}
		});
	};
	// Закрытие модального окна
	function modalHide(thisModal) {
		var html = $('html');
		thisModal.removeClass('open');
		thisModal.hide();
	};
	modal();

	// Вставка текста в input из выпадающего списка
	function inputEnterText() {
		$('.input-search').each(function () {
			var inputBlock = $(this),
				input = inputBlock.find('input'),
				li = inputBlock.find('.input__list li');
			li.on('click', function () {
				console.log(li);
				input.val($(this).text());
			})
		})
	}
	inputEnterText();

	// Выпадайки "О нас пишут" при наведении на кнопку
	function dropBlockJQuery(btn) {
		var $this = undefined,
			drop = undefined,
			allDrop = $('.section8__drop');
			time = 0;
		btn.on('mouseenter', function () {
			console.log('dd');
			btn.removeClass('active');
			allDrop.fadeOut(time);
			$this = $(this);
			drop = $('#' + $this.data('drop'));
			$this.addClass('active');
			drop.fadeIn(time);
		})
	}
	dropBlockJQuery($('.js-drop-btn-fade'));

});