<template>
  <div class="section">
    <div class="row space-between mb-16">
      <h1>Adicionar novo pacote</h1>
    </div>

    <div class="container">
      <PackageForm @packageSubmit="submit" />
    </div>
  </div>
</template>

<script>
import PackageForm from "@/components/package/PackageForm";

export default {
  name: "PackageNew",

  components: {
    PackageForm
  },

  methods: {
    submit() {}
  }
};
</script>
