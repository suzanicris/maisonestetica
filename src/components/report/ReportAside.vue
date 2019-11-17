<template>
  <b-menu class="details-aside">
    <b-menu-item
      label="Financeiro geral"
      @click="goTo('/financeiro')"
      :active="true"
    ></b-menu-item>
    <b-menu-item label="Clientes" @click="goTo('/clientes')"></b-menu-item>
    <b-menu-item
      label="Funcionários"
      @click="goTo('/funcionarios')"
    ></b-menu-item>
    <b-menu-item label="Produtos" @click="goTo('/produtos')"></b-menu-item>
    <b-menu-item label="Serviços" @click="goTo('/servicos')"></b-menu-item>
  </b-menu>
</template>

<script>
export default {
  name: "ReportAside",

  methods: {
    goTo(path) {
      this.$router.push(`/relatorio${path}`);
    }
  }
};
</script>
