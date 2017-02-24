var app = (function () {
var 
i=0,
innerpage = document.getElementById("innerpage"),
map_place = document.getElementById("map_place"),
chat_cont = document.querySelectorAll('.chat-container')[0],
chat_messages = chat_cont.getElementsByTagName('DIV')[0],
text_box = document.getElementById('text-boxo'),
send_butt = document.querySelectorAll('.sent-indicator')[0],
address = document.querySelectorAll(".address")[0],
basic = document.querySelectorAll(".basic")[0],
chat_button = document.getElementById("chat_button"),
user_name = document.getElementById("user_name"),
user_image = document.querySelectorAll('.user_image'),
user_name2 = document.getElementById("user_name2"),
similar = document.querySelectorAll(".similar")[0],
addy_alert = document.querySelectorAll(".addy_alert"),
log_btn = document.querySelectorAll(".log_btn")[0],
side_menu = document.querySelectorAll(".side_menu")[0].getElementsByTagName("A"),
get_user_position,
z = 0,
newLocation,

initiate_sw2 = function () {
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/html/s-w.js', {scope : '/html/'}).then(function (reg) {
    console.log("you have succesfully registered. Scope is " + reg.scope);
    reg.pushManager.subscribe().then(function (pushSubscription) {
      console.log(pushSubscription.endpoint);
    })
  }).catch(function(error) { 
    console.log('Registration failed with ' + error);
   }); 
 }

 this.onpush = function (event) {
   if(event.data) {
    console.log(event.data);
   }
 }
 // send the push notification
},


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
    user_name2.textContent = window.localStorage.getItem("userName");
    load_user_photo();
    load_user_photo2();
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
      //map : chat_messages,
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
        reset_mob_view (results[0].formatted_address, results[0].address_components[0].short_name + ", " + results[0].address_components[1].short_name + '<br>' + currentTime);
      }
    })
},
clear_bubble = function (event) {
  if (document.querySelectorAll(".chat-messages")[0].children.length >= 1) {
   $(address).hide();
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


load_user_photo = function  () {
  var storeData = window.localStorage,
  myImage = new Image(),
  existingdata = {
    "name" : storeData.getItem("userName"),
    "email" : storeData.getItem("userEmail"),
    "userImage" : storeData.getItem('user_image')
  };
  if (existingdata.userImage !== null) {
    myImage.src = existingdata.userImage;
    user_image[0].parentNode.replaceChild(myImage, userImage);
  }

},

load_user_photo2 = function  () {
  var storeData = window.localStorage,
  myImage = new Image(),
  existingdata = {
    "userImage" : storeData.getItem('user_image')
  };
  if (existingdata.userImage !== null) {
    myImage.src = existingdata.userImage;
    user_image[0].parentNode.replaceChild(myImage, user_image[0]);
    //user_image[1].parentNode.replaceChild(myImage, user_image[1]);
  }

},

// for mobile view not more than 500px wide

reset_mob_view = function (res, addy) {
  if (window.innerWidth <= 500) {
  log_btn.textContent = res;
  side_menu[0].insertAdjacentHTML('beforeend', addy);
  side_menu[1].insertAdjacentHTML('beforeend', addy);
  side_menu[2].insertAdjacentHTML('beforeend', addy);
  side_menu[3].insertAdjacentHTML('beforeend', addy);

  }
},

alerto = function () {
  alert('thanks, but i am working now');
},

  init = function () {
   google.maps.event.addDomListener(window, "load", initialize_geo(get_user_position));
   initiate_sw2();
   //chat_button.addEventListener("click", replace_comment_sec);
  };
text_box.addEventListener("input", clear_bubble);
  
  return {
    init : init
  };
}());
app.init();