import { createRouter, createWebHistory } from "vue-router";

//Views
import HomePage from "@views/HomePage.vue";
import BirdhouseListPage from "@views/BirdhouseListPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/birdhouses",
    name: "birdhouses-list",
    component: BirdhouseListPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
