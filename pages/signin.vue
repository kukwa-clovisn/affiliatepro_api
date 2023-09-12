<template>
  <div class="signin-container">
    <div class="signin-wrapper">
      <div class="signin-header">
        <div class="header-wrapper">
          <div class="logo">
            <img src="favicon.ico" alt="" />
          </div>
        </div>
        <h1>sign in to affiliate market place</h1>
      </div>
      <div class="signin-form">
        <div class="form-wrapper">
          <div class="input">
            <label for="email">Email address:</label
            ><input
              id="email"
              type="email"
              v-model="user.email"
              placeholder="Enter Email address..."
            />
          </div>
          <div class="input">
            <label for="password">password:</label
            ><input
              id="password"
              type="password"
              v-model="user.password"
              placeholder="Enter password..."
            />
          </div>
          <button @click="signinFunc(user.email, user.password)">
            sign in
          </button>
          <div class="links">
            <nuxtLink to="/signup"
              >Don't have an account yet? <span>sign up</span>
            </nuxtLink>
            <nuxtLink to="/forgot_password">forgot password ?</nuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
const user = reactive({
  email: "",
  password: "",
});

const signinFunc = (email, password) => {
  if (email === "" || password === "") {
    alert("fill in input fields.");
  }

  axios
    .post("http://localhost:3003/api/login", {
      email,
      password,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
</script>

<style lang="scss" scoped>
.signin-container {
  width: 100%;
  height: fit-content;

  .signin-wrapper {
    width: 100%;
    height: fit-content;

    .signin-header {
      width: 100%;
      .header-wrapper {
        width: 100%;

        .logo {
          width: fit-content;
          margin: 10px auto;

          img {
            height: 140px;
            width: auto;
            cursor: pointer;
          }
        }
      }
    }
    h1 {
      text-transform: capitalize;
      text-align: center;
      line-height: 80px;
      padding: 20px;
    }

    .signin-form {
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

          @media screen and (max-width: 768px) {
            width: 50vw;
          }
        }
        button {
          width: 100%;
          height: 50px;
          border-radius: 3px;
          border: none;
          background: rgb(10, 51, 89);
          color: white;
        }

        .links {
          width: 100%;

          a {
            width: 100%;
            text-align: left;
            text-transform: capitalize;
            text-decoration: none;
            color: black;
            font-size: 12px;
            padding: 5px 0;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            span,
            &:last-child {
              color: blue;
            }
          }
        }
      }

      @media screen and (max-width: 768px) {
        width: 50vw;
        margin: 10px auto;
      }
    }
  }
}
</style>