<template>
  <div>
    <h3>Cadastro</h3>
    <hr />
    <ClientForm @clientSubmit="submit" />
  </div>
</template>

<script>
import ClientForm from "@/components/client/ClientForm";

export default {
  name: "ClientDetailsRegister",

  components: {
    ClientForm
  },

  methods: {
    submit() {}
  }
};
</script>

<style scoped>
h3 {
  margin-bottom: 0;
}

hr {
  margin-top: 8px;
  margin-bottom: 16px;
}
</style>
