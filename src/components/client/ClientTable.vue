<template>
  <b-table
    :data="clients"
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
      <b-table-column field="cpf" label="CPF" width="150">{{
        props.row.cpf
      }}</b-table-column>
      <b-table-column
        field="birthday"
        label="Aniversário"
        width="50"
        centered
        >{{ props.row.birthday }}</b-table-column
      >
      <b-table-column field="city" label="Cidade">{{
        props.row.city
      }}</b-table-column>
    </template>

    <template slot="empty">
      <section class="section">
        <div class="content has-text-grey has-text-centered">
          <p>Nenhum cliente encontrado</p>
        </div>
      </section>
    </template>
  </b-table>
</template>

<script>
export default {
  name: "ClientTable",

  props: {
    clients: {
      type: Array,
      required: false,
      default: () => []
    }
  },

  methods: {
    selected(client) {
      this.$emit("clientDetails", client.id);
    }
  }
};
</script>
