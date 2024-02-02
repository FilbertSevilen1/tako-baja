<template>
  <div
    class="top-0 w-full h-16 shadow-2xl fixed px-4 md:px-8 flex justify-between bg-white z-50"
  >
    <div class="flex h-16 items-center cursor-pointer">
      <NuxtLink to="/">
        <img
          src="@/assets/images/logo/takobaja-small-flex.webp"
          loading="lazy"
          alt="Tako Baja Prima"
          title="Tako Baja Prima"
          class="hidden sm:flex h-12 active:scale-95 transition-all"
        />
        <img
          src="@/assets/images/logo/takobaja-small.webp"
          loading="lazy"
          alt="Tako Baja Prima"
          title="Tako Baja Prima"
          class="flex sm:hidden h-16 active-scale-95 transition-all"
        />
      </NuxtLink>
    </div>
    <div class="items-center hidden sm:flex">
      <NuxtLink to="/produk">
        <NavbarButton> Produk </NavbarButton>
      </NuxtLink>
      <NuxtLink to="/about-us">
        <NavbarButton> About Us </NavbarButton>
      </NuxtLink>
      <NuxtLink to="/kontak">
        <NavbarButton> Kontak </NavbarButton>
      </NuxtLink>
    </div>
    <div
      class="items-center flex sm:hidden transition-all active-scale-95 cursor-pointer"
      @click="toggleDropdown()"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 48 48"
      >
        <g
          fill="none"
          stroke="#000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="4"
        >
          <path d="M7.94971 11.9497H39.9497" />
          <path d="M7.94971 23.9497H39.9497" />
          <path d="M7.94971 35.9497H39.9497" />
        </g>
      </svg>
    </div>
    <div
      v-if="mobileDropdown"
      class="fixed w-28 top-16 right-0 bg-white flex flex-col shadow-xl sm:hidden"
    >
      <NuxtLink to="/produk">
        <NavbarButton> Produk </NavbarButton>
      </NuxtLink>
      <NuxtLink to="/about-us">
        <NavbarButton> About Us </NavbarButton>
      </NuxtLink>
      <NuxtLink to="/kontak">
        <NavbarButton> Kontak </NavbarButton>
      </NuxtLink>
    </div>
  </div>
</template>
<script setup>
let mobileDropdown = ref(false);
const toggleDropdown = () => {
  mobileDropdown.value = !mobileDropdown.value;
};
const closeDropdown = () => {
  mobileDropdown.value = false;
};
</script>
