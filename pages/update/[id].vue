<template>
  <div class="create-product-main">
    <Head>
      <Title>Edit Product || BISCAM</Title>
    </Head>
    <div class="create-product-wrapper">
      <form @submit="EditProduct" enctype="multipart/form-data" v-loading="loader">
        <h1>Edit product.</h1>

        <div class="form-data">
          <label for="product-name">Product Name:</label>
          <input
            type="text"
            name="name"
            v-model="productData.name"
            placeholder="Enter product name:"
            id="product-name"
            required
          />
          <!-- <label for="product-category">choose category:</label>
          <select
            name="category"
            v-model="productData.category"
            id="product-category"
            placeholder="Enter product category:"
            required
          >
            <option value="" disabled>choose a category</option>
            <option value="engines">engines</option>
            <option value="manifold">manifold</option>
            <option value="keyStarter">key starter</option>
            <option value="shaft">shaft</option>
          </select> -->
          <label for="product-description">Description:</label>
          <input
            type="text"
            name="description"
            v-model="productData.description"
            id="product-description"
            placeholder="Product Description:"
          />

          <label for="price-from">price from</label>
          <input
            type="text"
            name="priceFrom"
            id="price-from"
            v-model="productData.priceFrom"
            placeholder="Enter price range from:($)"
          />
          <label for="price-to">price to</label>
          <input
            type="text"
            name="priceTo"
            id="price-to"
            v-model="productData.priceTo"
            placeholder="Enter Price range to:($)"
          />
          <label for="price">Standard price:</label>
          <input
            type="text"
            name="price"
            v-model="productData.price"
            id="price"
            placeholder="Enter Standard price ($)"
          />
          <input
            type="file"
            name="image"
            @change="onChangeFunc"
            placeholder="select product image (<1mb):"
            id="upload-field"
            required
          />
        </div>
        <div class="product-preview">
          <div class="product-image">
            <img
              :src="productImage.preview"
              v-if="productImage.preview"
              alt=""
            />
          </div>
          <div class="product-details">
            <div class="product-details-wrapper">
              <div class="product-head">
                <h2 v-if="productData.name">{{ productData.name }}</h2>
                <h4>
                  <span
                    >${{
                      productData.price
                        ? productData.price
                        : "No standard Price"
                    }}</span
                  >
                  <span v-if="!productData.price">
                    ${{ productData.priceFrom }} -- ${{
                      productData.priceTo
                    }}</span
                  >
                </h4>
              </div>
              <p v-if="productData.description">
                {{ productData.description }}
              </p>

              <p>
                Price Range:
                <span
                  >${{ productData.priceFrom }} --
                  <span>${{ productData.priceTo }}</span></span
                >
              </p>
            </div>
          </div>
        </div>
        <el-popconfirm
          confirm-button-text="Yes Edit Product"
          cancel-button-text="No"
          :icon="InfoFilled"
          icon-color="#626AEF"
          title="Are you sure to Edit this Product?"
          @confirm="EditProduct"
          @cancel="cancelEvent"
        >
          <template #reference>
            <el-button type="submit">Edit Product</el-button>
          </template>
        </el-popconfirm>
      </form>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
const loader = ref(false);
const route = useRoute();

const base64String = ref("");

const productData = reactive({
  name: "",
  type: "",
  description: "",
  priceFrom: "",
  priceTo: "",
  price: "",
  base64String: null,
});

const preview = ref({});

const productImage = reactive({
  image: null,
  preview: null,
  tempImg: null,
});

onBeforeMount(() => {
  loader.value = true;

  axios
    .get(
      `https://api.biscaminvestmentsarl.com/api/product/item/${route.params.id}`
    )
    .then((res) => {
      loader.value = false;
      productData.name = res.data.name;
      productData.description = res.data.description;
      productData.priceFrom = res.data.priceFrom;
      productData.priceTo = res.data.priceTo;
      productData.price = res.data.price;
      productData.base64String = res.data.data;
      productImage.preview = res.data.data;
    })
    .catch((err) => {
      loader.value = false;
      return err;
    });
});

function onChangeFunc(e) {
  if (e.target.files[0].size < 1048576) {
    productData.type = e.target.files[0].type;
    preview.value = e.target.files[0];

    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      base64String.value = reader.result;
      productData.base64String = reader.result;
    };

    reader.readAsDataURL(file);
  } else {
    ElNotification.error({
      title: "File Size Exceeded",
      message:
        "Ensure that the image you are uploading is less than 1mb( <1mb) in size",
      offset: 100,
    });
  }
}

watch(preview, (preview) => {
  let fileReader = new FileReader();
  fileReader.readAsDataURL(preview);
  fileReader.addEventListener("load", () => {
    productImage.preview = fileReader.result;
  });
});

const EditProduct = (e) => {
  e.preventDefault();
  loader.value = true;
  const formdata = new FormData();
  formdata.append("image", productImage.preview);
  formdata.append("name", productData.name);
  formdata.append("description", productData.description);
  formdata.append("price", productData.price);
  formdata.append("priceFrom", productData.priceFrom);
  formdata.append("priceTo", productData.priceTo);

  axios(
    "https://api.biscaminvestmentsarl.com/api/product/create-product",
    {
      method: "post",
      data: formdata,
    },
    {
      onUploadProgress: () => {
        ElNotification.success({
          title: "Loading Product Image",
          message: "Loading Image pleae wait...",
          offset: 100,
        });
      },
    }
  )
    .then((res) => {
      loader.value = false;
      if (res) {
        ElNotification.success({
          title: "File Upload successful",
          message: res.data.message,
          offset: 100,
        });
      }
    })
    .catch((err) => {
      loader.value = false;
      ElNotification.error({
        title: "Error",
        message: err,
        offset: 100,
      });

      return err;
    });
};

