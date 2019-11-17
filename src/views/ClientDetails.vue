<template>
  <div class="section">
    <header class="row space-between">
      <hgroup>
        <h1>Cliente</h1>
        <h2>Nome do cliente</h2>
      </hgroup>
      <b-button
        class="is-primary"
        outlined
        icon-left="chevron-left"
        @click="$router.push('/clientes')"
      >
        Voltar
      </b-button>
    </header>

    <div class="columns">
      <div class="column is-one-quarter">
        <ClientAside />
      </div>
      <div class="column">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import ClientAside from "@/components/client/ClientAside";

export default {
  name: "ClientDetails",

  components: {
    ClientAside
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
