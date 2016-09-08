this.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open('v10').then(function (cache) {
         return cache.addAll(['/html/', 
          '/html/index.html',
          '/html/manifest.json',
          '/html/emergency.html',
          '/html/js/911.js', 
          '/html/js/all_scr.js',
          '/html/js/app.js',
          '/html/js/names.js',
          '/html/js/bootstrap.min.js',
          '/html/js/emergency.js',
          '/html/js/wow.min.js',
          '/html/rs-plugin/js/jquery.themepunch.tools.min.js',
          '/html/rs-plugin/js/jquery.themepunch.revolution.min.js',
          '/html/rs-plugin/assets/timer.png',
          '/html/js/jquery.min.js',
          '/html/js/jquery.parallax-0.2-min.js',
          '/html/scripts/wmb.py',
          '/html/scripts/wmb.txt',
          '/html/css/adaptive.css',
          '/html/css/animate.css',
          '/html/css/bootstrap.css',
          '/html/css/main.css',
          '/html/css/pushy.css',
          '/html/css/font-awesome.css',
          '/html/rs-plugin/css/settings.css',
          '/html/img/trapped_lady.jpg', 
          '/html/img/screaming.jpg', 
          '/html/img/location4.jpg', 
          '/html/img/embrace3.jpg',
          '/html/img/start/bg.jpg',
          '/html/img/bg.png',
          '/html/img/bg.jpg',
          '/html/img/send-icon.png',
          '/html/img/avatar/ava_11.jpg',
          '/html/img/avatar/ava_12.jpg',
          '/html/img/avatar/ava_13.jpg',
          '/html/img/avatar/ava_14.jpg',
          '/html/img/avatar/ava_15.jpg',
          '/html/img/avatar/ava_16.jpg',
          '/html/img/c_logo.jpg',
          '/html/font/fontawesome-webfont.woff?v=4.3.0',
          '/html/font/fontawesome-webfont.woff2?v=4.3.0',
          '/html/rs-plugin/font/revicons.woff?5510888',
          '/html/rs-plugin/font/revicons.ttf?5510888',
          '/html/font/fontawesome-webfont.ttf?v=4.3.0',
          '/html/img/wmb_128x128.png',
          '/html/img/wmb_144x144.png',
          '/html/img/wmb_152x152.png',
          '/html/img/wmb_192x192.png',
          '/html/img/wmb_256x256.png'
          ]);
        })
        );
    });

this.addEventListener('activate', function(event) {
  var cacheWhitelist = ['v10'];

  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (cacheWhitelist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});


this.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })

    );
});


this.addEventListener("push", function(event) {
   event.waitUntil(
     //for firefox
      //if (window.navigator.userAgent === "Mozilla/5.0 (Windows NT 6.1; rv:48.0) Gecko/20100101 Firefox/48.0") {
          fetch("https://updates.push.services.mozilla.com/wpush/v1/gAAAAABXpc44pT5ogGqBEcHwPWjGm50WXzUAPoAJDU_ab-TMq0wti6APsIK8xOSv8f7qiPOXjMrxek2jU2OGuM6B90hTf91Nig6HorHQewD_zc7RwImIIrou6n6NeBsBXMLLCuZJ0PBT").then(function(response) { 
              if (response !== 200) {
                  console.log("push notificaation failed")
              } else {
                  return event.showNotification(title, {
                        body : 'help me',
                        icon : 'screaming.jpg',
                        vibrate: [200, 100, 200, 100, 400],
                        // sound : 'enter sound file here',
                        tag : 'request',
                        actions : [
                        { action : "track", title : "wacth", icon : "fa fa-thumb-up"}, 
                        { action : "Ignore", title : "Ignore", icon : "fa fa-thumb-down"} ]
                      });
                     }
                   }) 
                  )});
    //} else if (window.navigator.userAgent === "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36") { 
   // for chrome
      /*    fetch('https://android.googleapis.com/gcm/send/d3y_NLnWo9I:APA91bFLvMI40RNs8fCqHlaV1aWxS99q2x3EJCjo60wrHzie445d2jvw9N631RQNw59nmV1t9CUaGdBs2b8fxPXj2aYAYApPd').then(function(response) {
              if (response !== 200) {
                  console.log("push notificaation failed")
              } else {
                  return reg.showNotification(title, {
                        body : 'help me',
                        icon : 'screaming.jpg',
                        vibrate: [200, 100, 200, 100, 400],
                        // sound : 'enter sound file here',
                        tag : 'request',
                        actions : [
                        { action : "track", title : "wacth", icon : "fa fa-thumb-up"}, 
                        { action : "Ignore", title : "Ignore", icon : "fa fa-thumb-down"} ]
                      });
                     }
                   }
          })*/
               