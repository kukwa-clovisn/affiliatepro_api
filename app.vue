<template>
  <main>
    <div class="main-component">
      <NuxtLayout name="page-header" />
      <div class="page-content">
        <NuxtPage />
      </div>
      <NuxtLayout name="page-footer" />
    </div>
    <div class="menu-component" v-if="toggleMenu">
      <MenuComponent />
    </div>
  </main>
</template>

<script setup>
useHead({
  title: "AffiliatePro ",
  viewport: "width:device-width, initial-scale=1",
  charset: "utf-8",
  meta: [
    {
      name: "description",
      content: "affiliate marketting courses",
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/gospel.png",
    },
    {
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css",
      rel: "stylesheet",
      integrity:
        "sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==",
      crossorigin: "anonymous",
      referrerpolicy: "no-referrer",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "anonymous",
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Nunito+Sans:wght@200;300;400;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap",
      rel: "stylesheet",
    },
  ],
});

const toggleMenu = useMenuState();

// console.log("page height", docHeight);
// const percentageScrolled = (window.scrollY / docHeight) * 100;
// console.log("percentageScrolled");
</script>

<style lang="scss" >
body,
* {
  box-sizing: border-box;
  color: rgb(31, 32, 33);
  color: rgb(5, 43, 39);
}

.blur-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.6;
  background: black;
}

body {
  padding: 0;
  margin: 0;
  overflow: hidden;
  overflow-y: scroll;
  background: rgb(234, 246, 236);
}

html {
  scroll-behavior: smooth;
}

main {
  width: 100vw;
  height: fit-content;
  padding: 0;
  margin: 0;
  background: rgb(234, 246, 236);

  .sm-media {
    display: none;
  }

  .main-component {
    width: 100%;
    height: fit-content;

    .page-content {
      width: 100%;
      height: fit-content;
    }
  }

  .menu-component {
    display: none;

    @media screen and (max-width: 900px) {
      display: block;
    }
  }
}
</style>
