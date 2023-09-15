<template>
  <div class="signin-container">
    <div class="signin-wrapper">
      <h1>sign in to affiliate market place</h1>

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
// import axios from "axios";
const user = reactive({
  email: "",
  password: "",
});

const signinFunc = (email, password) => {
  navigateTo("/dashboard/");

  console.log(email, password);
  // axios
  //   .post("http://localhost:3003/api/login", {
  //     email,
  //     password,
  //   })
  //   .then((res) => )
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
    padding-top:18vh;

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
          height: 50px;
          margin: 40px auto;

          label {
            text-transform: capitalize;
            padding: 5px 0;
            display: block;
            font-weight: 500;
          }
          input {
            width: 100%;
            height: 45px;
            outline: none;
            padding: 0 17px;
            border: none;
            outline: none;
            border: 1px solid rgb(215, 225, 223);
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
          background: rgb(37, 97, 89);
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
              color: rgb(230, 139, 12);
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