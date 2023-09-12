

<template>
  <div class="dashboard-container">
    <div :class="[{ active: !toggleMenu }, 'menu-dashboard', 'lg-media']">
      <menu-component />
    </div>
    <div :class="[{ active: toggleMenu }, 'menu-dashboard', 'sm-media']">
      <div class="blur-wrapper"></div>
      <menu-component />
    </div>
    <div :class="[{ lg: !toggleMenu }, 'main-component']">
      <NuxtLayout name="page-header" />
      <div class="wrapper"><main-head-status /></div>
      <dashboard />
    </div>
  </div>
</template>
<script setup>
const toggleMenu = useMenuState();
</script>

<style lang="scss" scoped>
.dashboard-container {
  width: 100vw;

  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .main-header {
    width: 100%;
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sm-media {
    display: none;
  }

  .menu-dashboard {
    width: 20%;
    height: 100%;
    box-shadow: 3px 0 10px 8px rgb(240, 240, 240);
    position: relative;
  }
  .menu-dashboard.active {
    width: 5%;
  }

  .main-component {
    // width: 80%;
    width: 100%;
    height: fit-content;

    .page-content {
      width: 100%;
      height: fit-content;
    }
    .page-footer {
      width: 100%;
      height: 8vh;
    }
  }
  .main-component.lg {
    // width: 95%;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    .menu-dashboard.lg-media {
      display: none;
    }

    .menu-dashboard.sm-media {
      display: block;
      width: 10%;
    }
    .menu-dashboard.active {
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
    }
  }
}
</style>
