<template>
  <div class="product-container">
    <div class="wrapper" v-loading="loader">
      <h2>Name: {{ product.name }}</h2>
      <p>
        Description:<span v-if="product.description">{{
          product.description
        }}</span>
        <span v-else>___</span>
      </p>
      <p>
        Price :<span v-if="product.price">{{ product.price }}</span>
        <span v-else>____</span>
      </p>
      <p>
        PriceFrom :<span v-if="product.priceFrom">{{ product.priceFrom }}</span>
        <span v-else>____</span>
      </p>
      <p>
        PriceTo : <span v-if="product.priceTo"> {{ product.priceTo }}</span>
        <span v-else>___</span>
      </p>
      <p>
        discountPrice :
        <span v-if="product.discountPrice">{{ product.discountPrice }}</span>
        <span v-else>___</span>
      </p>

      <div class="img">
        <img :src="product.data" alt="" />
      </div>
      <el-popconfirm
        confirm-button-text="Yes Delete Product"
        cancel-button-text="No"
        :icon="InfoFilled"
        icon-color="#626AEF"
        title="Are you sure to Delete this Product?"
        @confirm="deleteProduct(product._id)"
        @cancel="cancelEvent"
      >
        <template #reference>
          <el-button class="danger"
            ><i class="fa-solid fa-trash"></i> Delete Product</el-button
          >
        </template> </el-popconfirm
      ><button @click="EditProduct(product._id)">
        <i class="fa-regular fa-pen-to-square"></i> edit product
      </button>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
const product = ref({});
const loader = ref(false);
const route = useRoute();

onBeforeMount(() => {
  loader.value = true;
  axios
    .get(
      `https://api.biscaminvestmentsarl.com/api/product/item/${route.params.id}`
    )
    .then((res) => {
      loader.value = false;
      product.value = res.data;
    })
    .catch((err) => {
      loader.value = false;
      return err;
    });
});

const deleteProduct = (id) => {
  loader.value = true;

  axios
    .delete(`http://localhost:9005/api/product/delete/${id}`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

const EditProduct = (id) => {
  navigateTo(`/update/${id}`);
};
const cancelEvent = () => {
  ElNotification.success({
    title: "Delte Process Cancelled",
    message: "Deleting process cancelled...",
    offset: 100,
  });
};
</script>

<style lang="scss" scoped>
.product-container {
  width: 100%;
  height: fit-content;

  .wrapper {
    width: 100%;
    height: fit-content;

    h2 {
      text-align: center;
      text-transform: capitalize;
    }

    p {
      text-align: center;
      text-transform: capitalize;

      span {
        font-weight: bold;
        padding-left: 10px;
      }
    }

    .img {
      width: 95%;
      height: 60vh;
      margin: 20px auto;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        height: 100%;
        width: auto;
        cursor: pointer;
      }
    }

    .actions {
      width: fit-content;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      flex-wrap: wrap;
      margin: 20px auto;
    }
    button {
      border: none;
      cursor: pointer;
      background: rgb(18, 45, 118);
      color: white;
      border-radius: 5px;
      width: fit-content;
      padding: 0 30px;
      height: 50px;
      margin: 20px auto;
      display: block;
      text-transform: capitalize;

      i {
        padding-right: 10px;
      }
    }

    button.danger {
      background: red;
    }
  }
}
</style>