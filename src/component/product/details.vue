<template>
    <section class="productDetails">
        <v-title :dTitle="title"></v-title>
        <div class="gap"></div>
        <v-swipe :list="lunbos"></v-swipe> 
        <div class="mui-card" >
            <div class="mui-card-header">
                <h4>{{infos.title}}</h4>
            </div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div>
                        <span>价格:&nbsp; <span>¥{{infos.sell_price}}</span> </span>
                        <del>¥{{infos.market_price}}</del> 
                    </div>
                    <div class="numbox">
                        <span>购买数量: </span>
                        <v-numberBox :initCar="totalCar" v-on:change="fn"></v-numberBox>
                    </div>
                </div>
            </div>
            <div class="mui-card-footer">
                <button type="button" class="mui-btn mui-btn-danger mui-btn-block" @click="addCar">加入购物车</button>
                <router-link to="/buyCar/list" class="mui-btn mui-btn-danger mui-btn-block" >立即购买</router-link>
            </div>
        </div>
        <div class="gap"></div>
        <mt-navbar v-model="selected">
            <mt-tab-item id="v-comment">商品评论</mt-tab-item>
            <mt-tab-item id="v-tab-details">图文介绍 </mt-tab-item>
        </mt-navbar>

        <component :Did="id" :is="selected"></component>
        <!-- tab-container -->
        <!--<mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <v-comment :Did="id"></v-comment>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <v-tab-details :Did="id"></v-tab-details>
            </mt-tab-container-item>
        </mt-tab-container>-->
    </section>
</template>
<script>
    import config from '../../js/config.js';
    import ComponentSwipe from '../common/swipe.vue';
    import ComponentTitle from '../common/title.vue';
    import ComponentComment from '../common/comment.vue';
    import ComponentTabDetails from './son/tab-details.vue';
    import ComponentNumberBox from '../common/numberBox.vue';
    import goodsStorage from '../../js/locastorage/goods.js';

    export default{
        data(){
            return {
                lunbos:[],
                infos:[],
                title:"商品详情",
                selected:"v-tab-details",
                id:this.$route.params.id,
                totalCar:goodsStorage.get(this.$route.params.id) // 页面一上来就从本地读取这个商品的历史购买数量
            }
        },
        components:{
            "v-swipe":ComponentSwipe,
            "v-title":ComponentTitle,
            "v-comment":ComponentComment,
            "v-tab-details":ComponentTabDetails,
            "v-numberBox":ComponentNumberBox
        },
        methods:{
            getProductImg:function(){
                let url=config.getPhotoImgs+this.id;
                this.$http.get(url).then(resp=>{
                    if(resp.body.status==0){
                        this.lunbos=resp.body.message.map(el=>{
                            el.img=config.imgDomain+el.src;
                            return el;
                        })
                    }
                })
            },
            getProductInfo:function(){
                let url=config.getGoodsInfo+this.id;
                this.$http.get(url).then(resp=>{
                    if(resp.body.status==0){
                        this.infos=resp.body.message[0];
                    }
                    
                })
            },
            fn:function(){
                
                this.totalCar=arguments[0];
                
            },
            addCar:function(){
                // 点击购物车，就把这个商品的购买数量持久化记录下来
                goodsStorage.set(this.id, this.totalCar);
                document.querySelector(".mui-badge").innerText=goodsStorage.get(); 
            }
        },
        created(){
            this.getProductImg();
            this.getProductInfo();
        }
    }
</script>
<style lang="less">
    img{
        height:100%;
    }
    .gap{
        height:1px;
        background:#e6e6e6;
        box-shadow:0 1px 6px #e6e6e6;
    }
    .productDetails{
        .mui-card{
            margin:0;
            border-radius:0;
            box-shadow:none;
            padding-top:20px;
            h4{
                font:400 18px "Microsoft Yahei"
            }
            .mui-card-content{
                .mui-card-content-inner{
                    padding:0px 15px;
                        span{
                            span{
                                font-size:22px;
                                color:red;
                            }
                        }
                        del{
                            margin-left:5px;
                        }
                        .pic{
                            padding:10px 0px;
                            color:#666;
                            span{
                                display:inline-block;
                                width:36px;
                                height:30px;
                                border:1px solid #d9d9d9;
                                line-height:30px;
                                font-size:16px;
                                text-align:center;
                            }
                        }
                }
                .numbox{
                    margin-top:10px;
                }
            }
        }
         .mui-card-footer{
            .mui-btn-danger{
                width:50%;
                font:400 16px "Microsoft Yahei";
                background-color:#ff3d36;
                padding:10px;
            }
            .mui-btn-danger:last-child{
                margin-left:10px;
            }
        }
        .mint-navbar{
            .mint-tab-item{
                div{
                    font-size:18px;
                    color:#666;
                }
                
            }
            .mint-tab-item:first-child{
                .mint-tab-item-label{
                     border-right:1px solid #eee;
                }
               
            }
        }
        .gap{
            height:1px;
            background:#eee;
        }
        .mint-navbar .mint-tab-item.is-selected{
            border-bottom:4px solid #7ad2bc;
        }
        .mint-navbar .mint-tab-item.is-selected div{
            color:#7ad2bc;
        }
    }
    .mui-card-footer:before, .mui-card-header:after{
        height:0;
    }
</style>