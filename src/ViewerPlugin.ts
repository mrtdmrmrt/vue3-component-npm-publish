import type { App } from "vue";
import { CustomUploader } from "./components";

export default {
  install: (app: App, options: { img: string } = { img: "" }) => {
    app.component("CustomUploader", CustomUploader);
    app.provide("specialUploadImage", options.img);
  },
};

export { CustomUploader };
