//引入第三方路由插件
import vueRouter from 'vue-router';

//引入自定义路由组件
import ComponenRrouter from '../component/index/index.vue';
import ComponenList from '../component/details/list.vue';
import ComponenDetails from '../component/details/details.vue';

export default new vueRouter({
    routes:[
        {path:"/",redirect:"/index"},
        {path:"/index",component:ComponenRrouter},
        {path:"/news/list",component:ComponenList},
        {path:"/news/details/:id",component:ComponenDetails},
    ]
})


