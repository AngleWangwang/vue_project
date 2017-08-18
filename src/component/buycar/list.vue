<template>
    <section class="buyCar">
        <v-title :dTitle="title"></v-title>
        <div class="buyCar-container" v-for="item in list" :key="item.id" >
            <div class="container-left containner-float">
                <mt-switch  v-model="item.selected"></mt-switch>
            </div>
            <div class="container-right containner-float">
                 <ul class="mui-table-view ">
                    <li class="mui-table-view-cell mui-media">
                        <a href="javascript:;" >
                            <img class="mui-media-object mui-pull-left" :src="item.src">
                            <div class="mui-media-body">
                                {{item.title}}
                                <p class="mui-ellipsis">
                                    <span>¥{{item.sell_price}}</span>
                                    <v-numberBox :initCar="getNum(item.id)" @change="upTotal(item.id,$event)"></v-numberBox>
                                    <span @click="del(item.id)"> 删除</span>
                                </p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="totalPrice">
            <span>总共{{numTotal}}件商品</span>
            <span>合计¥{{priceTotal}}</span>
            <button type="button" @click="payment">付款</button>
        </div>
        
    </section>
</template>
<script>
    import ComponentTitle from '../common/title.vue';
    import goodsStorage from '../../js/locastorage/goods.js';
    import config from '../../js/config.js';
    import ComponentNumberBox from '../common/numberBox.vue';

    import { Toast } from 'mint-ui';
    export default{
        data(){
            return {
               title:"购物清单",
               list:[]
              
            }
        },
        methods:{
            getIdList(){
                let url=config.getBurCarList+goodsStorage.getIdList();
                this.$http.get(url).then(resp=>{
                    if(resp.body.status==0){
                        this.list=resp.body.message.map(el=>{
                            el.selected=true;
                            el.src=config.imgDomain + el.thumb_path;
                            return el;
                        })
                    }
                })
            },
            getNum(id){
                return goodsStorage.get(id)
            },
            del(id){
                let index=this.list.findIndex(item=>item.id==id);
                index >-1 && this.list.splice(index,1);
                goodsStorage.del(id);
            },
            upTotal(id,total){
                //此方法是为了更新视图的数据,不然页面不刷新
                this.list[0].selected=!this.list[0].selected;
                this.list[0].selected=!this.list[0].selected;
                goodsStorage.set(id,total);
            },
            payment(){
                //只要一个商品选中,且值不为0,就会返回ture
                let result = this.list.some( item=> item.selected && goodsStorage.get(item.id)  );
                if(!result){
                    Toast({
                        message: '您还没有添加任何商品呦!',
                        position: 'center',
                        duration: 1000
                    });
                }else if(!/SESSIONID=\w+/.test(document.cookie)){
                    Toast({
                        message: '请先登录!',
                        position: 'center',
                        duration: 1000
                    });
                    this.$router.push({
                        name:"login",
                        query:{nextpage:"/buycar/order"}
                    })
                }else{
                    this.$router.push("/buycar/order")
                }
                // let result=this.list.some(item=>item.selected != false);
                // let num = goodsStorage.getNumberList().reduce((v1,v2)=>(+v1)+(+v2));
                // if( result && num>0 ){
                //     if(/SESSIONID=\w+/.test(document.cookie)){
                //         this.$router.push('/buycar/order');
                //     }else {
                //         Toast({
                //             message: '请先登录!!',
                //             position: 'center',
                //             duration: 1000
                //         });
                //         this.$router.push({name:"login",query:{nextpage:"/buycar/order"}});
                //     }
                // }else{
                //     Toast({
                //         message: '您还没有添加任何商品呦!!',
                //         position: 'center',
                //         duration: 1000
                //     });
                // }
            }
        },
        computed:{
            numTotal(){
                let totalArr= this.list.map(item => item.selected ? +goodsStorage.get(item.id) : 0);
                return totalArr.length && totalArr.reduce((v1,v2)=>v1+v2);
            },
            priceTotal(){
                let priceArr= this.list.map(item => item.selected ? +goodsStorage.get(item.id)*item.sell_price : 0);
                return priceArr.length && priceArr.reduce((v1,v2)=>v1+v2);
            }
        },
        created(){
            this.getIdList(); 
        },
        components:{
           "v-title": ComponentTitle,
           "v-numberBox":ComponentNumberBox
        }
    }
</script>
<style lang="less">
    .buyCar{
        .buyCar-container{
            overflow:hidden;
            display:flex;
            padding:20px 0 0 10px;
            border-top:1px solid #eee;
            background:#fff;
            .mint-switch-input:checked+.mint-switch-core {
                border-color:#7ad2bc;
                background-color:#7ad2bc;
            }
            .container-left{
                padding-top:30px;
            }
            .mui-ellipsis{
                padding-top:10px;
                span:first-child {
                    color:red;
                    font-size:18px;
                }
                span:last-child {
                    margin-left:10px;
                    color:#7ad2bc;
                    font-size:16px;
                }
            }
        }
        .totalPrice{
            overflow:hidden;
            background:#fff;
            padding:30px 10px;
            line-height:36px;
            button{
                float:right;
                background:#7ad2bc;
                border:none;
                color:#fff;
                width:80px;
                height:36px;
                font-size:16px;
            }
        }
    }
</style>