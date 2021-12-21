const Haven = 'haven-pwa'
const assets = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/main.js',
  '/assets/icons/haven-icon-app.png'
]

self.addEventListener('install', installEvent => {
  installEvent.waitUntil(
    caches.open(Haven).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener('fetch', fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})
