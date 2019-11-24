<template>
  <transition name="slide-fade">
    <div class="menu column is-one-quarter" :class="{ hide: hide }">
      <img src="@/assets/logo.png" width="210" />
      <b-menu>
        <b-menu-list label="Geral">
          <b-menu-item
            icon="information-outline"
            label="Início"
            @click="goTo('/')"
          ></b-menu-item>
          <b-menu-item
            icon="information-outline"
            label="Agendamento"
            @click="goTo('/agendamento')"
          ></b-menu-item>
        </b-menu-list>
        <b-menu-list label="Cadastro">
          <b-menu-item
            icon="information-outline"
            label="Clientes"
            @click="goTo('/clientes')"
          ></b-menu-item>
          <b-menu-item
            icon="information-outline"
            label="Funcionários"
            @click="goTo('/funcionarios')"
          ></b-menu-item>
          <b-menu-item
            icon="information-outline"
            label="Pacotes"
            @click="goTo('/pacotes')"
          ></b-menu-item>
          <b-menu-item
            icon="information-outline"
            label="Produtos"
            @click="goTo('/produtos')"
          ></b-menu-item>
          <b-menu-item
            icon="information-outline"
            label="Serviços"
            @click="goTo('/servicos')"
          ></b-menu-item>
        </b-menu-list>
        <b-menu-list label="Gerenciar">
          <b-menu-item
            icon="information-outline"
            label="Relatórios"
            @click="goTo('/relatorio')"
          ></b-menu-item>
        </b-menu-list>
      </b-menu>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Menu",

  props: {
    hide: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  data() {
    return {
      isActive: false
    };
  },

  methods: {
    goTo(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style scoped lang="scss">
.column {
  padding-right: 0;
}

.menu {
  background-color: #a98c84;
  min-height: calc(82vh - 52px);

  &.hide {
    display: none;
  }

  img {
    display: block;
    margin: 0 auto;
  }

  .menu-label {
    padding-left: 56px;
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active em versões anteriores a 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
