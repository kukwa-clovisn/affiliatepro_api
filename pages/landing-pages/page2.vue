<template>
  <div class="page-container">
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
            <nuxt-link to="/landing-pages/page3"
              ><i class="fa-regular fa-circle-right"></i>learn more</nuxt-link
            ></button
          ><button><i class="fa-regular fa-circle-play"></i>watch video</button>
        </div>
      </div>
      <div class="image-content">
        <div class="img">
          <img src="~/assets/download-removebg-preview.png" alt="" />
        </div>
      </div>
    </div>
    <div class="statistics">
      <h1>
        welcome to my<br />
        <span>digital marketing space</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
        doloremque officia cumque placeat minus dolor dolore reprehenderit
        adipisci at amet. Esse veniam cum inventore maiores minus reprehenderit
        optio dolorum ipsa!
      </p>
      <MainStatistics />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-container {
  width: 100%;
  height: fit-content;
  background: linear-gradient(
    to bottom right,
    rgb(42, 81, 76),
    rgb(64, 116, 109)
  );

  .wrapper {
    width: 80%;
    height: fit-content;
    padding-top: 18vh;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .page-content {
      width: 50%;
      height: fit-content;
      padding: 20px 10px;

      h1 {
        text-transform: uppercase;
        text-align: left;
        line-height: 1.5em;
        color: white;
        font-size: 40px;
        span {
          color: rgb(253, 147, 1);
        }

        &::before {
          content: "lorem dolor sit";
          display: block;
          color: rgb(195, 194, 194);
          font-size: 13px;
          margin: 0;
          padding: 0;
          font-weight: 400;
          line-height: 0.9;
        }
      }
      p {
        text-align: left;
        line-height: 1.3em;
        color: rgb(225, 224, 224);
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
        }
      }
    }

    .image-content {
      width: 50%;
      height: 80vh;
      display: flex;
      justify-content: center;
      position: relative;

      .img {
        width: 380px;
        height: 500px;
        border-radius: 30% 0 30% 0;
        border: 5px solid rgb(235, 250, 159);
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgb(235, 250, 159);
        border-left: 0;
        border-bottom: 0;
        border-top: 15px solid rgb(255, 255, 255);
        border-right: 15px solid rgb(255, 255, 255);
        position: absolute;
        bottom: -5%;
        right: 10%;
        transform: rotateZ(5deg);
        img {
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }

  .statistics {
    width: 100%;
    height: fit-content;
    background: white;

    padding: 20px 10px;

    h1 {
      text-transform: uppercase;
      text-align: center;
      width: 80%;
      margin: 20px auto;
      line-height: 1.6em;
      font-size: 40px;
      color: rgb(42, 81, 76);

      span {
        color: rgb(253, 147, 1);
      }
    }
    p {
      width: 80%;
      margin: 10px auto;
      text-align: center;
      line-break: 1.4em;
    }
  }
}
</style>