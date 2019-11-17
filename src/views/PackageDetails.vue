<template>
  <div class="section">
    <header class="row space-between">
      <hgroup>
        <h1>Pacote</h1>
        <h2>Nome do pacote</h2>
      </hgroup>
      <b-button
        class="is-primary"
        outlined
        icon-left="chevron-left"
        @click="$router.push('/pacotes')"
      >
        Voltar
      </b-button>
    </header>

    <div class="columns">
      <div class="column is-one-quarter">
        <PackageAside />
      </div>
      <div class="column">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import PackageAside from "@/components/package/PackageAside";

export default {
  name: "PackageDetails",

  components: {
    PackageAside
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
