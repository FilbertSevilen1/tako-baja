<template>
  <div class="w-full flex flex-col">
    <div class="w-full h-96 md:h-[700px]">
      <img
        src="@/assets/images/banner/coil.webp"
        loading="lazy"
        class="w-full h-full object-cover brightness-50"
        alt="Gudang Tako Baja"
        title="Gudang Tako Baja"
      />
      <div
        class="w-full h-96 absolute top-32 md:top-56 flex flex-col items-center text-white text-shadow-bold"
      >
        <div class="w-72 md:w-[600px] text-center">
          <h1 class="hidden">PT TAKO BAJA PRIMA | Importir Bahan Baku Coil</h1>
          <p class="text-4xl md:text-8xl font-bold">TAKO BAJA</p>
          <p class="text-2xl md:text-4xl my-12 font-semibold">
            MEMENUHI SEGALA KEBUTUHAN BAHAN BAKU COIL PABRIK ANDA
          </p>
          <p class="text-l md:text-2xl font-bold">DULU, SEKARANG, DAN NANTI</p>
        </div>
      </div>
    </div>

    <div class="container my-12">
      <h2 class="text-blue-900 text-2xl md:text-4xl font-bold mb-4">
        Produk Kami
      </h2>
      <div class="w-full flex flex-row flex-wrap justify-evenly">
        <div v-for="(item, i) in listProduct" :key="i">
          <NuxtLink to="/produk" >
            <CardProduk
              :productImage="item.productImage"
              :productTitle="item.productTitle"
              :productContent="item.productContent"
              class="m-4"
            >
            </CardProduk>
          </NuxtLink>
        </div>
      </div>
      <NuxtLink to="/produk" class="w-full flex justify-center">
        <button class="cursor-pointer transition-all hover:scale-105 active:scale-100 mx-auto text-xl mt-8 w-80 md:w-96 px-8 py-4 bg-white border-2 border-blue-900 rounded-xl">
            Lihat Selengkapnya
          </button>
      </NuxtLink>
      
    </div>

    <div class="w-full h-96 md:h-[700px] bg-coil">
      <div
        class="w-full h-96 flex flex-col items-center text-white text-shadow-bold py-24 md:py-40"
      >
        <div class="w-72 md:w-[600px] text-center">
          <p class="text-2xl md:text-4xl font-bold">SEMUA PRODUK KAMI TELAH</p>
          <p class="text-3xl md:text-6xl mb-8 font-semibold">TERSTANDARISASI</p>
          <p class="text-4xl md:text-8xl font-bold">SNI</p>
        </div>
      </div>
    </div>
    <div class="container my-12">
      <h2 class="text-blue-900 text-2xl md:text-4xl font-bold mb-4">
        Berita dan Informasi
      </h2>
      <div class="w-full flex flex-row flex-wrap justify-evenly">
        <CardBerita
          v-for="(item, i) in listBerita"
          :key="i"
          :beritaTitle="item.beritaTitle"
          :beritaContent="item.beritaContent"
          :beritaAction="item.beritaAction"
          :beritaLink="item.beritaLink"
          class="m-4"
        >
        </CardBerita>
      </div>
    </div>
  </div>
