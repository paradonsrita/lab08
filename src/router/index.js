import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BitcoinView from "../views/BitcoinView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/bitcoin",
      name: "bitcoin",
      component: BitcoinView,
    }
  ],
});

export default router;