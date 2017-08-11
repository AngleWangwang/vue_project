//导入第三方包
import Vue from 'vue';
import vueRouter from "vue-router"; 
import vueResource from "vue-resource"; 

//手动use启动插件
Vue.use(vueRouter);
Vue.use(vueResource);

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
