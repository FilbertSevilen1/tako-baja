<template>
  <MainLayout>
    <NuxtPage />
  </MainLayout>
</template>
<script setup>
import MainLayout from "./layouts/MainLayout.vue";

useHead({
  link: [
    {
      rel: "preload",
      as: "image",
    },
  ],
});

// useSchemaOrg([
//   defineOrganization({
//     name: "PT Tako Baja Prima",
//   }),
//   defineWebSite({
//     name: "https://takobaja.co.id/",
//   }),
//   defineWebPage(),
// ]);
</script>
