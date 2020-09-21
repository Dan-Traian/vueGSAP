import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Gallery from "@/components/Gallery";
const routes = [
  { path: "*", component: Gallery },
  { path: "/gallery", component: Gallery },
];

let router = new VueRouter({
  routes, // short for `routes: routes`,
  linkExactActiveClass: "active",
  mode: "history",
});

export default router;
