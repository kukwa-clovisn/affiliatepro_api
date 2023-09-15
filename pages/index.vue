<template>
  <div class="home-container">
    <div class="landing-page">
      <div class="landing-page-wrapper">
        <div class="image-content">
          <div class="img">
            <img src="~/assets/images-removebg-preview.png" alt="" />
          </div>
        </div>
        <div class="page-content">
          <h1>
            <span>Digital marketing</span> made <span>easy</span> and
            <span>accessible</span> for everyone...
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            nesciunt mollitia velit accusantium quod non reiciendis inventore
            explicabo reprehenderit asperiores, illo repellendus magni!
          </p>
          <div class="page-buttons">
            <button>
              <nuxt-link to="/signin"
                ><i class="fa-regular fa-circle-right"></i>Get
                started</nuxt-link
              ></button
            ><button>
              <i class="fa-regular fa-circle-play"></i>watch video
            </button>
          </div>
        </div>
      </div>
    </div>
    <MainStatistics />
    <MainCourseDesign />
    <div class="about-container" id="about-container">
      <div class="about-wrapper">
        <div class="image-content">
          <img src="~/assets/hgju.png" alt="" />
        </div>
        <div class="blur-wrapper"></div>
        <div class="about-us">
          <h1>about <span>us</span></h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum,
            tempore nemo eum deleniti fugiat eveniet esse quisquam maiores sit
            alias? Et, quod pariatur? Rerum eaque et aperiam, reiciendis cum
            excepturi, temporibus tempora non ab consequatur dolorum eius quae
            dolores eligendi repudiandae velit alias atque.
          </p>
          <button data-aos="fade-up">contact us</button>
        </div>
      </div>
    </div>
    <MainCourses />
    <mainTestimonials />
    <div class="subscriber-container">
      <div class="subscriber-wrapper">
        <h1 data-aos="fade-up">
          want to get special offers, promos and course updates from us???
        </h1>

        <div class="subscriber-rorm">
          <div class="input">
            <input
              type="email"
              placeholder="Your Email Address Here...."
            /><button>subscribe</button>
          </div>
        </div>
      </div>
    </div>
    <MainContact />
  </div>
</template>



