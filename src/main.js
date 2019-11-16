import Vue from "vue";
import Buefy from "buefy";
import Vuelidate from "vuelidate";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(Buefy, { defaultIconPack: "fas" });

Vue.config.productionTip = false;
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
