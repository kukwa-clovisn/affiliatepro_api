<template>
  <div class="menu-container">
    <div :class="[{ inactive: !toggleMenu }, 'lg-items', 'lg-media']">
      <menu-logo />
      <div class="menu-wrapper">
        <menu-items />
      </div>
    </div>
    <div :class="[{ active: !toggleMenu }, 'sm-items', 'lg-media']">
      <div class="sm-wrapper">
        <div class="logo">
          <div class="img">
            <img src="favicon.ico" alt="" />
          </div>
        </div>
        <div class="sm-menu-items">
          <NuxtLink to="/"> <i class="fa-solid fa-table-columns"></i> </NuxtLink
          ><NuxtLink to="/create-product">
            <i class="fa-solid fa-plus"></i> </NuxtLink
          ><NuxtLink to="/view-product">
            <i class="fa-solid fa-eye"></i> </NuxtLink
          ><NuxtLink to="/engagement">
            <i class="fa-solid fa-group-arrows-rotate"></i>
          </NuxtLink>
          <NuxtLink to="/engagement">
            <i class="fa-solid fa-bell"></i> </NuxtLink
          ><NuxtLink to="/engagement">
            <i class="fa-solid fa-group-arrows-rotate"></i>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div :class="[{ active: !toggleMenu }, 'lg-items', 'sm-media']">
      <menu-logo />
      <div class="menu-wrapper">
        <menu-items />
      </div>
    </div>
    <div :class="[{ inactive: !toggleMenu }, 'sm-items', 'sm-media']">
      <div class="sm-wrapper">
        <div class="logo">
          <div class="img">
            <img src="/logo.png" alt="" />
          </div>
        </div>
        <div class="sm-menu-items">
          <NuxtLink to="/"> <i class="fa-solid fa-table-columns"></i> </NuxtLink
          ><NuxtLink to="/create-product">
            <i class="fa-solid fa-plus"></i> </NuxtLink
          ><NuxtLink to="/view-product">
            <i class="fa-solid fa-eye"></i> </NuxtLink
          ><NuxtLink to="/engagement">
            <i class="fa-solid fa-group-arrows-rotate"></i>
          </NuxtLink>
          <NuxtLink to="/engagement">
            <i class="fa-solid fa-bell"></i> </NuxtLink
          ><NuxtLink to="/engagement">
            <i class="fa-solid fa-group-arrows-rotate"></i>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const toggleMenu = useMenuState();
</script>

<style lang="scss" scoped>
.menu-container {
  width: 100%;
  height: 100%;
  background: white;
  position: relative;

  .sm-media {
    display: none;
  }

  .lg-items,
  .sm-items {
    width: 100%;
    height: 100%;
  }

  .sm-items {
    display: none;

    .sm-wrapper {
      width: 100%;
      height: 100%;

      .logo {
        width: 100%;
        height: 14vh;

        .img {
          width: 100%;
          height: 100%;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            width: 50px;
            height: 50px;
            object-fit: contain;
          }
        }
      }

      .sm-menu-items {
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
          justify-content: center;
          align-items: center;
          gap: 20px;
          text-decoration: none;

          i {
            font-size: 20px;
            color: rgb(64, 64, 64);
            display: flex;
            justify-content: center;
            align-items: center;
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
  }

  .active {
    display: block;
    animation: slide_in 0.4s 1 alternate forwards;
  }
  .inactive {
    animation: slide_out 0.4s 1 alternate forwards;
    display: none;
  }

  @media screen and (max-width: 768px) {
    .sm-media {
      display: block;
    }
    .sm-items {
      display: block;
    }
    .lg-items {
      display: none;
    }
    .lg-media {
      display: none;
    }
  }
}

@keyframes slide_out {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-10vw);
  }
}
@keyframes slide_in {
  from {
    transform: translateX(-120%);
  }
  to {
    transform: translateX(0);
  }
}
</style>