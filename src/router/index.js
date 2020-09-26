import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HelloVue.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
