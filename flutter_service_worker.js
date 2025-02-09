'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "9030767a235bb6c70b902f0f5594efa9",
"version.json": "49439e8f78d095056adbf423066f93a8",
"index.html": "ca8b49270c49a1d84f8942fd96c3457d",
"/": "ca8b49270c49a1d84f8942fd96c3457d",
"main.dart.js": "c6a0ea36147efec9af29eb06c89eca80",
"sqlite3.wasm": "fa7637a49a0e434f2a98f9981856d118",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"drift_worker.js": "24184a64355f79fdde67276d6f9076dc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "46e75c918b135590cc99edd9ae6681c1",
"assets/AssetManifest.json": "898ea64ad0c8b96f1ed6600992ceb9af",
"assets/NOTICES": "1919af944aace32954ba9560be03e736",
"assets/FontManifest.json": "6c0af8df4961121a200df8ac0d3f87fa",
"assets/AssetManifest.bin.json": "570fbda4c592a8c5091f92edd6678a42",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "49b6aa5972dadbc19267534871ad04c8",
"assets/fonts/MaterialIcons-Regular.otf": "cf7e9fc3fcbf26777d2a1d7f12c77244",
"assets/assets/images/not_found.png": "52d22202ba252d1d89c577fd3a3677c6",
"assets/assets/fonts/Roboto-Medium.ttf": "7d752fb726f5ece291e2e522fcecf86d",
"assets/assets/fonts/Roboto_SemiCondensed-ExtraLightItalic.ttf": "c5105f6fbcd6f492a2a6f99f92936d22",
"assets/assets/fonts/Roboto_Condensed-ExtraLightItalic.ttf": "2c2c1df1100801d8a4b345d27f302980",
"assets/assets/fonts/Roboto_SemiCondensed-BoldItalic.ttf": "11ddd56e0fc47673960de04be0ddaf6d",
"assets/assets/fonts/Roboto_Condensed-ExtraBoldItalic.ttf": "17772988c821639e9fe36044d6931208",
"assets/assets/fonts/Roboto-Light.ttf": "25e374a16a818685911e36bee59a6ee4",
"assets/assets/fonts/Roboto_SemiCondensed-ThinItalic.ttf": "b1b3f970c13ebd8f93345d10d6ac3626",
"assets/assets/fonts/Roboto_SemiCondensed-ExtraLight.ttf": "83c6c6b25720032a079c86b8244ece58",
"assets/assets/fonts/Roboto_Condensed-Black.ttf": "b8e3ed03047190a170b330b99cb497cf",
"assets/assets/fonts/Roboto_SemiCondensed-SemiBoldItalic.ttf": "60a345becd1b883beef9d02bbb655af6",
"assets/assets/fonts/Roboto_SemiCondensed-SemiBold.ttf": "4cd0ff27a44b68f74262ec5d63d9f304",
"assets/assets/fonts/Roboto_SemiCondensed-ExtraBold.ttf": "cd66a60e5be720ca2c368e6b60348cd4",
"assets/assets/fonts/Roboto_SemiCondensed-BlackItalic.ttf": "cee6c277748569381168fa4873f17951",
"assets/assets/fonts/Roboto-Regular.ttf": "303c6d9e16168364d3bc5b7f766cfff4",
"assets/assets/fonts/Roboto_Condensed-Italic.ttf": "58ab0145561cf8b4782eea242cb30f5b",
"assets/assets/fonts/Roboto_Condensed-SemiBold.ttf": "e9bd6495779750596421effa84fdd4f5",
"assets/assets/fonts/Roboto-MediumItalic.ttf": "918982b4cec9e30df58aca1e12cf6445",
"assets/assets/fonts/Roboto_SemiCondensed-Medium.ttf": "ec198bede12e04919f81c2deabbfddfe",
"assets/assets/fonts/Roboto_SemiCondensed-Bold.ttf": "4bc60797786e604a69c1b81a60231b6a",
"assets/assets/fonts/Roboto_SemiCondensed-LightItalic.ttf": "ee86d3beb5d7e6f711f0f12f09179d48",
"assets/assets/fonts/Roboto-ExtraBoldItalic.ttf": "80b61563f9e8f51aa379816e1c6016ef",
"assets/assets/fonts/Roboto_SemiCondensed-Thin.ttf": "4f2191b28015879bcd1836c2d03b9ac5",
"assets/assets/fonts/Roboto-SemiBoldItalic.ttf": "2d365b1721b9ba2ff4771393a0ce2e46",
"assets/assets/fonts/Roboto_SemiCondensed-Black.ttf": "4e83f16b2aae530ed5a9eea2c6fcba0e",
"assets/assets/fonts/Roboto_SemiCondensed-ExtraBoldItalic.ttf": "76b49fa5b22fb20fd69561f17237e80d",
"assets/assets/fonts/Roboto_SemiCondensed-Light.ttf": "7f35ecca19fa7286023e6d5d29d98fee",
"assets/assets/fonts/Roboto_SemiCondensed-MediumItalic.ttf": "4404af13d7c2b95be24b367e5dfaa726",
"assets/assets/fonts/Roboto-ExtraLightItalic.ttf": "41c80845424f35477f8ecadfb646a67d",
"assets/assets/fonts/Roboto_Condensed-ExtraBold.ttf": "e7921919c3021ad88323d48eb9294917",
"assets/assets/fonts/Roboto_Condensed-BlackItalic.ttf": "77716aa38d5bfb3b7a8707797e6d6d65",
"assets/assets/fonts/Roboto_Condensed-Regular.ttf": "6f1c323492d1266a46461cbc57101ad4",
"assets/assets/fonts/Roboto_Condensed-Bold.ttf": "07bb72eb5189e2f32a17031e20535777",
"assets/assets/fonts/Roboto_Condensed-Medium.ttf": "b9f98617f7bc110311f054d264f43b58",
"assets/assets/fonts/Roboto_SemiCondensed-Italic.ttf": "5cae5cd3f40c671315aea0e55f8aa469",
"assets/assets/fonts/Roboto_Condensed-BoldItalic.ttf": "a716b7548d0a9e24b5e165906c017f73",
"assets/assets/fonts/Roboto-ExtraLight.ttf": "83e5ab4249b88f89ccf80e15a98b92f0",
"assets/assets/fonts/Roboto-ThinItalic.ttf": "dca165220aefe216510c6de8ae9578ff",
"assets/assets/fonts/Roboto_Condensed-SemiBoldItalic.ttf": "9f8f19b06543707a34bda741211fd833",
"assets/assets/fonts/Roboto_Condensed-Thin.ttf": "38ca91dbce841a3c3c20a3024a00fb93",
"assets/assets/fonts/Roboto-BoldItalic.ttf": "e85cb1c48a3695009621fdb836eb22e9",
"assets/assets/fonts/Roboto_Condensed-ExtraLight.ttf": "cf9840bb59a0b4ef1f6441efde262ec0",
"assets/assets/fonts/Roboto_Condensed-ThinItalic.ttf": "66aeec1eb99fd707bbda2c23c0d88dbd",
"assets/assets/fonts/Roboto_Condensed-MediumItalic.ttf": "a887fedb5da68c3987dcaf272f685228",
"assets/assets/fonts/Roboto-ExtraBold.ttf": "27fd63e58793434ce14a41e30176a4de",
"assets/assets/fonts/Roboto-LightItalic.ttf": "00b6f1f0c053c61b8048a6dbbabecaa2",
"assets/assets/fonts/Roboto_SemiCondensed-Regular.ttf": "1a494bea2b882849db6c932aee6a4302",
"assets/assets/fonts/Roboto-SemiBold.ttf": "dae3c6eddbf79c41f922e4809ca9d09c",
"assets/assets/fonts/Roboto-Italic.ttf": "1fc3ee9d387437d060344e57a179e3dc",
"assets/assets/fonts/Roboto-BlackItalic.ttf": "792016eae54d22079ccf6f0760938b0a",
"assets/assets/fonts/Roboto-Bold.ttf": "8c9110ec6a1737b15a5611dc810b0f92",
"assets/assets/fonts/Roboto-Thin.ttf": "1e6f2d32ab9876b49936181f9c0b8725",
"assets/assets/fonts/Roboto-Black.ttf": "dc44e38f98466ebcd6c013be9016fa1f",
"assets/assets/fonts/Roboto_Condensed-LightItalic.ttf": "d86a4886b06b3be02dd8c06db6c7b53d",
"assets/assets/fonts/Roboto_Condensed-Light.ttf": "0f3de38ef164b0a65a8a0a686e08bbff",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
