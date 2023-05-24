import 'regenerator-runtime';
import { precacheAndRoute } from 'workbox-precaching';
import CacheHelper from './utils/cache-helper';

const assetsToCache = [
  './',
  './icons/icon-128x128.png',
  './icons/icon-256x256.png',
  './icons/icon-512x512.png',
  './icons/favicon.png',
  './images/hero-image_4.jpg',
  './index.html',
  './app.webmanifest',
  './app.bundle.js',
  './sw.bundle.js',
  'https://fonts.googleapis.com/css2?family=Golos+Text:wght@300;400;600&display=swap',
  'https://restaurant-api.dicoding.dev/',
];

precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener('install', (event) => {
  event.waitUntil(
    CacheHelper.cachingAppShell([...assetsToCache]),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    CacheHelper.deleteOldCache(),
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    CacheHelper.revalidateCache(event.request),
  );
});
