<template>
  <div class="status-container">
    <div class="wrapper">
      <div class="content">
        <div class="content-wrapper">
          <div class="cover">
            <button class="third">
              <i class="fa-solid fa-eye"></i>
            </button>
          </div>
          <div class="label">
            <h3>website visits</h3>
            <p>200</p>
          </div>
        </div>

        <div class="content-percentage">
          <hr />
          <p><span>+10%</span> 200 visits</p>
        </div>
      </div>
      <div class="content">
        <div class="content-wrapper">
          <div class="cover">
            <button class="fourth">
              <i class="fa-solid fa-calendar-check"></i>
            </button>
          </div>
          <div class="label">
            <h3>appointment</h3>
            <p>100%</p>
          </div>
        </div>

        <div class="content-percentage">
          <hr />
          <p><span>+6%</span> 100 users</p>
        </div>
      </div>
      <div class="content">
        <div class="content-wrapper">
          <div class="cover">
            <button class="first">
              <i class="fa-solid fa-envelope"></i>
            </button>
          </div>
          <div class="label">
            <h3>messages</h3>
            <p>34</p>
          </div>
        </div>

        <div class="content-percentage">
          <hr />
          <p><span>+3%</span> 10 today</p>
        </div>
      </div>
      <div class="content">
        <div class="content-wrapper">
          <div class="cover">
            <button class="second">
              <i class="fa-brands fa-product-hunt"></i>
            </button>
          </div>
          <div class="label">
            <h3>products</h3>
            <p>{{ response.length }}</p>
          </div>
        </div>
        <div class="content-percentage">
          <hr />
          <p><span>+3%</span> 10 today</p>
        </div>
      </div>
      <div class="content">
        <div class="content-wrapper">
          <div class="cover">
            <button>
              <i class="fa-solid fa-plane-circle-check"></i>
            </button>
          </div>
          <div class="label">
            <h3>flight</h3>
            <p>100%</p>
          </div>
        </div>
        <div class="content-percentage">
          <hr />
          <p><span>+3%</span> 10 today</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
const response = ref([]);
onBeforeMount(() => {
  axios
    .get("https://api.biscaminvestmentsarl.com/api/product/products")
    .then((res) => (response.value = res.data))
    .catch((err) => err);
});
</script>

<style lang="scss" scoped>
.status-container {
  width: 100%;
  height: 100%;
  background: transparent;

  .wrapper {
    width: 100%;
    height: 100%;
    padding-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;

    .content {
      width: 160px;
      height: 110px;
      background: white;
      border-radius: 3px;
      box-shadow: 0 0 10px 7px rgb(219, 216, 216);
      position: relative;
      cursor: pointer;

      .content-wrapper {
        width: 100%;
        height: 75px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .cover {
          position: relative;
          width: 100%;
          height: 30%;

          button {
            border: none;
            outline: none;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 50px;
            position: absolute;
            top: -70%;
            border-radius: 100%;
            background: rgb(162, 40, 40);
            box-shadow: 0 0 7px 8px rgb(230, 230, 230);

            i {
              color: white;
              font-size: 19px;
            }
          }

          button.first {
            background: linear-gradient(
              to right,
              rgb(249, 180, 84),
              rgb(253, 161, 28)
            );
          }
          button.second {
            background: linear-gradient(
              to right,
              rgb(113, 222, 118),
              rgb(85, 171, 89)
            );
          }
          button.third {
            background: linear-gradient(
              to right,
              rgb(24, 140, 153),
              rgb(13, 189, 207)
            );
          }
          button.fourth {
            background: linear-gradient(
              to right,
              rgb(207, 13, 207),
              rgb(181, 11, 176)
            );
          }
        }

        .label {
          position: relative;
          width: 100%;
          height: 70%;
          display: flex;
          justify-content: space-evenly;
          align-items: center;

          h3 {
            width: 55%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 11px;
            color: rgb(143, 141, 141);
            border-right: 1px solid rgb(201, 198, 198);
            text-transform: capitalize;
            font-weight: 400;
          }

          p {
            width: 40%;
            color: rgb(106, 106, 106);
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 600;
          }
        }
      }

      hr {
        width: 70%;
        border: 0.5px solid rgb(223, 221, 221);
        margin: 0 auto;
      }

      .content-percentage {
        width: 100%;
        height: 35px;

        p {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: rgb(120, 120, 120);
          margin: 5px auto;

          span {
            border-right: 1px solid rgb(173, 172, 172);
            padding-right: 5px;
            color: rgb(22, 172, 107);
            font-weight: 600;
          }
        }
      }
    }
  }
}
</style>