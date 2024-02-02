<template>
  <div>
    <BaseNavbar> </BaseNavbar>
    <div class="mt-16">
      <slot> </slot>
    </div>
    <BaseFooter> </BaseFooter>
  </div>
</template>
<style>
.text-shadow-bold {
  text-shadow: 2px 2px 4px black;
}
.delimiter1 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 1; /* Number of lines to show */
}
.delimiter2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2; /* Number of lines to show */
}
.delimiter3 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 3; /* Number of lines to show */
}
.delimiter4 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 4; /* Number of lines to show */
}
.delimiter5 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 5; /* Number of lines to show */
}
</style>
