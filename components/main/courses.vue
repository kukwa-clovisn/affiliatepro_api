<template>
  <div class="courses-container" id="courses">
    <div class="courses-wrapper">
      <h2 data-aos="zoom-in">
        Find Your perfect <span>Forex Trading</span> course(s)
        <hr data-aos="fade-up" />
      </h2>

      <div class="course-list">
        <div class="course" data-aos="fade-up">
          <div class="course-img">
            <img src="~/assets/achievement-pana.png" alt="" />
            <div class="image-content">
              <span>5 videos </span>
              <nuxt-link to="/page2">start course</nuxt-link>
            </div>
          </div>

          <h3>introduction to trading</h3>

          <p>Understanding the basics of forex trading.</p>

          <div class="follow">jugosfx academy</div>
        </div>
        <div class="course" data-aos="fade-up">
          <div class="course-img">
            <img src="~/assets/achievement-pana.png" alt="" />
            <div class="image-content">
              <span>5 videos </span>
              <nuxt-link to="/page2">start course</nuxt-link>
            </div>
          </div>

          <h3>technical analysis</h3>

          <p>Understanding technical analysis and the candlestick theory.</p>

          <div class="follow">jugosfx academy</div>
        </div>
        <div class="course" data-aos="fade-up">
          <div class="course-img">
            <img src="~/assets/achievement-pana.png" alt="" />
            <div class="image-content">
              <span>5 videos </span>
              <nuxt-link to="/page2">start course</nuxt-link>
            </div>
          </div>

          <h3>market structure</h3>

          <p>
            Uunderstanding market structure, time and price, premium and
            discount arrays.
          </p>

          <div class="follow">jugosfx academy</div>
        </div>
        <div class="course" data-aos="fade-up">
          <div class="course-img">
            <img src="~/assets/achievement-pana.png" alt="" />
            <div class="image-content">
              <span>5 videos </span>
              <nuxt-link to="/page2">start course</nuxt-link>
            </div>
          </div>

          <h3>smart money concept</h3>

          <p>Understanding supply, demand and liquidity in the market.</p>

          <div class="follow">jugosfx academy</div>
        </div>
        <div class="course" data-aos="fade-up">
          <div class="course-img">
            <img src="~/assets/achievement-pana.png" alt="" />
            <div class="image-content">
              <span>5 videos </span>
              <nuxt-link to="/page2">start course</nuxt-link>
            </div>
          </div>

          <h3>advanced smart money concept</h3>

          <p>
            Understanding institutional order flow, order blocks and fair value
            gaps
          </p>
          <div class="follow">jugosfx academy</div>
        </div>
        <div class="course" data-aos="fade-up">
          <div class="course-img">
            <img src="~/assets/achievement-pana.png" alt="" />
            <div class="image-content">
              <span>5 videos </span>
              <nuxt-link to="/page2">start course</nuxt-link>
            </div>
          </div>

          <h3>psychology of trading</h3>

          <p>mastering psychology and emotions in trading.</p>

          <div class="follow">jugosfx academy</div>
        </div>
        <div class="course" data-aos="fade-up">
          <div class="course-img">
            <img src="~/assets/achievement-pana.png" alt="" />
            <div class="image-content">
              <span>5 videos </span>
              <nuxt-link to="/page2">start course</nuxt-link>
            </div>
          </div>

          <h3>real-life trading techniques</h3>

          <p>
            live trading sessions, backtesting, pattern recognition, top down
            analyi etc....
          </p>

          <div class="follow">jugosfx academy</div>
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
    width: 90%;
    height: fit-content;
    margin: 20px auto;
    padding: 30px 0 0 20px;

    h2 {
      text-align: center;
      padding: 10px;
      text-transform: uppercase;
      font-family: Montserrat, sans-serif;
      font-size: 23px;

      span {
        color: rgb(230, 89, 7);
      }
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
      gap: 20px;
      margin: 20px auto;

      .course {
        width: 230px;
        height: 360px;
        box-shadow: 0 3px 17px 2px rgb(228, 228, 228);
        background: white;
        overflow: hidden;
        padding: 0;

        .course-img {
          width: 100%;
          height: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          margin: 0 auto;
          position: relative;
          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }

          .image-content {
            width: 100%;
            height: 50px;
            position: absolute;
            bottom: 0;
            left: 0;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            flex-direction: row;
            // background: rgb(42, 81, 76);

            span {
              background: linear-gradient(
                to right,
                rgb(42, 81, 76) 20%,
                rgba(42, 81, 76, 0) 65%
              );

              color: white;
              display: block;
              width: 100%;
              padding: 10px;
              text-transform: capitalize;
            }

            a {
              text-decoration: none;
              color: white;
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100px;
              height: 40px;
              font-size: 11px;
              border-radius: 5px;
              text-transform: uppercase;
              position: absolute;
              bottom: 10px;
              right: 10px;
              background: linear-gradient(
                to right,
                rgb(253, 147, 1),
                rgb(255, 82, 22)
              );
            }
          }
        }
        h3 {
          text-align: left;
          text-transform: uppercase;
          padding: 0 20px;
          margin-bottom: 0;
          font-size: 16px;
          font-weight: 500;
          line-height: 1.4em;
        }
        p {
          text-align: left;
          padding: 0 10px 0 20px;
          font-size: 13px;
        }

        .follow {
          padding-top: 5px;
          border-top: 1px solid rgb(164, 163, 163);
          width: 80%;
          margin: 0 auto;
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
            color: white;
          }

          &:last-child {
            background: rgb(37, 97, 89);
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