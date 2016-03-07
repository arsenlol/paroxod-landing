
$(document).ready(function() { 
	/*Scroll-top arrow*/
	if ($('.navigation').length) {
    var scrollTrigger = 20, // px
        showFixedNav = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('.navigation').addClass('nav-fixed');
				
            } else {
                $('.navigation').removeClass('nav-fixed');
				
            }
        };
    showFixedNav();
    $(window).on('scroll', function () {
        showFixedNav();
    });
   }
});

// Плавный переход к якорю
$('nav a').click(function(){
    if ($(".navigation").hasClass("nav-fixed")) {
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top-60
        }, 500);
        return false;
    } else {
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top-180
        }, 500);
        return false;
    }
    
});

// Галерея для сертификатов
$(document).ready(function() {
  $('.result').magnificPopup({type:'image'});
});

// Карта  --------------------------------
var myCenter=new google.maps.LatLng(46.464522, 30.716858);

function initialize()
{
var mapProp = {
  center:myCenter,
  scrollwheel: false,
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

// Слайдер битрикс
$('.bitrix-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<div class="bit-left"></div>',
  nextArrow: '<div class="bit-right"></div>',
});

// слайдер портфолио
$('.latest-work').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<div class="bit-left"></div>',
  nextArrow: '<div class="bit-right"></div>',
});

