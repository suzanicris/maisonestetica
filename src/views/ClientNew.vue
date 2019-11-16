<template>
  <div class="section">
    <div class="row space-between mb-16">
      <h1>Adicionar novo cliente</h1>
    </div>

    <div class="container">
      <ClientForm @clientSubmit="submit" />
    </div>
  </div>
</template>

<script>
import ClientForm from "@/components/client/ClientForm";

export default {
  name: "ClientNew",

  components: {
    ClientForm
  },

  methods: {
    submit() {}
  }
};
</script>
