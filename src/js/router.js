//引入第三方路由插件
import vueRouter from 'vue-router';

//引入自定义路由组件
import ComponenRrouter from '../component/index.vue';

export default new vueRouter({
    routes:[
        {path:"/",redirect:"/index"},
        {path:"/index",components:{
            "router-index":ComponenRrouter
        }},
    ]
})


