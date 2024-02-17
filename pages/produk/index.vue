<template>
  <div class="container">
    <div class="w-full mb-8">
      <div class="w-full flex flex-col items-center">
        <h1
          class="text-blue-900 text-2xl md:text-4xl font-bold text-center mt-16"
        >
          Produk
        </h1>
      </div>
      <div class="w-full flex flex-col flex-wrap justify-between">
        <div v-for="(item, i) in listProduct" :key="i">
          <div
            class="w-full flex flex-col xl:flex-row flex-between my-12 bg-white shadow-2xl items-center"
          >
            <div class="w-full h-60 md:w-80 md:h-80 flex justify center">
              <img
                :src="item.productImage"
                class="w-full h-full"
                loading="lazy"
                :alt="item.productTitle"
                :title="item.productTitle"
              />
            </div>
            <div class="w-full xl:w-3/4 flex flex-col p-8">
              <p class="text-2xl md:text-4xl my-4 font-bold">
                {{ item.productTitle }}
              </p>
              <p class="text-xl md:text-2xl w-full">
                {{ item.productContent }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import galvalumeImage from "@/assets/images/coil/galvalumecoil.webp";
import ppglImage from "@/assets/images/coil/ppglcoil.webp";
import galvanisImage from "@/assets/images/coil/galvaniscoil.webp";
const listProduct = ref([
  {
    productImage: galvalumeImage,
    productTitle: "Galvalume",
    productContent:
      "Galvalume menghadirkan kombinasi terbaik antara seng dan aluminium, menciptakan material yang ringan, tetapi tetap kuat dan tahan terhadap korosi. Keunggulan galvalume terletak pada ketahanannya terhadap cuaca ekstrem dan paparan sinar UV, membuatnya cocok untuk lingkungan yang penuh tantangan. Dengan lapisan paduan yang unik, galvalume memberikan daya tahan superior sambil memberikan sentuhan modern dan elegan pada setiap proyek konstruksi.",
  },
  {
    productImage: ppglImage,
    productTitle: "PPGL",
    productContent:
      "PPGL merupakan kumparan baja galvalume pra-dicat, dilapisi dengan campuran aluminium, seng, dan elemen jejak lainnya.",
  },
  {
    productImage: galvanisImage,
    productTitle: "Galvanis",
    productContent:
      "Galvanis adalah solusi kokoh dan tahan karat yang dihasilkan dengan melapisi baja dengan lapisan seng. Proses galvanisasi memberikan perlindungan tambahan terhadap korosi, menjadikannya pilihan unggul untuk berbagai proyek konstruksi. Dengan daya tahannya terhadap cuaca dan lingkungan, produk galvanis tidak hanya memberikan keindahan visual, tetapi juga memastikan keandalan struktural jangka panjang.",
  },
]);

import { app_name } from "../types/types";
const { gtag } = useGtag();
useSeoMeta({
  title: "Produk | Tako Baja Prima ",
  ogTitle: "Produk | Tako Baja Prima ",
  ogType: "website",
  ogUrl: "https://takobajaprima.co.id/produk",
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
