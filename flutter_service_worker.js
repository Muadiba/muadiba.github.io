'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/.git\COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
"/.git\config": "b81d4c7b0df0abcac7ad93c829971bc8",
"/.git\description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"/.git\FETCH_HEAD": "9d45b9020605454340d91bca8e6fd0c8",
"/.git\HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"/.git\hooks\applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"/.git\hooks\commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"/.git\hooks\fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
"/.git\hooks\post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"/.git\hooks\pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"/.git\hooks\pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
"/.git\hooks\pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"/.git\hooks\pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"/.git\hooks\pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"/.git\hooks\prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"/.git\hooks\update.sample": "517f14b9239689dff8bda3022ebd9004",
"/.git\index": "8b9d0e294528493568be29c04f69b79f",
"/.git\info\exclude": "036208b4a1ab4a235d75c181e685e5a3",
"/.git\logs\HEAD": "7875d300299268a514393c2b3996e90f",
"/.git\logs\refs\heads\master": "7875d300299268a514393c2b3996e90f",
"/.git\logs\refs\remotes\origin\master": "485ae3d459516bf6a97e09468b37e4c6",
"/.git\objects\03\eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
"/.git\objects\09\e35f454a8a042ea87e61f1d0a3bc996c79b2d6": "64d8c89bfb85715f1166e209a1264477",
"/.git\objects\0f\816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
"/.git\objects\13\cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
"/.git\objects\15\9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
"/.git\objects\20\5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"/.git\objects\4b\f5fdd5c4810bcacad273fc7a805a16db55cf80": "8843ec861568d5fad9f9d63929bbd148",
"/.git\objects\4c\f1f3efb957a0f5952d44bbaf2330938e9ddc23": "efbd19a26c1e97c84c2911fe8b81ca53",
"/.git\objects\60\830936001995f455fceb65caed48a679e8e16a": "c42ee87b18847fc304f27a66425838f1",
"/.git\objects\6e\ea3a200a50bbdfacc093d80af35562d6fe73f8": "fbb08f7cdf4745f8f5a3df6bfd7aa150",
"/.git\objects\81\0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
"/.git\objects\88\cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"/.git\objects\95\19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
"/.git\objects\99\00e0eee321a2515a7871cb2b67b95a7afe929f": "af7d4dc01e39cda4257a41a14d727034",
"/.git\objects\b7\49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"/.git\objects\c8\77f869994857ac941d3d5b54ad40cba42262b3": "708788517d3cf297280ac64c41baa69d",
"/.git\objects\dd\56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
"/.git\objects\df\e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
"/.git\objects\eb\ee23993cdcef11ab97b73aac17bdfed7104b3a": "2f937fece31be7ebc7dcf0141d5b2bac",
"/.git\objects\ee\b31c209a63546eb5daca68464965f10e3cd73e": "f794fd4b4393cab7b311a5bb5b46104c",
"/.git\objects\fc\565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
"/.git\refs\heads\master": "e451e742deadad15637e8207aa9928e9",
"/.git\refs\remotes\origin\master": "e451e742deadad15637e8207aa9928e9",
"/assets\AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"/assets\FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets\fonts\MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets\LICENSE": "120922eb43a3ae530c608905e1aa23a7",
"/assets\packages\cupertino_icons\assets\CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/icons\Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons\Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "1095651d323043a6de3f98029a768da0",
"/main.dart.js": "f2cd781e91fab0f4c4e12a67a55b35ba",
"/manifest.json": "324c19a181ba22e5ad97241799582bfb"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
