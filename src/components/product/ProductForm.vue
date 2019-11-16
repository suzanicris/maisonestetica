<template>
  <form>
    <div class="columns">
      <div class="column">
        <h3>Dados do produto</h3>

        <b-field
          label="Nome do produto"
          expanded
          :type="{ 'is-danger': $v.name.$error }"
          :message="{
            'Campo obrigatório': $v.name.$error && !$v.name.required
          }"
        >
          <b-input v-model="name"></b-input>
        </b-field>
        <b-field grouped>
          <b-field
            label="Valor"
            expanded
            :type="{ 'is-danger': $v.cost.$error }"
            :message="{
              'Campo obrigatório': $v.cost.$error && !$v.cost.required
            }"
          >
            <b-input v-model="cost"></b-input>
          </b-field>
          <b-field label="Comissão (%)" expanded>
            <b-input v-model="commission"></b-input>
          </b-field>
          <b-field label="Em estoque" expanded>
            <b-input v-model="stock" type="number"></b-input>
          </b-field>
        </b-field>
      </div>
      <div class="column"></div>
    </div>

    <div class="buttons">
      <b-button type="is-success" @click="$router.push('/produtos')"
        >Cancelar</b-button
      >
      <b-button type="is-secondary" @click="submit">Salvar</b-button>
    </div>
  </form>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  name: "ProductForm",

  data() {
    return {
      name: "",
      cost: "",
      commission: "",
      stock: ""
    };
  },

  validations: {
    name: { required },
    cost: { required }
  },

  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.invalid) {
        this.$emit("productSubmit", {});
      }
    }
  }
};
</script>
