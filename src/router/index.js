import { createRouter, createWebHistory } from "vue-router";
import ALL from "../views/ALL.vue";

const routes = [
  {
    path: "/",
    name: "ALL",
    component: ALL,
  },
  {
    path: "/active",
    name: "Active",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("../views/Active.vue"),
  },
  {
    path: "/completed",
    name: "Completed",
    component: () =>
      import("../views/Completed.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
