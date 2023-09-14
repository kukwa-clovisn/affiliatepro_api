<template>
  <div class="header-container">
    <div class="wrapper">
      <button class="menu" @click="toggleMenu = !toggleMenu">
        <i class="fa-solid fa-align-left"></i>
      </button>
      <div class="left-header">
        <h2>AffiliatePro</h2>
      </div>
      <div class="right-header">
        <header-nav />
      </div>
    </div>
  </div>
</template>
<script setup>
const toggleMenu = useMenuState();
</script>

<style lang="scss" scoped>
.header-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .wrapper {
    width: 95%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .menu {
      border: none;
      outline: none;
      background: transparent;

      i {
        font-size: 22px;
        color: rgb(56, 55, 55);
      }
    }

    .left-header {
      width: 40%;
      height: 100%;
      display: flex;
      align-items: center;

      h2 {
        color: rgb(148, 148, 148);
        text-transform: capitalize;
        font: 500 14px Poppins, sans-serif;
      }
    }
    .right-header {
      width: 40%;
      height: 100%;
    }
  }
}
</style>