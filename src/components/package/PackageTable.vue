<template>
  <b-table
    :data="packages"
    :striped="true"
    :hoverable="true"
    class="is-fullwidth"
    @select="selected"
  >
    >
    <template slot-scope="props">
      <b-table-column field="name" label="Nome">{{
        props.row.name
      }}</b-table-column>
      <b-table-column field="cost" label="Valor">{{
        props.row.cost
      }}</b-table-column>
      <b-table-column field="off" label="Desconto" centered>{{
        props.row.off
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
  name: "PackageTable",

  props: {
    packages: {
      type: Array,
      required: false,
      default: () => []
    }
  },

  methods: {
    selected(packages) {
      this.$emit("packageDetails", packages.id);
    }
  }
};
</script>
