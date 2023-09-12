<template>
  <div class="success-container">
    <div class="blur-wrapper"></div>
    <div class="wrapper">
      <div class="delete-modal" v-if="removeNotice">
        <h1>
          <span v-if="dangerIcon"
            ><i class="fa-solid fa-circle-exclamation"></i></span
          >{{ confirmHead }}
          <span v-if="successIcon" class="success"
            ><i class="fa-solid fa-circle-check"></i
          ></span>
        </h1>
        <p>{{ confirmText }}</p>

        <div class="btns">
          <button @click="cancelDelete()" v-if="dangerIcon">cancel</button>
          <button @click="continueDelete()" v-if="dangerIcon" class="del">
            delete
          </button>
          <button @click="cancelDelete()" v-if="successIcon" class="done">
            OK
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const removeNotice = ref(true);
const confirmHead = ref("");
const confirmText = ref("");
const dangerIcon = ref(true);
const successIcon = ref(true);

const deleteNotice = () => {
  successIcon.value = false;
  dangerIcon.value = true;
  removeNotice.value = true;
  confirmHead.value = " Are you sure ?";
  confirmText.value = " You want to delete this Notice";
  console.log("delete in process");
};

const editNotice = () => {
  console.log("editing notice....");
};

const cancelDelete = () => {
  removeNotice.value = false;
};

const continueDelete = () => {
  successIcon.value = true;
  dangerIcon.value = false;
  confirmHead.value = "You've confirm delete process.";
  confirmText.value = "Delete successful...";
};
</script>

<style lang="scss" scoped>
.success-container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  .blur-wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.6;
    background: black;
  }

  .wrapper {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .delete-modal {
      width: 630px;
      height: 330px;
      background: white;

      border-radius: 3px;
      padding: 10px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;

      h1 {
        font: 600 30px "Poppins", sans-serif;
        text-align: center;
        span {
          display: block;
          i {
            font-size: 100px;
            color: crimson;
          }
        }
        .success {
          i {
            color: rgb(5, 171, 159);
          }
        }
      }

      p {
        text-align: center;
        font: 500 20px "Poppins", sans-serif;
      }

      .btns {
        width: 60%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin: auto;

        button {
          width: 140px;
          height: 50px;
          border-radius: 5px;
          text-transform: capitalize;
          background: transparent;
          background: rgb(252, 252, 252);
          border: 2px solid rgb(199, 196, 196);
        }
        .del {
          background: crimson;
          color: white;
          border: none;
        }
        .done {
          border: none;
          background: crimson;
          color: white;
        }
      }
    }
  }
}
</style>