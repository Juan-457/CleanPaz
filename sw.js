const CACHE = 'cleanpaz-v1'
const STATIC = [
  '/',
  '/industrial.webp',
  '/oficina.webp',
  '/post%20obra.webp',
  '/verdes.webp',
  '/logo.png',
  '/umanoai-logo.png',
  '/apple-touch-icon.png',
  '/favicon.ico',
]

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(STATIC)))
  self.skipWaiting()
})

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  )
  self.clients.claim()
})

self.addEventListener('fetch', e => {
  const { request } = e
  const url = new URL(request.url)

  // Cache-first: images and fonts
  if (request.destination === 'image' || request.destination === 'font' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(
      caches.match(request).then(cached =>
        cached || fetch(request).then(res => {
          caches.open(CACHE).then(c => c.put(request, res.clone()))
          return res
        })
      )
    )
    return
  }

  // Network-first: HTML navigation
  if (request.mode === 'navigate') {
    e.respondWith(
      fetch(request).catch(() => caches.match('/'))
    )
    return
  }

  // Stale-while-revalidate: everything else on same origin
  if (url.origin === location.origin) {
    e.respondWith(
      caches.match(request).then(cached => {
        const network = fetch(request).then(res => {
          caches.open(CACHE).then(c => c.put(request, res.clone()))
          return res
        })
        return cached || network
      })
    )
  }
})
