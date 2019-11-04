<template>
  <b-pagination
    :total="total"
    :current.sync="current"
    :range-before="3"
    :range-after="1"
    order="is-centered"
    :simple="false"
    :per-page="10"
    aria-next-label="Próxima"
    aria-previous-label="Anterior"
    aria-page-label="Página"
    aria-current-label="Página atual"
    class="mt-24"
  ></b-pagination>
</template>

<script>
export default {
  name: "Pagination",

  data() {
      return {
          current: 1
      }
  },

  props: {
    total: {
      type: [Number, String]
    }
  },

  watch: {
      current: function() {
          this.$emit("changeCurrentPage", this.current);
      }
  }
};
</script>