this.addEventListener("install", function (event) {
      event.waitUntil(
        caches.open('v3').then(function (cache) {
         return cache.addAll(['/html/', 
          '/html/index.html',
          '/html/js/',
          '/html/js/911.js', 
          '/html/img/',
          '/html/img/trapped_lady.jpg', 
          '/html/img/screaming.jpg', 
          '/html/img/location4.jpg', 
          '/html/img/embrace3.jpg'
          ]);
        })
        );
    });



/*this.addEventListener('fetch', function (event) {
	event.respondWith(
    caches.match(event.request)
    );
});*/