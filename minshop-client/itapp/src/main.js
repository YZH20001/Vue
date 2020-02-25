import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './mock/mockServer.js'//加载mockServer
import {Button} from 'mint-ui'
//导入全局样式
import './components/css/reset.css'
Vue.component(Button.name,Button)
Vue.config.productionTip = false
new Vue({
  el: '#app',
  //   components: { App },
  //   template: '<App/>'
  render: w => w(App),
  router,
  store, //使用上vuex
})