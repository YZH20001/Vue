import Vue from 'vue';
import VueRouter from 'vue-router';
import MSite from '../pages/MSite/MSite';
import Serch from '../pages/Search/Search';
import Order from '../pages/Order/Order';
import Preson from '../pages/Preson/Person';
import Login from '../pages/Login/Login';
import Shop from '../pages/Shop/Shop';
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods';
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings';
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo';

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
        {
            path: '/shop',
            component: Shop,
            children: [
                {
                    path: '',
                    redirect: '/shop/goods'
                },
                {
                    path: '/shop/goods',
                    component: ShopGoods
                },
                {
                    path: '/shop/ratings',
                    component: ShopRatings
                },
                {
                    path: '/shop/info',
                    component: ShopInfo
                },
            ]
        },
    ]
})