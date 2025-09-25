const CACHE_NAME = "my-pwa-cache-v1";
const urlsToCache = [
  "/manifest.json",
  "/favicon.ico",
  // add other static assets that rarely change (like logos)
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

// Network-first for HTML, JS, CSS
self.addEventListener("fetch", (event) => {
  const request = event.request;

  // Check file types we want always fresh
  if (
    request.destination === "document" || // HTML pages
    request.destination === "script" || // JS files
    request.destination === "style" // CSS files
  ) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // clone and update cache
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          return response;
        })
        .catch(() => caches.match(request)) // fallback to cache if offline
    );
  } else {
    // Cache-first for everything else (images, icons, manifest, etc.)
    event.respondWith(
      caches.match(request).then((response) => response || fetch(request))
    );
  }
});
