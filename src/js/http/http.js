import Cache from './cache.js';
import Vue from 'vue';
export default {
    //自己封装get请求,逻辑是先走缓存
    get(url, success) {
        //先用缓存
        let data = Cache.get(url);
        if (data) {
            success(data);
        } else {
            //缓存没有数据,就用Vue的静态方法http发送请求
            Vue.http.get(url).then(resp => {
                let body = resp.body;
                if (body.status == 0) {
                    //把请求回来的数据线缓存起来
                    Cache.set(url, body);
                    success(body);
                } else {
                    console.log("请求失败!");
                }
            })

        }
    },
    post(url, data, obj, success) {
        let result = Cache.get(url);
        if (result) {
            success(result);
        } else {
            Vue.http.post(url, data, obj).then(resp => {
                let body = resp.body;
                console.log(body);
                if (body.status == 0) {
                    Cache.set(url, body);
                    success(body);
                } else {
                    console.log("请求失败!");
                }
            })
        }
    }
}