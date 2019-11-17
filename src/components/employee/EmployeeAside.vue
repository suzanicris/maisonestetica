<template>
  <b-menu class="details-aside">
    <b-menu-item
      label="Cadastro"
      @click="goTo('/cadastro')"
      :active="true"
    ></b-menu-item>
    <b-menu-item label="Financeiro" @click="goTo('/financeiro')"></b-menu-item>
  </b-menu>
</template>

<script>
export default {
  name: "EmployeeAside",

  methods: {
    goTo(path) {
      this.$router.push(`/funcionarios/${this.$route.params.id}${path}`);
    }
  }
};
</script>
