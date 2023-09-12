<template>
  <div class="menu-items-container">
    <div class="wrapper">
      <NuxtLink to="/">
        <i class="fa-solid fa-table-columns"></i>
        <span>dashboard</span></NuxtLink
      ><NuxtLink to="/create-product">
        <i class="fa-solid fa-plus"></i>
        <span>create product</span></NuxtLink
      ><NuxtLink to="/view-product">
        <i class="fa-solid fa-eye"></i>
        <span>view products</span></NuxtLink
      ><NuxtLink to="/engagement">
        <i class="fa-solid fa-group-arrows-rotate"></i>
        <span>engagements</span>
      </NuxtLink>
      <NuxtLink to="/engagement">
        <i class="fa-solid fa-bell"></i>
        <span>notifications</span> </NuxtLink
      ><NuxtLink to="/">
        <i class="fa-solid fa-group-arrows-rotate"></i>
        <span>sign out</span>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu-items-container {
  width: 100%;
  height: 85vh;

  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    padding-top: 25px;

    a {
      width: 90%;
      height: 45px;
      border-radius: 3px;
      cursor: pointer;
      border: none;
      outline: none;
      background: transparent;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 20px;
      text-decoration: none;

      i {
        width: 20%;
        font-size: 20px;
        color: rgb(64, 64, 64);
        display: flex;
        justify-content: center;
        align-items: center;
      }

      span {
        width: 80%;
        text-transform: capitalize;
        color: rgb(57, 57, 57);
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font: 500 16px "Montserrat", sans-serif;

        @media screen and (max-width: 1050px) {
          font-size: 13px;

          @media screen and (max-width: 820px) {
            font-size: 11px;
          }
        }
      }

      &:hover {
        background: rgb(8, 74, 172);
        box-shadow: 0 0 8px 5px rgb(235, 234, 234);

        i,
        span {
          color: white;
        }
      }
    }
    a.router-link-active.router-link-exact-active,
    .router-link-active {
      color: rgb(255, 255, 255);

      background: linear-gradient(
        to bottom right,
        rgb(8, 74, 172),
        rgb(8, 34, 141)
      );
      i,
      span {
        color: white;
      }
    }
  }
}
</style>
