let mainLocationCoordinates = [9.5624, 44.0770];// set the coordinates of the main location

//set zoomLevel to large city
var zoomLevel = 14;

var map = L.map("map").setView(mainLocationCoordinates, zoomLevel)

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',

id: 'mapbox.streets',
accessToken: 'pk.eyJ1IjoiYWJkYWxhMjAyMCIsImEiOiJjazZxeWIzNTMwMGVrM2VvM2l1dzlseXM3In0.-fJwIngwndBlID5_SPKsAg'

}).addTo(map)

var airportCordinates = [9.5624, 44.0770]
var RRCMarker = L.marker(airportCordinates).bindPopup("RoyalRental Car").addTo(map)


