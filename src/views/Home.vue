<template>
  <div class="home">
    <Nav @toggleMenu="toggleMenu" />
    <div class="columns is-gapless">
      <Menu :hide="showMenu" />
      <div class="column fullheight">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import Menu from "@/components/Menu";

export default {
  name: "home",

  components: {
    Nav,
    Menu
  },

  data() {
    return {
      showMenu: true
    };
  },

  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>

<style scoped>
.fullheight {
  min-height: calc(100vh - 52px);
}
</style>
