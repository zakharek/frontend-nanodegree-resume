
function initializeMap() {
  var locations,
      mapOptions = { disableDefaultUI: true },
      map;

  map = new google.maps.Map(document.querySelector('#map'), mapOptions);

  window.mapBounds = new google.maps.LatLngBounds();
  window.addEventListener('resize', function(e) { map.fitBounds(mapBounds); });

  locations = getLocationsFromResume();
  addPinsToMap(locations);

  function getLocationsFromResume() {

    var locations = [];

    locations.push(bio.contacts.location);

    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }

    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }

    return locations;
  }

  function addPinsToMap(locations) {

    var placesService = new google.maps.places.PlacesService(map);

    for (var location in locations) {

      var request = {
        query: locations[location]
      };

      placesService.textSearch(request, callback);
    }
  }

  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      var placeData = results[0];
      createMapMarker(placeData);
    }
  }

  function createMapMarker(placeData) {

    var lat = placeData.geometry.location.G;  
    var lon = placeData.geometry.location.K;  
    var name = placeData.formatted_address;   
    var bounds = window.mapBounds;            

    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    var infoWindow = new google.maps.InfoWindow({
      content: name
    });
    
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });
    
    bounds.extend(new google.maps.LatLng(lat, lon));
    map.fitBounds(bounds);
    map.setCenter(bounds.getCenter());
  }
}
