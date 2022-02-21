import { createApp } from "vue";
import App from "./App.vue";

import ViewerPlugin from "./ViewerPlugin";
const url =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png";
const app = createApp(App);
app.use(ViewerPlugin,{img: url});
app.mount("#app");
