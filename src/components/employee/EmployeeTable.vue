<template>
  <b-table
    :data="employees"
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
      <b-table-column field="status" label="Ativo" width="100">{{
        props.row.status ? "Sim" : "Não"
      }}</b-table-column>
      <b-table-column field="email" label="Email">{{
        props.row.email
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
  name: "EmployeeTable",

  props: {
    employees: {
      type: Array,
      required: false,
      default: () => []
    }
  },

  methods: {
    selected(employee) {
      this.$emit("employeeDetails", employee.id);
    }
  }
};
</script>
