//= require_tree .

$(document).ready(function(){

  // mobile nav toggle

  $('.icon-reorder').click(function() {
    $('nav ul').fadeToggle();
  });

  // schedule session descriptions


  $('.sessions h3, .speaker-page-item h3').click(function(e) {
    $('.session-description').fadeOut();
    $(this).siblings('.session-description').fadeToggle();
  });

  $(document).on('click', function(e) {
    if ($(e.target).is('.sessions h3, .session-description')) return;
    $('.session-description').fadeOut();
  });

  $('.session-description').prepend('<strong><i class="icon-remove"></i></strong>');

  $('.session-description strong').bind('click',function() {
    $(this).closest('.session-description').fadeToggle();
  });


  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      $('.session-description').fadeOut();
    }
  });

  // map

  var map = L.mapbox.map('map', 'test-ryan.jaemhmc3').setView([37.768284, -122.393491], 15);
  map.scrollWheelZoom.disable();
  map.dragging.disable();
  map.touchZoom.disable();
  var marker = L.mapbox.featureLayer({
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-122.393491, 37.768284]
    },
    properties: {
      titl: 'Mission Bay Conference Center at UCSF',
      description: '1675 Owens Street, Suite 251, San Francisco, CA 94143-3008 | 866-431-8273 | <a href="http://www.acc-missionbayconferencecenter.com/">Website</a>',
      'marker-size': 'medium',
      'marker-color': '#e95868',
      url: 'http://www.acc-missionbayconferencecenter.com/'
    }
  }).addTo(map);
  marker.eachLayer(function(m) {
    m.openPopup();
  });

});
