<template>
  <b-navbar class="is-primary">
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
  name: "Nav"
};
</script>
