const CACHE_NAME = 'kuis-kelas-1-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/icon-512.png',
  '/baner-sbs.png',
  
  // Daftar 18 file soal:
  '/soal/H-T1-IND-K1-S2-B5-HOTS.html',
  '/soal/H-T1-IND-K1-S2-B6-HOTS.html',
  '/soal/H-T1-IND-K1-S2-B7-HOTS.html',
  '/soal/H-T1-IND-K1-S2-B8-HOTS.html',
  '/soal/H-T1-MTK-K1-S2-B5-HOTS.html',
  '/soal/H-T1-MTK-K1-S2-B6-HOTS.html',
  '/soal/H-T1-MTK-K1-S2-B7-HOTS.html',
  '/soal/H-T1-MTK-K1-S2-B8-HOTS.html',
  '/soal/H-T1-PAI-K1-S2-B10-HOTS.html',
  '/soal/H-T1-PAI-K1-S2-B6-HOTS.html',
  '/soal/H-T1-PAI-K1-S2-B7-HOTS.html',
  '/soal/H-T1-PAI-K1-S2-B8-HOTS.html',
  '/soal/H-T1-PAI-K1-S2-B9-HOTS.html',
  '/soal/H-T1-PJOK-K1-S2-B4-HOTS.html',
  '/soal/H-T1-PJOK-K1-S2-B5-HOTS.html',
  '/soal/H-T1-PJOK-K1-S2-B6-HOTS.html',
  '/soal/H-T1-PNC-K1-S2-B3-HOTS.html',
  '/soal/H-T1-PNC-K1-S2-B4-HOTS.html'
];

// Menyimpan file ke cache saat aplikasi pertama kali dibuka
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Mengambil file dari cache saat aplikasi berjalan offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response; // Gunakan file dari cache
        }
        return fetch(event.request); // Ambil dari internet jika tidak ada di cache
      })
  );
});