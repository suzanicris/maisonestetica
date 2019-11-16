<template>
  <form>
    <div class="columns">
      <div class="column">
        <h3>Dados do funcionário</h3>

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
            label="Função"
            expanded
            :type="{ 'is-danger': $v.role.$error }"
            :message="{
              'Campo obrigatório': $v.role.$error && !$v.role.required
            }"
          >
            <b-input v-model="role"></b-input>
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

        <h3>Dados de acesso</h3>

        <div class="field">
          <b-switch v-model="hasRight" type="is-secondary"
            >Este funcionário tem acesso ao sistema.</b-switch
          >
        </div>

        <b-field
          label="Email"
          expanded
          :type="{ 'is-danger': $v.email.$error }"
          :message="{
            'Campo obrigatório': $v.email.$error && !$v.email.required
          }"
        >
          <b-input v-model="email" type="email" :disabled="!hasRight"></b-input>
        </b-field>
        <b-field grouped>
          <b-field
            label="Senha"
            expanded
            :type="{ 'is-danger': $v.password.$error }"
            :message="{
              'Campo obrigatório': $v.password.$error && !$v.password.required
            }"
          >
            <b-input
              v-model="password"
              type="password"
              :disabled="!hasRight"
            ></b-input>
          </b-field>
          <b-field
            label="Confirmar senha"
            expanded
            :type="{ 'is-danger': $v.repeatPassword.$error }"
            :message="{
              'Campo obrigatório':
                $v.repeatPassword.$error && !$v.repeatPassword.required
            }"
          >
            <b-input
              v-model="repeatPassword"
              type="password"
              :disabled="!hasRight"
            ></b-input>
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
      <b-button type="is-success" @click="$router.push('/funcionarios')"
        >Cancelar</b-button
      >
      <b-button type="is-secondary" @click="submit">Salvar</b-button>
    </div>
  </form>
</template>

<script>
import { required, requiredIf, email, sameAs } from "vuelidate/lib/validators";

export default {
  name: "EmployeeForm",

  data() {
    return {
      fullName: "",
      role: "",
      birthday: "",
      contacts: [],
      contact: "",
      hasRight: false,
      email: "",
      password: "",
      repeatPassword: ""
    };
  },

  validations: {
    fullName: { required },
    role: { required },
    birthday: { required },
    contacts: { required },
    email: { required: requiredIf("hasRight"), email },
    password: { required: requiredIf("hasRight") },
    repeatPassword: {
      required: requiredIf("hasRight"),
      sameAs: sameAs("password")
    }
  },

  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.invalid) {
        this.$emit("employeeSubmit", {});
      }
    },

    addContact() {
      this.contacts.push(this.contact);
      this.contact = "";
    }
  }
};
</script>
