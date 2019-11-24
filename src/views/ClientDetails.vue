<template>
  <section class="section">
    <div class="container">
      <header class="row space-between">
        <hgroup>
          <h1>Cliente</h1>
          <h2>{{ getClient.name }}</h2>
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
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ClientAside from "@/components/client/ClientAside";

export default {
  name: "ClientDetails",

  components: {
    ClientAside
  },

  mounted() {
    if (this.isClientEmpty) {
      this.$store.dispatch("loadClient", this.$route.params.id);
    }
  },

  methods: {
    ...mapActions(["loadClient"])
  },

  computed: {
    ...mapGetters(["isClientEmpty", "getClient"])
  }
};
</script>

<style scoped>
header {
  margin-bottom: 24px;
}
</style>
