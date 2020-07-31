import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import moment from "moment";
import "normalize.css";
import "@/styles/index.scss"; // global css

Vue.config.productionTip = false;
Vue.use(moment);
Vue.prototype.$moment = moment;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
