'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "aa8b7f411290dc289c539b7d8080c331",
"favicon.ico": "6aa09b1160077b80d05efb64b3f37cb0",
"index.html": "2285f7bbc5a2276147e525b86a7e4eee",
"/": "2285f7bbc5a2276147e525b86a7e4eee",
"main.dart.js": "6f2cbac81d47b7b42e91b48eed28c42c",
"icons/Icon-192.png": "ebe691ea1816afa2d11cde75d684d9c9",
"icons/icon-1024.png": "f15525b6ef63829b8b38664e1cc41513",
"icons/Icon-512.png": "bb562f153dcd2ceed1e2ab7bfac7c8f3",
"manifest.json": "7d265bdac5e03265b136453c9ce85fc6",
"assets/AssetManifest.json": "f841b4297bfd1b93e43814481932f0e7",
"assets/NOTICES": "0d40c8c63b7afc2c31e18a1b529747a5",
"assets/FontManifest.json": "a21e71fd69a8da0705ea6e1eb3633597",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/empty-background.png": "bbe186d2e97309d4ac58ae90a73f7f3c",
"assets/assets/images/empty_home_bg.png": "bbe186d2e97309d4ac58ae90a73f7f3c",
"assets/assets/images/emoji/exclamation-question.svg": "bc9ca07e7ae76865700e702f15c47e8a",
"assets/assets/images/emoji/checkmark.svg": "e895ba51b2d0ab2b7be7bf9a456bf083",
"assets/assets/images/emoji/warning-sign.svg": "f5c2b9c58285894a0bc92613c6e15cdb",
"assets/assets/images/emoji/location-pin.svg": "e7873571cf03f87ca5b4d9226392ea3c",
"assets/assets/images/emoji/sparkles.svg": "376ea52fafde008e1525325c7884629e",
"assets/assets/images/emoji/fire.svg": "489478cf75d085eedc71c4f2526eeda9",
"assets/assets/images/emoji/hundred-points.svg": "5925bf28d01672b7c995af4d2a762c8a",
"assets/assets/images/emoji/confetti.svg": "33fe66e1c2984aff8e64673b9c580499",
"assets/assets/images/emoji/folded-hands.svg": "58e6c4cc89e8530e9b53b067a69b1059",
"assets/assets/images/emoji/smiling-eyes.svg": "b96322430cde81227485f5b8e08bdfa2",
"assets/assets/images/emoji/sunglasses-face.svg": "1582bb536d6ed699cb1f543f76ff4364",
"assets/assets/images/emoji/tears-of-joy-face.svg": "09bcb46d1aa87905cd716ae6944bc07c",
"assets/assets/images/emoji/shooting-star.svg": "70b42fe64e31d17d0d5218d2d702485a",
"assets/assets/images/emoji/palms-up.svg": "0c243fe5f0c710eacf2607e6cec27d12",
"assets/assets/images/emoji/crying-face.svg": "78dca428a691db3270d8cf4a7ec415f6",
"assets/assets/images/emoji/pile-of-poo.svg": "34f62966ebb5e40b25a1046e6fc3a08f",
"assets/assets/images/emoji/beers.svg": "cebb0ea4e5a9c5a548bb1c5ed5c1f326",
"assets/assets/images/emoji/red-heart.svg": "3b7f8c6b6860f25459e14812afd7c503",
"assets/assets/images/emoji/kissing-face.svg": "c1824a74dfa2eea4f927e99d5725ff15",
"assets/assets/images/emoji/dizzy-face.svg": "6c7a3e103cf11f05099fa93a517cdf66",
"assets/assets/images/emoji/squinting-face.svg": "9d37a3ad9cd710f9860e26d13dd54042",
"assets/assets/images/emoji/heart-eyes.svg": "4c9919700196f03ed30d955ffe4d9363",
"assets/assets/images/emoji/cool.svg": "58710a539aca7f3b92e7cbd59fb92817",
"assets/assets/images/emoji/musical-notes.svg": "89a44c4a14aa3cfb5129aa049cd90f9c",
"assets/assets/images/orange.jpg": "d6e24aa8bad1f4e9ecffa2da7db01b99",
"assets/assets/images/icons/add.png": "575568960697842fca74bfc8609902d9",
"assets/assets/images/icons/add-page.png": "3431ba5a4347a40111996d3fada8dc65",
"assets/assets/images/icons/emoji.png": "c40509ac80b406c6ce90340213933b3d",
"assets/assets/images/icons/link-out.png": "442e1228751f46bdfc98d1e9c049e203",
"assets/assets/images/icons/scraps.png": "c5dd33e60fe3df1374a4be487e6943ad",
"assets/assets/images/icons/send-backward.png": "f4733469a8dbc96fdefcc2f82f79dab6",
"assets/assets/images/icons/view.png": "bc43e24117af5cfa266f80c2f7fed51e",
"assets/assets/images/icons/share.png": "b0c04ea1cf5d6488cddd51f13dea7977",
"assets/assets/images/icons/toggle-list.png": "1cf8c991c01de03819a0d4e545157b2d",
"assets/assets/images/icons/star.png": "b2d723f68be2c553eae1b8bb75941186",
"assets/assets/images/icons/trashcan.png": "29106d13d82a9dc1f6b4f17f68dbb3b5",
"assets/assets/images/icons/move-forward.png": "715ff4fa28a4975669985fcc27ece582",
"assets/assets/images/icons/toggle-carousel.png": "8c443c140d495389c24c45fe33eac800",
"assets/assets/images/icons/camera.png": "569360acb74da17a96387054f20775b4",
"assets/assets/images/icons/text.png": "d5fb38fe4340cbaf91e1605877ef7e8f",
"assets/assets/images/icons/image.png": "16eeb4c187e8c8a80f7b926efd4ca23d",
"assets/assets/images/logo-flutter-folio.png": "0302f36900d209bd3faf414b97f36270",
"assets/assets/images/profile.png": "46599ff041236a1250bce38eb1a56d2c",
"assets/assets/fonts/Raleway-Medium.ttf": "2ec8557460d3a2cd7340b16ac84fce32",
"assets/assets/fonts/Fraunces_72pt-SemiBold.ttf": "24d99b5a0cd95e3a1a33022d62cac38f",
"assets/assets/fonts/Raleway-ExtraBold.ttf": "c9503ab0f939e9d37fcfb59b25acf8b3",
"assets/assets/fonts/Raleway-Regular.ttf": "75b4247fdd3b97d0e3b8e07b115673c2",
"assets/assets/fonts/Raleway-Italic.ttf": "f73026bcd64e5a5265ab616e5083cd48",
"assets/assets/fonts/Raleway-Bold.ttf": "7802d8b27fcb19893ce6b38c0789268e",
"assets/assets/fonts/scraps/Mali-Medium.ttf": "20c8f9ec2584d85bd116e6e00734dc74",
"assets/assets/fonts/scraps/Lato-Regular.ttf": "2d36b1a925432bae7f3c53a340868c6e",
"assets/assets/fonts/scraps/AlfaSlabOne-Regular.ttf": "7676beb2b1f19eec709feed096327d21",
"assets/assets/fonts/scraps/Caveat-Medium.ttf": "a33c81836f5a681e2e1877b91885feb9",
"assets/assets/fonts/scraps/Amiri-Regular.ttf": "21e6d71c2301e16cfc210492896a4dd5",
"assets/assets/fonts/scraps/PathwayGothicOne-Regular.ttf": "5ffb53b1b45fe824e77da19ef1fb1c1f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