const cancelEvent = () => {
  ElNotification.success({
    title: "Process Cancelled",
    message: "Editing process cancelled...",
    offset: 100,
  });
};
</script>

<style lang="scss" scoped>
.create-product-main {
  width: 100%;
  height: fit-content;
  background: rgb(244, 244, 244);
  margin: 0;
  padding: 0;

  .create-product-wrapper {
    width: 100%;
    height: fit-content;
    padding: 0;
    margin: 0;
    padding-bottom: 30px;

    h1 {
      text-transform: capitalize;
      padding: 20px;
      text-align: center;
      margin: 0 auto;
    }

    form {
      width: 90%;
      margin: 20px auto;

      label {
        display: block;
        text-align: left;
        text-transform: capitalize;
        font-weight: bold;
        cursor: pointer;
        width: 70%;
        margin: auto;
        margin-bottom: 0;
        margin-top: 30px;

        @media screen and (max-width: 768px) {
          width: 100%;
        }
      }

      input,
      select {
        width: 70%;
        height: 45px;
        margin: 15px auto;
        border: none;
        border-bottom: 1px solid rgb(196, 196, 196);
        display: block;
        text-align: left;
        outline: none;
        padding: 5px 10px;
        border-radius: 3px;

        &:hover {
          border-right: 10px solid orange;
          border-bottom: 1px solid #d4a20b;
          border-left: 3px solid orange;
          box-shadow: 0 0 10px 7px rgb(231, 231, 231);
        }
        &:active,
        &:focus {
          border: 1px solid rgb(247, 168, 23);
          border-right: 10px solid orange;

          border-left: 3px solid orange;
        }
        @media screen and (max-width: 768px) {
          width: 100%;
        }
      }

      option {
        text-align: left;
      }

      #upload-field {
        width: 40%;
        height: 60px;
        border-radius: 50px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 40px auto;
        box-shadow: 4px 4px 10px 4px rgb(193, 193, 193);
        padding: 0;
        background: white;
        font-weight: bold;

        &:hover {
          background: rgb(230, 177, 5);
          border: none;
        }
        @media screen and (max-width: 768px) {
          width: 90%;
        }
      }

      ::-webkit-file-upload-button {
        height: 100%;
        width: 35%;
        border-radius: 50px;
        background: rgb(197, 124, 8);
        color: white;
        outline: none;
        border: none;
        box-shadow: 0 0 9px 3px rgb(109, 71, 2);
        transition: all 0.3s ease;

        &:hover {
          background: rgb(230, 177, 5);
          border: none;
        }
      }

      ::-webkit-input-placeholder {
        text-transform: capitalize;
        color: rgb(103, 103, 103);
      }

      .product-preview {
        width: 100%;
        height: fit-content;
        background: rgb(255, 255, 255);
        padding: 20px 10px;
        border-radius: 5px;
        box-shadow: 0 0 16px 6px rgb(222, 222, 222);
        .product-image {
          width: 70%;
          height: fit-content;
          margin: 20px auto;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 3px;

          img {
            width: auto;
            height: 300px;
            object-fit: contain;
            cursor: pointer;
            margin: 0;
            display: block;
            background: white;
          }
          @media screen and (max-width: 768px) {
            width: 100%;
          }
        }

        .product-details {
          width: 70%;
          height: fit-content;
          margin: 10px auto;

          .product-details-wrapper {
            width: 100%;
            height: fit-content;
            padding: 20px 10px;

            .product-head {
              width: 100%;
              height: fit-content;
              border-bottom: 1px solid #d7d7d7;
              h2 {
                text-transform: capitalize;
                font: 700 30px "Montserrat", "Nunito Sans", sans-serif;
              }
              h4 {
                color: rgb(163, 163, 163);
                text-transform: capitalize;
                margin: 5px 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
                span {
                  font-weight: bolder;
                  color: black;
                }
              }
            }

            h2,
            h4,
            p {
              text-align: left;
            }
            .product-qualities {
              width: 100%;
              height: fit-content;

              h3 {
                text-align: left;
                text-transform: capitalize;
                font: 600 17px "Nunito Sans", sans-serif;
              }

              ul {
                width: 100%;
                height: fit-content;
                list-style: none;

                li {
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                  list-style-position: inside;
                  gap: 20px;
                  margin: 20px 0;
                }
              }
            }
          }
          @media screen and (max-width: 768px) {
            width: 100%;
          }
        }

        @media screen and (max-width: 650px) {
          .product-image,
          .product-details {
            width: 90%;
          }
        }
      }

      button {
        width: 47%;
        height: 50px;
        border: none;
        background: rgb(21, 57, 137);
        color: white;
        margin: 20px auto;
        font-weight: bold;
        text-transform: capitalize;
        display: block;
        font-size: 16px;
        border-radius: 30px;

        box-shadow: 0 3px 1px 2px rgb(6, 4, 127);

        @media screen and (max-width: 500px) {
          width: 100%;
          height: 60px;
          border-radius: 50px;
        }
      }
      @media screen and (max-width: 768px) {
        width: 80%;
        margin: 20px auto;

        @media screen and (max-width: 500px) {
          width: 90%;
        }
      }
    }
  }
}
</style>