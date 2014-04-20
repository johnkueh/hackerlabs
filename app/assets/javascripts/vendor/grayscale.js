//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(document).ready(function(){
  //Google Map Skin - Get more at http://snazzymaps.com/
  var myOptions = {
    zoom: 16,
    center: new google.maps.LatLng(-33.887072,151.20742),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false
  };

  var map = new google.maps.Map(document.getElementById('map'), myOptions);
  var markerLatLng = new google.maps.LatLng(-33.887072,151.20742);
  marker = new google.maps.Marker({
    position: markerLatLng,
    map: map,
  });

  var contentString = '<div id="info-content">'+
    '<h3>Hackerlabs</h3>'+
    '<p>35, Buckingham Street,</p>'+
    '<p>Surry Hills, Sydney</p>'+
    '</div>'

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  infowindow.open(map,marker);
});
