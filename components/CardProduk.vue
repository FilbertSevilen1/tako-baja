<template>
    <div class="transition-all active:scale-100 hover:scale-105 cursor-pointer w-80 md:w-96 h-[450px] shadow-xl rounded-xl">
      <img :src="productImage" class="h-[250px] w-full rounded-t-xl" loading="lazy" :alt="productTitle" :title="productTitle">

      <div class="text-blue-900 font-bold text-2xl md:text-3xl delimiter1 mx-4 mt-4">
        {{ productTitle }}
      </div>
      <div class="text-l md:text-xl my-3 delimiter4 mx-4">
        {{ productContent }}
      </div>
    </div>
  </template>
  <script setup>
  defineProps({
    productImage:{
      type:String,
      default:""
    },
    productTitle: {
      type: String,
      default: "",
    },
    productContent: {
      type: String,
      default: "",
    },
  });
  </script>
  