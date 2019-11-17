<template>
  <div>
    <h3>Cadastro</h3>
    <hr />
    <PackageForm @packageSubmit="submit" />
  </div>
</template>

<script>
import PackageForm from "@/components/package/PackageForm";

export default {
  name: "PackageDetailsRegister",

  components: {
    PackageForm
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
