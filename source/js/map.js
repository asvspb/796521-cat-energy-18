ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [59.938628, 30.323197],
          zoom: 15
      }, {
          searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'HTML Academy: Cat Energy',
          balloonContent: 'Функциональное питание для котов!'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: '../img/map-pin.png',
          // Размеры метки.
          iconImageSize: [124, 106]
      });

  myMap.geoObjects
      .add(myPlacemark);
});
