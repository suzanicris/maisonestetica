<template>
  <div class="box">
    <h1>Aniversariantes do dia</h1>

    <div class="">
      <b-table
        :data="birthday"
        :striped="true"
        :hoverable="true"
        class="is-fullwidth"
        @select="selected"
      >
        <template slot-scope="props">
          <b-table-column field="name" label="Nome">{{
            props.row.name
          }}</b-table-column>
        </template>

        <template slot="empty">
          <section class="section">
            <div class="content has-text-grey has-text-centered">
              <p>Nenhum aniversariante hoje</p>
            </div>
          </section>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Birthday",

  props: {
    birthday: {
      type: Array,
      required: false,
      default: () => []
    }
  },

  methods: {
    selected(birthday) {
      this.$emit("birthday", birthday.id);
    }
  }
};
</script>
