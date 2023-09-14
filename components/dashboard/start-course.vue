<template>
  <div class="courses-container" id="courses-container">
    <div class="courses-wrapper">
      <h2 data-aos="zoom-in">
        Find Your perfect <span>Digital Marketing</span>course(s)
        <hr data-aos="fade-up" />
      </h2>

      <p data-aos="slide-left">
        Start a course today and learn all you need to know about Digital
        Marketting.
      </p>

      <div class="course-list">
        <div class="course" v-for="(course, index) in 6" :key="course">
          <div class="course-img">
            <img src="~/assets/group.jpeg" alt="" />
          </div>
          <h3>digital marketting {{ index + 1 }}</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
            totam reiciendis aliquam assumenda fugiat explicabo recusandae sit.
          </p>
          <div class="buttons">
            <button>
              <i class="fa-regular fa-circle-play"></i>start course</button
            ><button>learn more</button>
          </div>
          <div class="follow">Lorem ipsum dolor sit amet.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.courses-container {
  width: 100%;
  height: fit-content;

  .courses-wrapper {
    width: 100%;
    height: fit-content;
    padding: 30px 0 0 20px;

    h2 {
      text-align: center;
      padding: 10px;
      text-transform: uppercase;
      font-family: Montserrat, sans-serif;
      font-size: 23px;
    }

    p {
      text-align: center;
      padding: 10px;
      font-family: Montserrat, sans-serif;
    }

    .course-list {
      width: 80%;
      height: fit-content;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 50px;
      margin: 20px auto;

      .course {
        width: 350px;
        height: 500px;
        box-shadow: 0 0 17px 1px rgb(214, 214, 214);
        border-radius: 3px;
        background: white;
        overflow: hidden;

        .course-img {
          width: 100%;
          height: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;

          img {
            height: auto;
            width: 100%;
            object-fit: cover;
          }
        }
        h3 {
          text-align: left;
          text-transform: uppercase;
          padding: 0 20px;
          font-size: 14px;
        }
        p {
          text-align: left;
          padding: 4px 20px;
          font-size: 11px;
        }
        .buttons {
          width: 100%;
          height: fit-content;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 20px;
          margin: 10px auto;

          button {
            width: 90%;
            height: 45px;
            border: none;
            border-radius: 5px;
            background: linear-gradient(
              to right,
              rgb(253, 147, 1),
              rgb(255, 82, 22)
            );
            color: white;
            text-transform: capitalize;
            font-weight: 600;

            i {
              padding-right: 6px;
            }

            &:last-child {
              background: rgb(37, 97, 89);
            }
          }
        }
        .follow {
          padding-top: 5px;
          border-top: 1px solid rgb(164, 163, 163);
          width: 90%;
          margin: 5px auto;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
