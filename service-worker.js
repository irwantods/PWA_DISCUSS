const CACHE_NAME = "PWAkedua-v0";
var urlsToCache = [
    "/",
    "/manifest.json",
    "/nav.html",
    "/index.html",
    //page navigasi
    "/pages/home.html",
    "/pages/saved.html",
    "/pages/standing.html",
    "/pages/team.html",
    "/detail-team.html",
    // css
    "/asset/css/materialize.min.css",
    "/asset/css/style.css",
    "https://fonts.googleapis.com/icon?family=Material+Icons",
    // "http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js",
    "/asset/css/Quicksand-VariableFont_wght.ttf",
    // aset image home
    "./asset/img/10.webp",
    "./asset/img/8.webp",
    "./asset/img/5.webp",
    "./asset/img/2.webp",
    "./asset/img/11.webp",
    "./asset/img/3.webp",
    "./asset/img/save.png",
    "./asset/img/pwa.png",
    "./asset/img/update.png",
    "./asset/img/6.webp",
    //file JS
    "/script/preloader.js",
    "/script/save-team.js",
    "/script/nav.js",
    "/sw-register.js",
    "/script/materialize/materialize.min.js",
    "/script/api/api.js",
    "/script/idb/idb.js",
    "/script/idb/db.js",
    //icon
    "./soccer-ball-128.ico",
    "./asset/img/soccer-ball-512.png",
    "./asset/img/soccer-ball-384.png",
    "./asset/img/soccer-ball-256.png",
    "./asset/img/soccer-ball-192.png",
    "./asset/img/soccer-ball-152.png",
    "./asset/img/soccer-ball-144.png",
    "./asset/img/soccer-ball-128.png",
    "./asset/img/soccer-ball-64.png",
    "./asset/img/soccer-ball-32.png"
];

self.addEventListener("install", function(event) {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(urlsToCache);
        })
    );
});
self.addEventListener("activate", function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheName != CACHE_NAME) {
                        console.log("ServiceWorker: cache " + cacheName + "dihapus");
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
self.addEventListener("fetch", function(event) {
    let base_url = "https://api.football-data.org/v2/";
    if (event.request.url.indexOf(base_url) > -1) {
        event.respondWith(
            caches.open(CACHE_NAME).then(function(cache) {
                return fetch(event.request).then(function(response) {
                    cache.put(event.request.url, response.clone());
                    return response;
                })
            })
        );
    } else {
        event.respondWith(
            caches.match(event.request, { ignoreSearch: true }).then(function(response) {
                return response || fetch(event.request);
            })
        )
    }
});

self.addEventListener('push', function(event) {
    var body;
    if (event.data) {
        body = event.data.text();
    } else {
        body = 'Push message no payload';
    }
    var options = {
        body: body,
        icon: '/icon.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        }
    };
    event.waitUntil(
        self.registration.showNotification('Push Notification', options)
    );
});