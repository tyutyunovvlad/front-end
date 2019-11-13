import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter.js'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'


Vue.config.productionTip = false

Vue.filter('date', dateFilter)

Vue.use(Vuelidate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
