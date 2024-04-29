import { createRouter, createWebHistory } from "vue-router";

//Views
import HomePage from "@views/HomePage.vue";
import BirdhouseListPage from "@views/BirdhouseListPage.vue";
import BirdhouseSinglePage from "@views/BirdhouseSinglePage.vue";
import NotFound from "@components/PlaceholderNotFound.vue";

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
  {
    path: "/birdhouse/:id",
    name: "single-birdhouse-show",
    component: BirdhouseSinglePage,
  },
  {
    path: "/404",
    name: "page-not-found",
    component: NotFound,
  },
  {
    path: "/:path*",
    redirect() {
      return { path: "/404", replace: true };
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
