import Vue from 'vue';
import App from './App';
import router from './router';
//导入全局样式
import './components/css/reset.css';
Vue.config.productionTip = false
new Vue({
  el: '#app',
//   components: { App },
//   template: '<App/>'
  render:w=>w(App),
   router
})
