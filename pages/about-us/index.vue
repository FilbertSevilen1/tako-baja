<template>
  <div class="container w-full">
    <div class="w-full mb-8">
      <div class="w-full flex flex-col items-center">
        <h1
          class="text-blue-900 text-2xl md:text-4xl font-bold text-center mt-16"
        >
          Tentang Kami
        </h1>
      </div>
      <div class="w-full mt-8">
        <h2 class="font-bold text-xl md:text-2xl">PT. Tako Baja Prima</h2>
        <h4 id="desc">
          PT Tako Baja Prima adalah perusahaan importir dan pemasok material
          baja yang berlokasi di Tangerang. Spesialisasi kami terletak pada coil
          galvalume, coil galvanis, dan coil ppgl. Dengan pengalaman yang luas
          dalam industri ini, kami telah menjadi pilihan utama bagi banyak
          pelanggan yang mencari produk berkualitas tinggi.
        </h4>
      </div>
    </div>
    <div class="flex flex-col md:flex-row w-full justify-between mb-8">
      <div class="flex flex-col w-full md:w-1/2 mt-4 pr-0 md:pr-12">
        <h2 class="font-bold text-xl md:text-2xl">Visi Perusahaan</h2>
        <h4 id="desc">
          <ul>
            <li>
              Menjadi penyedia terkemuka coil galvalume, coil galvanis, dan coil
              ppgl berkualitas tinggi di Indonesia.
            </li>
            <li>
              Menjadi mitra terpercaya bagi pelanggan dalam pemenuhan kebutuhan
              material baja.
            </li>
            <li>
              Mendukung pertumbuhan industri konstruksi dan manufaktur di
              Indonesia melalui produk berkualitas.
            </li>
          </ul>
        </h4>
      </div>
      <div class="line w-1/3"></div>
      <div class="flex flex-col w-full md:w-1/2 w-1/3 mt-4 pl-0 md:pl-12">
        <h2 class="font-bold text-xl md:text-2xl">Misi Perusahaan</h2>
        <h4 id="desc">
          <li>
            Menyediakan produk berkualitas tinggi dengan standar internasional.
          </li>
          <li>
            Memberikan pelayanan yang profesional dan responsif kepada
            pelanggan.
          </li>
          <li>
            Memastikan ketersediaan stok yang memadai untuk memenuhi kebutuhan
            pelanggan.
          </li>
          <li>
            Menjalin kemitraan yang saling menguntungkan dengan produsen dan
            pemasok global.
          </li>
          <li>
            Memberikan kontribusi positif terhadap pembangunan berkelanjutan dan
            lingkungan.
          </li>
        </h4>
      </div>
    </div>
  </div>
</template>
<script setup>
useSeoMeta({
  title: "Tentang Kami | Tako Baja Prima ",
  ogTitle: "Tentang Kami | Tako Baja Prima ",
  ogType: "website",
  ogUrl: "https://takobajaprima.co.id/about-us",
  description:
    "Memenuhi Segala Kebutuhan Bahan Baku Coil Pabrik Anda. Dulu, Sekarang, dan Nanti",
  ogDescription:
    "Memenuhi Segala Kebutuhan Bahan Baku Coil Pabrik Anda. Dulu, Sekarang, dan Nanti",
  ogImage:
    "https://media.licdn.com/dms/image/C4D22AQE6trlQUXEuwg/feedshare-shrink_800/0/1653893851341?e=2147483647&v=beta&t=wpJH53A9EYVaGZktqKSPBx7Kog_FO2ZnN2YerLjqwao",
  twitterCard: "summary_large_image",
});
</script>
<style>
.line {
  border-left: 4px solid black;
  height: auto;
  position: absolute;
  top: 0;
  margin-left: -3px;
}
#desc {
  font-size: large;
  font-style: normal;
  margin-top: 16px;
  margin-bottom: 16px;
  text-align: justify;
}
</style>
