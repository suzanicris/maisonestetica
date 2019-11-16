<template>
  <b-field class="mb-16" position="is-right">
    <b-input
      v-model="search"
      class="search"
      @keydown.enter="buscar"
      :placeholder="placeholder"
      type="search"
      icon="search"
    ></b-input>
    <p class="control">
      <b-button class="is-primary" @click="buscar">Buscar</b-button>
    </p>
  </b-field>
</template>

<script>
export default {
  name: "Search",

  data() {
    return {
      search: ""
    };
  },

  props: {
    placeholder: {
      type: String,
      required: false,
      default: "Busque por"
    }
  },

  methods: {
    buscar() {
      this.$emit("buscar", this.search);
    }
  }
};
</script>

<style scoped>
.flex-end {
  justify-content: flex-end;
}
</style>
