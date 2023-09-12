<template>
  <div class="home-container">
    <div :class="[{ squeezeHeader: stickyHeader }, 'header-component']">
      <div class="header-wrapper">
        <div class="header-logo">
          <div class="header-logo-wrapper">
            <img src="favicon.ico" alt="affiliate logo" />
          </div>
        </div>
        <div class="header-items">
          <div class="header-items-list">
            <nuxtLink to="/">Home</nuxtLink>
            <!-- <nuxtLink to="/">About Us</nuxtLink> -->
            <a href="#about-container">about us</a>
            <a href="#courses-container">Courses</a>
            <nuxtLink to="/">Contacts</nuxtLink>
          </div>
        </div>
        <div class="header-contact">
          <button>
            <nuxt-link to="/signin">dashboard</nuxt-link>
          </button>
        </div>
      </div>
    </div>

    <div class="landing-page">
      <div class="landing-page-wrapper">
        landing page contents will come in here
      </div>
    </div>
    <div class="about-container" id="about-container">
      <div class="about-wrapper">
        <h1>about us</h1>

        <div class="logo-img"><img src="favicon.ico" alt="" /></div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum,
          tempore nemo eum deleniti fugiat eveniet esse quisquam maiores sit
          alias? Et, quod pariatur? Rerum eaque et aperiam, reiciendis cum
          excepturi, temporibus tempora non ab consequatur dolorum eius quae
          dolores eligendi repudiandae velit alias atque. Eligendi quasi vero
          neque optio labore harum, alias architecto assumenda adipisci soluta
          non ab iste tenetur sunt illo blanditiis et ipsum deserunt. Cumque,
          optio nisi maiores est illum voluptas praesentium consequatur harum
          excepturi ea tempore facere, voluptatum unde dolor culpa sed tempora
          beatae nesciunt ad aliquid odit dignissimos vel? Mollitia maiores
          facilis, itaque optio accusamus quibusdam.
        </p>
        <button>contact us</button>
      </div>
    </div>
    <div class="courses-container" id="courses-container">
      <div class="courses-wrapper">
        <h2>our courses</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          corrupti error impedit et, non minus temporibus delectus. Quaerat, ex.
          Tempora itaque vel nam maxime quos natus repudiandae, rem harum eaque.
        </p>

        <div class="course-list">
          <div class="course">
            <h3>digital marketting</h3>
            <div class="course-img">
              <img src="favicon.ico" alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur totam reiciendis aliquam assumenda fugiat explicabo
              recusandae sit.
            </p>
            <div class="buttons">
              <button>start course</button> <button>add to wishlist</button>
            </div>
          </div>
          <div class="course">
            <h3>digital marketting</h3>
            <div class="course-img">
              <img src="favicon.ico" alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur totam reiciendis aliquam assumenda fugiat explicabo
              recusandae sit.
            </p>
            <div class="buttons">
              <button>start course</button> <button>add to wishlist</button>
            </div>
          </div>
          <div class="course">
            <h3>digital marketting</h3>
            <div class="course-img">
              <img src="favicon.ico" alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur totam reiciendis aliquam assumenda fugiat explicabo
              recusandae sit.
            </p>
            <div class="buttons">
              <button>start course</button> <button>add to wishlist</button>
            </div>
          </div>
          <div class="course">
            <h3>digital marketting</h3>
            <div class="course-img">
              <img src="favicon.ico" alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur totam reiciendis aliquam assumenda fugiat explicabo
              recusandae sit.
            </p>
            <div class="buttons">
              <button>start course</button> <button>add to wishlist</button>
            </div>
          </div>
          <div class="course">
            <h3>digital marketting</h3>
            <div class="course-img">
              <img src="favicon.ico" alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur totam reiciendis aliquam assumenda fugiat explicabo
              recusandae sit.
            </p>
            <div class="buttons">
              <button>start course</button> <button>add to wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="subscriber-container">
      <div class="subscriber-wrapper">
        <h1>
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
.home-container {
  width: 100vw;
  height: fit-content;

  .header-component {
    width: 100%;
    height: 14vh;
    background: rgb(7, 57, 122);

    .header-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .header-logo {
        width: 15%;
        height: 100%;

        .header-logo-wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            display: block;
            height: 80%;
            width: auto;
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
          gap: 30px;

          a {
            width: 20%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            color: white;
            text-transform: uppercase;
            font-family: Montserrat, sans-serif;
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
          background: blue;
          width: 200px;
          height: 40px;
          border: none;
          border-radius: 2px;

          a {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            color: white;
            text-decoration: none;
            text-transform: uppercase;
          }
        }
      }
    }
  }
  .header-component.squeezeHeader {
    height: 10vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .landing-page {
    width: 100%;
    height: 80vh;
    background: url(../assets/photoshop.jpg);
    background-attachment: fixed;

    .landing-page-wrapper {
      width: 100%;
      height: fit-content;
    }
  }

  .about-container {
    width: 100%;
    height: fit-content;
    background: rgb(4, 33, 79);
    padding: 20px 0;

    .about-wrapper {
      width: 80%;
      height: fit-content;
      margin: 20px auto;

      h1 {
        text-align: center;
        text-transform: uppercase;
        padding: 20px;
        color: white;
      }

      .logo-img {
        width: fit-content;
        margin: 10px auto;

        img {
          height: 100px;
          width: auto;
          cursor: pointer;
        }
      }
      p {
        text-align: center;
        padding: 10px;
        color: rgb(232, 232, 232);
      }
      button {
        min-width: 200px;
        height: 45px;
        border-radius: 30px;
        padding: 2px 14px;
        background: white;
        color: blue;
        margin: 10px auto;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .courses-container {
    width: 100%;
    height: fit-content;
    background: white;

    .courses-wrapper {
      width: 80%;
      height: fit-content;
      margin: 20px auto;

      h2 {
        text-align: center;
        padding: 10px;
        text-transform: uppercase;
        font-family: Montserrat, sans-serif;
        font-size: 30px;
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
          padding: 20px 10px;
          border-radius: 3px;

          h3 {
            text-align: center;
            text-transform: uppercase;
          }

          .course-img {
            width: 90%;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
              height: 100px;
              width: auto;
              object-fit: contain;
            }
          }

          .buttons {
            width: 90%;
            margin: 10px auto;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;

            button {
              min-width: 100px;
              height: 40px;
              padding: 2px 10px;
              border-radius: 3px;
              border: None;
              background: blue;
              color: white;
              text-transform: capitalize;
            }
          }
        }
      }
    }
  }

  .subscriber-container {
    width: 100%;
    height: fit-content;
    background: rgb(255, 255, 255);

    .subscriber-wrapper {
      width: 100%;
      height: fit-content;
      padding: 25px 0;

      h1 {
        padding: 20px;
        text-align: center;
        text-transform: capitalize;
        font-size: 45px;
        width: 80%;
        margin: 20px auto;
        line-height: 70px;
        color: rgb(3, 3, 50);
        font-weight: 700;
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
        box-shadow: 0 0 10px 10px rgb(238, 238, 238);

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
          background: blue;
          color: white;
          font-weight: bold;
          text-transform: capitalize;
          font-size: 18px;
          border-radius: 30px;
        }
      }
    }
  }
}
</style>