<template>
  <div class="courses-container" id="courses-container">
    <div class="courses-wrapper">
      <h2 data-aos="zoom-in">
        Find Your perfect <span>Digital Marketing</span>course(s)
        <hr data-aos="fade-up" />
      </h2>

      <p data-aos="fade-up">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti
        error impedit et, non minus temporibus delectus. Quaerat, ex.
      </p>

      <div class="course-list">
        <div
          class="course"
          v-for="(course, index) in 4"
          :key="course"
          data-aos="fade-up"
        >
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
    width: 80%;
    height: fit-content;
    margin: 20px auto;
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
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 50px;
      margin: 20px auto;

      .course {
        width: 300px;
        height: 400px;
        box-shadow: 0 0 17px 1px rgb(214, 214, 214);
        border-radius: 3px;
        background: white;
        overflow: hidden;

        .course-img {
          width: 100%;
          height: 150px;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;

          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
        }
        h3 {
          text-align: left;
          text-transform: uppercase;
          padding: 0 20px;
          font-size: 16px;
        }
        p {
          text-align: left;
          padding: 4px 20px;
          font-size: 13px;
        }
        .buttons {
          width: 100%;
          height: fit-content;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 20px;
          margin: 10px auto;

          button {
            width: 40%;
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

        @media screen and (max-width: 768px) {
          width: 430px;
          height: 500px;

          .course-img {
            height: 250px;
          }

          @media screen and (max-width: 500px) {
            width: 85%;

            @media screen and (max-width: 400px) {
              width: 95%;
              height: fit-content;
              padding: 0;
              padding-bottom: 15px;

              .buttons {
                button {
                  width: 80%;
                }
              }
            }
          }
        }
      }
    }

    @media screen and (max-width: 1000px) {
      width: 90%;
    }
  }
}
</style>