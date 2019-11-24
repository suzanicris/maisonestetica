<template>
  <section class="section">
    <div class="container">
      <div class="row space-between mb-16">
        <h1>Adicionar novo serviço</h1>
      </div>

      <div class="box">
        <ServiceForm @serviceSubmit="submit" />
      </div>
    </div>
  </section>
</template>

<script>
import ServiceForm from "@/components/service/ServiceForm";

export default {
  name: "ServiceNew",

  components: {
    ServiceForm
  },

  methods: {
    submit() {}
  }
};
</script>
