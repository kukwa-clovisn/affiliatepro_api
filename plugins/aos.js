import AOS from "aos";

import "aos/dist/aos.css";

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window !== "undefined") {
    nuxtApp.AOS = AOS.init({
      offset: 10, // offset (in px) from the original trigger point
      easing: "ease", // default easing for AOS animations
      once: false,
      delay: 1, // values from 0 to 3000, with step 50ms
      duration: 900, // values from 0 to 3000, with step 50ms
      mirror: true, // whether elements should animate out while scrolling past them
    }); // eslint-disable-line new-cap
  }
});
