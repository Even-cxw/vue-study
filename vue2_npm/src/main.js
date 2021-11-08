import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueRateComponent from './components/vue-rate-component/index'
Vue.config.productionTip = false
// use 会执行vueRateComponent.install方法；
Vue.use(vueRateComponent);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
