<template>
  <div class="section">
    <header class="row space-between">
      <hgroup>
        <h1>Produto</h1>
        <h2>Nome do produto</h2>
      </hgroup>
      <b-button
        class="is-primary"
        outlined
        icon-left="chevron-left"
        @click="$router.push('/produtos')"
      >
        Voltar
      </b-button>
    </header>

    <div class="columns">
      <div class="column is-one-quarter">
        <ProductAside />
      </div>
      <div class="column">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import ProductAside from "@/components/product/ProductAside";

export default {
  name: "ProductDetails",

  components: {
    ProductAside
  },

  mounted() {
    //this.$route.params.id
  }
};
</script>

<style scoped>
header {
  margin-bottom: 24px;
}
</style>
