<template>
  <div class="menu-items-container">
    <div class="wrapper">
      <button
        @click="
          ($event) => {
            index = true;
            profile = false;
            enrolledCourse = false;
            startCourse = false;
            settings = false;
            orderHistor = false;
            wishlist = false;
            allCourses = false;
          }
        "
      >
        <i class="fa-solid fa-table-columns"></i>
        <span>dashboard</span>
      </button>
      <button
        @click="
          ($event) => {
            profile = true;
            index = false;
            enrolledCourse = false;
            startCourse = false;
            settings = false;
            orderHistor = false;
            wishlist = false;
            allCourses = false;
          }
        "
      >
        <i class="fa-solid fa-table-columns"></i>
        <span>profile</span></button
      ><button
        @click="
          ($event) => {
            index = false;
            profile = false;
            enrolledCourse = false;
            startCourse = true;
            settings = false;
            orderHistor = false;
            wishlist = false;
            allCourses = false;
          }
        "
      >
        <i class="fa-solid fa-plus"></i>
        <span>start courses</span></button
      ><button
        @click="
          ($event) => {
            index = false;
            profile = false;
            enrolledCourse = false;
            startCourse = false;
            settings = false;
            orderHistor = false;
            wishlist = false;
            allCourses = true;
          }
        "
      >
        <i class="fa-solid fa-eye"></i>
        <span>my courses</span></button
      ><button
        @click="
          ($event) => {
            index = false;
            profile = false;
            enrolledCourse = false;
            startCourse = false;
            settings = true;
            orderHistor = false;
            wishlist = false;
            allCourses = false;
          }
        "
      >
        <i class="fa-solid fa-group-arrows-rotate"></i>
        <span>settings</span>
      </button>
      <button
        @click="
          ($event) => {
            index = false;
            profile = false;
            enrolledCourse = true;
            startCourse = false;
            settings = false;
            orderHistor = false;
            wishlist = false;
            allCourses = false;
          }
        "
      >
        <i class="fa-solid fa-bell"></i>
        <span>enrolled courses</span></button
      ><button @click="navigateTo('/')">
        <i class="fa-solid fa-group-arrows-rotate"></i>
        <span>sign out</span>
      </button>
    </div>
  </div>
</template>
<script setup>
const index = dashboardIndex();
const profile = dashboardProfile();
// const EnrolledCourses = dashboardEnrolledCourses();
const wishlist = dashboardWishList();
const settings = dashboardSettings();
const startCourse = dashboardStartCourse();
const allCourses = dashboardAllCourses();
</script>

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

    button {
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
      color: white;

      i {
        width: 20%;
        font-size: 20px;
        color: rgb(255, 255, 255);
        display: flex;
        justify-content: center;
        align-items: center;
      }

      span {
        width: 80%;
        text-transform: capitalize;
        color: rgb(255, 255, 255);
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
    }
    a.router-link-active.router-link-exact-active,
    .router-link-active {
      color: rgb(249, 124, 21);

      i,
      span {
        color: rgb(235, 114, 16);
      }
    }
  }
}
</style>
