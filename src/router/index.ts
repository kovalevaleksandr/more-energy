import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: { name: "clients" },
  },
  {
    path: "/clients",
    name: "clients",
    component: () => import("../views/ClientsView.vue"),
  },
  {
    path: "/clients",
    name: "clients",
    component: () => import("../views/ClientsView.vue"),
  },
  {
    path: "/coaches",
    name: "coaches",
    component: () => import("../views/CoachesView.vue"),
  },
  {
    path: "/exercises",
    name: "exercises",
    component: () => import("../views/ExercisesView.vue"),
  },
  {
    path: "/recipes",
    name: "recipes",
    component: () => import("../views/RecipesView.vue"),
  },
  {
    path: "/articles",
    name: "articles",
    component: () => import("../views/ArticlesView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
