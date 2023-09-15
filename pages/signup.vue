<template>
  <div class="signin-container">
    <div class="signin-wrapper">
      <h1>signup to affiliate market place</h1>

      <div class="signin-form">
        <div class="form-wrapper">
          <div :class="[{ error: status.username }, 'input']">
            <label for="name">Enter Full Name:</label>
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
            <label for="email">Enter Email address:</label
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
            <label for="password">Enter password:</label
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
          <button @click="signupFunc(user.username, user.email, user.password)">
            signup
          </button>
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

const signupFunc = (username, email, password) => {
  status.username = true ? username === "" : (status.username = false);
  status.email = true ? email === "" : (status.email = false);
  status.password = true ? password === "" : (status.password = false);

  // axios
  //   .post("http://localhost:3003/api/signup", {
  //     username,
  //     email,
  //     password,
  //   })
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => console.log(err));
};
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
        width: 500px;
        height: fit-content;
        margin: 10px auto;
        padding: 20px 10px;

        .input {
          width: 100%;
          height: fit-content;
          margin: 15px auto;

          label {
            text-transform: capitalize;
            padding: 10px 0;
            font-weight: 500;
            display: block;
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