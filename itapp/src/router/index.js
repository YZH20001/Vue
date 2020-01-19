import Vue from 'vue';
import VueRouter from 'vue-router';
import MSite from '../pages/MSite/MSite';
import Serch from '../pages/Search/Search';
import Order from '../pages/Order/Order';
import Preson from '../pages/Preson/Person';
import Login from '../pages/Login/Login';

//声明使用插件
Vue.use(VueRouter)
export default new VueRouter({
    //所用路由
    routes: [
        {
            path: '/',
            redirect: '/msite'
        },
        {
            path: '/msite',
            component: MSite
        },
        {
            path: '/serch',
            component: Serch
        },
        {
            path: '/order',
            component: Order
        },
        {
            path: '/preson',
            component: Preson
        },
        {
            path: '/login',
            component: Login
        },

    ]
})