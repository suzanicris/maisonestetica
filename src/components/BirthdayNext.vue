<template>
  <div class="box">
    <h1>Próximos aniversariantes</h1>

    <div class="">
      <b-table
        :data="nextBirthday"
        :striped="true"
        :hoverable="true"
        class="is-fullwidth"
        @select="selected"
      >
        <template slot-scope="props">
          <b-table-column field="name" label="Nome" width="50">{{
            props.row.name
          }}</b-table-column>
          <b-table-column
            field="birthday"
            label="Aniversário"
            width="50"
            centered
            >{{ props.row.birthday }}</b-table-column
          >
        </template>

        <template slot="empty">
          <section class="section">
            <div class="content has-text-grey has-text-centered">
              <p>Nenhum aniversariante nos próximos 15 dias</p>
            </div>
          </section>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "BirthdayNext",

  props: {
    nextBirthday: {
      type: Array,
      required: false,
      default: () => []
    }
  },

  methods: {
    selected(birthday) {
      this.$emit("nextBirthday", birthday.id);
    }
  }
};
</script>

<style></style>
