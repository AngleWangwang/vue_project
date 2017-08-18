/**
 * 利用本地localStorage本地存储的特性,将用户加入到购物车的数据存储起来
 * 1.get()方法,获取一个商品id对应的商品个数,如果传id就是获取当前商品的个数,不传,就给所有商品的个数
 * 2.set()方法,将一个商品的购物车数量添加到本地存储中
 * 3.getIdList()方法,获取本地存储里面所有商品的id数组
 * 4.getNumberList()方法,获取本地存储里面所有商品的个数数组
 * 
 */
import goodsStorage from './storage.js'
const storageKey = "goodsTatal";
let k = goodsStorage.get(storageKey) || {};

export default {
    set(id, tatal) {
        k[id] = tatal;
        // console.log(k);
        goodsStorage.set(storageKey,k)
    },
    get(id) {
        if (id) {
            return k[id] || 0;
        } else {
            // 如果数组length为0，reduce会报错，所以做个判断处理
            let tatals = this.getNumberList();
            
            return tatals.length && tatals.reduce((v1, v2) => (+v1) + (+v2));
        }
    },
    //获取所有id成为数组
    getIdList() {
        return Object.keys(k);
    },
    getNumberList() {
        // console.log(Object.values(k));
        return Object.values(k);
    },

    //删除对应id下的商品
    del(id){
        delete k[id];
        goodsStorage.set(storageKey,k);
    }

}