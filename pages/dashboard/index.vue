

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
      <div class="index-page" v-if="index">
        <h1>Hello John Doe!</h1>
        <p>
          Share your referral code to you friends and get as much as 40% cash
          worth of every course(s) they take.
        </p>
        <div class="referral-code">
          <h3>referral code</h3>
          <p>a2aredk</p>
          <button>copy code</button>
        </div>
        <div class="wrapper"><main-head-status /></div>
      </div>

      <div class="child-component">
        <dashboardStartCourse v-if="startCourseState" />
        <dashboardEnrolledCourses v-if="enrolledCoursesState" />
        <dashboardMyCourses v-if="allCoursesState" />
        <dashboardProfile v-if="profileState" />
      </div>
    </div>
  </div>
</template>
<script setup>
const toggleMenu = useMenuState();
const profileState = dashboardProfile();
// const EnrolledCoursesState = dashboardEnrolledCourses();
// const wishlistState = dashboardWishList();
// const settingsState = dashboardSettings();
const startCourseState = dashboardStartCourse();
const allCoursesState = dashboardAllCourses();

const index = dashboardIndex();
</script>

<style lang="scss" scoped>
.dashboard-container {
  width: 100vw;
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  overflow: hidden;
  justify-content: space-between;
  align-items: flex-start;

  .sm-media {
    display: none;
  }

  .menu-dashboard {
    width: 20%;
    height: 100vh;
    box-shadow: 3px 0 10px 8px rgb(240, 240, 240);
    position: fixed;
    top: 0;
    left: 0;
  }
  .menu-dashboard.active {
    width: 5%;
  }

  .main-component {
    width: 80%;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    overflow: hidden;
    overflow-y: scroll;
    .index-page {
      width: 100%;
      height: fit-content;
      h1 {
        text-align: center;
        text-transform: capitalize;
      }

      p {
        text-align: center;
      }

      .referral-code {
        width: 500px;
        height: fit-content;
        padding: 15px;
        border-radius: 10px;
        background: rgb(25, 113, 101);
        margin: 20px auto;

        h3 {
          text-align: center;
          color: white;
          margin: 0;
          text-transform: uppercase;
        }
        p {
          color: rgb(220, 220, 220);
        }
        button {
          width: 150px;
          height: 47px;
          border: none;
          border-radius: 10px;
          background: linear-gradient(
            to right,
            rgb(253, 147, 1),
            rgb(255, 82, 22)
          );
          color: white;
          text-transform: capitalize;
          font-weight: 600;
          display: block;
          margin: 10px auto;
        }
      }
    }

    .wrapper {
      width: 100%;
      height: fit-content;
      padding-top: 20px;
    }

    .child-component {
      width: 100%;
      height: fit-content;
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
