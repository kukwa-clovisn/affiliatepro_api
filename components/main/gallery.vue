<template>
  <div>
    <h1>my gallery...</h1>
    <hr />
    <p>Have a glance through my gallery and outdoor engagements.</p>
    <div class="gallery-wrapper">
      <div class="gallery-content">
        <div class="gallery">
          <div class="image"><img src="~/assets/gospel.png" alt="" /></div>
          <div class="blur-wrapper"></div>

          <div class="gallery-pop">
            <h3>private life</h3>
            <p>see more about my private photos</p>
            <button>view more</button>
          </div>
        </div>
        <div class="gallery">
          <div class="image"><img src="~/assets/gospel.png" alt="" /></div>
          <div class="blur-wrapper"></div>

          <div class="gallery-pop">
            <h3>social life</h3>
            <p>see more about my private photos</p>
            <button>view more</button>
          </div>
        </div>
        <div class="gallery">
          <div class="image"><img src="~/assets/gospel.png" alt="" /></div>
          <div class="blur-wrapper"></div>

          <div class="gallery-pop">
            <h3>trading life</h3>
            <p>see more about my private photos</p>
            <button>view more</button>
          </div>
        </div>
        <div class="gallery">
          <div class="image"><img src="~/assets/gospel.png" alt="" /></div>
          <div class="blur-wrapper"></div>

          <div class="gallery-pop">
            <h3>engineering life</h3>
            <p>see more about my private photos</p>
            <button>view more</button>
          </div>
        </div>
      </div>
    </div>
    <div class="images-wrapper">
      <h3>my <span>private life</span> images</h3>
      <div class="images-content">
        <img src="~/assets/gospel.png" alt="" />
        <img src="~/assets/gospel.png" alt="" />
        <img src="~/assets/gospel.png" alt="" />
        <img src="~/assets/gospel.png" alt="" />
        <img src="~/assets/gospel.png" alt="" />
        <img src="~/assets/gospel.png" alt="" />
        <img src="~/assets/gospel.png" alt="" />
        <img src="~/assets/gospel.png" alt="" />
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
h1 {
  padding: 10px;
  padding-bottom: 0px;
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
p {
  text-align: center;
  padding: 10px;
}

.gallery-wrapper {
  width: 100%;
  height: fit-content;

  .gallery-content {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: row;
    gap: 20px;
    flex-wrap: wrap;

    .gallery {
      width: 230px;
      height: 300px;
      overflow: hidden;
      box-shadow: 0 3px 15px 1px rgba(161, 161, 161, 0.896);
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      .image {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .blur-wrapper {
        display: none;
      }

      .gallery-pop {
        display: none;
        width: 100%;
        height: fit-content;
        position: relative;

        h3 {
          text-align: center;
          text-transform: capitalize;
          color: white;
        }

        p {
          text-align: center;
          color: white;
        }

        button {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 130px;
          height: 40px;
          border-radius: 30px;
          color: white;
          background: rgb(37, 97, 89);
          margin: 10px auto;
          outline: none;
        }
      }

      &:hover {
        cursor: pointer;
        .blur-wrapper {
          display: block;
          background: rgb(3, 74, 67);
          opacity: 0.8;
        }

        .gallery-pop {
          display: block;
          animation: appear 0.5s ease-in forwards;
        }
      }

      @keyframes appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    }
  }
}

.images-wrapper {
  width: 100%;
  height: fit-content;
  margin: 20px auto;

  h3 {
    text-align: center;
    padding: 20px;
    text-transform: uppercase;
    font-size: 24px;

    span {
      color: orange;
    }
  }

  .images-content {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;

    img {
      width: 300px;
      height: auto;
      border: 1px solid rgb(197, 83, 3);
    }
  }
}
</style>