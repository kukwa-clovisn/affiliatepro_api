<template>
  <div class="testimonials-container">
    <div class="wrapper">
      <h1 data-aos="zoom-in">
        our testimonials...
        <hr data-aos="zoom-out" />
      </h1>

      <div class="content-wrapper">
        <div
          class="testimonial"
          v-for="(item, index) in 2"
          :key="item"
          data-aos="fade-up"
        >
          <div class="image">
            <img src="~/assets/images-removebg-preview.png" alt="" />
          </div>
          <div class="content-body">
            <h2 data-aos="slide-up">John {{ index }} Doe</h2>
            <p data-aos="fade-up">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              commodi, ab voluptatum vel inventore eveniet reiciendis labore
              ipsum accusantium obcaecati consectetur magnam praesentium nemo.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
hr {
  display: block;
  width: 40%;
  height: 3px;
  background: rgb(230, 89, 7);
  border-radius: 30px;
}
.testimonials-container {
  width: 100%;
  height: fit-content;

  .wrapper {
    width: 100%;
    height: fit-content;
    padding-top: 50px;

    h1 {
      padding: 10px;
      text-transform: capitalize;
      text-align: center;
      font-weight: bold;
      font-size: 40px;
    }

    .content-wrapper {
      width: 80%;
      margin: 10px auto;
      display: flex;
      justify-content: space-evenly;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 20px;

      .testimonial {
        width: 400px;
        height: 300px;
        display: flex;
        justify-content: space-evenly;
        align-items: flex-start;
        gap: 10px;

        .image {
          width: 80px;
          height: 80px;
          border-radius: 100%;
          outline: 3px solid rgb(12, 64, 106);
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgb(11, 49, 120);
          overflow: hidden;

          img {
            width: 80%;
            height: auto;
            object-fit: contain;
          }
        }
        .content-body {
          width: 300px;
          height: 100%;

          h2 {
            font-size: 25px;
          }

          p {
            font-size: 16px;
            line-height: 23px;
          }
        }
      }
    }
  }
}
</style>