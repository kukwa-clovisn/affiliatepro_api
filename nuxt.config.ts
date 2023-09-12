// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@element-plus/nuxt"],
  plugins: [
    { src: "@/plugins/aos", ssr: false, mode: "client" },
    "@/plugins/axios",
  ],
  css: [
    // SCSS file in the project
    "~/assets/styles/main.scss",
  ],
});
