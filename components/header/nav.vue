<template>
  <div class="nav-container">
    <div class="wrapper">
      <nav class="search-box"><header-search /></nav>
      <nav class="icon"><i class="fa-solid fa-bell"></i></nav>
      <nav class="icon"><i class="fa-solid fa-user"></i></nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav-container {
  width: 100%;
  height: 100%;

  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    .search-box {
      width: 60%;
      height: 100%;
    }

    .icon {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100%;

      i {
        color: rgb(117, 116, 116);
      }
    }
  }
}
</style>