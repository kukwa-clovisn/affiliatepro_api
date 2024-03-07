<template>
  <div class="signin-container">
    <div class="signin-wrapper">
      <div class="signup-img"><img src="~/assets/sign-up.png" alt="" /></div>
      <h1>
        signup to <span>gospelfx<span>trader</span></span> mentorship
      </h1>

      <div class="signin-form">
        <div class="form-wrapper">
          <div :class="[{ error: status.username }, 'input']">
            <label for="name"> Full Name:</label>
            <input
              type="text"
              id="name"
              v-model="user.username"
              placeholder="Ener Full Name..."
            />
            <div class="input-status">
              <div class="check-error" v-if="status.username">
                <i class="fa-solid fa-circle-xmark"></i>
                <span>invalid credentials... </span>
              </div>
            </div>
          </div>
          <div :class="[{ error: status.email }, 'input']">
            <label for="email"> Email address:</label
            ><input
              id="email"
              type="email"
              v-model="user.email"
              pattern="/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
"
              placeholder="Enter Email address..."
            />
            <div class="input-status">
              <div class="check-error" v-if="status.email">
                <i class="fa-solid fa-circle-xmark"></i>
                <span>invalid credentials... </span>
              </div>
            </div>
          </div>
          <div :class="[{ error: status.password }, 'input']">
            <label for="password"> password:</label
            ><input
              id="password"
              type="password"
              v-model="user.password"
              placeholder="Enter password..."
            />
            <div class="input-status">
              <div class="check-error" v-if="status.password">
                <i class="fa-solid fa-circle-xmark"></i>
                <span>invalid credentials... </span>
              </div>
            </div>
          </div>
          <button @click="signupFunc()">create account</button>
          <div class="links">
            <nuxtLink to="/signin"
              >Already have an account ? <span>signin</span>
            </nuxtLink>
            <nuxtLink to="/">Home</nuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";

const user = reactive({ username: "", email: "", password: "" });

const status = reactive({
  username: false,
  email: false,
  password: false,
});

function signupFunc() {
  if (
    user.username.length >= 3 &&
    user.email.length >= 8 &&
    user.password.length >= 4
  ) {
    axios
      .post("/signup", user)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.msg);
      });
  } else {
    alert("invalid credentials");
  }
}
</script>

<style lang="scss" scoped>
.signin-container {
  width: 100%;
  height: fit-content;

  background: rgb(234, 246, 236);
  .signin-wrapper {
    width: 100%;
    height: fit-content;
    padding-top: 18vh;
    position: relative;
    .signup-img {
      position: absolute;
      bottom: 10%;
      right: 1%;

      img {
        width: 400px;
        object-fit: contain;
      }
    }
    h1 {
      text-transform: capitalize;
      text-align: center;
      line-height: 1.5em;
      padding: 10px;
      font-weight: 800;
      position: relative;
      width: 500px;
      margin: 0 auto;
      color: rgb(42, 81, 76);

      span {
        color: rgb(42, 81, 76);

        span {
          color: rgb(253, 147, 1);
        }
      }

      @media screen and (max-width: 600px) {
        width: 80%;
        text-align: left;
        padding: 0;
      }
    }

    .signin-form {
      width: 100%;
      height: fit-content;
      position: relative;
      .form-wrapper {
        width: 500px;
        height: fit-content;
        margin: 0 auto;
        padding: 10px;

        .input {
          width: 100%;
          height: fit-content;
          margin: 15px auto;

          label {
            text-transform: capitalize;
            padding: 10px 0;
            font-weight: 500;
            display: block;
            font-weight: 500;
            font-size: 18px;
          }
          input {
            width: 100%;
            height: 45px;
            padding: 0 17px;
            border-radius: 2px;
            border: none;
            outline: 1px solid rgb(186, 185, 185);
            box-shadow: 0 0 10px 1px rgb(170, 169, 169);
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
                font-weight: bolder;
              }
              span {
                font-size: 13px;
                padding: 0 10px;
              }
            }

            .check-error {
              i,
              span {
                color: rgb(215, 22, 70);
              }
            }
          }
        }

        .input.error {
          label {
            color: rgb(215, 22, 70);
          }

          input {
            box-shadow: 0 0 10px 1px rgb(119, 89, 89);
            outline: 3px solid rgb(215, 22, 70);
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
          gap: 10px;
          flex-wrap: wrap;

          a {
            width: max-content;
            text-align: left;
            text-transform: capitalize;
            text-decoration: none;

            font-size: 12px;
            padding: 5px 0;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            span {
              color: rgb(218, 68, 18);
            }

            &:last-child {
              color: rgb(218, 68, 18);
            }
          }
        }

        @media screen and (max-width: 600px) {
          width: 80%;
        }
      }
    }
  }
}
</style>