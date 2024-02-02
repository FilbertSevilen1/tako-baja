<template>
  <div class="transition-all hover:scale-105 w-80 md:w-96 h-[450px] p-8 shadow-xl rounded-xl">
    <div class="text-blue-900 font-bold text-2xl md:text-3xl delimiter4">
      {{ beritaTitle }}
    </div>
    <div class="text-l md:text-xl my-8 delimiter5">
      {{ beritaContent }}
    </div>
    <NuxtLink :to="beritaLink">
      <div class="text-blue-900 text-l md:text-xl">
        {{ beritaButton }}
      </div>
    </NuxtLink>
  </div>
</template>
<script setup>
defineProps({
  beritaTitle: {
    type: String,
    default: "",
  },
  beritaContent: {
    type: String,
    default: "",
  },
  beritaButton: {
    type: String,
    default: "",
  },
  beritaLink: {
    type: String,
    default: "",
  },
});
</script>
