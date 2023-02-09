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
    "revision": "971d537e22f8e6a8416e4b8afdd3e915"
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
    "url": "assets/js/14.535ca783.js",
    "revision": "87d050797a79c679874b4fd2b4b183c9"
  },
  {
    "url": "assets/js/15.af1f3066.js",
    "revision": "58a2ec27ae02b39244c24da543a39f18"
  },
  {
    "url": "assets/js/16.f1595b3a.js",
    "revision": "8624774bc70e7474a8fbdfaf73971d88"
  },
  {
    "url": "assets/js/17.928ebb06.js",
    "revision": "c5b96321c27c6d4eb3601bb6b52d5051"
  },
  {
    "url": "assets/js/18.90df7ee0.js",
    "revision": "b0dee200ecdc2146fb070acc6f9cea3a"
  },
  {
    "url": "assets/js/19.38670ea4.js",
    "revision": "ba74f7133975bb2ded4ce2e13a25e63c"
  },
  {
    "url": "assets/js/20.d236e815.js",
    "revision": "c8df59f52a013a0295f416c8717d826a"
  },
  {
    "url": "assets/js/21.48ec90b3.js",
    "revision": "96e1adcbef8f481f1aa623ee32ce2ea2"
  },
  {
    "url": "assets/js/22.b48cab7d.js",
    "revision": "0a3f3c1cac8424294b023f5f37cd2dbf"
  },
  {
    "url": "assets/js/23.5833d70e.js",
    "revision": "1b4ca771bef304973618f272140f6d60"
  },
  {
    "url": "assets/js/24.5eaf91ce.js",
    "revision": "3f0107eabc6d833a9dd7c4934c92b78a"
  },
  {
    "url": "assets/js/26.ed3382f0.js",
    "revision": "9dd502fc535f7ff951496e0c13d44f49"
  },
  {
    "url": "assets/js/27.e3dc9469.js",
    "revision": "bd3b189ede998fde39341ed13a185232"
  },
  {
    "url": "assets/js/28.f0aecf87.js",
    "revision": "e1f01f72990b74985d01e6f95530530e"
  },
  {
    "url": "assets/js/29.6db3d906.js",
    "revision": "6987164012ab14dfa8876c06c2c14ac5"
  },
  {
    "url": "assets/js/3.a46f6e33.js",
    "revision": "a6101e0318f9d6590c42b56464d8a774"
  },
  {
    "url": "assets/js/30.1f9b6521.js",
    "revision": "6fd625d7a82fcce84645ea4c6f23d373"
  },
  {
    "url": "assets/js/31.029dd5e9.js",
    "revision": "44e7a7b9234cd582c2b49d5df03b2184"
  },
  {
    "url": "assets/js/32.d7264412.js",
    "revision": "25dc96d0b0a6ef29b2b2f9a5a2ecd4f9"
  },
  {
    "url": "assets/js/33.a26d71b6.js",
    "revision": "648adf541288c95790dcda71b8c43c36"
  },
  {
    "url": "assets/js/34.66136bd3.js",
    "revision": "e4956abf3b86179194d949ed4c19eced"
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
    "url": "assets/js/38.558ac1bc.js",
    "revision": "547026b07e43cd5813a380fa203446d3"
  },
  {
    "url": "assets/js/39.cfed7b7d.js",
    "revision": "db513966fdc5304106437ad3031cc0af"
  },
  {
    "url": "assets/js/4.44d60c7a.js",
    "revision": "daea4139d04f190556d4b73773f05d01"
  },
  {
    "url": "assets/js/40.bfaa20b5.js",
    "revision": "47af5574524c45986db969ef2ab59ac9"
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
    "url": "assets/js/44.97c8d4dc.js",
    "revision": "a3dbcda32e2a2fd16a9142f8d03a9061"
  },
  {
    "url": "assets/js/45.b6065bc3.js",
    "revision": "6eb707084f22fd6012c5a80dd70caad9"
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
    "url": "assets/js/48.50c2ee75.js",
    "revision": "ef26a6d7071697eed336133285901137"
  },
  {
    "url": "assets/js/49.7d5de0f8.js",
    "revision": "fc9b05d31b47316f442d19859acee7db"
  },
  {
    "url": "assets/js/5.83db2897.js",
    "revision": "59d5c51f332000428861e59454b90f23"
  },
  {
    "url": "assets/js/50.e75df357.js",
    "revision": "eed0a3f851cc585471a007293b6697bf"
  },
  {
    "url": "assets/js/51.7b61b896.js",
    "revision": "77f018f3d7bf1f054d6bd6f60f80da51"
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
    "url": "assets/js/app.f3d4122f.js",
    "revision": "cdb310de269705e6e60c33514de5b7d9"
  },
  {
    "url": "assets/js/vendors~notification.66175131.js",
    "revision": "c700f632cfd9ae2609d81f2dff7fa08d"
  },
  {
    "url": "guide/index.html",
    "revision": "e0701fcfa98cb0ecc1df7287ffa3a966"
  },
  {
    "url": "guide/part1/lesson01.html",
    "revision": "8ada2a75fce95b54e3f77aaafe79a8ba"
  },
  {
    "url": "guide/part1/lesson02.html",
    "revision": "d1e6ccc1068604577b655418d5e2327f"
  },
  {
    "url": "guide/part1/lesson03.html",
    "revision": "8ecd1c43f557f0b046fe4bd4c5d22488"
  },
  {
    "url": "guide/part1/lesson04.html",
    "revision": "fa662042613acd48b1053958ec17351f"
  },
  {
    "url": "guide/part1/lesson05.html",
    "revision": "7f8eb432ef8aef3c38c758a73c8608f5"
  },
  {
    "url": "guide/part1/lesson06.html",
    "revision": "d74b599e83b910b4d814b0f558b9517c"
  },
  {
    "url": "guide/part2/lesson07.html",
    "revision": "b9a4424e92acb923f514dfe37a9704b3"
  },
  {
    "url": "guide/part2/lesson08.html",
    "revision": "7dc91307cbc24d85e2cbed0dc34896e9"
  },
  {
    "url": "guide/part2/lesson09.html",
    "revision": "e85bf51577e429f943209bc41eafd573"
  },
  {
    "url": "guide/part2/lesson11.html",
    "revision": "a74ce1da98d43729d00535b710803b5a"
  },
  {
    "url": "guide/part3/lesson12.html",
    "revision": "5dc86d741c61b9b6a9c0118ac351383a"
  },
  {
    "url": "guide/part3/lesson13.html",
    "revision": "3021a04eaab2c0443c6cce8afe72a505"
  },
  {
    "url": "guide/part3/lesson14.html",
    "revision": "2c0b94d24ac7d5f8ba3e9b1921ccf747"
  },
  {
    "url": "guide/part4/lesson15.html",
    "revision": "72bf3423d78981402540fb0a53cfb75e"
  },
  {
    "url": "guide/part4/lesson16.html",
    "revision": "472bede729087163dcfedcdb279bbb15"
  },
  {
    "url": "guide/part4/lesson17.html",
    "revision": "8e7f0a8028ea55837af0fdd7052cc6e5"
  },
  {
    "url": "guide/part4/lesson18.html",
    "revision": "9dbae01fedc763ef6d0d14f939684bea"
  },
  {
    "url": "guide/part4/lesson19.html",
    "revision": "e3a3577a55bef14311394f38a5f9c756"
  },
  {
    "url": "guide/part4/lesson20.html",
    "revision": "a59d0d4206eba94a6a45a188e6299622"
  },
  {
    "url": "guide/part5/lesson21.html",
    "revision": "150cf1755cd1dc2f65a2b23a43e33acd"
  },
  {
    "url": "guide/part5/lesson22.html",
    "revision": "365d676ce1f58246866dcc30adcca6a2"
  },
  {
    "url": "guide/part5/lesson23.html",
    "revision": "fab47bcab38efa7060870b0ccf0865f9"
  },
  {
    "url": "guide/part5/lesson24.html",
    "revision": "1592ebf470b1587404ea792af9dc747c"
  },
  {
    "url": "guide/part5/lesson25.html",
    "revision": "ea372d018c2a92922abc40d8825d993f"
  },
  {
    "url": "guide/part5/lesson26.html",
    "revision": "ad374d30f17e29aeb863746b6adc2dc4"
  },
  {
    "url": "guide/part5/lesson27.html",
    "revision": "acc1ce8699211b2a5270a03210952c7f"
  },
  {
    "url": "guide/part5/lesson28.html",
    "revision": "3f1ebf1a4ef6857787a96def063c16de"
  },
  {
    "url": "guide/part6/lesson29.html",
    "revision": "0cfcff0e8827361ffed81c7dfa04844f"
  },
  {
    "url": "guide/part6/lesson30.html",
    "revision": "55a292183081df2cd60fe9f4cbccc1d3"
  },
  {
    "url": "guide/part6/lesson31.html",
    "revision": "1a8f672d1e3f7cc88ae7043b69e6297c"
  },
  {
    "url": "guide/part6/lesson32.html",
    "revision": "36e647cac11dfac6e76c9a58f27369bb"
  },
  {
    "url": "guide/part6/lesson33.html",
    "revision": "c36ef08de8e6189b98cdbaaa59c8762e"
  },
  {
    "url": "guide/part6/lesson34.html",
    "revision": "e80d09bfec3efa6c8fd6e056739f0615"
  },
  {
    "url": "guide/part6/lesson35.html",
    "revision": "c7f3d2c89cad4f6830018b8974584ee9"
  },
  {
    "url": "guide/part6/lesson36.html",
    "revision": "f8e47542302a21dbd79f2c654124fe48"
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
    "revision": "8a50e3cb4febafa891fd49b1fa93bcf1"
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
