<template>
  <div class="section">
    <div class="row space-between mb-16">
      <h1>Adicionar novo funcionário</h1>
    </div>

    <div class="container">
      <EmployeeForm @employeeSubmit="submit" />
    </div>
  </div>
</template>

<script>
import EmployeeForm from "@/components/employee/EmployeeForm";

export default {
  name: "EmployeeNew",

  components: {
    EmployeeForm
  },

  methods: {
    submit() {}
  }
};
</script>
