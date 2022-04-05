import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ScrollAnimation from './directives/scrollanimation'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueMask from 'v-mask'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.directive('scrollanimation', ScrollAnimation)

Vue.use(VueMask);

Vue.use(VueAxios, axios)


Vue.config.productionTip = false

new Vue({
  router,
  methods: {
    goTo(url) {
      this.$router.push(url)
    }
  },
  render: h => h(App),
}).$mount('#app')
