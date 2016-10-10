var noJsMap = document.querySelector(".map__image");

noJsMap.style.display = "none";

ymaps.ready(init);
var myMap,
  myPlacemark;

function init(){
  myMap = new ymaps.Map ("map", {
    center: [59.936683, 30.321345],
      zoom: 17,
      controls: []
  });

  myPlacemark = new ymaps.Placemark([59.936683, 30.321345], {}, {
    iconLayout: "default#image",
    iconImageHref: "img/icon-map-pin.svg",
    iconImageSize: [66, 101]
  });

  myMap.geoObjects.add(myPlacemark);
  myMap.controls.add("zoomControl");
}
