<template>
  <main>
    <div :class="[{ lg: !toggleMenu }, 'main-component']">
      <NuxtLayout name="page-header" />
      <div class="page-content">
        <NuxtPage />
      </div>
      <NuxtLayout name="page-footer" />
    </div>
  </main>
</template>

<script setup>
useHead({
  title: "affiliate marketting ",
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
      href: "/logo.png",
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
</script>

<style lang="scss" >
body,
* {
  box-sizing: border-box;
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
  background: rgb(234, 246, 236);
}

html {
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
}

main {
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  // overflow: hidden;
  // display: flex;
  // justify-content: space-between;
  // align-items: flex-start;
  background: rgb(234, 246, 236);

  .sm-media {
    display: none;
  }

  .menu-dashboard {
    width: 20%;
    height: 100%;
    box-shadow: 3px 0 10px 8px rgb(240, 240, 240);
    position: relative;
  }
  .menu-dashboard.active {
    width: 5%;
  }

  .main-component {
    // width: 80%;
    width: 100%;
    height: fit-content;

    .page-content {
      width: 100%;
      height: fit-content;
    }
  }
  .main-component.lg {
    // width: 95%;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    .menu-dashboard.lg-media {
      display: none;
    }

    .menu-dashboard.sm-media {
      display: block;
      width: 10%;
    }
    .menu-dashboard.active {
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
    }
  }
}
</style>
