// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import { store } from './_store';
import App from './App';
import { router, configureFakeBackend } from './_helpers';

Vue.config.productionTip = false;

// setup fake backend
configureFakeBackend();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
