import Vue from 'vue'
import Router from 'vue-router'
import routers from './router'

import App from './App.vue'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ViewUI);
Vue.use(ElementUI);
Vue.use(Router);

Vue.config.productionTip = false

new Vue({
  router:routers,
  render: h => h(App),
}).$mount('#app')
