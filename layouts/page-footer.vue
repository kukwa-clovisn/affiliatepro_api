<template>
  <footer>
    <div class="wrapper">
      <div class="logo">
        <h1>affiliate<span>pro</span></h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
          corrupti.
        </p>
      </div>
      <div class="links">
        <div class="wrapper">
          <div class="link"><a href="/#about-container">about us</a></div>
          <div class="link"><a href="/#courses-container">courses</a></div>
          <div class="link"><a href="#contacts">contacts</a></div>
        </div>
      </div>
      <div class="contacts">contacts</div>
    </div>
    <div class="copyright">&copy; copyright codingherald2023</div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  width: 100vw;
  height: fit-content;
  background: rgb(17, 27, 26);

  .wrapper {
    width: 90%;
    height: fit-content;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;

    .logo {
      width: 20%;

      h1 {
        color: white;
        text-transform: uppercase;
        text-align: left;
        span {
          color: orange;
        }
      }
      p {
        color: rgb(232, 231, 231);
        font-size: 11px;
        text-align: left;
      }
    }

    .links {
      width: 55%;
      height: fit-content;

      .wrapper {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;

        .link {
          a {
            text-decoration: none;
            color: white;
            text-transform: capitalize;
            padding: 5px 3px;

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
    .contacts {
      width: 25%;
      height: fit-content;
      color: white;
    }
  }
  .copyright {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    color: rgb(213, 211, 211);
    font-weight: lighter;
  }
}
</style>