import Vue from "vue";
import Axios from "axios";

Vue.config.ignoredElements = [/^ion-/];

import "@/assets/sass/app.scss";
import App from "./App.vue";
import router from "./Routes/routes";

Vue.prototype.$http = Axios;

Vue.config.productionTip = false;

new Vue({
  router,
  data: {},

  mounted() {},

  components: {},

  methods: {},
  watch: {},
  render: h => h(App),
}).$mount("#app");
