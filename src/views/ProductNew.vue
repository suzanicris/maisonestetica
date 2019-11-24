<template>
  <section class="section">
    <div class="container">
      <div class="row space-between mb-16">
        <h1>Adicionar novo produto</h1>
      </div>

      <div class="box">
        <ProductForm @productSubmit="submit" />
      </div>
    </div>
  </section>
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
