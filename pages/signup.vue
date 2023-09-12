<template>
  <div class="signin-container">
    <div class="signin-wrapper">
      <div class="signin-header">
        <div class="header-wrapper">
          <div class="logo">
            <img src="favicon.ico" alt="" />
          </div>
        </div>
        <h1>signup to affiliate market place</h1>
      </div>
      <div class="signin-form">
        <div class="form-wrapper">
          <div class="input">
            <label for="name">Enter Full Name:</label>
            <input
              type="text"
              id="name"
              v-model="user.username"
              placeholder="Ener Full Name..."
            />
            <div class="input-status">
              <div class="check-success" v-if="checkStatus.success">
                <i class="fa-regular fa-circle-check"></i> <span>valid</span>
              </div>
              <div class="check-error" v-if="checkStatus.error">
                <i class="fa-solid fa-circle-xmark"></i>
                <span>invalid </span>
              </div>
            </div>
          </div>
          <div class="input">
            <label for="email">Email address:</label
            ><input
              id="email"
              type="email"
              v-model="user.email"
              pattern="/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
"
              placeholder="Enter Email address..."
            />
            <div class="input-status">
              <div class="check-success" v-if="checkStatus.success">
                <i class="fa-regular fa-circle-check"></i> <span>valid</span>
              </div>
              <div class="check-error" v-if="checkStatus.error">
                <i class="fa-solid fa-circle-xmark"></i>
                <span>invalid </span>
              </div>
            </div>
          </div>
          <div class="input">
            <label for="password">password:</label
            ><input
              id="password"
              type="password"
              v-model="user.password"
              placeholder="Enter password..."
            />
            <div class="input-status">
              <div class="check-success" v-if="checkStatus.success">
                <i class="fa-regular fa-circle-check"></i> <span>valid</span>
              </div>
              <div class="check-error" v-if="checkStatus.error">
                <i class="fa-solid fa-circle-xmark"></i>
                <span>invalid </span>
              </div>
            </div>
          </div>
          <button @click="signupFunc(user.username, user.email, user.password)">
            signup
          </button>
          <div class="links">
            <nuxtLink to="/signin "
              >Already have an account ? <span>signin</span>
            </nuxtLink>
            <nuxtLink to="/">Home</nuxtLink>
          </div>
        </div>
      </div>
    </div>
    <AlertSuccess />
  </div>
</template>

<script setup>
import axios from "axios";

const user = reactive({ username: "", email: "", password: "" });

const checkStatus = reactive({
  success: false,
  error: false,
});

const signupFunc = (username, email, password) => {
  checkStatus.success = false;
  checkStatus.error = false;
  if (username === "" || email === "" || password === "") {
    checkStatus.error = true;
    checkStatus.success = false;
    return;
  }
  checkStatus.success = true;
  checkStatus.error = false;
  axios
    .post("http://localhost:3003/api/signup", {
      username,
      email,
      password,
    })
    .then((res) => {
      console.log(res);
    })
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

          .input-status {
            width: 100%;
            height: fit-content;

            .check-success,
            .check-error {
              width: 100%;
              height: fit-content;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              padding: 4px 1px;

              i {
                font-size: 13px;
                color: green;
              }
              span {
                font-size: 13px;
                padding: 0 10px;
              }
            }

            .check-error {
              i,
              span {
                color: red;
              }
            }
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
          display: flex;
          justify-content: space-between;
          align-items: center;

          a {
            width: max-content;
            text-align: left;
            text-transform: capitalize;
            text-decoration: none;
            color: black;
            font-size: 12px;
            padding: 5px 0;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            span {
              color: blue;
            }

            &:last-child {
              color: blue;
            }
          }
        }
      }
    }
  }
}
</style>