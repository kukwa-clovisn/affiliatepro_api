<template>
  <div class="home-container">
    <div :class="[{ squeezeHeader: stickyHeader }, 'header-component']">
      <div class="header-wrapper">
        <div class="header-logo">
          <div class="header-logo-wrapper">Affiliate <span>pro</span></div>
        </div>
        <div class="header-items">
          <div class="header-items-list">
            <nuxtLink to="/">Home</nuxtLink>
            <!-- <nuxtLink to="/">About Us</nuxtLink> -->
            <a href="/#about-container">about us</a>
            <a href="/#courses-container">Courses</a>
            <nuxtLink to="/#contact-container">Contacts</nuxtLink>
          </div>
        </div>
        <div class="header-contact">
          <button>
            <nuxt-link to="/signin">signin</nuxt-link>
          </button>
        </div>
      </div>
    </div>

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
    <div class="courses-design">
      <div class="wrapper">
        <h2 data-aos="zoom-in">
          How our courses are designed to help you learn....
          <hr data-aos="zoom-out" />
        </h2>

        <div class="designs">
          <div
            class="design"
            data-aos="fade-up"
            v-for="(item, index) in [
              'virtual learning',
              'easy exercises',
              'interactive sessions',
            ]"
            :key="index"
          >
            <div class="icon"><i class="fa-solid fa-laptop"></i></div>
            <h3>{{ item }}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              deserunt hic deleniti recusandae iure vitae quaerat labore optio,
              suscipit esse.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="about-container" id="about-container">
      <div class="about-wrapper">
        <div class="image-content">
          <img src="~/assets/hgju.png" alt="" />
        </div>
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
    <div class="courses-container" id="courses-container">
      <div class="courses-wrapper">
        <h2 data-aos="zoom-in">
          Find Your perfect <span>Digital Marketing</span>course(s)
          <hr data-aos="fade-up" />
        </h2>

        <p data-aos="slide-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          corrupti error impedit et, non minus temporibus delectus. Quaerat, ex.
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur totam reiciendis aliquam assumenda fugiat explicabo
              recusandae sit.
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
    <div class="contact-container" id="contact-container">
      <div class="wrapper">
        <div class="image-content">
          <img src="~/assets/images-removebg-preview.png" alt="" />
        </div>
        <p>
          want to link up with us? check out our social media links below...
        </p>
        <hr />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
          facere magni adipisci architecto aperiam dolorum.
        </p>
        <p>Get to us on whatsapp</p>
        <a href="#" class="whatsapp">start whatsapp chat</a>

        <div class="links">
          <div class="link">
            <div class="link-logo"><i class="fa-brands fa-facebook"></i></div>
            <div class="link-name">facebook</div>
          </div>
          <div class="link">
            <div class="link-logo"><i class="fa-brands fa-twitter"></i></div>
            <div class="link-name">twitter</div>
          </div>
          <div class="link">
            <div class="link-logo"><i class="fa-brands fa-linkedin"></i></div>
            <div class="link-name">linkedin</div>
          </div>
          <div class="link">
            <div class="link-logo"><i class="fa-brands fa-instagram"></i></div>
            <div class="link-name">instagram</div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-footer">
      <NuxtLayout name="page-footer" />
    </div>
  </div>
</template>

