<template>
  <div class="statistics">
    <div class="wrapper">
      <div
        class="content"
        data-aos="slide-up"
        v-for="(item, index) in ['students', 'courses', 'mentors']"
        :key="item"
      >
        <p data-aos="zoom-in">
          {{ 10 + index }}k + <span>{{ item }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.statistics {
  width: 100%;
  height: fit-content;

  .wrapper {
    width: 80%;
    height: fit-content;
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
    align-items: center;
    margin: 20px auto;
    padding-top: 20px;

    .content {
      width: 200px;
      height: 100px;
      background: white;
      border-radius: 15px;
      box-shadow: 0 0 15px 1px rgb(206, 206, 206);
      display: flex;
      justify-content: center;
      align-items: center;

      p {
        font-weight: 700;
        font-size: 20px;

        span {
          color: rgb(253, 147, 1);
        }
      }

      @media screen and (max-width: 500px) {
        width: 80%;
      }
    }

    @media screen and (max-width: 1000px) {
      width: 90%;
    }
  }
}
</style>