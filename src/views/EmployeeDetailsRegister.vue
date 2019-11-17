<template>
  <div>
    <h3>Cadastro</h3>
    <hr />
    <EmployeeForm @employeeSubmit="submit" />
  </div>
</template>

<script>
import EmployeeForm from "@/components/employee/EmployeeForm";

export default {
  name: "EmployeeDetailsRegister",

  components: {
    EmployeeForm
  },

  methods: {
    submit() {}
  }
};
</script>

<style scoped>
h3 {
  margin-bottom: 0;
}

hr {
  margin-top: 8px;
  margin-bottom: 16px;
}
</style>
