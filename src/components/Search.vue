<template>
  <div class="row flex-end mb-16">
    <b-input v-model="search" class="search" @keydown.enter="buscar" :placeholder="placeholder"></b-input>
    <b-button class="is-primary" @click="buscar">Buscar</b-button>
  </div>
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