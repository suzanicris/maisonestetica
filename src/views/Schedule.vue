<template>
  <section class="section">
    <div class="container">
      <Calendar :events="events" />
    </div>
  </section>
</template>

<script>
import Calendar from "@/components/Calendar";

export default {
  name: "Schedule",

  components: {
    Calendar
  },

  data() {
    return {
      events: [
        {
          id: 1,
          start: "2019-11-16 10:30",
          end: "2019-11-16 11:30",
          // You can also define event dates with Javascript Date objects:
          // startDate: new Date('2018-11-16 10:30'),
          // endDate: new Date('2018-11-16 11:30'),
          title: "Doctor appointment",
          content: '<i class="v-icon material-icons">local_hospital</i>',
          class: "health",
          split: 1
        }
      ]
    };
  }
};
</script>
