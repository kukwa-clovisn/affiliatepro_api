

<template>
  <div class="menu-container">
    <div class="blur-wrapper" @click="toggleMenu = !toggleMenu"></div>
    <div class="wrapper">
      ghjghgkjh
      <div class="logo"></div>
      <div class="routes">
        <MenuRoutes />
      </div>
    </div>
  </div>
</template>

<script setup>
const toggleMenu = useMenuState();
</script>

<style lang="scss" scoped>
.menu-container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  overflow: hidden;
  background: transparent;
  .blur-wrapper {
    cursor: pointer;
  }
  .wrapper {
    width: 60%;
    height: 100vh;
    border: 1px solid black;
    position: relative;
    background: rgb(17, 27, 26);
    .logo {
      width: 100%;
      height: 20%;
    }
    .routes {
      width: 100%;
      height: 80%;
    }
  }
}
</style>