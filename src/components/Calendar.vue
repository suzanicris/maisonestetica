<template>
  <div>
    <vue-cal
      small
      style="height: 100%"
      :default-view="defaultView"
      :locale="locale"
      :time-from="7 * 60"
      :time-to="20 * 60"
      :time-step="30"
      :selected-date="selectedDate"
      :disable-views="disableViews"
      :events="events"
      :onEventClick="openModalSeeEvent"
      :split-days="splitDays"
      :sticky-split-labels="stickySplitLabels"
      :min-cell-width="minCellWidth"
      :min-split-width="minSplitWidth"
      @cell-click="openModalCreateEvent"
      @view-change="getRange"
      events-count-on-year-view
      :hideViewSelector="hideViewSelector"
      :startWeekOnSunday="true"
    />

    <ModalCreateEvent @create="createEvent" />
    <ModalSeeEvent @cancel="cancelEvent" />
  </div>
</template>

<script>
import VueCal from "vue-cal";
import ModalCreateEvent from "@/components/schedule/ModalCreateEvent";
import ModalSeeEvent from "@/components/schedule/ModalSeeEvent";
import "vue-cal/dist/i18n/pt-br.js";
import "vue-cal/dist/vuecal.css";

export default {
  name: "Calendar",

  components: {
    VueCal,
    ModalCreateEvent,
    ModalSeeEvent
  },

  props: {
    events: {
      type: Array,
      required: false,
      default: () => []
    },
    disableViews: {
      type: Array,
      required: false,
      default: () => ["years"]
    },
    defaultView: {
      type: String,
      required: false,
      default: "week"
    },
    hideViewSelector: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  data() {
    return {
      locale: "pt-br",
      stickySplitLabels: false,
      minCellWidth: 0,
      minSplitWidth: 0,
      splitDays: [
        { class: "mom", label: "Cris" },
        { class: "dad", label: "Mari" },
        { class: "mom", label: "Su" },
        { class: "kid1", label: "Jo" }
      ]
    };
  },

  methods: {
    openModalSeeEvent(event, e) {
      this.$modal.show("see-event", event);
      e.stopPropagation();
    },

    cancelEvent(id) {
      return id;
    },

    openModalCreateEvent(event) {
      this.$modal.show("create-event", event);
    },

    createEvent(event) {
      return event;
    },

    getRange(event) {
      console.log(event); //eslint-disable-line
    }
  },

  computed: {
    selectedDate() {
      return new Date().today;
    }
  }
};
</script>

<style lang="scss">
//Linha que marca o horário atual passando
.vuecal__now-line {
  color: #06c;
}

.vuecal__cell-split.dad {
  background-color: rgba(221, 238, 255, 0.5);
}
.vuecal__cell-split.mom {
  background-color: rgba(255, 232, 251, 0.5);
}
.vuecal__cell-split.kid1 {
  background-color: rgba(221, 255, 239, 0.5);
}

.vuecal__cell-split .split-label {
  color: rgba(0, 0, 0, 0.1);
  font-size: 12px;
}

/* Different color for different event types. */
.vuecal__event.leisure {
  background-color: rgba(253, 156, 66, 0.9);
  border: 1px solid rgb(233, 136, 46);
  color: #fff;
}
.vuecal__event.health {
  background-color: rgba(164, 230, 210, 0.9);
  border: 1px solid rgb(144, 210, 190);
}
.vuecal__event.sport {
  background-color: rgba(255, 102, 102, 0.9);
  border: 1px solid rgb(235, 82, 82);
  color: #fff;
}

.vuecal__event {
  cursor: pointer;
}

.vuecal__event-title {
  font-size: 10px;
  font-weight: bold;
  margin: 4px 0 8px;
}

.vuecal__event-time {
  display: inline-block;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.vuecal__event-content {
  font-style: italic;
}

/* Cell background indicator */
.vuecal__cell--has-events {
  background-color: #fffacd;
}
.vuecal__cell-events-count {
  display: none;
}
</style>
