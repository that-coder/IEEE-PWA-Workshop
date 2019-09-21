// Listen for install event, set callback
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('content').then(function (cache) {
      return cache.addAll(
        [
          '/style.css',
          '/index.html'
        ]
      );
    })
  );
});

// fetch cached data
// caches.match('/data.json').then(function (response) {
//   if (!response) throw Error("No data");
//   return response.json();
// }).then(function (data) {
//   // don't overwrite newer network data
//   if (!networkDataReceived) {
//     updatePage(data);
//   }
// }).catch(function () {
//   // we didn't get cached data, the network is our last hope:
//   return networkUpdate;
// }).catch(showErrorMessage).then(stopSpinner());


// self.addEventListener('fetch', function (event) {
//   event.respondWith(
//     // Try the cache
//     caches.match(event.request).then(function (response) {
//       // Fall back to network
//       return response || fetch(event.request);
//     }).catch(function () {
//       // If both fail, show a generic fallback:
//       return caches.match('/offline.html');
//       // However, in reality you'd have many different
//       // fallbacks, depending on URL & headers.
//       // Eg, a fallback silhouette image for avatars.
//     })
//   );
// });


// self.addEventListener('fetch', function (event) {
//   event.respondWith(
//     // Try the cache
//     caches.match(event.request).then(function (response) {
//       if (response) {
//         return response;
//       }
//       return fetch(event.request).then(function (response) {
//         if (response.status === 404) {
//           return caches.match('pages/404.html');
//         }
//         return response
//       });
//     }).catch(function () {
//       // If both fail, show a generic fallback:
//       return caches.match('/offline.html');
//     })
//   );
// });