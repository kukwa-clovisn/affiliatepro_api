<template>
  <div class="home-container">
    <div class="landing-page">
      <div class="landing-page-wrapper">
        <div class="image-content">
          <div class="img">
            <img src="~/assets/gospel.png" alt="" />
          </div>
        </div>
        <div class="page-content">
          <h1>Hi i'm <span>Gospel Yong. </span><br /></h1>
          <div class="listings">
            <h2>i'm a</h2>
            <div class="list-div">
              <ul>
                <li>forex trader.....</li>
                <li>civil engineer.....</li>
                <li>youtuber..........</li>
              </ul>
            </div>
          </div>
          <p>Welcome to my space</p>
          <div class="page-buttons">
            <button>
              <nuxt-link to="/signup"
                ><i class="fa-regular fa-circle-right"></i>join
                mentorship</nuxt-link
              ></button
            ><button>
              <nuxt-link to="/signin"
                ><i class="fa-regular fa-circle-right"></i>free
                courses</nuxt-link
              >
            </button>
          </div>
        </div>
      </div>
    </div>

    <MainStatistics />
    <MainCourseDesign />
    <div class="about-container" id="about-us">
      <div class="about-wrapper">
        <div class="image-content">
          <img src="~/assets/gospel.png" alt="" />
        </div>
        <div class="blur-wrapper"></div>
        <div class="about-us">
          <h1>about <span>me</span></h1>
          <p>
            I'm a professional forex trader with 6years of experience and also a
            funded trader with multiple prop firms.
          </p>
          <p>
            I'm a mentor and CEO of jugosfx academy I mentor and follow up my
            mentees till there are profitable Benefits Offering a 1 on 1
            mentorship to help slow learners pick up I trained from novis to pro
            traders helping traders with most of their trading challenges
            psychologically and technically
          </p>
          <button data-aos="zoom-in">learn more</button>
        </div>
      </div>
    </div>
    <MainCourses />
    <div class="video-content">
      <div class="video-wrapper">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/PsFhqfKrFu4?si=MtvDKx9X1jjJ1Rov"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
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
          width: 75%;
          height: 400px;
          border-radius: 35% 0 35% 0;
          background: rgb(37, 97, 89);
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            height: 100%;
            width: auto;
          }
        }
      }

      .page-content {
        width: 50%;
        height: fit-content;

        h1 {
          font-size: 40px;
          line-height: 50px;
          color: rgb(37, 97, 89);
          text-align: left;
          font-weight: 600;

          span {
            color: rgb(255, 82, 22);
            font-size: 40px;
            text-transform: uppercase;
          }
        }

        .listings {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;
          flex-direction: row;
          gap: 20px;

          h2 {
            text-transform: uppercase;
            color: rgb(37, 97, 89);
          }

          .list-div {
            position: relative;
            height: 50px;
            width: 230px;
            overflow: hidden;
            padding: 0;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;

            ul {
              width: 100%;
              list-style-type: none;
              position: absolute;
              animation: skip 12s steps(3) infinite;
              top: 0;
              left: 0;
              margin: 0;
              display: flex;
              justify-content: center;
              align-items: flex-start;
              flex-direction: column;
              padding: 0;

              li {
                text-transform: uppercase;
                font-size: 23px;
                height: 50px;
                width: 100%;
                display: flex;
                text-align: left;
                justify-content: flex-start;
                align-items: center;
                padding: 0;
                margin: 0;
                color: rgb(37, 97, 89);
                font-weight: 800;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
            }
            &::before {
              content: " ";
              width: 100%;
              height: 100%;
              position: absolute;
              bottom: 0;
              left: 0;
              background: rgb(234, 246, 236);
              animation: list 2s infinite alternate linear forwards;

              border-left: 4px solid darkgreen;

              z-index: 1;
            }
          }

          @keyframes list {
            from {
              left: 0;
            }
            to {
              left: 100%;
            }
          }
        }

        @keyframes skip {
          from {
            top: 0;
          }
          to {
            top: -150px;
          }
        }
        p {
          text-align: left;
          color: rgb(37, 97, 89);
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
              color: white;
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
  }

  .about-container {
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: flex-end;
    padding: 30px 0;

    background: linear-gradient(
      to bottom,
      rgb(37, 97, 89),
      rgb(50, 168, 152),
      rgba(50, 168, 152, 0)
    );
    // border-radius: 0 0 10% 10%;

    .about-wrapper {
      width: 80%;
      height: 400px;
      background: rgb(37, 97, 89);
      background: linear-gradient(
        to bottom,
        rgb(37, 97, 89),
        rgb(50, 168, 152)
      );
      margin: 20px auto;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      border-radius: 15px;
      position: relative;
      box-shadow: -3px -3px 8px 1px rgba(1, 49, 34, 0.807);

      .image-content {
        width: 35%;
        height: 100%;
        position: relative;
        overflow: hidden;

        img {
          width: auto;
          height: 440px;
          cursor: pointer;
          // position: absolute;
          // top: -14%;
          // left: 10%;
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
          font-size: 16px;
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

  .video-content {
    width: 100%;
    height: fit-content;
    padding: 20px;

    .video-wrapper {
      width: 100%;
      height: fit-content;
      margin: 10px 0;
      display: flex;
      justify-content: center;
      align-items: center;

      iframe {
        width: 100%;
        height: 500px;
        margin: 0;
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