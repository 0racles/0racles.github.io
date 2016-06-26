this.addEventListener("install", function (event) {
      self.skipWaiting(
        /*caches.open('v2').then(function (cache) {
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
        })*/
      console.log('this is an installation page')
        );
    });

this.addEventListener('activate', function(event) {
  var cacheWhitelist = ['v2'];

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
    /*caches.match(event.request)*/
    console.log('this is the fetch place')
    );
});