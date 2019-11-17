<template>
  <div class="section">
    <header class="row space-between">
      <h1>Relatórios</h1>
    </header>

    <div class="columns">
      <div class="column is-one-quarter">
        <ReportAside />
      </div>
      <div class="column">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import ReportAside from "@/components/report/ReportAside";

export default {
  name: "ReportDetails",

  components: {
    ReportAside
  }
};
</script>

<style scoped>
header {
  margin-bottom: 24px;
}
</style>
