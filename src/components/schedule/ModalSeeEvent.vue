<template>
  <modal
    name="see-event"
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
      <EventForm :event="event" :readOnly="true" />
    </div>
    <div class="modal-footer">
      <b-button @click="$emit('cancel', event.id)">
        <b-icon icon="times"></b-icon>
        <span>Cancelar agendamento</span>
      </b-button>
      <b-button class="is-secondary" @click="close">Ok</b-button>
    </div>
  </modal>
</template>

<script>
import moment from "moment";
import EventForm from "@/components/schedule/EventForm";

export default {
  name: "ModalSeeEvent",

  components: {
    EventForm
  },

  data() {
    return {
      event: {}
    };
  },

  methods: {
    beforeOpen({ params }) {
      const { event } = this;

      event.id = params.id;
      event.date = moment(params.start).format("YYYY-MM-DD");
      event.hour = moment(params.start).format("hh:mm");
      event.client = params.title;
      event.service = params.content;
      event.employee = params.split;
    },

    close() {
      this.$modal.hide("see-event");
    }
  }
};
</script>
