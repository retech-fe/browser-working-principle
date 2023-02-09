/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b8869363041c98c6abcd1ddcf59c5d41"
  },
  {
    "url": "assets/css/0.styles.f75e23f6.css",
    "revision": "830e238f501f5d82975c7d42a92046f0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.979ea408.js",
    "revision": "3fc26da31ebfab4de3e029cc0e4d1393"
  },
  {
    "url": "assets/js/11.0eed5283.js",
    "revision": "f30382d4006d6cd60b818c46813d9c96"
  },
  {
    "url": "assets/js/12.6053964d.js",
    "revision": "f7074c418ada319d812264d4ede829cf"
  },
  {
    "url": "assets/js/13.20ba34ea.js",
    "revision": "e983c41b28cc17e7fdfea7f2e26236a1"
  },
  {
    "url": "assets/js/14.006efba3.js",
    "revision": "ed4ae940724a8e3560d4a877ebbcc159"
  },
  {
    "url": "assets/js/15.36cd1219.js",
    "revision": "0eb9716002f102fbe77d395c84422eb7"
  },
  {
    "url": "assets/js/16.f1595b3a.js",
    "revision": "8624774bc70e7474a8fbdfaf73971d88"
  },
  {
    "url": "assets/js/17.fb6d5f63.js",
    "revision": "05a9a0402282f62f9bbb540f386f191f"
  },
  {
    "url": "assets/js/18.33766bf6.js",
    "revision": "99a4b712eb6d9912a5e72716c74e6dc6"
  },
  {
    "url": "assets/js/19.361afc7d.js",
    "revision": "92051fce81bb506ade3657b0cd96fbda"
  },
  {
    "url": "assets/js/20.9104aef1.js",
    "revision": "62dd2362c5ccafa2ff2c52d53520b1d7"
  },
  {
    "url": "assets/js/21.7c155e2e.js",
    "revision": "78564b8b5447a841cb55b0ec5eeeaaab"
  },
  {
    "url": "assets/js/22.bcf83c1a.js",
    "revision": "84d695a7dd2ec32b3c7abae3794f7c48"
  },
  {
    "url": "assets/js/23.5833d70e.js",
    "revision": "1b4ca771bef304973618f272140f6d60"
  },
  {
    "url": "assets/js/24.c1e79d99.js",
    "revision": "3c39846c92949a358a21d12a805f21d5"
  },
  {
    "url": "assets/js/26.fab06349.js",
    "revision": "e4d267f8326224ac4d2be79f052eb35f"
  },
  {
    "url": "assets/js/27.6cff81d5.js",
    "revision": "7959d69a7c48952f5cb632d98ffd5c10"
  },
  {
    "url": "assets/js/28.f0aecf87.js",
    "revision": "e1f01f72990b74985d01e6f95530530e"
  },
  {
    "url": "assets/js/29.897ec7af.js",
    "revision": "d0759ed555b2ebccc179c20e4ce09f65"
  },
  {
    "url": "assets/js/3.a46f6e33.js",
    "revision": "a6101e0318f9d6590c42b56464d8a774"
  },
  {
    "url": "assets/js/30.ed771f67.js",
    "revision": "c1484d80714c45564d0a843071d66f95"
  },
  {
    "url": "assets/js/31.800b9011.js",
    "revision": "2a0031e0e6fc452ac80af44e140eb035"
  },
  {
    "url": "assets/js/32.d72e579c.js",
    "revision": "c1afeeb3afa3c2ac692ca605f4c3da61"
  },
  {
    "url": "assets/js/33.d80d98c8.js",
    "revision": "138647a770b4459baaf4fb1915346748"
  },
  {
    "url": "assets/js/34.00ffb718.js",
    "revision": "cc76394a31119e0c61f301e26b428032"
  },
  {
    "url": "assets/js/35.a70e870d.js",
    "revision": "ea6f0e13d75071d489077f5b17a0caa4"
  },
  {
    "url": "assets/js/36.94f8a907.js",
    "revision": "5e5f346d09b1cf202a1a6e9dcec5dd65"
  },
  {
    "url": "assets/js/37.1ea607ef.js",
    "revision": "7917aa8295a32ae3f7e469feb7c1bcd5"
  },
  {
    "url": "assets/js/38.2eabeb82.js",
    "revision": "4e8995276fbd7dc7e93ca6f56c7bb01a"
  },
  {
    "url": "assets/js/39.0850e6d6.js",
    "revision": "1c5fdaa338eb2478b572bee5a81acc28"
  },
  {
    "url": "assets/js/4.44d60c7a.js",
    "revision": "daea4139d04f190556d4b73773f05d01"
  },
  {
    "url": "assets/js/40.385e81c5.js",
    "revision": "6d11899a61c81416f52f5365aa38e87e"
  },
  {
    "url": "assets/js/41.4abc37d8.js",
    "revision": "ef6b4fbfd5f634d061115a12b12a326d"
  },
  {
    "url": "assets/js/42.aaf1271f.js",
    "revision": "2f5234d13b75a4e0d7e790e724b50dce"
  },
  {
    "url": "assets/js/43.8fff24cc.js",
    "revision": "1183311ac7bf0bdf894b99f7eb1f38ad"
  },
  {
    "url": "assets/js/44.ed3d39b9.js",
    "revision": "1a0a8cdb99146ed56a20613ed463c0f5"
  },
  {
    "url": "assets/js/45.60545bb2.js",
    "revision": "10c1452b8853812b8cae4c3b81270ea1"
  },
  {
    "url": "assets/js/46.9851780f.js",
    "revision": "986116f32ae28a6781a8fce81de2f765"
  },
  {
    "url": "assets/js/47.e728aa43.js",
    "revision": "907f7fc7432005eabe536f4f99032579"
  },
  {
    "url": "assets/js/48.419bbbe6.js",
    "revision": "31cd4fa2a5e8f8d528ea23fca6eb4a82"
  },
  {
    "url": "assets/js/49.3084ea21.js",
    "revision": "1faf412e6e5b0bb69461d2045eb7a02c"
  },
  {
    "url": "assets/js/5.83db2897.js",
    "revision": "59d5c51f332000428861e59454b90f23"
  },
  {
    "url": "assets/js/50.d994ebcc.js",
    "revision": "d4398bbb8364fb6ae193db49618a0708"
  },
  {
    "url": "assets/js/51.5b6a2aac.js",
    "revision": "1dfa2bfee38220575e45ce6225473425"
  },
  {
    "url": "assets/js/52.1789fc09.js",
    "revision": "aa8ea2b64fd2232ef76bea2c321ffd37"
  },
  {
    "url": "assets/js/6.7e6898f0.js",
    "revision": "7b4a4390d7b9a4534ec979c7624851cc"
  },
  {
    "url": "assets/js/7.87e6c11e.js",
    "revision": "27ecac8f61502d08f9abb5a77817dfff"
  },
  {
    "url": "assets/js/8.fb0ddc6c.js",
    "revision": "261fb481f8d09b60d749b01e58aa3933"
  },
  {
    "url": "assets/js/9.ded9c2fb.js",
    "revision": "7ac05b3ea026106209327ea883e2c0e6"
  },
  {
    "url": "assets/js/app.a03e8b3e.js",
    "revision": "52ad2811bd03946487b1bb3f2fd8bc53"
  },
  {
    "url": "assets/js/vendors~notification.66175131.js",
    "revision": "c700f632cfd9ae2609d81f2dff7fa08d"
  },
  {
    "url": "guide/index.html",
    "revision": "e6220e261cafb208a720de37ddf3f033"
  },
  {
    "url": "guide/part1/lesson01.html",
    "revision": "520ed326bff5531e5cd3b1989e0bb90f"
  },
  {
    "url": "guide/part1/lesson02.html",
    "revision": "f48f54d00770f7bf8efdb70878e3fdd0"
  },
  {
    "url": "guide/part1/lesson03.html",
    "revision": "366ee18e4dcac14a227c28b55d65d32c"
  },
  {
    "url": "guide/part1/lesson04.html",
    "revision": "42591f06971891380cf2a848b03364ea"
  },
  {
    "url": "guide/part1/lesson05.html",
    "revision": "39662a3d55131a05b5e19b534365c9d1"
  },
  {
    "url": "guide/part1/lesson06.html",
    "revision": "49e2ad564d61b33bfacdf3d956a9cf1d"
  },
  {
    "url": "guide/part2/lesson07.html",
    "revision": "2ab4d8a8a8344b015dc7423a6a9bdc54"
  },
  {
    "url": "guide/part2/lesson08.html",
    "revision": "d0565dad53b9b572fcb8733da7c0cf65"
  },
  {
    "url": "guide/part2/lesson09.html",
    "revision": "917c7377fd8682f9e95e2cb87a604e04"
  },
  {
    "url": "guide/part2/lesson11.html",
    "revision": "18c2c522dcfcc1f5aba2c347426f2be9"
  },
  {
    "url": "guide/part3/lesson12.html",
    "revision": "beb506119a4dedd17929f018baa81b85"
  },
  {
    "url": "guide/part3/lesson13.html",
    "revision": "4e95239e41ff064d9a0f7f8df44a5f9f"
  },
  {
    "url": "guide/part3/lesson14.html",
    "revision": "96d30b6545c84807b6e02d542eed2055"
  },
  {
    "url": "guide/part4/lesson15.html",
    "revision": "d4782eadff83efbc9e4ef7aaae399158"
  },
  {
    "url": "guide/part4/lesson16.html",
    "revision": "28ac5ef4c7ca32b9256e9734d37d7ced"
  },
  {
    "url": "guide/part4/lesson17.html",
    "revision": "c82c9d619fb5a95b89727df3f29b45f3"
  },
  {
    "url": "guide/part4/lesson18.html",
    "revision": "e17b6e1d034fb98d25bcd7944211d213"
  },
  {
    "url": "guide/part4/lesson19.html",
    "revision": "aeb70cd089463f48979062216f20e1b6"
  },
  {
    "url": "guide/part4/lesson20.html",
    "revision": "c91aee9f5b1e3c0695f31e2b2bd619dd"
  },
  {
    "url": "guide/part5/lesson21.html",
    "revision": "e507635ba7c0f0f74abedd9884b243d2"
  },
  {
    "url": "guide/part5/lesson22.html",
    "revision": "37cfeb91b8787b2b4e18842b6612d7c3"
  },
  {
    "url": "guide/part5/lesson23.html",
    "revision": "f2658582d5110f2734fd50d9876d0b6a"
  },
  {
    "url": "guide/part5/lesson24.html",
    "revision": "64df5a063f4a1116042b913c9a90920e"
  },
  {
    "url": "guide/part5/lesson25.html",
    "revision": "d8ba70723e03fe13d1130689dbedacfd"
  },
  {
    "url": "guide/part5/lesson26.html",
    "revision": "f09d7b9e73abd72f237ddc36b4543c4c"
  },
  {
    "url": "guide/part5/lesson27.html",
    "revision": "ba039660e1ba89d63e106a386e49d71a"
  },
  {
    "url": "guide/part5/lesson28.html",
    "revision": "dbccc920d318774fa05a501eea903e32"
  },
  {
    "url": "guide/part6/lesson29.html",
    "revision": "caa1e721e853d01cd755b5d0a46d62bd"
  },
  {
    "url": "guide/part6/lesson30.html",
    "revision": "278ba23d6d451d64b7beb3a8f32dc3ab"
  },
  {
    "url": "guide/part6/lesson31.html",
    "revision": "1a2e6b97804137e7addaa6163ffad086"
  },
  {
    "url": "guide/part6/lesson32.html",
    "revision": "8888615ac95703731dc8f327f2f9d972"
  },
  {
    "url": "guide/part6/lesson33.html",
    "revision": "21b9ec1da93eeab2a4f76633ac96c32a"
  },
  {
    "url": "guide/part6/lesson34.html",
    "revision": "8cc6e63dba5280ae02147602b0ec01ad"
  },
  {
    "url": "guide/part6/lesson35.html",
    "revision": "dd1284c386e09f6d773bf2ecd52a433f"
  },
  {
    "url": "guide/part6/lesson36.html",
    "revision": "d1a56f6eb817b76ff10b9f98fed8e419"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "12196dc0c2dc46b8f11ed6f6b21d5c96"
  },
  {
    "url": "logo.png",
    "revision": "736ab2ad735e2b92e0b74ba0ca36ca7a"
  },
  {
    "url": "logo.svg",
    "revision": "193a730d0b1344fdbbbcd2c9cd733edc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
