const maxAge = 60000;
const cache = {};

export default {
    set(key, data) {
        cache[key] = {
            data: data,
            time: Date.now()
        }
    },
    //读取缓存的条件是,时间没有过期 ,或者没有缓存, 就应该删除数据
    get(key) {
        let tempObj = cache[key];
        if (!tempObj || Date.now() - tempObj.time > maxAge  ) {
            this.del(key);
        } else {
            return tempObj.data;
        }
    },
    //删除数据
    del(key) {
        delete cache[key];
    }
}