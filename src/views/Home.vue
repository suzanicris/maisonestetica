<template>
  <div class="home">
    <Nav />
    <div class="columns">
      <Menu />
      <div class="column">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav";
import Menu from "@/components/Menu";

export default {
  name: "home",
  components: {
    Nav,
    Menu
  }
};
</script>
