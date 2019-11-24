<template>
  <section class="section">
    <div class="container">
      <div class="row space-between mb-16">
        <h1>Cadastro de Funcionário</h1>
        <b-button
          type="is-secondary"
          @click="$router.push('/funcionarios/novo')"
          >Adicionar novo</b-button
        >
      </div>

      <div class="box">
        <Search placeholder="Busque funcionário por nome" @buscar="search" />
        <EmployeeTable :employees="employees" @employeeDetails="goTo" />
        <Pagination
          :total="200"
          @changeCurrentPage="changePage"
          v-show="!isEmpty"
        />
      </div>
    </div>
  </section>
</template>

<script>
import _ from "lodash";
import Search from "@/components/Search";
import EmployeeTable from "@/components/employee/EmployeeTable";
import Pagination from "@/components/Pagination";

export default {
  name: "Employee",

  components: {
    Search,
    EmployeeTable,
    Pagination
  },

  data() {
    return {
      employees: [
        {
          id: 1,
          name: "Cristiane Cecília Ferreira",
          status: true,
          email: "func@gmail.com"
        },
        {
          id: 2,
          name: "Cristiane Cecília Ferreira",
          status: true,
          email: "func@gmail.com"
        },
        {
          id: 3,
          name: "Cristiane Cecília Ferreira",
          status: true,
          email: "func@gmail.com"
        },
        {
          id: 4,
          name: "Cristiane Cecília Ferreira",
          status: true,
          email: "func@gmail.com"
        },
        {
          id: 5,
          name: "Cristiane Cecília Ferreira",
          status: true,
          email: "func@gmail.com"
        }
      ]
    };
  },

  methods: {
    changePage(page) {
      console.log(page); //eslint-disable-line
    },

    search(word) {
      console.log(word); //eslint-disable-line
    },

    goTo(id) {
      this.$router.push(`/funcionarios/${id}/cadastro`);
    }
  },

  computed: {
    isEmpty() {
      return _.isEmpty(this.employees);
    }
  }
};
</script>
