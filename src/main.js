import Vue, { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/styles/index.css";

Vue.prototype.$http = require("axios");

createApp(App)
  .use(router)
  .mount("#app");
