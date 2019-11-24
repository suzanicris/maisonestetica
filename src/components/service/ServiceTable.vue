<template>
  <b-table
    :data="services"
    :striped="true"
    :hoverable="true"
    class="is-fullwidth"
    @select="selected"
  >
    >
    <template slot-scope="props">
      <b-table-column field="name" label="Serviço">{{
        props.row.name
      }}</b-table-column>
      <b-table-column field="cost" label="Preço" width="120">{{
        props.row.cost
      }}</b-table-column>
      <b-table-column field="time" label="Tempo estimado">{{
        props.row.time
      }}</b-table-column>
      <b-table-column field="employee" label="Responsável">{{
        props.row.employee
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
  name: "ServiceTable",

  props: {
    services: {
      type: Array,
      required: false,
      default: () => []
    }
  },

  methods: {
    selected(services) {
      this.$emit("serviceDetails", services.id);
    }
  }
};
</script>
