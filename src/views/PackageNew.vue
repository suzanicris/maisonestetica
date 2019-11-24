<template>
  <section class="section">
    <div class="container">
      <div class="row space-between mb-16">
        <h1>Adicionar novo pacote</h1>
      </div>

      <div class="box">
        <PackageForm @packageSubmit="submit" />
      </div>
    </div>
  </section>
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