<script setup>
const stickyHeader = ref(false);
if (process.client) {
  window.addEventListener("scroll", () => {
    stickyHeader.value = true ? window.scrollY > 0 : false;
  });
}
</script>

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

  .header-component {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    background: rgb(13, 58, 99);
    background: rgb(234, 246, 236);
    background: transparent;
    padding: 20px 0 0 0;
    .header-wrapper {
      width: 80%;
      height: 12vh;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 10px;
      background: white;
      box-shadow: 0 0 6px 1px rgb(205, 205, 205);

      .header-logo {
        width: 15%;
        height: 100%;

        .header-logo-wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;

          img {
            display: block;
            height: 80%;
            width: auto;
          }
          color: rgb(35, 110, 100);
          font-weight: 700;
          font-size: 25px;
          text-transform: capitalize;
          font-family: "Grand Hotel", cursive;

          span {
            color: rgb(255, 136, 0);
            font-family: "Grand Hotel", cursive;
          }

          &::after {
            content: "";
            display: block;
            width: 100%;
            height: 2px;
            background: rgb(248, 132, 17);
            position: absolute;
            bottom: 0;
            left: 0;
          }
        }
      }
      .header-items {
        width: 60%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        .header-items-list {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;

          a {
            width: 20%;
            height: 100%;
            font-size: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            color: rgb(43, 42, 42);
            text-transform: uppercase;
            font-family: Montserrat, sans-serif;
            font-weight: bold;

            &:hover {
              color: rgb(208, 117, 12);
            }
          }
        }
      }

      .header-contact {
        width: 25%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        button {
          outline: none;
          background: rgb(255, 255, 255);
          background: rgb(37, 97, 89);
          width: 200px;
          height: 40px;
          border: none;
          border-radius: 30px;

          a {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            color: rgb(255, 255, 255);
            text-decoration: none;
            text-transform: uppercase;
          }
        }
      }
    }
  }
  .header-component.squeezeHeader {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    .header-wrapper {
      height: 11vh;
    }
  }
  .landing-page {
    width: 100%;
    height: 86vh;
    background: rgb(234, 246, 236);

    .landing-page-wrapper {
      width: 80%;
      height: 100%;
      margin: 0 auto;
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
    }
  }

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
      }
    }
  }

  .courses-design {
    width: 100%;
    height: fit-content;

    .wrapper {
      width: 80%;
      height: fit-content;
      margin: 10px auto;
      padding-top: 40px;
      padding-bottom: 30px;

      h2 {
        text-align: center;
        text-transform: capitalize;
        padding: 25px 10px;
      }

      .designs {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
        flex-wrap: wrap;

        .design {
          width: 300px;
          height: 180px;
          border-radius: 15px;
          background: white;
          background: rgb(239, 248, 241);
          box-shadow: 0 0 5px 2px rgb(255, 255, 255);
          padding: 20px;

          .icon {
            width: 100%;
            display: flex;
            justify-content: flex-start;

            i {
              font-size: 24px;
            }
          }

          h3 {
            text-align: left;
            margin: 5px 0;
            text-transform: capitalize;
          }

          p {
            text-align: left;
            padding: 10px 0;
            font-size: 12px;
            margin: 0;
          }

          &:hover {
            background: white;
            cursor: pointer;
            box-shadow: 0 0 10px 1px rgb(234, 234, 234);
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

      .about-us {
        width: 65%;
        height: fit-content;
        padding: 10px;
        padding-right: 20px;
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
    }
  }
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
              height: auto;
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
      }
    }
  }
  .contact-container {
    width: 100%;
    height: fit-content;

    .wrapper {
      width: 80%;
      margin: 20px auto;
      height: fit-content;
      padding: 20px 0;

      p {
        padding: 10px;
        text-align: center;
      }

      .image-content {
        width: 120px;
        height: 120px;
        border-radius: 100%;
        border: 4px solid orange;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px auto;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      .whatsapp {
        width: max-content;
        height: 47px;
        border: none;
        border-radius: 30px;
        padding: 0 25px;
        margin: 25px auto;
        background: linear-gradient(
          to right,
          rgb(253, 147, 1),
          rgb(255, 82, 22)
        );
        color: white;
        text-transform: capitalize;
        font-weight: 600;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
      }

      .links {
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
        margin: 20px auto;

        .link {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;

          .link-logo {
            width: 40%;
            display: flex;
            justify-content: center;
            align-items: center;

            i {
              font-size: 35px;
              color: rgb(29, 124, 110);
            }
          }

          .link-name {
            font-size: 16px;
            font-weight: 600;
            text-transform: capitalize;
            color: rgb(21, 120, 120);
          }
        }
      }
    }
  }
}
</style>