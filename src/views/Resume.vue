<template>
  <div class="columns">
    <div class="column">
      <section class="section">
        <Calendar
          class="box"
          :disableViews="disableViews"
          defaultView="day"
          :hideViewSelector="true"
        />
      </section>
    </div>
    <div class="column is-one-third">
      <section class="section">
        <Birthday :birthday="birthday" @birthday="goTo" />
      </section>

      <section class="section">
        <BirthdayNext :nextBirthday="nextBirthday" @nextBirthday="goTo" />
      </section>
    </div>
  </div>
</template>

<script>
import Calendar from "@/components/Calendar";
import Birthday from "@/components/Birthday";
import BirthdayNext from "@/components/BirthdayNext";

export default {
  name: "Resume",

  components: {
    Calendar,
    Birthday,
    BirthdayNext
  },

  data() {
    return {
      disableViews: ["years", "month", "week"],
      birthday: [
        {
          id: 1,
          name: "Cristiane Cecília Ferreira"
        }
      ],
      nextBirthday: [
        {
          id: 3,
          name: "Fernanda Rodrigues",
          birthday: "23/11/2019"
        }
      ]
    };
  },

  methods: {
    goTo(id) {
      this.$router.push(`/clientes/${id}/cadastro`);
    }
  }
};
</script>
