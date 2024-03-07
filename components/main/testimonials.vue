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
            <img src="~/assets/gospel.png" alt="" />
          </div>
          <div class="content-body">
            <h2 data-aos="slide-up">John {{ index }} Doe</h2>
            <p data-aos="fade-up">
              this is a testimonial content based on the services received from
              the serviced. This carries more truth about business deals and
              transaction transparency and many lot more.
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

      @media screen and (max-width: 768px) {
        font-size: 30px;
        width: 90%;
        margin: 10px auto;
        line-height: 1.5em;
        padding: 20px 0;
        box-sizing: border-box;
      }
    }

    .content-wrapper {
      width: 80%;
      margin: 10px auto;
      display: flex;
      justify-content: space-evenly;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 10px;

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
          outline: 5px solid rgb(232, 98, 9);
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

        @media screen and (max-width: 900px) {
          width: 80%;
          height: fit-content;

          .image {
            width: 100px;
            height: 100px;
          }

          .content-body {
            width: 70%;
          }

          @media screen and (max-width: 650px) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: white;
            padding: 20px 10px;
            border-radius: 15px;
            margin-bottom: 30px;

            .content-body {
              width: 90%;

              h2,
              p {
                text-align: center;
              }
            }
          }
        }
      }

      @media screen and (max-width: 1000px) {
        width: 90%;

        @media screen and (max-width: 600px) {
          width: 100%;
        }
      }
    }
  }
}
</style>