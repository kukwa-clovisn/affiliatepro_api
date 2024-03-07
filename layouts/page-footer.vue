<template>
  <footer>
    <div class="wrapper">
      <div class="logo">
        <h1>gospelfx<span>trader</span></h1>
        <p>
          I'm a mentor and CEO of jugosfx academy I mentor and follow up my
          mentees till there are profitable Benefits Offering a 1 on 1
          mentorship to help slow learners pick up I trained from novis to pro
          traders helping traders with most of their trading challenges
          psychologically and technically
        </p>
      </div>
      <div class="links">
        <div class="wrapper">
          <div class="link"><a href="/#about-container">about us</a></div>
          <div class="link"><a href="/#courses-container">courses</a></div>
          <div class="link"><a href="/#contact-container">contacts</a></div>
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
  background: rgb(37, 97, 89);

  .wrapper {
    width: 90%;
    height: fit-content;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;

    .logo {
      width: 40%;

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
        font-size: 13px;
        line-height: 17px;
        text-align: left;
      }
    }

    .links {
      width: 20%;
      height: fit-content;

      .wrapper {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 20px;

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
      width: 40%;
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