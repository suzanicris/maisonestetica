<template>
  <section class="section">
    <div class="container">
      <div class="row space-between mb-16">
        <h1>Cadastro de Produtos</h1>
        <b-button type="is-secondary" @click="$router.push('/produtos/novo')"
          >Adicionar novo</b-button
        >
      </div>

      <div class="box">
        <Search placeholder="Busque produto por nome" @buscar="search" />
        <ProductTable :products="products" @productDetails="goTo" />
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
import ProductTable from "@/components/product/ProductTable";
import Pagination from "@/components/Pagination";

export default {
  name: "Product",

  components: {
    Search,
    ProductTable,
    Pagination
  },

  data() {
    return {
      products: [
        {
          id: 1,
          name: "Filtro solar",
          cost: "120",
          stock: "10"
        },
        {
          id: 2,
          name: "Filtro solar",
          cost: "120",
          stock: "10"
        },
        {
          id: 3,
          name: "Filtro solar",
          cost: "120",
          stock: "10"
        },
        {
          id: 4,
          name: "Filtro solar",
          cost: "120",
          stock: "10"
        },
        {
          id: 5,
          name: "Filtro solar",
          cost: "120",
          stock: "10"
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
      this.$router.push(`/produtos/${id}/cadastro`);
    }
  },

  computed: {
    isEmpty() {
      return _.isEmpty(this.products);
    }
  }
};
</script>
