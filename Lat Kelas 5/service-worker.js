const CACHE_NAME = 'kuis-kelas-5-v1';
const urlsToCache = [
 './index.html',
  './icon-512.png',
  './baner-sbs.png',
  
  // Daftar 11 file soal:
  './soal/IND-K5-S2-B5-HOTS.html',
  './soal/IND-K5-S2-B6-HOTS.html',
  './soal/IND-K5-S2-B7-HOTS.html',
  './soal/IND-K5-S2-B8-HOTS.html',
  './soal/IPAS-K5-S2-B5-HOTS.html',
  './soal/IPAS-K5-S2-B6-HOTS.html',
  './soal/IPAS-K5-S2-B7-HOTS.html',
  './soal/IPAS-K5-S2-B8-HOTS.html',
  './soal/MTK-K5-S2-B6-HOTS.html',
  './soal/MTK-K5-S2-B7-HOTS.html',
  './soal/MTK-K5-S2-B8-HOTS.html',
  './soal/gbr/email-format.jpg',
  './soal/gbr/infografis-fakta.jpg',
  './soal/gbr/poster-akronim.jpg',
  './soal/gbr/siklus-hujan.jpg',
  './soal/gbr/berita-opini.jpg',
  './soal/gbr/soal5_plang_jalan.jpg',
  './soal/gbr/soal10_kihajar.jpg',
  './soal/gbr/soal15_struk.jpg',
  './soal/gbr/soal20_rambu.jpg',
  './soal/gbr/soal25_pengumuman.jpg',
  './soal/gbr/gambar_soal3_sampah.jpg',
  './soal/gbr/gambar_soal8_asappabrik.jpg',
  './soal/gbr/gambar_soal12_bersihpantai.jpg',
  './soal/gbr/gambar_soal17_panel_surya.jpg',
  './soal/gbr/gambar_soal23_siklus_air.jpg',
  './soal/gbr/gambar_buang_sampah_sungai.jpg',
  './soal/gbr/gambar_gotong_royong.jpg',
  './soal/gbr/gambar_hemat_air.jpg',
  './soal/gbr/gambar_hutan_gundul.jpg',
  './soal/gbr/gambar_pelari_tercepat.jpg',
  './soal/gbr/gambar_sistem_pencernaan.jpg',
  './soal/gbr/gambar_orang_berlari.jpg',
  './soal/gbr/gambar_paru_paru.jpg',
  './soal/gbr/gambar_piramida_makanan.jpg',
  './soal/gbr/gambar_siklus_pertumbuhan.jpg',
  './soal/gbr/garis_wallace.jpg',
  './soal/gbr/hutan_bakau.jpg',
  './soal/gbr/panel_surya.jpg',
  './soal/gbr/peta_angin.jpg',
  './soal/gbr/reboisasi.jpg',
  './soal/gbr/soal_16.jpg',
  './soal/gbr/soal_17.jpg',
  './soal/gbr/soal_18.jpg',
  './soal/gbr/soal_19.jpg',
  './soal/gbr/soal_20.jpg',
  './soal/gbr/hutan_gundul.jpg',
  './soal/gbr/asap_kendaraan.jpg',
  './soal/gbr/tanah_longsor.jpg',
  './soal/gbr/es_kutub.jpg',
  './soal/gbr/sungai_tercemar.jpg',
  './soal/gbr/jam_0400.jpg',
  './soal/gbr/busur_derajat.jpg',
  './soal/gbr/atap_rumah.jpg',
  './soal/gbr/gunting_terbuka.jpg',
  './soal/gbr/sudut_meja.jpg',
  './soal/gbr/soal_5.jpg',
  './soal/gbr/soal_1.jpg',
  './soal/gbr/soal_2.jpg',
  './soal/gbr/soal_3.jpg',
  './soal/gbr/soal_4.jpg',
  './soal/gbr/gambar_piktogram_panen.jpg',
  './soal/gbr/gambar_diagram_batang_ganda.jpg',
  './soal/gbr/gambar_diagram_horizontal.jpg',
  './soal/gbr/gambar_analisis_piktogram.jpg',
  './soal/gbr/gambar_tabel_frekuensi.jpg'
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
