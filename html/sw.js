this.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open('v1').then(function (cache) {
         return cache.addAll([
          'index.html',
          'manifest.json',
          'emergency.html',
          'js/all_scr.js',
          'js/app.js',
          'js/names.js',
          'js/bootstrap.min.js',
          'js/emergency.js',
          'js/wow.min.js',
          'rs-plugin/js/jquery.themepunch.tools.min.js',
          'rs-plugin/js/jquery.themepunch.revolution.min.js',
          'rs-plugin/assets/timer.png',
          'js/jquery.min.js',
          'js/jquery.parallax-0.2-min.js',
          'scripts/wmb.py',
          'scripts/wmb.txt',
          'css/adaptive.css',
          'css/animate.css',
          'css/bootstrap.css',
          'css/main.css',
          'css/pushy.css',
          'css/font-awesome.css',
          'rs-plugin/css/settings.css',
          'img/trapped_lady.jpg', 
          'img/screaming.jpg', 
          'img/location4.jpg', 
          'img/embrace3.jpg',
          'img/start/bg.jpg',
          'img/bg.png',
          'img/bg.jpg',
          'img/send-icon.png',
          'img/avatar/ava_11.jpg',
          'img/avatar/ava_12.jpg',
          'img/avatar/ava_13.jpg',
          'img/avatar/ava_14.jpg',
          'img/avatar/ava_15.jpg',
          'img/avatar/ava_16.jpg',
          'img/c_logo.jpg',
          'font/fontawesome-webfont.woff?v=4.3.0',
          'font/fontawesome-webfont.woff2?v=4.3.0',
          'rs-plugin/font/revicons.woff?5510888',
          'rs-plugin/font/revicons.ttf?5510888',
          'font/fontawesome-webfont.ttf?v=4.3.0',
          'img/wmb_128x128.png',
          'img/wmb_144x144.png',
          'img/wmb_152x152.png',
          'img/wmb_192x192.png',
          'img/wmb_256x256.png'
          ]);
        })
        );
    });

this.addEventListener('activate', function(event) {
  var cacheWhitelist = ['v1'];

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

self.addEventListener('push', function(event) {
  console.log('[Service Worker] Push Received.');
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

  const title = 'Push Codelab';
  const options = {
    body: 'Yay it works.'
   // icon: 'images/icon.png',
    //badge: 'images/badge.png'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});


//this.addEventListener("push", function(event) {
 //  event.waitUntil(
     //for firefox
      //if (window.navigator.userAgent === "Mozilla/5.0 (Windows NT 6.1; rv:48.0) Gecko/20100101 Firefox/48.0") {
        //  fetch("https://updates.push.services.mozilla.com/wpush/v1/gAAAAABXpc44pT5ogGqBEcHwPWjGm50WXzUAPoAJDU_ab-TMq0wti6APsIK8xOSv8f7qiPOXjMrxek2jU2OGuM6B90hTf91Nig6HorHQewD_zc7RwImIIrou6n6NeBsBXMLLCuZJ0PBT").then(function(response) { 
           //   if (response !== 200) {
               //   console.log("push notificaation failed")
          //    } else {
            //      return event.showNotification(title, {
              //          body : 'help me',
               //         icon : 'screaming.jpg',
                //        vibrate: [200, 100, 200, 100, 400],
               //         // sound : 'enter sound file here',
                //        tag : 'request',
                //        actions : [
               //         { action : "track", title : "wacth", icon : "fa fa-thumb-up"}, 
                  //      { action : "Ignore", title : "Ignore", icon : "fa fa-thumb-down"} ]
                //      });
                //     }
               //    }) 
                //  )});
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
               