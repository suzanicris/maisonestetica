<template>
  <form>
    <div class="columns">
      <div class="column">
        <h3>Dados do serviço</h3>

        <b-field
          label="Nome do serviço"
          expanded
          :type="{ 'is-danger': $v.name.$error }"
          :message="{
            'Campo obrigatório': $v.name.$error && !$v.name.required
          }"
        >
          <b-input v-model="name"></b-input>
        </b-field>
        <b-field
          label="Responsável"
          expanded
          :type="{ 'is-danger': $v.employee.$error }"
          :message="{
            'Campo obrigatório': $v.employee.$error && !$v.employee.required
          }"
        >
          <b-autocomplete
            v-model="employee"
            :data="employees"
            icon="search"
            @select="option => (selected = option)"
          >
            <template slot="empty"
              >Nenhum funcionário encontrado</template
            >
          </b-autocomplete>
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
          <b-field
            label="Tempo estimado"
            expanded
            :type="{ 'is-danger': $v.time.$error }"
            :message="{
              'Campo obrigatório': $v.time.$error && !$v.time.required
            }"
          >
            <b-input v-model="time" type="number"></b-input>
          </b-field>
        </b-field>
      </div>
      <div class="column"></div>
    </div>
    <div class="buttons">
      <b-button type="is-success" @click="$router.push('/servicos')"
        >Cancelar</b-button
      >
      <b-button type="is-secondary" @click="submit">Salvar</b-button>
    </div>
  </form>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  name: "ServiceForm",

  data() {
    return {
      name: "",
      employee: "",
      employees: [],
      cost: "",
      commission: "",
      time: "",
      selected: null
    };
  },

  validations: {
    name: { required },
    employee: { required },
    cost: { required },
    time: { required }
  },

  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.invalid) {
        this.$emit("serviceSubmit", {});
      }
    }
  }
};
</script>
