var app = (function () {
var 
i=0,
map_place = document.getElementById("map_place"),
address = document.querySelectorAll(".address")[0],
basic = document.querySelectorAll(".basic")[0],
chat_button = document.getElementById("chat_button"),
user_name = document.getElementById("user_name"),
user_name2 = document.getElementById("user_name2"),
similar = document.querySelectorAll(".similar")[0],
addy_alert = document.querySelectorAll(".addy_alert"),
get_user_position,
z = 0,
newLocation,


initialize_geo = function (callback) {
    
    mapOptions = {
      center : new google.maps.LatLng(6.5833, 3.7500),
      zoom : 8
    };
    geo_Map = new google.maps.Map(map_place, mapOptions);
    map_place.classList.add(".loading");
    callback();
    clear_bubble();
    user_name.textContent = window.localStorage.getItem("userName");
    user_name2.textContent = window.localStorage.getItem("userName")

 },
    

get_user_position = function () {
    navigator.geolocation.watchPosition(positionSuccess, positionError, positionOptions);
}
    var positionOptions = {
      enableHighAccuracy : true,
      maximumAge : 1000000,
      timeout : 6000000
    },

    positionSuccess = function (position) { 
    newLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
   map_place.classList.remove(".loading");  
  
    marker = new google.maps.Marker({
      position : newLocation,
      map : geo_Map,
      draggable : true,
      //label : "D",
      //icon : 'img/start/map_icons/medium_house.png',
      title : "Hey there!",
      animation : google.maps.Animation.BOUNCE  
     });
    geo_Map.setZoom(18);
    geo_Map.setCenter(newLocation);
    disp_addy(newLocation);
    //set_time();
    }, 

    positionError = function () {
      console.log("sorry your postion cannot be found at this time");
    },

disp_addy = function (location) {
var d = new Date (),
currentTime = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  geocoder = new google.maps.Geocoder();
  geocoder.geocode({'location': location}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
        address.textContent = "Hey, i'm at " + results[0].formatted_address;
        set_address(results[0].address_components[0].short_name + ", " + results[0].address_components[1].short_name + '<br>' + currentTime);
        
      }
    })
},
clear_bubble = function () {
  if (document.querySelectorAll(".chat-messages")[0].children.length >= 0) {
   // $(address).hide();
  } else {
    $(address).show();
  }

  /* var child_element = basics.querySelectorAll(".chat-container")[0];
  child_ref = child_element.parentNode.removeChild(child_element);
   console.log(child_ref);*/
},

/*replace_comment_sec = function (event) {
  basics.appendChild(child_ref);
  event.preventDefault();
},*/

/*set_time = function () {
  var d = new Date (),
  board = similar.getElementsByTagName('span'),
  currentTime = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  for (i; i < board.length; i++) {
   board[i].insertAdjacentHTML("beforeend", currentTime);
   //board[i].insertAdjacentHTML("beforeend", currentTime);
  }
},*/

set_address = function (addy) {
  var addy_alert = similar.getElementsByTagName('a');
  for (i; i < addy_alert.length; i++) {
    addy_alert[i].insertAdjacentHTML('afterbegin', addy);
  }
},


	init = function () {
   google.maps.event.addDomListener(window, "load", initialize_geo(get_user_position));
   //chat_button.addEventListener("click", replace_comment_sec);
   alert("we are the only two people in the world");
	};

	return {
		init : init
	};
}());
app.init();