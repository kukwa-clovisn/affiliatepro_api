<template>
  <div class="view-products-container" v-loading="loader">
    <div class="wrapper">
      <h2>all products.</h2>

      <div class="products">
        <div
          class="product"
          v-for="product in products"
          :key="product._id"
          @click="showProduct(product._id)"
        >
          <button>{{ products.indexOf(product) + 1 }}</button>

          <span class="id"> {{ product._id }}</span>
          <span class="name">{{ product.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
const products = ref([]);
const loader = ref(false);
const router = useRouter();
onBeforeMount(() => {
  loader.value = true;
  axios
    .get("https://api.biscaminvestmentsarl.com/api/product/products")
    .then((res) => {
      loader.value = false;
      products.value = res.data;
    })
    .catch((err) => {
      loader.value = false;
      return err;
    });
});

const showProduct = (id) => {
  localStorage.setItem("admin_product_id", id);

  navigateTo(`/product/${id}`);
};
</script>

<style lang="scss" scoped>
.view-products-container {
  width: 100%;
  height: 100%;

  .wrapper {
    width: 100%;
    height: 100%;
    padding: 10px;
    padding-bottom: 30px;

    h2 {
      padding: 10px;
      text-align: left;
      text-transform: capitalize;
      color: rgb(68, 68, 68);
    }

    .products {
      width: 95%;
      height: fit-content;
      display: flex;
      justify-content: flex-start;
      gap: 20px;
      flex-wrap: wrap;
      margin: 10px auto;

      .product {
        width: 150px;
        height: 100px;
        border-radius: 5px;
        background: white;
        box-shadow: 0 0 10px 8px rgb(231, 231, 231);
        cursor: pointer;

        button {
          border: none;
          outline: none;
          width: 30px;
          height: 30px;
          border-radius: 100%;
          background: white;
          box-shadow: 0 0 10px 8px rgb(230, 228, 228);
          color: rgb(104, 104, 104);
        }

        span {
          font: 400 12px "Montserrat", "Nunito Sans", sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 90%;
          padding: 10px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        span.id {
          display: block;
          font-size: 11px;
        }

        span.name {
          font-size: 13px;
        }

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
}
</style>