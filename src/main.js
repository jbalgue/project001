import Vue from 'vue';
import App from './App.vue';
import router from './router';

// Require the main Sass manifest file
import 'bulma/css/bulma.css';
require('./assets/main.scss');

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
