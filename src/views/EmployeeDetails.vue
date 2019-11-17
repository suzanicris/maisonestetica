<template>
  <div class="section">
    <header class="row space-between">
      <hgroup>
        <h1>Funcionário</h1>
        <h2>Nome do funcionário</h2>
      </hgroup>
      <b-button
        class="is-primary"
        outlined
        icon-left="chevron-left"
        @click="$router.push('/funcionarios')"
      >
        Voltar
      </b-button>
    </header>

    <div class="columns">
      <div class="column is-one-quarter">
        <EmployeeAside />
      </div>
      <div class="column">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import EmployeeAside from "@/components/employee/EmployeeAside";

export default {
  name: "EmployeeDetails",

  components: {
    EmployeeAside
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
