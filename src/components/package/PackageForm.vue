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
      <div class="column">
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

        <template v-show="services">
          <div v-for="(service, index) in services" :key="index">
            <div class="row space-between">
              <h4>{{ index + 1 }} - {{ service.name }}</h4>
              <b-button
                icon-right="trash"
                @click="removeService(index)"
                outlined
              />
            </div>

            <b-field grouped>
              <b-field label="Preço normal" expanded>
                <b-input v-model="service.normalPrice" disabled></b-input>
              </b-field>
              <b-field
                label="Quantidade"
                expanded
                :type="{ 'is-danger': $v.services.quantify.$error }"
                :message="{
                  'Campo obrigatório':
                    $v.finalCost.$error && !$v.services.quantify.required
                }"
              >
                <b-input type="number" v-model="service.quantify"></b-input>
              </b-field>
              <b-field
                label="Valor unitário"
                expanded
                :type="{ 'is-danger': $v.services.unitPrice.$error }"
                :message="{
                  'Campo obrigatório':
                    $v.services.unitPrice.$error &&
                    !$v.services.unitPrice.required
                }"
              >
                <b-input v-model="service.unitPrice"></b-input>
              </b-field>
              <b-field label="Valor total" expanded>
                <b-input v-model="service.cost" type="number"></b-input>
              </b-field>
            </b-field>
          </div>
        </template>
      </div>
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
//import _ from "lodash";
import { required } from "vuelidate/lib/validators";

export default {
  name: "PackageForm",

  data() {
    return {
      name: "",
      servicesList: ["Limpeza", "Massagem"],
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
    services: {
      quantify: { required },
      unitPrice: { required }
    },
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
        this.services[this.services.length] = {
          name: this.selected,
          normalPrice: "",
          quantify: "",
          unitPrice: "",
          cost: ""
        };
        this.serviceSearch = "";
      }
    },

    removeService(index) {
      this.services = this.services.filter(
        service => service != this.services[index]
      );
    }
  }
};
</script>
