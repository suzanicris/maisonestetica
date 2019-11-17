<template>
  <div class="section">
    <div class="row space-between mb-16">
      <h1>Cadastro de Cliente</h1>
      <b-button type="is-secondary" @click="$router.push('/clientes/novo')"
        >Adicionar novo</b-button
      >
    </div>

    <div class="container">
      <Search placeholder="Busque por nome ou CPF" @buscar="search" />
      <ClientTable :clients="clients" @clientDetails="goTo" />
      <Pagination
        :total="200"
        @changeCurrentPage="changePage"
        v-show="!isEmpty"
      />
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import Search from "@/components/Search";
import ClientTable from "@/components/client/ClientTable";
import Pagination from "@/components/Pagination";

export default {
  name: "Client",
  components: {
    Search,
    ClientTable,
    Pagination
  },

  data() {
    return {
      clients: [
        {
          id: 1,
          name: "Cristiane Cecília Ferreira",
          cpf: "351.927.784-09",
          birthday: "12/04",
          city: "Cáceres"
        },
        {
          name: "Cristiane Cecília Ferreira",
          cpf: "351.927.784-09",
          birthday: "12/04",
          city: "Cáceres"
        },
        {
          name: "Cristiane Cecília Ferreira",
          cpf: "351.927.784-09",
          birthday: "12/04",
          city: "Cáceres"
        },
        {
          name: "Cristiane Cecília Ferreira",
          cpf: "351.927.784-09",
          birthday: "12/04",
          city: "Cáceres"
        },
        {
          name: "Cristiane Cecília Ferreira",
          cpf: "351.927.784-09",
          birthday: "12/04",
          city: "Cáceres"
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
      this.$router.push(`/clientes/${id}/cadastro`);
    }
  },

  computed: {
    isEmpty() {
      return _.isEmpty(this.clients);
    }
  }
};
</script>
