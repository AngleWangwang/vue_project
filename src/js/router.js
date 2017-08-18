//引入第三方路由插件
import vueRouter from 'vue-router';

//引入自定义路由组件
import ComponenRrouter from '../component/index/index.vue';
import ComponenList from '../component/details/list.vue';
import ComponenDetails from '../component/details/details.vue';
import ComponenPhotoList from '../component/photo/list.vue';
import ComponenPhotoDetails from '../component/photo/details.vue';
import ComponenBuyCar from '../component/buycar/list.vue';
import ComponenMine from '../component/mine/mine.vue';
import ComponenProductList from '../component/product/list.vue';
import ComponenProductDetails from '../component/product/details.vue';
import ComponenLogin from '../component/login/login.vue';
import ComponenBuycarOrder from '../component/buycar/order.vue';

export default new vueRouter({
    routes:[
        {path:"/",redirect:"/index"},
        {path:"/index",component:ComponenRrouter},
        //新闻资讯
        {path:"/news/list",component:ComponenList},
        {path:"/news/details/:id",component:ComponenDetails},
        //图片分享
        {path:"/photo/list/:id",component:ComponenPhotoList},
        {path:"/photo/details/:id",component:ComponenPhotoDetails},

        //商品列表
        {path:"/product/list",component:ComponenProductList},
        {path:"/product/details/:id",component:ComponenProductDetails,name:"ProD"},

        //购物车
        {path:"/buyCar/list",component:ComponenBuyCar,name:"buyL"},
        //订单详情
        {path:"/buycar/order",component:ComponenBuycarOrder,name:"buyO"},
        //个人中心
        {path:"/mine",component:ComponenMine},
        //登录
        {path:"/login",component:ComponenLogin,name:"login"}
    ]
})


