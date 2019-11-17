<template>
  <div class="section">
    <header class="row space-between">
      <hgroup>
        <h1>Serviço</h1>
        <h2>Nome do serviço</h2>
      </hgroup>
      <b-button
        class="is-primary"
        outlined
        icon-left="chevron-left"
        @click="$router.push('/servicos')"
      >
        Voltar
      </b-button>
    </header>

    <div class="columns">
      <div class="column is-one-quarter">
        <ServiceAside />
      </div>
      <div class="column">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceAside from "@/components/service/ServiceAside";

export default {
  name: "ServiceDetails",

  components: {
    ServiceAside
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
