import { createRouter, createWebHistory } from "vue-router";

//Views
import Home from "@views/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/birdhouses",
    name: "birdhouses-list",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
