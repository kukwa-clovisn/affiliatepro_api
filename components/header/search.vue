<template>
  <div class="search-container">
    <div class="wrapper">
      <input type="search" name="search" id="search" placeholder="Search..." />
      <button><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search-container {
  width: 100%;
  height: 100%;

  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    input {
      border: none;
      outline: none;
      border-bottom: 1px solid rgb(178, 177, 177);
      padding: 3px 5px;
      padding-left: 0;
      background: transparent;
    }

    button {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      background: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      outline: none;
      box-shadow: 3px 0 5px 5px rgb(234, 234, 234);
      cursor: pointer;

      i {
        font-size: 16px;
        color: rgb(153, 153, 153);
      }
    }
  }
}
</style>