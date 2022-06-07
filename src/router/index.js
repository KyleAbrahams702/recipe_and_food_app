import { createRouter, createWebHashHistory } from "vue-router";
import LoginView from "@/views/LoginView";

const routes = [
  {
    path: "/",
    name: "LoginView",
    component: LoginView,
  },
  // {
  //   path: "/clients",
  //   name: "ClientView",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "client" */ "../views/ClientView.vue"),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
