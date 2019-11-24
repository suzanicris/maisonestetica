import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home";
import Resume from "@/views/Resume";
import Schedule from "@/views/Schedule";

import Client from "@/views/Client";
import ClientNew from "@/views/ClientNew";
import ClientDetails from "@/views/ClientDetails";
import ClientDetailsRegister from "@/views/ClientDetailsRegister";
import ClientDetailsFinancial from "@/views/ClientDetailsFinancial";
import ClientDetailsSessions from "@/views/ClientDetailsSessions";

import Employee from "@/views/Employee";
import EmployeeNew from "@/views/EmployeeNew";
import EmployeeDetails from "@/views/EmployeeDetails";
import EmployeeDetailsRegister from "@/views/EmployeeDetailsRegister";
import EmployeeDetailsFinancial from "@/views/EmployeeDetailsFinancial";

import Package from "@/views/Package";
import PackageNew from "@/views/PackageNew";
import PackageDetails from "@/views/PackageDetails";
import PackageDetailsRegister from "@/views/PackageDetailsRegister";
import PackageDetailsFinancial from "@/views/PackageDetailsFinancial";

import Product from "@/views/Product";
import ProductNew from "@/views/ProductNew";
import ProductDetails from "@/views/ProductDetails";
import ProductDetailsRegister from "@/views/ProductDetailsRegister";
import ProductDetailsFinancial from "@/views/ProductDetailsFinancial";

import Service from "@/views/Service";
import ServiceNew from "@/views/ServiceNew";
import ServiceDetails from "@/views/ServiceDetails";
import ServiceDetailsRegister from "@/views/ServiceDetailsRegister";
import ServiceDetailsFinancial from "@/views/ServiceDetailsFinancial";

import Report from "@/views/Report";
import ReportService from "@/views/ReportService";
import ReportProduct from "@/views/ReportProduct";
import ReportEmployee from "@/views/ReportEmployee";
import ReportClient from "@/views/ReportClient";
import ReportFinancial from "@/views/ReportFinancial";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "/",
        name: "resume",
        component: Resume
      },
      {
        path: "/agendamento",
        name: "agenda",
        component: Schedule
      },
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
      {
        path: "/clientes/:id",
        component: ClientDetails,
        children: [
          {
            path: "",
            redirect: "cadastro"
          },
          {
            path: "cadastro",
            name: "detalhe-cliente-cadastro",
            component: ClientDetailsRegister
          },
          {
            path: "financeiro",
            name: "detalhe-cliente-financeiro",
            component: ClientDetailsFinancial
          },
          {
            path: "sessoes",
            name: "detalhe-cliente-sessoes",
            component: ClientDetailsSessions
          }
        ]
      },
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
        path: "/funcionarios/:id",
        component: EmployeeDetails,
        children: [
          {
            path: "",
            redirect: "cadastro"
          },
          {
            path: "cadastro",
            name: "detalhe-funcionarios-cadastro",
            component: EmployeeDetailsRegister
          },
          {
            path: "financeiro",
            name: "detalhe-funcionarios-financeiro",
            component: EmployeeDetailsFinancial
          }
        ]
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
        path: "/pacotes/:id",
        component: PackageDetails,
        children: [
          {
            path: "",
            redirect: "cadastro"
          },
          {
            path: "cadastro",
            name: "detalhe-pacotes-cadastro",
            component: PackageDetailsRegister
          },
          {
            path: "financeiro",
            name: "detalhe-pacotes-financeiro",
            component: PackageDetailsFinancial
          }
        ]
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
        path: "/produtos/:id",
        component: ProductDetails,
        children: [
          {
            path: "",
            redirect: "cadastro"
          },
          {
            path: "cadastro",
            name: "detalhe-produto-cadastro",
            component: ProductDetailsRegister
          },
          {
            path: "financeiro",
            name: "detalhe-produto-financeiro",
            component: ProductDetailsFinancial
          }
        ]
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
      },
      {
        path: "/servicos/:id",
        component: ServiceDetails,
        children: [
          {
            path: "",
            redirect: "cadastro"
          },
          {
            path: "cadastro",
            name: "detalhe-servico-cadastro",
            component: ServiceDetailsRegister
          },
          {
            path: "financeiro",
            name: "detalhe-servico-financeiro",
            component: ServiceDetailsFinancial
          }
        ]
      },
      {
        path: "/relatorio",
        component: Report,
        children: [
          {
            path: "",
            redirect: "financeiro"
          },
          {
            path: "financeiro",
            name: "relatorio-financeiro",
            component: ReportFinancial
          },
          {
            path: "clientes",
            name: "relatorio-clientes",
            component: ReportClient
          },
          {
            path: "funcionarios",
            name: "relatorio-funcionarios",
            component: ReportEmployee
          },
          {
            path: "produtos",
            name: "relatorio-produtos",
            component: ReportProduct
          },
          {
            path: "servicos",
            name: "relatorio-servicos",
            component: ReportService
          }
        ]
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
