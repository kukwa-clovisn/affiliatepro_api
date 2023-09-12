<template>
  <div class="main-component-container">
    <div class="wrapper">
      <div class="main-body">
        <div class="wrapper"></div>
      </div>
      <div class="main-footer">&copy;codingherald2023</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-component-container {
  width: 100%;
  height: 100%;
  .wrapper {
    width: 100%;
    height: 100%;

    .main-body {
      width: 100%;
      height: 65vh;
      overflow: hidden;

      .wrapper {
        width: 100%;
        height: 100%;
        overflow: hidden;
        overflow-y: scroll;
      }
    }

    .main-footer {
      width: 100%;
      height: 8vh;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      background: white;
      box-shadow: 8px -5px 10px 8px rgb(228, 228, 228);
    }
  }
}
</style>