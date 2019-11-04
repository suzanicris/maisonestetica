import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home";
import Client from "@/views/Client";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    children: [
      {
        path: "/clientes",
        name: "clientes",
        component: Client
      }
    //   {
    //     path: "/cliente/:id",
    //     name: "cliente",
    //     component: ""
    //   }
    ]
  }
  // {
  //   path: "/login",
  //   name: "login",
  //   component: ""
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
