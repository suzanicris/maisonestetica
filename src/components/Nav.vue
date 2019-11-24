<template>
  <b-navbar class="is-primary">
    <template slot="start">
      <b-navbar-item class="menu-button" @click="toggleMenu">
        <b-icon icon="bars"></b-icon>
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-dropdown label="Olá, Usuário">
        <b-navbar-item>Meus dados</b-navbar-item>
        <b-navbar-item>Sair</b-navbar-item>
      </b-navbar-dropdown>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "Nav",

  methods: {
    toggleMenu() {
      this.$emit("toggleMenu");
    }
  }
};
</script>

<style scoped>
.menu-button {
  padding: 0 24px;
}
</style>
