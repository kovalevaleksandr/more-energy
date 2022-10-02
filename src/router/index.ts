import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/clients",
    name: "clients",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ClientsView.vue"),
  },
  {
    path: "/clients",
    name: "clients",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ClientsView.vue"),
  },
  {
    path: "/coaches",
    name: "coaches",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CoachesView.vue"),
  },
  {
    path: "/exercises",
    name: "exercises",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ExercisesView.vue"),
  },
  {
    path: "/recipes",
    name: "recipes",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RecipesView.vue"),
  },
  {
    path: "/articles",
    name: "articles",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ArticlesView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
