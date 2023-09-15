<template>
  <div class="menu-container">
    <div class="wrapper">menu logo</div>

    <button @click="toggleMenu = !toggleMenu">close</button>
  </div>
</template>

<script setup>
const toggleMenu = useMenuState();
</script>

<style lang="scss" scoped>
.logo-container {
  width: 100%;
  height: 100%;
  position: relative;

  button {
    width: 200px;
    height: 50px;
  }
}
</style>