<style lang="scss">
hr {
  display: block;
  width: 40%;
  height: 3px;
  background: rgb(230, 89, 7);
  border-radius: 30px;
}
.home-container {
  width: 100vw;
  height: fit-content;
  margin: 0;
  padding: 0;
  background: rgb(234, 246, 236);

  .landing-page {
    width: 100%;
    height: fit-content;
    background: rgb(234, 246, 236);

    .landing-page-wrapper {
      width: 80%;
      height: 89vh;
      margin: 0 auto;
      padding-top: 18vh;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .image-content {
        width: 50%;
        height: fit-content;

        .img {
          width: 80%;
          height: 400px;
          border-radius: 30%;
          background: rgb(37, 97, 89);
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            height: 90%;
            width: auto;
          }
        }
      }

      .page-content {
        width: 50%;
        height: fit-content;

        h1 {
          font-size: 45px;
          line-height: 50px;
          color: rgb(37, 36, 36);
          text-align: left;
          font-weight: 700;
          text-transform: capitalize;

          span {
            color: rgb(255, 82, 22);
          }
        }

        p {
          text-align: left;
        }

        .page-buttons {
          width: 100%;
          height: fit-content;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 20px;

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

            i {
              padding-right: 6px;
            }

            a {
              text-decoration: none;
              color: white;
              text-transform: capitalize;
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            &:last-child {
              background: rgb(37, 97, 89);
            }
          }
        }
      }

      @media screen and (max-width: 1000px) {
        width: 90%;

        @media screen and (max-width: 800px) {
          justify-content: center;
          height: fit-content;
          .image-content {
            display: none;
          }

          .page-content {
            width: 90%;

            h1,
            p {
              text-align: center;
              padding: 12px;
              line-height: 1.4em;
            }

            .page-buttons {
              justify-content: center;
              gap: 30px;
              flex-wrap: wrap;
            }
          }
          @media screen and (max-width: 600px) {
            .page-content {
              h1 {
                font-size: 40px;
              }
              p {
                font-size: 20px;
              }

              @media screen and (max-width: 450px) {
                h1 {
                  font-size: 35px;
                }

                .page-buttons {
                  button {
                    width: 80%;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  .about-container {
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: flex-end;
    padding: 20px 0;

    .about-wrapper {
      width: 80%;
      height: 300px;
      background: rgb(37, 97, 89);
      margin: 20px auto;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      border-radius: 15px;
      position: relative;

      .image-content {
        width: 35%;
        height: 100%;
        position: relative;

        img {
          width: 250px;
          height: auto;
          cursor: pointer;
          position: absolute;
          top: -14%;
          left: 10%;
          object-fit: contain;
        }
      }

      .blur-wrapper {
        display: none;
        opacity: 0.4;

        @media screen and (max-width: 768px) {
          display: block;
        }
      }

      .about-us {
        width: 65%;
        height: fit-content;
        padding: 10px;
        padding-right: 20px;
        position: relative;
        h1 {
          text-align: left;
          text-transform: uppercase;
          width: max-content;
          color: white;

          span {
            color: rgb(231, 136, 34);
          }

          &::before {
            content: "";
            display: block;
            width: 65%;
            height: 3px;
            background: rgb(228, 138, 12);
            margin-bottom: 5px;
          }
          &::after {
            content: "";
            display: block;
            width: 100%;
            height: 2px;
            background: rgb(217, 94, 7);
            margin-top: 5px;
          }
        }

        p {
          text-align: left;
          color: rgb(232, 232, 232);
          font-size: 14px;
          line-height: 24px;
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
          margin: 20px 0;

          i {
            padding-right: 6px;
          }
        }
      }
      @media screen and (max-width: 1000px) {
        width: 90%;

        @media screen and (max-width: 900px) {
          width: 100%;
          border-radius: 0;
          height: fit-content;

          .image-content {
            width: 30%;
          }

          .about-us {
            position: relative;
            width: 70%;
          }

          @media screen and (max-width: 768px) {
            padding: 20px 0;
            .image-content {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              overflow: hidden;
              img {
                height: 100%;
                width: auto;
                position: relative;
              }
            }
            .about-us {
              width: 100%;

              h1 {
                width: 100%;

                &::before,
                &::after {
                  display: none;
                }
              }
              h1,
              p {
                text-align: center;
              }
              button {
                margin: 20px auto;
                width: 200px;
                display: block;
              }
            }
          }
        }
      }
    }
  }

  .subscriber-container {
    width: 100%;
    height: fit-content;
    background: rgb(37, 97, 89);

    .subscriber-wrapper {
      width: 100%;
      height: fit-content;
      padding: 25px 0;

      h1 {
        padding: 20px;
        text-align: center;
        text-transform: capitalize;
        font-size: 22px;
        width: 80%;
        margin: 20px auto;
        line-height: 70px;
        color: rgb(255, 255, 255);
        font-weight: 500;
      }

      .input {
        width: 600px;
        height: 55px;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20px auto;
        background: rgb(255, 255, 255);
        border-radius: 30px;
        box-shadow: 0 0 1px 1px rgb(127, 127, 127);
        input {
          width: 70%;
          height: 100%;
          border: none;
          outline: none;
          padding: 3px 35px;
          background: inherit;
          font-size: 16px;
          color: black;
        }

        button {
          outline: none;
          border: none;
          width: 30%;
          height: 100%;
          background: rgb(37, 97, 89);
          color: white;
          font-weight: bold;
          text-transform: capitalize;
          font-size: 18px;
          border-radius: 30px;
        }

        @media screen and (max-width: 768px) {
          width: 80%;

          input {
            width: 65%;
          }
          button {
            width: 35%;
            font-size: 13px;
          }
        }
      }
    }
  }
}
</style>