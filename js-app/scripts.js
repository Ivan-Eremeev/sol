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
	
	//= libs-settings/slick_settings.js
	//= libs-settings/yandex-map-settings.js

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