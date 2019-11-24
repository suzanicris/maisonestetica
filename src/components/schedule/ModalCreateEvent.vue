<template>
  <modal
    name="create-event"
    @before-open="beforeOpen"
    height="auto"
    class="modal-padding"
  >
    <b-icon
      icon="times"
      class="close-modal"
      @click.native="close"
      size="is-small"
    />
    <div class="modal-title">Agendamento</div>
    <div class="modal-content">
      <EventForm ref="eventForm" :event="{ date, hour }" />
    </div>
    <div class="modal-footer">
      <b-button @click="close">Cancelar</b-button>
      <b-button class="is-secondary" @click="submit">Agendar</b-button>
    </div>
  </modal>
</template>

<script>
import _ from "lodash";
import moment from "moment";
import EventForm from "@/components/schedule/EventForm";

export default {
  name: "ModalCreateEvent",

  components: {
    EventForm
  },

  data() {
    return {
      date: "",
      hour: "",
      employee: null
    };
  },

  methods: {
    beforeOpen({ params }) {
      this.date = moment(params.date).format("YYYY-MM-DD");
      this.hour = moment(params.date).format("hh:mm");
      this.employee = params.split;
    },

    close: function() {
      this.$modal.hide("create-event");
    },

    submit() {
      const data = this.$refs.eventForm.submit();
      if (!_.isEmpty(data)) {
        this.$emit("create", data);
      }
    }
  }
};
</script>

<style></style>
