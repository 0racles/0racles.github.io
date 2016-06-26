this.addEventListener("install", function (event) {
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
    });

/*this.addEventListener('activate', function(event) {
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
});*/


this.addEventListener('fetch', function (event) {
	event.respondWith(
    caches.match(event.request)
    );
});