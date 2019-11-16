<template>
  <div class="section">
    <div class="row space-between mb-16">
      <h1>Cadastro de Pacote</h1>
      <b-button type="is-secondary" @click="$router.push('/pacotes/novo')"
        >Adicionar novo</b-button
      >
    </div>

    <div class="container">
      <Search placeholder="Busque pacote por nome" @buscar="search" />
      <PackageTable :packages="packages" @packageDetails="goTo" />
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
import PackageTable from "@/components/package/PackageTable";
import Pagination from "@/components/Pagination";

export default {
  name: "Package",
  components: {
    Search,
    PackageTable,
    Pagination
  },

  data() {
    return {
      packages: [
        {
          id: 1,
          name: "10 depilações a cera",
          cost: "120",
          off: "33"
        },
        {
          id: 2,
          name: "10 depilações a cera",
          cost: "120",
          off: "33"
        },
        {
          id: 3,
          name: "10 depilações a cera",
          cost: "120",
          off: "33"
        },
        {
          id: 4,
          name: "10 depilações a cera",
          cost: "120",
          off: "33"
        },
        {
          id: 5,
          name: "10 depilações a cera",
          cost: "120",
          off: "33"
        }
      ]
    };
  },

  methods: {
    changePage: function(page) {
      console.log(page); //eslint-disable-line
    },

    search: function(word) {
      console.log(word); //eslint-disable-line
    },

    goTo: function(id) {
      this.$router.push(`/pacotes/${id}`);
    }
  },

  computed: {
    isEmpty() {
      return _.isEmpty(this.packages);
    }
  }
};
</script>
