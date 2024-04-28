import { createApp } from "vue";
import { createPinia } from "pinia";

import "./style.css";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

//routing
app.use(router);

//state
app.use(createPinia());

app.mount("#app");
