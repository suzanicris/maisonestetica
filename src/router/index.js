import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home";
import Client from "@/views/Client";
import ClientNew from "@/views/ClientNew";
import Employee from "@/views/Employee";
import EmployeeNew from "@/views/EmployeeNew";
import Package from "@/views/Package";
import PackageNew from "@/views/PackageNew";
import Product from "@/views/Product";
import ProductNew from "@/views/ProductNew";
import Service from "@/views/Service";
import ServiceNew from "@/views/ServiceNew";

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
      },
      {
        path: "/clientes/novo",
        name: "cadastrar-cliente",
        component: ClientNew
      },
      //   {
      //     path: "/cliente/:id",
      //     name: "cliente",
      //     component: ""
      //   },
      {
        path: "/funcionarios",
        name: "funcionario",
        component: Employee
      },
      {
        path: "/funcionarios/novo",
        name: "cadastrar-funcionario",
        component: EmployeeNew
      },
      {
        path: "/pacotes",
        name: "pacote",
        component: Package
      },
      {
        path: "/pacotes/novo",
        name: "cadastrar-pacote",
        component: PackageNew
      },
      {
        path: "/produtos",
        name: "produto",
        component: Product
      },
      {
        path: "/produtos/novo",
        name: "cadastrar-produto",
        component: ProductNew
      },
      {
        path: "/servicos",
        name: "servico",
        component: Service
      },
      {
        path: "/servicos/novo",
        name: "cadastrar-servico",
        component: ServiceNew
      }
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
