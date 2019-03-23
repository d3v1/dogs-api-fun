import Vue from 'vue';
import './plugins/axios';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import logger from './services/logger';

Vue.config.productionTip = false;
Vue.prototype.$logger = logger;

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    this.$store.dispatch('fetchDogs');
  },
}).$mount('#app');
