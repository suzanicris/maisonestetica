<template>
  <form>
    <b-field
      label="Cliente"
      expanded
      :type="{ 'is-danger': $v.client.$error }"
      :message="{
        'Campo obrigatório': $v.client.$error && !$v.client.required
      }"
    >
      <b-input v-model="client" :disabled="readOnly"></b-input>
    </b-field>
    <b-field grouped>
      <b-field
        label="Serviço"
        expanded
        :type="{ 'is-danger': $v.service.$error }"
        :message="{
          'Campo obrigatório': $v.service.$error && !$v.service.required
        }"
      >
        <b-input v-model="service" :disabled="readOnly"></b-input>
      </b-field>
      <b-field
        label="Data"
        expanded
        :type="{ 'is-danger': $v.date.$error }"
        :message="{
          'Campo obrigatório': $v.date.$error && !$v.date.required
        }"
      >
        <b-input v-model="date" type="date" :disabled="readOnly"></b-input>
      </b-field>
      <b-field
        label="Hora"
        expanded
        :type="{ 'is-danger': $v.hour.$error }"
        :message="{
          'Campo obrigatório': $v.hour.$error && !$v.hour.required
        }"
      >
        <b-input v-model="hour" type="time" :disabled="readOnly"></b-input>
      </b-field>
    </b-field>
  </form>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import _ from "lodash";

export default {
  name: "EventForm",

  props: {
    event: {
      type: Object,
      required: false,
      default: () => {}
    },

    readOnly: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  data() {
    return {
      client: "",
      service: "",
      date: "",
      hour: ""
    };
  },

  validations: {
    client: { required },
    service: { required },
    date: { required },
    hour: { required }
  },

  mounted() {
    if (!_.isEmpty(this.event)) {
      this.date = this.event.date;
      this.hour = this.event.hour;
      this.client = this.event.client;
      this.service = this.event.service;
    }
  },

  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.invalid) {
        const { client, service, date, hour } = this;
        return {
          client,
          service,
          date,
          hour
        };
      }
    }
  }
};
</script>
