<template>
  <b-menu class="details-aside">
    <b-menu-item
      label="Cadastro"
      @click="goTo('/cadastro')"
      :active="true"
    ></b-menu-item>
    <b-menu-item label="Financeiro" @click="goTo('/financeiro')"></b-menu-item>
    <b-menu-item label="Sessões" @click="goTo('/sessoes')"></b-menu-item>
  </b-menu>
</template>

<script>
export default {
  name: "ClientAside",

  methods: {
    goTo(path) {
      this.$router.push(`/clientes/${this.$route.params.id}${path}`);
    }
  }
};
</script>

<style lang="scss">
.details-aside li {
  list-style: none;
  width: 100%;

  a {
    display: block;
    width: 100%;
    padding: 4px 8px;
    font-weight: 700;
    color: #593d3a;

    &.is-active {
      background: #593d3a;
      border-radius: 4px;
      color: white;
    }
  }
}
</style>
