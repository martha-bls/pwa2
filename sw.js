const cacheName = 'static-v1';
const preCache = [
    './',
    './index.html',
    './css/mystyle.css',
    './js/myscript.js',   
    './manifest.json'
]

self.addEventListener('install', e => {
    console.log('The sw is installed!');
    e.waitUntil(
        caches.open(cacheName).then(cache => cache.addAll(preCache))
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(res => res || fetch(e.request))
    );
});

// Self is global object for the service worker