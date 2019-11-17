<template>
  <div>
    <h3>Cadastro</h3>
    <hr />
    <ServiceForm @serviceSubmit="submit" />
  </div>
</template>

<script>
import ServiceForm from "@/components/service/ServiceForm";

export default {
  name: "ServiceDetailsRegister",

  components: {
    ServiceForm
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
