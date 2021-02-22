var cacheName = 'demo-app';
self.addEventListener("activate", function(e) {
  console.log("[ServiceWorker] Activate");
});

self.addEventListener('install', function(e) {
  e.waitUntil(
   caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
    cache.addAll([
        '/',
        '/about',
        '/index.html',  
        '/static/js/bundle.js',
        '/static/js/main.chunk.js',
        '/static/js/0.chunk.js',
        "/manijest.json",
        "/static/media/logo.6ce24c58.svg",
       
      ]
   
    )
    }).catch((err)=>{
        console.log("err",err)
    })
  );
});

self.addEventListener('fetch', function(e) {
 
  if(!navigator.onLine){
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
}
});