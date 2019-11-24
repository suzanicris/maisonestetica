<template>
  <section class="section">
    <div class="container">
      <div class="row space-between mb-16">
        <h1>Cadastro de Serviço</h1>
        <b-button type="is-secondary" @click="$router.push('/servicos/novo')"
          >Adicionar novo</b-button
        >
      </div>

      <div class="box">
        <Search placeholder="Busque serviço por nome" @buscar="search" />
        <ServiceTable :services="services" @serviceDetails="goTo" />
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
import ServiceTable from "@/components/service/ServiceTable";
import Pagination from "@/components/Pagination";

export default {
  name: "Employee",

  components: {
    Search,
    ServiceTable,
    Pagination
  },

  data() {
    return {
      services: [
        {
          id: 1,
          name: "Limpeza de pele",
          cost: "120",
          time: "45 minutos",
          employee: "Cristiane Cecília Ferreira"
        },
        {
          id: 2,
          name: "Limpeza de pele",
          cost: "120",
          time: "45 minutos",
          employee: "Cristiane Cecília Ferreira"
        },
        {
          id: 3,
          name: "Limpeza de pele",
          cost: "120",
          time: "45 minutos",
          employee: "Cristiane Cecília Ferreira"
        },
        {
          id: 4,
          name: "Limpeza de pele",
          cost: "120",
          time: "45 minutos",
          employee: "Cristiane Cecília Ferreira"
        },
        {
          id: 5,
          name: "Limpeza de pele",
          cost: "120",
          time: "45 minutos",
          employee: "Cristiane Cecília Ferreira"
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
      this.$router.push(`/servicos/${id}/cadastro`);
    }
  },

  computed: {
    isEmpty() {
      return _.isEmpty(this.services);
    }
  }
};
</script>
