<template>
  <b-table
    :data="products"
    :striped="true"
    :hoverable="true"
    class="is-fullwidth"
    @select="selected"
  >
    >
    <template slot-scope="props">
      <b-table-column field="id" label="Id">{{ props.row.id }}</b-table-column>
      <b-table-column field="name" label="Nome">{{
        props.row.name
      }}</b-table-column>
      <b-table-column field="cost" label="Preço">{{
        props.row.cost
      }}</b-table-column>
      <b-table-column field="stock" label="Estoque" centered>{{
        props.row.stock
      }}</b-table-column>
    </template>

    <template slot="empty">
      <section class="section">
        <div class="content has-text-grey has-text-centered">
          <p>Nenhum funcionário encontrado</p>
        </div>
      </section>
    </template>
  </b-table>
</template>

<script>
export default {
  name: "ProductTable",

  props: {
    products: {
      type: Array,
      required: false,
      default: () => []
    }
  },

  methods: {
    selected(products) {
      this.$emit("productsDetails", products.id);
    }
  }
};
</script>
