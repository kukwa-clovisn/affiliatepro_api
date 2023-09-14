<template>
  <div class="menu-logo-container">
    <div class="img" @click="navigateTo('/')">affiliate <span>pro</span></div>
    <hr />
  </div>
</template>

<style lang="scss" scoped>
.menu-logo-container {
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .img {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 100px;
      width: auto;
      cursor: pointer;
    }

    color: rgb(255, 255, 255);
    font-size: 40px;
    font-family: "Grand Hotel", cursive;

    span {
      color: rgb(255, 128, 0);
      font-family: inherit;
    }
  }

  hr {
    width: 70%;
    height: 2px;
    background: rgb(243, 111, 3);
  }
}
</style>