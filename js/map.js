"use strict";


/* function to initialize google maps object

function initMap(){
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
          center: {lat: 38.2500, lng: -85.7667},
          zoom: 15
        });
    
} */

// Var to hold information from text boxes

var value1;
var value2;

// var to hold distance.

var value3;

// var to hold target latitude (target1) and longitude (target3)
var target1;
var target3;

//var to hold random numbers for dice mechanics. Generates a number range of 1 through 10
var dice1;

function diceFate () {
    dice1 = Math.floor((Math.random()*10)+1);
}
// Var to hold target information

// Function to generate target

function returnTarget() {
    diceFate ();
    

    if (dice1 == 1) {
        target1 = "37.8199";
        target3 = "-122.4783";
        document.getElementById("target2").innerHTML = "The target has decided to visit The Golden Gate Bridge in San Francisco.";
    } else if (dice1 == 2) {
        target1 = "28.3852";
        target3 = "-81.5639";
        document.getElementById("target2").innerHTML = "The target is visiting Walt Disney World in Orlando.";
    } else if (dice1 == 3) {
        target1 = "40.7829";
        target3 = "-73.9654";
        document.getElementById("target2").innerHTML = "The target can be found in Central Park in New York City.";
    } else if (dice1 == 4) {
        target1 = "40.6892";
        target3 = "-74.0445";
        document.getElementById("target2").innerHTML = "The target is near the Statue of Liberty on Liberty Island.";
    } else if (dice1 == 5) {
        target1 = "44.4280";
        target3 = "-110.5885";
        document.getElementById("target2").innerHTML = "The target is located in Yellowstone National Park.";
    } else if (dice1 == 6) {
        target1 = "38.8895";
        target3 = "-77.0353";
        document.getElementById("target2").innerHTML = "The target is near the Washington Monument in Washington D.C.";
    } else if (dice1 == 7) {
        target1 = "48.8791";
        target3 = "-103.4591";
        document.getElementById("target2").innerHTML = "The target is located near Mount Rushmore National Memorial in South Dakota.";
    } else if (dice1 == 8) {
        target1 = "38.2572";
        target3 = "-85.7540";
        document.getElementById("target2").innerHTML = "The target is at KFC Yum! Center in Louisville.";
    } else if (dice1 == 9) {
        target1 = "36.1162";
        target3 = "-115.1745";
        document.getElementById("target2").innerHTML = "The target is at Caesers Palace in Las Vegas.";
    } else {
        target1 = "38.6247";
        target3 = "-90.1848";
        document.getElementById("target2").innerHTML = "The target is near the Gateway Arch in St. Louis.";
        
    }
    
    
    
};






// Function to send values to map and generate the result
function finalResult() {
    
   value1 = document.getElementById("latitude").value;
   value2 = document.getElementById("longitude").value;
    
    
    
    
    initMap();
    winLose();
    
    
}



// Function to display map and generate the distance result

function initMap() {
  var bounds = new google.maps.LatLngBounds;
  var markersArray = [];

  var origin1 = new google.maps.LatLng(value1, value2);
  
  var destinationA = new google.maps.LatLng(target1, target3);
  
// sets the icons to place on the map 
  var destinationIcon = 'https://chart.googleapis.com/chart?' +
      'chst=d_map_pin_letter&chld=D|FF0000|000000';
  var originIcon = 'https://chart.googleapis.com/chart?' +
      'chst=d_map_pin_letter&chld=O|FFFF00|000000';
    
    // New map object centered on louisville ky
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 38.2500, lng: -85.7667},
    zoom: 15
  });
    
    // enable the geocoder for information about locations
  var geocoder = new google.maps.Geocoder;
    
 // enable the distance matrix service for telling distance between locations
  var service = new google.maps.DistanceMatrixService;
    
    //retrieves distance matrix info about target
  service.getDistanceMatrix({
    origins: [origin1],
    destinations: [destinationA],
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.IMPERIAL,
    avoidHighways: false,
    avoidTolls: false
  }, function(response, status) {
    if (status !== google.maps.DistanceMatrixStatus.OK) {
      alert('Error was: ' + status);
    } else {
      var originList = response.originAddresses;
      var destinationList = response.destinationAddresses;
       var outputDiv = document.getElementById('output');
      outputDiv.innerHTML = '';
      deleteMarkers(markersArray);
        
//places the markers on the map
      var showGeocodedAddressOnMap = function(asDestination) {
        var icon = asDestination ? destinationIcon : originIcon;
        return function(results, status) {
          if (status === google.maps.GeocoderStatus.OK) {
            map.fitBounds(bounds.extend(results[0].geometry.location));
            markersArray.push(new google.maps.Marker({
              map: map,
              position: results[0].geometry.location,
              icon: icon
            }));
          } else {
            alert('Geocode was not successful due to: ' + status);
          }
        };
      };
        
        
// creates textstring and outputs it to webpage as text
      for (var i = 0; i < originList.length; i++) {
        var results = response.rows[i].elements;
        geocoder.geocode({'address': originList[i]},
            showGeocodedAddressOnMap(false));
        for (var j = 0; j < results.length; j++) {
          geocoder.geocode({'address': destinationList[j]},
              showGeocodedAddressOnMap(true));
           outputDiv.innerHTML += originList[i] + ' to ' + destinationList[j] +
              ': ' + results[j].distance.text + ' in ' +
              results[j].duration.text + '<br>';
            
            
//stores distance text value in value3 var so it can be used in other code 
            value3 = results[j].distance.text;
        }
          
          
      }
    
    }
      
      
      
          
          
      
  });
}
// takes distance data and determines if player won or not. It then displays the html on the webpage. 
function winLose() {
          var results1 = value3;
          var results2 = parseInt(results1);
          if (results2 <= 250) {
              document.getElementById("results3").innerHTML = "YOU WIN! The target has been found."
          } else {
              
              document.getElementById("results3").innerHTML = "SORRY, YOU LOSE! The target got away this time."
              
          }
}
    
  //clears markers from screen  

function deleteMarkers(markersArray) {
  for (var i = 0; i < markersArray.length; i++) {
    markersArray[i].setMap(null);
  }
  markersArray = [];
}