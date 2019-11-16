<template>
  <form>
    <div class="columns">
      <div class="column">
        <h3>Dados do pacote</h3>

        <b-field
          label="Nome do pacote"
          expanded
          :type="{ 'is-danger': $v.name.$error }"
          :message="{
            'Campo obrigatório': $v.name.$error && !$v.name.required
          }"
        >
          <b-input v-model="name"></b-input>
        </b-field>

        <h3>Lista de serviços</h3>

        <label class="label">Procurar serviço</label>
        <b-field expanded :type="{ 'is-danger': $v.services.$error }">
          <b-autocomplete
            v-model="serviceSearch"
            :data="servicesList"
            icon="search"
            @select="option => (selected = option)"
          >
            <template slot="empty"
              >Nenhum serviço encontrado</template
            >
          </b-autocomplete>
          <p class="control">
            <b-button class="is-primary" @click="addService"
              >Adicionar</b-button
            >
          </p>
        </b-field>
        <p
          class="help is-danger"
          v-if="$v.services.$error && !$v.services.required"
        >
          Campo obrigatório
        </p>

        <h3>Preço final</h3>

        <b-field grouped>
          <b-field label="Valor bruto" expanded>
            <b-input v-model="cost" disabled></b-input>
          </b-field>
          <b-field
            label="Valor final"
            expanded
            :type="{ 'is-danger': $v.finalCost.$error }"
            :message="{
              'Campo obrigatório': $v.finalCost.$error && !$v.finalCost.required
            }"
          >
            <b-input v-model="finalCost"></b-input>
          </b-field>
          <b-field label="Desconto (%)" expanded>
            <b-input v-model="off" type="number"></b-input>
          </b-field>
        </b-field>
      </div>
      <div class="column"></div>
    </div>

    <div class="buttons">
      <b-button type="is-success" @click="$router.push('/pacotes')"
        >Cancelar</b-button
      >
      <b-button type="is-secondary" @click="submit">Salvar</b-button>
    </div>
  </form>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  name: "PackageForm",

  data() {
    return {
      name: "",
      servicesList: [],
      serviceSearch: "",
      services: [],
      cost: "",
      finalCost: "",
      off: "",
      selected: null
    };
  },

  validations: {
    name: { required },
    services: { required },
    cost: { required },
    finalCost: { required }
  },

  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.invalid) {
        this.$emit("packageSubmit", {});
      }
    },

    addService() {
      if (this.selected) {
        this.services.push(this.selected);
        this.serviceSearch = "";
      }
    }
  }
};
</script>
