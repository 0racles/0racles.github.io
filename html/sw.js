/*this.addEventListener("install", function (event) {
      event.waitUntil(
        caches.open('v1').then(function (cache) {
         return cache.addAll(['/html/', 
          '/html/index.html',
          '/html/js/911.js', 
          '/html/img/trapped_lady.jpg', 
          '/html/img/screaming.jpg', 
          '/html/img/location4.jpg', 
          '/html/img/embrace3.jpg'
          ]);
        })
        );
    });

this.addEventListener("install", function (event) {
      event.waitUntil(
        caches.open('v2').then(function (cache) {
         return cache.addAll(['/html/', 
          '/html/index.html',
          '/html/js/911.js', 
          '/html/css/adaptive.css',
          '/html/css/animate.css',
          '/html/css/bootstrap.css',
          '/html/css/main.css',
          '/html/css/pushy.css',
          '/html/css/font-awesome.css',
          '/html/img/trapped_lady.jpg', 
          '/html/img/screaming.jpg', 
          '/html/img/location4.jpg', 
          '/html/img/embrace3.jpg'
          ]);
        })
        );
    });*/

this.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open('v8').then(function (cache) {
         return cache.addAll(['/html/', 
          '/html/index.html',
          '/html/emergency.html',
          '/html/js/911.js', 
          '/html/js/all_scr.js',
          '/html/js/app.js',
          '/html/js/bootstrap.min.js',
          '/html/js/emergency.js',
          '/html/js/wow.min.js',
          '/html/rs-plugin/js/jquery.themepunch.tools.min.js',
          '/html/rs-plugin/js/jquery.themepunch.revolution.min.js',
          '/html/rs-plugin/assets/timer.png',
          '/html/js/jquery.min.js',
          '/html/js/jquery.parallax-0.2-min.js',
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
          '/html/font/fontawesome-webfont.woff?v=4.3.0',
          '/html/font/fontawesome-webfont.woff2?v=4.3.0',
          '/html/rs-plugin/font/revicons.woff?5510888',
          '/html/rs-plugin/font/revicons.ttf?5510888',
          '/html/font/fontawesome-webfont.ttf?v=4.3.0'
          ]);
        })
        );
    });

this.addEventListener('activate', function(event) {
  var cacheWhitelist = ['v8'];

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
    caches.match(event.request)
    );
});