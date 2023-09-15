<template>
  <div class="signin-container">
    <div class="signin-wrapper">
      <h1>Forgot your password??</h1>
      <p>Let us help you recover your account...</p>

      <div class="signin-form">
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

    p {
      text-align: center;
      margin: 5px auto;
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