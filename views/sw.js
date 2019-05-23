importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/142deae76cca9bb07516.js",
    "revision": "df350bcb87d33325ba1c4b991b4dd05f"
  },
  {
    "url": "/_nuxt/20c999a07147692d200a.js",
    "revision": "d44987b577ecd5b34e1bfcaa4ffc275b"
  },
  {
    "url": "/_nuxt/2d93f0c36a28cc889e83.js",
    "revision": "64a46f51995ab7c35f9da561a32a1751"
  },
  {
    "url": "/_nuxt/3e78323c42d6ee815f67.js",
    "revision": "1cd8a639e4400fc6fcb2a87d761cc097"
  },
  {
    "url": "/_nuxt/58f1c3c67fb28ca36771.js",
    "revision": "657b3c66a2dd874335dfccf3e56902d9"
  },
  {
    "url": "/_nuxt/7c403674c45295728925.js",
    "revision": "41ca51bbc123c2123ace25988466203f"
  },
  {
    "url": "/_nuxt/a89ff11088167e9faeb3.js",
    "revision": "b7344cd81aa829d7090fe45c1d82fde4"
  },
  {
    "url": "/_nuxt/b66143380ea826f82167.js",
    "revision": "7abb9a28499596ad493b88e630ace813"
  },
  {
    "url": "/_nuxt/bbf65e44f5b44f56cb1e.js",
    "revision": "72cc180cc05aa6ffb6d70ee054d8eaf2"
  },
  {
    "url": "/_nuxt/c9a4bdff8d0a0d3aed84.js",
    "revision": "369862cc6193ddd41497960d4ddc8422"
  },
  {
    "url": "/_nuxt/e82280192b9d5492cd82.js",
    "revision": "944404c4b57201c21e865576b16466e0"
  },
  {
    "url": "/_nuxt/f3b109c0e15ed64935ee.js",
    "revision": "ec0c38f6fc76b1e0449a116c92a372a5"
  },
  {
    "url": "/_nuxt/f4f9d4269409a5bd7f44.js",
    "revision": "87f4d55c873ec201b58a121727458af5"
  }
], {
  "cacheId": "asset",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
