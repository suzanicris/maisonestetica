<template>
  <div>
    <h3>Cadastro</h3>
    <hr />
    <ProductForm @productSubmit="submit" />
  </div>
</template>

<script>
import ProductForm from "@/components/product/ProductForm";

export default {
  name: "ProductDetailsRegister",

  components: {
    ProductForm
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
