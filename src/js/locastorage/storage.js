

// export default{
//     set(key,data){
//         let strData;
//         try{
//             strData=JSON.stringify(data);
//         }catch(e){
//             strData=data;
//         }finally{
//             localStorage.getItem(key)=strData;
//         }

//     },
//     get(key){
//         let strDate=localStorage.getItem(key);
//        try{
//            strDate=JSON.parse(strDate);
//        }catch(e){
//             strDate={};
//        }finally{
//            return strDate;
//        }
//     }
// }
export default {
    set(key, data) {
        try{
            data=JSON.stringify(data);
        }finally{
            // console.log(data);
            localStorage.setItem(key,data)
        }
    },
    get(key) {
        let strDate = localStorage.getItem(key);
        try {
            strDate = JSON.parse(strDate);
        } finally {
            // console.log(strDate || {});
            return strDate || {};
        }
    }
}