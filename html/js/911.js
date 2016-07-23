var app = (function () {
var 
i=0,
autorized = document.getElementById("autorized"),
autorized2 = document.getElementById("autorized2"),
autorized3 = document.getElementById("autorized3"),
autorized4 = document.getElementById("autorized4"),
validate1 = document.getElementById("validate1"),
validate2 =document.getElementById("validate2"),
play =document.querySelectorAll(".play"),
forms = document.getElementsByTagName("FORM"),
audio = document.createElement("audio"),
saveButton = document.createElement("button"),
//play = document.getElementById("play"),
play2 = document.getElementById("play2"),
play3 = document.getElementById("play3"),
go_btn = document.querySelectorAll(".btns"),
back = document.querySelectorAll(".back"),
avataro = document.querySelectorAll(".avataro")[0],
head = document.getElementById("head"),
send_invite = document.getElementById("send_invites"),
invite_contact = document.getElementById("invite_contact"),
form = document.querySelectorAll(".form")[0],
pic_file = document.getElementById("pic_file"),
target =document.querySelectorAll(".target")[0],
replay = forms[2].getElementsByTagName("a")[0].firstElementChild,
mic = forms[2].getElementsByTagName("a")[0].lastElementChild,
xhr = new XMLHttpRequest(),
img = '<img accept="image/*">',
body = document.body,
//mic = document.querySelectorAll(".mic")[0],
open_settings,
perform_validation,
sign_in,
div,
go_back,
go_back2,
go_back3,
send_invites,
span,
span_2,
span_3,
existing_data = {},
storedData,
chunks = [],
// dropdown for microphone settings

// push notification begin here

/*this.addEventListener("push", event => {
   event.waitUntil(() => {
     if (event.data) {
      return Promise.resolve(event.data);
     } 
     return fetch("demo_sse.php").then(response => response.json());
).then(data => {
 return this.registration.showNotification(title, {
    body : 'help me',
    icon : 'screaming.jpg',
    vibrate: [200, 100, 200, 100, 400],
    tag : 'request',
    actions : [
    { action : "track", title : "wacth", icon : "fa fa-thumb-up"}, 
    { action : "Ignore", title : "Ignore", icon : "fa fa-thumb-down"} ]
  });
});  // this is for the click event

this.addEventListener("notificationclick", event => {
event.waitUntil(() => 
   event.notification.close();
  )

});*/

initiate_sw = function () {
  //var source = new EventSource("demo_sse.php");
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

open_settings = function() {
   autorized.classList.remove("none");
   //gogo.classList.remove("none");
},

// if mic settings passed, go touser settings 

//if user settings passed, go to add contacts using slider revolution 
sign_in = function (event) {
    
    autorized.insertAdjacentHTML("beforebegin", "<ul><li data-transition='slideout' data-slotamount='2' data-masterspeed='100'><div class='tp-caption lft fadeout rs-parallaxlevel-1' data-x='950' data-y='510' data-speed='100' data-start='0' data-easing='Power4.easeOut'></div></li></ul>");
    autorized2.classList.remove("none");
    event.preventDefault();
    event.stopPropagation();
   },

   invite_contacts = function (event) {
    var userName = validate1.getAttribute("name"),
        userNamevalue = validate1.value,
        userEmail = validate2.getAttribute("name"),
        userEmailvalue = validate2.value;
    if ((validate1.value && validate2.value) === "") { 
           validate1.placeholder = "enter full names";
           validate2.placeholder = "enter unique password";
           validate1.style.border = "1px solid red";
           validate2.style.border = "1px solid red";
       } else {
      set_local_storage(userName, userNamevalue);
      set_local_storage(userEmail, userEmailvalue);
      }
      event.preventDefault();
      event.stopPropagation();
   },

// this is to close and open move the log in slides
   
   go_back = function () {
   autorized.classList.add("none");
    event.preventDefault();
    event.stopPropagation();
   },

   go_back2 = function () {
   autorized2.classList.add("none");
    event.preventDefault();
    event.stopPropagation();
   },

   go_back3 = function () {
   autorized3.classList.add("none");
    event.preventDefault();
    event.stopPropagation();
   },

   go_back4 = function () {
   autorized4.classList.add("none");
    event.preventDefault();
    event.stopPropagation();
   },

   // voice password page
  voice_page = function () {
   autorized3.classList.remove("none");
 },

   invite_friends = function () {
    autorized4.classList.remove("none");
   },

   // send invites to friends

   send_invites = function () {
    var parg = head.parentNode;

  if (!autorized3.classList.contains("none")) {
      avataro.parentNode.removeChild(avataro);
      upload_conatact.parentNode.removeChild(upload_conatact);
      send_invite.parentNode.removeChild(send_invite);

  span = "<span style='font-size:40px;font-weight:500;position:absolute;left:10%;'></span><p class='container avatari' id='take_text' style='text-align:center;'>Hey! would you like to try out this cool App with me. We can look out for each other and keep safe <a href='#'>Check it out</a></p>",
  span_2 = "<a href='report_page.html' class='btn btn-success' id='first_btn'></a>";
  span_3 = "";
  form.insertAdjacentHTML("beforeend", span);
  form.insertAdjacentHTML("beforeend", span_2); 
  parg.replaceChild('<h3>Compose Message<span></span></h3>', head);
  }

  /*h3_take.textContent = "";
  take_text.classList.remove("loading");
  if (msg_parser) {
  
  remove_quota()
  } else {
  span = "<span class='fa fa-times' style='color:red;font-size:40px;font-weight:500;position:absolute;left:40%;'></span><br><br><p class='container page_info_2' id='take_text' style='text-align:center;'>Message Not sent. Try Again</p>";
  span_2 = "<a href='report_page.html' class='btn btn-warning' id='first_btn'>continue</a>";
  parent.insertAdjacentHTML("beforeend", span);
  parent.insertAdjacentHTML("beforeend", span_2);
      }*/
   },

  // uploading user photo

  handleFiles = function (event) {
    var myImage = new Image();
    parent = target.parentNode;
  var img = this.files[0];
  var img_url = window.URL.createObjectURL(img);
  myImage.src = img_url;
  myImage.style.top = '-88px';
  myImage.style.margin = 'auto';
  myImage.style.padding = '0px 0px 10px';
  myImage.style.borderRadius = '100px';
  parent.replaceChild(myImage, target);
  set_local_storage('user_image', img_url);
},

set_local_storage = function (a, b) {
  window.localStorage.setItem(a, b)
},

get_local_Storage = function  () {
  var storeData = window.localStorage,
  existingdata = {
    "name" : storeData.getItem("userName"),
    "email" : storeData.getItem("userEmail")
  };
  if (existingdata.name !== null) {
    validate1.value = existingdata.name;
  }

  if (existingdata.email !== null) {
    validate2.value = existingdata.email;
  }

},

  mic_check = function () {
   navigator.getUserMedia = (navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia || navigator.msGetUserMedia);
    if (navigator.getUserMedia) {
      navigator.getUserMedia({audio:true}, onSuccess, onFail)
    } else {
      alert("webtrc isn't working");
    }

    function onSuccess (stream) {

      mediaRecorder = new MediaRecorder(stream);

      mediaRecorder.start(stream);
      console.log(mediaRecorder.state);
      //forms[2].firstElementChild.src = "../html/img/mic_icon.PNG";
      alert(mediaRecorder.state);

      

      replay.onclick = function (event) {
      var msg = new SpeechSynthesisUtterance(),
      voices = window.speechSynthesis.getVoices();
      msg.voice = voices[8];
      msg.voiceURI = 'Google espanol';
      msg.lang = 'es-ES';
      msg.volume = 1;
      msg.pitch = 2;
      msg.text = 'Your secret Magic word is, help me';
      msg.rate = 0.8;
    window.speechSynthesis.speak(msg);

        mediaRecorder.stop();
         mic.style.color = '#000000';
         alert(mediaRecorder.state);
      }

        mediaRecorder.onstop = function (e) {
          audio.setAttribute("controls", "");
      saveButton.textContent = "Save";
      saveButton.className = "save";

      //forms[2].insertAdjacentHTML("afterbegin", audio);
      var first = forms[2].firstElementChild,
      newnode = forms[2].insertBefore(audio, first);
      forms[2].insertBefore(saveButton, first);

      var blob = new Blob(chunks, {type: 'audio/ogg'});
      audioURL = URL.createObjectURL(blob);
      audio.src = audioURL;

        }
       

      mediaRecorder.ondataavailable = function (event) {
        chunks.push(event.data);
      }

      saveButton.onclick = function (e) {
        //xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://dictation.nuancemobility.net/NMDPAsrCmdServlet/dictation?appId=NMAID_FOO&appKey=525348e77144a9cee9a7471a8b67c50ea85b9e3eb377a3c2a3a23dc88f9150eefe76e6a339fdbc62b817595f53d72549d9ebe36438f8c2619846b963e9f43a93&id=57349abd2390', true);
        //xhr.setRequestHeader('Transfer-Encoding: chunked', 'Content-Type: audio/x-pcm;bit=16;rate=8000', 'Accept: text/plain'
//, 'Accept-Language: en-US');
        xhr.setRequestHeader('Access-Control-Allow-Origin', 'https://dictation.nuancemobility.net');
        xhr.setRequestHeader('Transfer-Encoding', 'chunked');
        xhr.setRequestHeader('Content-Type', 'audio/x-pcm;bit=16;rate=8000');
        xhr.setRequestHeader('Accept', 'text/plain');
        xhr.setRequestHeader('Accept-Language', 'en-US');
        xhr.send(audioURL);
        xhr.onreadystatechange = progress_response;
      }   
    
    }
    //onChangeStateResult
    // "http://www.example.org/example.txt"
    

    function onFail () {
      alert("no microphone");
    }

},

 progress_response = function (e) {
   if (this.readyState === 4) {
         //response = JSON.parse(xhr.responseText);
         alert(this.readyState + ": " + this.status + ": " + this.responseText);
      }
        },

asr = function () {

  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
  var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
  var grammar = '#JSGF V1.0; grammar colors; public <color> = help | assist me | Jesus | oh my God | aaaaahhhhh | yaay | danger | help me | i need help | leave me alone | i am dying';
  var speechRecognitionList = new SpeechGrammarList();
  var recognition = new SpeechRecognition();
  speechRecognitionList.addFromString(grammar, 1);
  recognition.grammar = speechRecognitionList;
  recognition.lang = 'en-GB',
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  mic.onclick = function (e) {
    recognition.start();
    console.log('its time to say your secret magic word');
    setInterval(function () { mic.style.color = mic.style.color == 'black' ? 'red' : 'black'}, 200);
    setInterval(function () {mic.style.transform = mic.style.transform == 'rotate(360deg)' ? 'rotate(-360deg)' : 'rotate(360deg)'}, 200);
  }

  recognition.onresult = function (event) {
    var password = event.results[0][0].transcript;
    forms[2].firstElementChild.textContent = password;
    forms[2].firstElementChild.margin = 'auto';
    forms[2].firstElementChild.padding = '0px 0px 10px';
    
    msg = new SpeechSynthesisUtterance(),
    voices = window.speechSynthesis.getVoices();
      msg.voice = voices[8];
      msg.voiceURI = 'Google english';
      msg.lang = 'en-GB';
      msg.volume = 1;
      msg.pitch = 2;
      msg.text = 'Your secret Magic word is,  ' +  password + '. You can click the save button to continue';
      msg.rate = 0.8;
    window.speechSynthesis.speak(msg);
  }

recognition.onspeechend = function () {
  recognition.stop();
  saveButton.textContent = "Save";
  saveButton.className = "save";
  mic.style.color = '#e73931';
  mic.style.transform = 'none';

  var last = forms[2].lastElementChild,
  newnode = forms[2].insertBefore(audio, last);
  forms[2].insertBefore(saveButton, last);
}

recognition.onnomatch = function () {
  console.log('No match was found at the moment');
   mic.style.color = '#e73931';
  mic.style.transform = 'none';
  forms[2].textContent = password;
}

recognition.onerror = function () {
  console.log('An error was found');
   mic.style.color = '#e73931';
  mic.style.transform = 'none';
  forms[2].textContent = password;
}

},

invite_contact_func = function () {
  form_modal = autorized4.getElementsByTagName('form')[0];
  form_childs = form_modal.children;
  for (var i = 0; i < form_childs.length; i++) {
    form_modal.removeChild(form_childs[i]);
  }
  console.log(form_modal.children.length);
  form_modal.classList.add("loading");
  setTimeout(compose_msg(form_modal), 10000);
}

compose_msg = function (x) {
  if (x.children.length === 1) {
  autorized4.getElementsByTagName('h3')[0].textContent = 'Compose';
  x.classList.remove("loading");
  el_obj = {
  textarea : "<textarea class='text_area' placeholder='write message here....'></textarea>",
  well_done : "<span class='fa fa-thumbs-o-up' style='color:green;font-size:40px;font-weight:500;position:absolute;left:40%;'></span><br><br><p class='container page_info_2' id='take_text' style='text-align:center;'>Message succesfully sent</p>",
  button1 : "<a href='#' class='butt' style='text-decoration : none;' onclick='success_msg()' id='first_btn'>send</a>",
 button2 : "<a href='emergency.html' class='btn btn-primary' style='text-decoration : none;' onclick='success_msg()' id='fin_btn'>Well Done, Continue</a>",
  one : "<i class='fa fa-hand-o-left back' id='one' title='back'></i>", 
  two : "<i class='fa fa-thumbs-o-up done' id='two' title='done'></i>",
  List : "<ul style='list-style:none;'><li><span>0</span> Messages sent</li> <li><span>0</span> friends being Watched</li> <li><span>0</span> friend Watching you</li></ul>",
  div : "<div class='add-btn' title='add more friends'>+</div>         <div class='minus-btn' title='remove friends'>-</div>"
}; 
 // x.appendChild(el_obj.textarea);
  //x.appendChild(el_obj.button)
 cache = [el_obj.one, el_obj.two];
 x.insertAdjacentHTML("afterbegin", el_obj.textarea);
 x.insertAdjacentHTML("beforeend", el_obj.button1);
// x.insertAdjacentHTML("beforeend", cache);
   }
},

success_msg = function () {
  form_childs = form_modal.children;
  for (var i = 0; i < form_childs.length; i++) {
    form_modal.removeChild(form_childs[i]);
    }
    message_sent(form_modal);
  },

  message_sent = function (y) {
    autorized4.getElementsByTagName('h3')[0].textContent = 'Profile Completed';
    y.insertAdjacentHTML("beforeend", el_obj.well_done);
    y.insertAdjacentHTML("beforeend", el_obj.List);
    y.insertAdjacentHTML("beforeend", el_obj.div);
    y.insertAdjacentHTML("beforeend", el_obj.button2);
    two = document.getElementById('two');
    two.parentNode.removeChild(two);
  },

test_see = function () {

},

  init = function () {
    for (i; i < go_btn.length; i++) {
    go_btn[i].addEventListener("click", open_settings);
  }
    back[0].addEventListener("click", go_back);
    back[1].addEventListener("click", go_back2);
    back[2].addEventListener("click", go_back3);
    back[3].addEventListener("click", go_back4);
    play[0].addEventListener("click", sign_in);
    play[1].addEventListener("click", voice_page);
    play[2].addEventListener("click", invite_friends)
    play[3].addEventListener("click", send_invites);
    pic_file.addEventListener("change", handleFiles, false);
    get_local_Storage();
    //mic.addEventListener("click", mic_check);
    test_see();
    xhr.addEventListener("readystatechange", progress_response, false);
    initiate_sw();
    invite_contact.addEventListener("click", invite_contact_func);
    asr();
  };

  return {
    init : init
  };
}());
app.init();