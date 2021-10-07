// YandexMap
ymaps.ready(function () {
  if ($('#yandexMap').length) {
    initYandexMap();
  }
});
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