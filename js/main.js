
$(document).ready(function() {
  $('.result').magnificPopup({type:'image'});
});

// Карта
var myCenter=new google.maps.LatLng(46.464522, 30.716858);

function initialize()
{
var mapProp = {
  center:myCenter,
  zoom:15,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker=new google.maps.Marker({
  position:myCenter,
  icon:'marker.png'
  });

marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);

//--------------------------------

$('.bitrix-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<div class="bit-left"></div>',
  nextArrow: '<div class="bit-right"></div>',
});


$('.latest-work').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<div class="bit-left"></div>',
  nextArrow: '<div class="bit-right"></div>',
});