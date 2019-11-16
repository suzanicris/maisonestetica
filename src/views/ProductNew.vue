<template>
  <div class="section">
    <div class="row space-between mb-16">
      <h1>Adicionar novo produto</h1>
    </div>

    <div class="container">
      <ProductForm @productSubmit="submit" />
    </div>
  </div>
</template>

<script>
import ProductForm from "@/components/product/ProductForm";

export default {
  name: "ProductNew",

  components: {
    ProductForm
  },

  methods: {
    submit() {}
  }
};
</script>
