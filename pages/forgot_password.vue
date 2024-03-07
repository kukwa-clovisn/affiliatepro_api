<template>
  <div class="fpassword-container">
    <div class="fpassword-wrapper">
      <h1>Forgot your password??</h1>
      <p>Let us help you recover your account...</p>
      <div class="fpassword-img">
        <img src="~/assets/auth.png" alt="" />
      </div>
      <div class="fpassword-img-right">
        <img src="~/assets/auth.png" alt="" />
      </div>
      <div class="fpassword-form">
        <div class="form-wrapper">
          <div class="input">
            <label for="email">Email address:</label
            ><input
              id="email"
              type="email"
              placeholder="Enter Email address..."
            />
          </div>

          <button>Get code</button>
          <div class="links">
            <nuxtLink to="/signin">signin</nuxtLink>
            <nuxtLink to="/">home</nuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fpassword-container {
  width: 100%;
  height: fit-content;
  background: rgb(234, 246, 236);
  .fpassword-wrapper {
    width: 100%;
    height: fit-content;
    padding-top: 18vh;
    h1 {
      text-transform: capitalize;
      text-align: center;
      line-height: 30px;
      padding: 10px;
    }

    p {
      text-align: center;
      margin: 5px auto;
    }

    .fpassword-img,
    .fpassword-img-right {
      width: fit-content;
      height: fit-content;
      position: absolute;
      bottom: 15%;
      left: 2%;

      .blur-wrapper {
        opacity: 0.3;
      }

      img {
        width: 300px;
        object-fit: contain;
      }

      @media screen and (max-width: 1050px) {
        bottom: 15%;

        img {
          width: 200px;
        }

        @media screen and (max-width: 1000px) {
          display: none;
        }
      }
    }

    .fpassword-img-right {
      left: 75%;
    }
    .fpassword-form {
      width: 100%;
      height: fit-content;

      .form-wrapper {
        width: 350px;
        height: fit-content;
        margin: 10px auto;
        padding: 20px 10px;

        .input {
          width: 100%;
          height: 50px;
          margin: 30px auto;

          label {
            text-transform: capitalize;
            padding: 5px 0;
            font-weight: 500;
          }
          input {
            width: 100%;
            height: 45px;
            outline: none;
            padding: 0 17px;
          }
        }
        button {
          width: 100%;
          height: 50px;
          border-radius: 3px;
          border: none;
          background: rgb(37, 97, 89);
          color: white;
        }

        .links {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;

          a {
            width: max-content;
            text-align: left;
            text-transform: capitalize;
            text-decoration: none;

            font-size: 14px;
            color: rgb(224, 81, 4);
            padding: 10px 0;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;

            font-weight: 600;
          }
        }

        @media screen and (max-width: 450px) {
          width: 85%;
        }
      }
    }
  }
}
</style>