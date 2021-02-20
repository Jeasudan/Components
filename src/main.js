import Vue from 'vue'
import routers from './router'
import axios from 'axios'

require('./mock')

import App from './App.vue'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// import components from './views/Useage/dynamicComponents/components/config/index.js'

Vue.use(ViewUI);
Vue.use(ElementUI);
// Vue.use(components);

Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router:routers,
  render: h => h(App),
}).$mount('#app')
