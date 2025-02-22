const CACHE_NAME = "habit-tracker-cache-v1";
const FILES_TO_CACHE = [
  "./",
  "../html/index.html",
  "../html/habits.html",
  "../css/style.css",
  "../js/firebase.js",
  "../js/signIn.js",
  "../js/habits.js",
  "../../manifest.json",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
