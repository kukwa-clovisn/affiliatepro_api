<template>
  <div class="page-container">
    <div class="flip-div-wrapper">
      <div class="flip-div"></div>
    </div>
    <div class="wrapper">
      <div class="page-content">
        <h1>learn <span>digital marketing</span> today</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae,
          facere sequi eius totam et cupiditate, autem aut id deleniti
          architecto saepe assumenda, minima consequatur tenetur.
        </p>
        <div class="page-buttons">
          <button>
            <nuxt-link to="/page2"
              ><i class="fa-regular fa-circle-right"></i>learn more</nuxt-link
            ></button
          ><button><i class="fa-regular fa-circle-play"></i>watch video</button>
        </div>
      </div>
      <div class="image-content">
        <img src="~/assets/download-removebg-preview.png" alt="" />
      </div>
    </div>
    <div class="statistics">
      <MainStatistics />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-container {
  width: 100%;
  height: fit-content;
  background: linear-gradient(to top right, rgb(85, 62, 254), rgb(121, 0, 225));
  position: relative;
  padding: 0;
  margin: 0;

  .flip-div-wrapper {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    background: white;
    .flip-div {
      width: 110vw;
      height: 160vh;
      background: rgb(228, 127, 45);
      position: absolute;
      top: 0;
      left: -40%;
      transform: rotateZ(50deg);
    }
  }

  .wrapper {
    width: 80%;
    height: fit-content;
    padding-top: 18vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .page-content {
      width: 50%;
      height: fit-content;
      padding: 20px 10px;
      position: relative;

      h1 {
        text-transform: uppercase;
        text-align: left;
        line-height: 1.5em;
        color: rgb(0, 0, 0);
        font-size: 40px;
        span {
          color: rgb(0, 0, 0);
        }
      }
      p {
        text-align: left;
        line-height: 1.3em;
        color: rgb(24, 24, 24);
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
            background: transparent;
            border: 1px solid white;
          }

          &:hover {
            background: white;
            color: black;

            i,
            a {
              color: black;
            }
          }
        }
      }
    }

    .image-content {
      width: 50%;
      height: fit-content;
      position: relative;

      img {
        width: 500px;
        object-fit: contain;
      }
    }
  }

  .statistics {
    width: 100%;
    height: fit-content;
    background: white;
  }
}
</style>