</template>
<script setup>
import galvalumeImage from "@/assets/images/coil/galvalume.webp";
import ppglImage from "@/assets/images/coil/ppgl.webp";
import galvanisImage from "@/assets/images/coil/galvanis.webp";
const listProduct = ref([
  {
    productImage: galvalumeImage,
    productTitle: "Galvalume",
    productContent:
      "Galvalume adalah jenis baja, yang mengandung unsur aluminium dan zinc dalam pelapisannya. Karena galvalum merupakan nama jenis bahan baku atau bahan dasar, maka material ini bisa ditemukan pada banyak aplikasi produk.",
  },
  {
    productImage: ppglImage,
    productTitle: "PPGL",
    productContent:
      "PPGL merupakan kumparan baja galvalume pra-dicat, dilapisi dengan campuran aluminium, seng, dan elemen jejak lainnya. ",
  },
  {
    productImage: galvanisImage,
    productTitle: "Galvanis",
    productContent:
      " Galvanis merupakan material seng dengan tingkat konsentrasi kemurnian tinggi yaitu 99,7%.",
  },
]);
const listBerita = ref([
  {
    beritaTitle:
      "PT Tako Baja Prima Pemasok Coil Galvalume Terbesar di Indonesia?",
    beritaContent:
      "Tako Baja, perusahaan manufaktur baja terkemuka, berhasil meraih predikat sebagai pemasok terbesar coil galvalume di Indonesia. Keberhasilan ini menjadi tonggak penting dalam perjalanan perusahaan yang telah lama dikenal sebagai pelaku utama dalam industri baja nasional.",
    beritaAction: "Lihat Berita",
    beritaLink:
      "https://www.kompasiana.com/lissachristie4920/6284bebce8da206e3d7c2312/pt-tako-baja-prima-pemasok-coil-galvalume-terbesar-di-indonesia",
  },
  {
    beritaTitle:
      "PT Tako Baja Prima Pemasok Coil Galvalume Terbesar di Indonesia?",
    beritaContent:
      "Tako Baja, perusahaan manufaktur baja terkemuka, berhasil meraih predikat sebagai pemasok terbesar coil galvalume di Indonesia. Keberhasilan ini menjadi tonggak penting dalam perjalanan perusahaan yang telah lama dikenal sebagai pelaku utama dalam industri baja nasional.",
    beritaAction: "Lihat Berita",
    beritaLink:
      "https://www.kompasiana.com/lissachristie4920/6284bebce8da206e3d7c2312/pt-tako-baja-prima-pemasok-coil-galvalume-terbesar-di-indonesia",
  },
  {
    beritaTitle:
      "PT Tako Baja Prima Pemasok Coil Galvalume Terbesar di Indonesia?",
    beritaContent:
      "Tako Baja, perusahaan manufaktur baja terkemuka, berhasil meraih predikat sebagai pemasok terbesar coil galvalume di Indonesia. Keberhasilan ini menjadi tonggak penting dalam perjalanan perusahaan yang telah lama dikenal sebagai pelaku utama dalam industri baja nasional.",
    beritaAction: "Lihat Berita",
    beritaLink:
      "https://www.kompasiana.com/lissachristie4920/6284bebce8da206e3d7c2312/pt-tako-baja-prima-pemasok-coil-galvalume-terbesar-di-indonesia",
  },
  {
    beritaTitle:
      "PT Tako Baja Prima Pemasok Coil Galvalume Terbesar di Indonesia?",
    beritaContent:
      "Tako Baja, perusahaan manufaktur baja terkemuka, berhasil meraih predikat sebagai pemasok terbesar coil galvalume di Indonesia. Keberhasilan ini menjadi tonggak penting dalam perjalanan perusahaan yang telah lama dikenal sebagai pelaku utama dalam industri baja nasional.",
    beritaAction: "Lihat Berita",
    beritaLink:
      "https://www.kompasiana.com/lissachristie4920/6284bebce8da206e3d7c2312/pt-tako-baja-prima-pemasok-coil-galvalume-terbesar-di-indonesia",
  },
  {
    beritaTitle:
      "PT Tako Baja Prima Pemasok Coil Galvalume Terbesar di Indonesia?",
    beritaContent:
      "Tako Baja, perusahaan manufaktur baja terkemuka, berhasil meraih predikat sebagai pemasok terbesar coil galvalume di Indonesia. Keberhasilan ini menjadi tonggak penting dalam perjalanan perusahaan yang telah lama dikenal sebagai pelaku utama dalam industri baja nasional.",
    beritaAction: "Lihat Berita",
    beritaLink:
      "https://www.kompasiana.com/lissachristie4920/6284bebce8da206e3d7c2312/pt-tako-baja-prima-pemasok-coil-galvalume-terbesar-di-indonesia",
  },
  {
    beritaTitle:
      "PT Tako Baja Prima Pemasok Coil Galvalume Terbesar di Indonesia?",
    beritaContent:
      "Tako Baja, perusahaan manufaktur baja terkemuka, berhasil meraih predikat sebagai pemasok terbesar coil galvalume di Indonesia. Keberhasilan ini menjadi tonggak penting dalam perjalanan perusahaan yang telah lama dikenal sebagai pelaku utama dalam industri baja nasional.",
    beritaAction: "Lihat Berita",
    beritaLink:
      "https://www.kompasiana.com/lissachristie4920/6284bebce8da206e3d7c2312/pt-tako-baja-prima-pemasok-coil-galvalume-terbesar-di-indonesia",
  },
]);

import { app_name } from "../types/types";
const { gtag } = useGtag();
useSeoMeta({
  title: "Tako Baja Prima | Importir Bahan Baku Coil ",
  ogTitle: "Tako Baja Prima | Importir Bahan Baku Coil ",
  ogType: "website",
  ogUrl: "https://takobajaprima.co.id",
  description:
    "Memenuhi Segala Kebutuhan Bahan Baku Coil Pabrik Anda. Dulu, Sekarang, dan Nanti",
  ogDescription:
    "Memenuhi Segala Kebutuhan Bahan Baku Coil Pabrik Anda. Dulu, Sekarang, dan Nanti",
  ogImage:
    "https://media.licdn.com/dms/image/C4D22AQE6trlQUXEuwg/feedshare-shrink_800/0/1653893851341?e=2147483647&v=beta&t=wpJH53A9EYVaGZktqKSPBx7Kog_FO2ZnN2YerLjqwao",
  twitterCard: "summary_large_image",
});

onMounted(async () => {
  // const res = await getHeaderMenus();
  gtag("event", "screen_view", {
    app_name: app_name,
    screen_name: "Home",
  });
  // console.log("menus", res);
});
</script>
<style scoped>
.bg-coil {
  background: url("@/assets/images/banner/banner2.webp");
  background-size: cover;
}
</style>
