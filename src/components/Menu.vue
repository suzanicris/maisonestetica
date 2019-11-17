<template>
  <div class="menu column is-one-quarter">
    <img src="@/assets/logo.png" width="210" />
    <b-menu>
      <b-menu-list label="Geral">
        <b-menu-item
          icon="information-outline"
          label="Início"
          @click="goTo('/')"
        ></b-menu-item>
        <b-menu-item
          icon="information-outline"
          label="Agendamento"
          @click="goTo('/agendamento')"
        ></b-menu-item>
      </b-menu-list>
      <b-menu-list label="Cadastro">
        <b-menu-item
          icon="information-outline"
          label="Clientes"
          @click="goTo('/clientes')"
        ></b-menu-item>
        <b-menu-item
          icon="information-outline"
          label="Funcionários"
          @click="goTo('/funcionarios')"
        ></b-menu-item>
        <b-menu-item
          icon="information-outline"
          label="Pacotes"
          @click="goTo('/pacotes')"
        ></b-menu-item>
        <b-menu-item
          icon="information-outline"
          label="Produtos"
          @click="goTo('/produtos')"
        ></b-menu-item>
        <b-menu-item
          icon="information-outline"
          label="Serviços"
          @click="goTo('/servicos')"
        ></b-menu-item>
      </b-menu-list>
      <b-menu-list label="Gerenciar">
        <b-menu-item
          icon="information-outline"
          label="Relatórios"
          @click="goTo('/relatorio   ')"
        ></b-menu-item>
      </b-menu-list>
    </b-menu>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      isActive: false
    };
  },

  methods: {
    goTo(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style scoped lang="scss">
.column {
  padding-right: 0;
}

.menu {
  background-color: #a98c84;
  min-height: calc(82vh - 52px);

  img {
    display: block;
    margin: 0 auto;
  }

  .menu-label {
    padding-left: 56px;
  }
}
</style>
