// insert service worker scripts here
this.addEventListener("install", function (event) {
      event.waitUntil(
        caches.open('v1').then(function (cache) {
          cache.addAll(['/html/', '/html/img/trapped_lady.jpg', '/html/img/screaming.jpg', '/html/img/location4.jpg', '/html/img/embrace3.jpg']);
        })
        );
    });

this.addEventListener("fetch", function (event) {
	event.respondWith(caches.match(event.request))
})    