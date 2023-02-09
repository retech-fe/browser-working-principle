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
    "revision": "34caafa28316c46e0401def9fbc7c83e"
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
    "url": "assets/js/16.cd59ffb6.js",
    "revision": "8229a945e3e3ea43c7824300486fd22b"
  },
  {
    "url": "assets/js/17.10cbf069.js",
    "revision": "70718ede0e4b15e0c588a4fbc77530ff"
  },
  {
    "url": "assets/js/18.8de0d60a.js",
    "revision": "343a50aefaa142e8ec300192083ce211"
  },
  {
    "url": "assets/js/19.844cc89c.js",
    "revision": "7f7c3eabb17eee178d87b58f461d6176"
  },
  {
    "url": "assets/js/20.8ba90781.js",
    "revision": "8afb0a994742f8c29bd50e2a54d0591c"
  },
  {
    "url": "assets/js/21.132451f2.js",
    "revision": "dae6bd9177bd17d752503b43c62570b8"
  },
  {
    "url": "assets/js/22.cc083281.js",
    "revision": "fc78930e0f883205383126b1ba98f592"
  },
  {
    "url": "assets/js/23.d68ecf22.js",
    "revision": "c4636950606d8ad7f73179649c801831"
  },
  {
    "url": "assets/js/24.22ee0bb4.js",
    "revision": "1a37e1394f899b2896b20de4e24bb3f5"
  },
  {
    "url": "assets/js/26.9b88108c.js",
    "revision": "6848ec51c4a9596096369a4842016cae"
  },
  {
    "url": "assets/js/27.906de35d.js",
    "revision": "af0116aa91797d729ca86746a9f0fd9c"
  },
  {
    "url": "assets/js/28.81b50c1a.js",
    "revision": "23caa50ff2bd9d59f690f7b79a311fed"
  },
  {
    "url": "assets/js/29.6a4127c6.js",
    "revision": "5f567510c6f9a4e1c7c899b08d0bbc07"
  },
  {
    "url": "assets/js/3.a46f6e33.js",
    "revision": "a6101e0318f9d6590c42b56464d8a774"
  },
  {
    "url": "assets/js/30.44f07683.js",
    "revision": "e52363b8e7523d59834de82cb5888802"
  },
  {
    "url": "assets/js/31.3e6aa440.js",
    "revision": "b88df133de3d240555b7e03f202f3bc1"
  },
  {
    "url": "assets/js/32.979f06f2.js",
    "revision": "518f8a1106678f4c9eb58b8d85b46bd5"
  },
  {
    "url": "assets/js/33.b98698bb.js",
    "revision": "147845dd6eb374eb3ed03c287684264e"
  },
  {
    "url": "assets/js/34.885f0454.js",
    "revision": "35e8d389e7b210ee008ed9d3feb16d1e"
  },
  {
    "url": "assets/js/35.538dc5a9.js",
    "revision": "03a93885b6475196c21400c61fe0bbfc"
  },
  {
    "url": "assets/js/36.e0039aa4.js",
    "revision": "065e4ba1ac9fb5c62a33f6210bdbc050"
  },
  {
    "url": "assets/js/37.c193c892.js",
    "revision": "45b6e44bd5c0c7f58aa1d7ea9776cb6f"
  },
  {
    "url": "assets/js/38.94705593.js",
    "revision": "65156180533ca3bb87d633864f5ac971"
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
    "url": "assets/js/40.385e81c5.js",
    "revision": "6d11899a61c81416f52f5365aa38e87e"
  },
  {
    "url": "assets/js/41.6d77c436.js",
    "revision": "25fb8fae701de61e378964b5a144210e"
  },
  {
    "url": "assets/js/42.07028025.js",
    "revision": "d83a26a18375a7bdaeaebbc05660fa06"
  },
  {
    "url": "assets/js/43.898c0645.js",
    "revision": "e2710a86c326fb5e56971a8f3d594d2b"
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
    "url": "assets/js/app.9c125c28.js",
    "revision": "2aed6ad32ee0bc39ee21f2701e6c4838"
  },
  {
    "url": "assets/js/vendors~notification.66175131.js",
    "revision": "c700f632cfd9ae2609d81f2dff7fa08d"
  },
  {
    "url": "guide/index.html",
    "revision": "2e1005eabd277e95c490d0565419f42b"
  },
  {
    "url": "guide/part1/lesson01.html",
    "revision": "f13c2c7d083f31ab28650e630613e232"
  },
  {
    "url": "guide/part1/lesson02.html",
    "revision": "03321acded424cafc952f4f986e7e344"
  },
  {
    "url": "guide/part1/lesson03.html",
    "revision": "4ce42171dda688a4137997b1ba3e629a"
  },
  {
    "url": "guide/part1/lesson04.html",
    "revision": "2be2ce0cdc2ed0c770f7956de3ad1f8f"
  },
  {
    "url": "guide/part1/lesson05.html",
    "revision": "abb01ec3b152b58bd1162951e065d9f1"
  },
  {
    "url": "guide/part1/lesson06.html",
    "revision": "017a51c28c8e6c42657bc0f3d90b7d26"
  },
  {
    "url": "guide/part2/lesson07.html",
    "revision": "0ce50929cf566ff5d5ffa66c9a2abef4"
  },
  {
    "url": "guide/part2/lesson08.html",
    "revision": "47f97c5ff1de2814c912ba3d8bcea038"
  },
  {
    "url": "guide/part2/lesson09.html",
    "revision": "6a01da7395a43aa9479e88ab9cd99588"
  },
  {
    "url": "guide/part2/lesson11.html",
    "revision": "7f4b5e9d626738c192c76fde93dc09da"
  },
  {
    "url": "guide/part3/lesson12.html",
    "revision": "3feb201cddb89795255e7e02b2868da3"
  },
  {
    "url": "guide/part3/lesson13.html",
    "revision": "419dbf023fdec31d93b9d45c37c38b39"
  },
  {
    "url": "guide/part3/lesson14.html",
    "revision": "1bfeb05ec6c7fc626964c5166b74c954"
  },
  {
    "url": "guide/part4/lesson15.html",
    "revision": "0c1bac78597ad3561b13d35eae75eedc"
  },
  {
    "url": "guide/part4/lesson16.html",
    "revision": "af5bf254c0da3f7eeb3b6e76b1c03f84"
  },
  {
    "url": "guide/part4/lesson17.html",
    "revision": "1236bfa346faea9e86052b6a47ac48c9"
  },
  {
    "url": "guide/part4/lesson18.html",
    "revision": "4971423542188d7abd0d63dd77d444d0"
  },
  {
    "url": "guide/part4/lesson19.html",
    "revision": "db939237ce6c5afa03e0da3538bbd198"
  },
  {
    "url": "guide/part4/lesson20.html",
    "revision": "48f7f48ffad8cdbd63f9c4bcfb7c50fc"
  },
  {
    "url": "guide/part5/lesson21.html",
    "revision": "c24bf1f73297ae5d34c3a0a1f180117f"
  },
  {
    "url": "guide/part5/lesson22.html",
    "revision": "66e2a26c2b515ba7c765b5263f9b1591"
  },
  {
    "url": "guide/part5/lesson23.html",
    "revision": "2a5bdafe31a49ce92e573f51a092e497"
  },
  {
    "url": "guide/part5/lesson24.html",
    "revision": "d3bacefa0fac5ffb758ac83b5a7199a8"
  },
  {
    "url": "guide/part5/lesson25.html",
    "revision": "0e1f9eff4bf0f414677c510634ba572f"
  },
  {
    "url": "guide/part5/lesson26.html",
    "revision": "44a7b5831138fdc45c6e49a29c459f30"
  },
  {
    "url": "guide/part5/lesson27.html",
    "revision": "e843d69c7988c7ad6c5efef9e2af9852"
  },
  {
    "url": "guide/part5/lesson28.html",
    "revision": "340d000986a7837eb8630cf70eb27d12"
  },
  {
    "url": "guide/part6/lesson29.html",
    "revision": "c8e9171eed23e2b72ea21b6264d28992"
  },
  {
    "url": "guide/part6/lesson30.html",
    "revision": "34d4ba7833b9a50404531c7c00a7e417"
  },
  {
    "url": "guide/part6/lesson31.html",
    "revision": "157af8f23ef2ebab8c54d7625fbf444a"
  },
  {
    "url": "guide/part6/lesson32.html",
    "revision": "d5cc7cc43f39718281682536f7899e5c"
  },
  {
    "url": "guide/part6/lesson33.html",
    "revision": "aa9698059bca480073c5bd7bd1726111"
  },
  {
    "url": "guide/part6/lesson34.html",
    "revision": "a9408c61bf5fbbf7ff45520425e9e327"
  },
  {
    "url": "guide/part6/lesson35.html",
    "revision": "396e594e8f111c349ddbf8f37f2bfb69"
  },
  {
    "url": "guide/part6/lesson36.html",
    "revision": "f0f0772df5e4a0fa09e503fa1ac43732"
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
    "revision": "e7d5cdbf55f7ff35796a044df78a1358"
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
