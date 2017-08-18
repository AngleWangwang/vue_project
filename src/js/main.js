//导入第三方包
import Vue from 'vue';
import vueRouter from "vue-router"; 
import vueResource from "vue-resource"; 


//引入UI包
import mintUI from 'mint-ui';

//导入mint-ui 的css样式
import  '../../../node_modules/mint-ui/lib/style.min.css';
//导入mui的css样式
import "../../../node_modules/mui/dist/css/mui.min.css";
import "../../../node_modules/mui/examples/hello-mui/css/icons-extra.css";


//导入全局过滤器
import filters from './filters.js';

//导入图片预览插件
import vuePreview from 'vue-preview';

//手动use启动插件
Vue.use(vueRouter);
Vue.use(vueResource);

//手动启动UI插件
Vue.use(mintUI);

//手动启动图片预览插件
Vue.use(vuePreview);

//导入自定义组件
import App from '../component/App.vue';
import router from './router.js';

new Vue({
    el:"#app",
    render:function(c){
        return c(App)
    },
    router:router
})
