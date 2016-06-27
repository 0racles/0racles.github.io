var app = (function () {
var 
i=0,
autorized = document.getElementById("autorized"),
autorized2 = document.getElementById("autorized2"),
autorized3 = document.getElementById("autorized3"),
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
upload_conatact = document.getElementById("upload_conatact"),
form = document.querySelectorAll(".form")[0],
pic_file = document.getElementById("pic_file"),
target =document.querySelectorAll(".target")[0],
replay = forms[2].getElementsByTagName("a")[0].firstElementChild,
mic = forms[2].getElementsByTagName("a")[0].lastElementChild,
xhr = new XMLHttpRequest(),
img = '<img accept="image/*">',
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

initiate_sw =function () {
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/html/sw.js', {scope : '/html/'}).then(function (reg) {
    console.log("you have succesfully registered. Scope is " + reg.scope);
  }).catch(function(error) { 
    console.log('Registration failed with the ' + error);
   }); 
 }
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
    /*parent = target.parentNode;
    if ("files" in pic_file) {
       //pic_file.textContent = "";
    if (pic_file.files.length == 1) {
      for (var y = 0; y < pic_file.files.length; y++) {
        var file = pic_file.files[y].name,
        genk = file; //pic_file.value;
        new_img = img.src = genk;
   /target.parentNode.removeChild(target);
     parent.insertAdjacentHTML("afterbegin", genk);
    event.preventDefault();
    //event.stopPropagation();
      }
    }
  }*/
  parent = target.parentNode;
  var file = new pic_file(chunks, {type:'image/jpg'});
  img_url = URL.createObjectURL(file);
  new_img.src = img_url;
  chunks.push(event.data);
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
        xhr.open('GET', 'https://dictation.nuancemobility.net/NMDPAsrCmdServlet/dictation?appId=NMDPTRIAL_generateauto44_gmail_com20160426151757&appKey=f0eaf19611476789164f28566790a97b416c70fcd8c5fb04f6e84c6be49412d47e036a8f4ad118612141b788d1610412cd740ea63909aa2ff1f69ad68badaa09&id=57349abd2390', true);
        //xhr.setRequestHeader('Transfer-Encoding: chunked', 'Content-Type: audio/x-pcm;bit=16;rate=8000', 'Accept: text/plain'
//, 'Accept-Language: en-US');
        xhr.setRequestHeader('Access-Control-Allow-Origin', 'https://dictation.nuancemobility.net/NMDPAsrCmdServlet/dictation');
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

test_see = function () {
  alert("you fucnking suckers better get a hang of it, and tell me the truth");
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
    mic.addEventListener("click", mic_check);
    test_see();
    xhr.addEventListener("readystatechange", progress_response, false);
    initiate_sw();
	};

	return {
		init : init
	};
}());
app.init();