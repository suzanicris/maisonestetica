<template>
  <section class="section">
    <div class="container">
      <div class="row space-between mb-16">
        <h1>Cadastro de Cliente</h1>
        <b-button type="is-secondary" @click="$router.push('/clientes/novo')"
          >Adicionar novo</b-button
        >
      </div>

      <div class="box">
        <Search placeholder="Busque por nome ou CPF" @buscar="search" />
        <ClientTable :clients="getClients" @clientDetails="goTo" />
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
import { mapActions, mapGetters } from "vuex";
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

  mounted() {
    this.$store.dispatch("loadClients");
  },

  methods: {
    ...mapActions(["loadClients", "loadClient"]),

    changePage(page) {
      console.log(page); //eslint-disable-line
    },

    search(word) {
      console.log(word); //eslint-disable-line
    },

    goTo(id) {
      this.$store.dispatch("loadClient", id);
      this.$router.push(`/clientes/${id}/cadastro`);
    }
  },

  computed: {
    ...mapGetters(["getClients"]),

    isEmpty() {
      return _.isEmpty(this.getClients);
    }
  }
};
</script>
