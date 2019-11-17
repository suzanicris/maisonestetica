<template>
  <form>
    <div class="columns">
      <div class="column">
        <h3>Dados pessoais</h3>

        <b-field
          label="Nome completo"
          expanded
          :type="{ 'is-danger': $v.fullName.$error }"
          :message="{
            'Campo obrigatório': $v.fullName.$error && !$v.fullName.required
          }"
        >
          <b-input v-model="fullName"></b-input>
        </b-field>
        <b-field grouped>
          <b-field
            label="CPF"
            expanded
            :type="{ 'is-danger': $v.cpf.$error }"
            :message="{
              'Campo obrigatório': $v.cpf.$error && !$v.cpf.required
            }"
          >
            <b-input v-model="cpf"></b-input>
          </b-field>
          <b-field
            label="Aniversário"
            expanded
            :type="{ 'is-danger': $v.birthday.$error }"
            :message="{
              'Campo obrigatório': $v.birthday.$error && !$v.birthday.required
            }"
          >
            <b-input v-model="birthday"></b-input>
          </b-field>
        </b-field>
        <b-field
          label="Email"
          expanded
          :type="{ 'is-danger': $v.email.$error }"
          :message="{
            'Campo obrigatório': $v.email.$error && !$v.email.required,
            'Email inválido': $v.email.$error && !$v.email.email
          }"
        >
          <b-input v-model="email"></b-input>
        </b-field>

        <h3>Redes sociais</h3>

        <b-field>
          <p class="control">
            <button class="button is-static">
              <b-icon pack="fab" icon="instagram" size="is-small"> </b-icon>
            </button>
          </p>
          <b-input placeholder="Instagram" v-model="instagram"></b-input>
        </b-field>
        <b-field>
          <p class="control">
            <button class="button is-static">
              <b-icon pack="fab" icon="facebook" size="is-small"> </b-icon>
            </button>
          </p>
          <b-input placeholder="Facebook" v-model="facebook"></b-input>
        </b-field>

        <h3>Endereço</h3>
        <b-field grouped>
          <b-field
            label="UF"
            expanded
            :type="{ 'is-danger': $v.state.$error }"
            :message="{
              'Campo obrigatório': $v.state.$error && !$v.state.required
            }"
          >
            <b-input v-model="state"></b-input>
          </b-field>
          <b-field
            label="Cidade"
            :type="{ 'is-danger': $v.city.$error }"
            :message="{
              'Campo obrigatório': $v.city.$error && !$v.city.required
            }"
          >
            <b-input v-model="city"></b-input>
          </b-field>
        </b-field>
        <b-field grouped>
          <b-field
            label="Logradouro"
            :type="{ 'is-danger': $v.address.$error }"
            :message="{
              'Campo obrigatório': $v.address.$error && !$v.address.required
            }"
          >
            <b-input v-model="address"></b-input>
          </b-field>
          <b-field
            label="Número"
            expanded
            :type="{ 'is-danger': $v.number.$error }"
            :message="{
              'Campo obrigatório': $v.number.$error && !$v.number.required
            }"
          >
            <b-input v-model="number"></b-input>
          </b-field>
        </b-field>
        <b-field grouped>
          <b-field
            label="Bairro"
            expanded
            :type="{ 'is-danger': $v.quarter.$error }"
            :message="{
              'Campo obrigatório': $v.quarter.$error && !$v.quarter.required
            }"
          >
            <b-input v-model="quarter" />
          </b-field>
          <b-field label="Complemento" expanded v-model="additionalInfo">
            <b-input />
          </b-field>
        </b-field>
      </div>
      <div class="column">
        <h3>Contato</h3>

        <label class="label">Novo número</label>
        <b-field expanded :type="{ 'is-danger': $v.contacts.$error }">
          <b-input v-model="contact"></b-input>
          <p class="control">
            <b-button class="button is-primary" @click="addContact"
              >Adicionar</b-button
            >
          </p>
        </b-field>
        <p
          class="help is-danger"
          v-if="$v.contacts.$error && !$v.contacts.required"
        >
          Campo obrigatório
        </p>

        <ul v-if="contacts">
          <li v-for="(contact, index) in contacts" :key="index">
            {{ contact }}
          </li>
        </ul>
      </div>
    </div>

    <div class="buttons">
      <b-button type="is-success" @click="$router.push('/clientes')"
        >Cancelar</b-button
      >
      <b-button type="is-secondary" @click="submit">Salvar</b-button>
    </div>
  </form>
</template>

<script>
import _ from "lodash";
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "ClientForm",

  props: {
    client: {
      type: Object,
      required: false,
      default: () => {}
    }
  },

  data() {
    return {
      fullName: "",
      cpf: "",
      birthday: "",
      email: "",
      contacts: [],
      contact: "",
      instagram: "",
      facebook: "",
      state: "",
      city: "",
      address: "",
      number: "",
      quarter: "",
      additionalInfo: ""
    };
  },

  validations: {
    fullName: { required },
    cpf: { required },
    birthday: { required },
    email: { required, email },
    contacts: { required },
    state: { required },
    city: { required },
    address: { required },
    number: { required },
    quarter: { required }
  },

  mounted() {
    if (this.isEdition) {
      this.fillForm();
    }
  },

  methods: {
    fillForm() {},

    submit() {
      this.$v.$touch();
      if (!this.$v.invalid) {
        this.$emit("clientSubmit", {});
      }
    },

    addContact() {
      this.contacts.push(this.contact);
      this.contact = "";
    }
  },

  computed: {
    isEdition() {
      return !_.isEmpty(this.client);
    }
  }
};
</script>
