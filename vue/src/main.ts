
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import store from './store/store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'es6-promise/auto'


Vue.use(BootstrapVue)
Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#vue-app')
