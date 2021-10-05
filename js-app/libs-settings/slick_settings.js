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