<template>  
    <section class="productList">
        <div class="mui-content" style="background-color:#fff">
		    <ul class="mui-table-view mui-grid-view">
		        <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="(item,i) in list" :key="i">
		            <router-link :to="{name:'ProD',params:{id:item.id}}">
		                <img class="mui-media-object" :src="item.img_url">
		                <div class="mui-media-body">{{item.title}}</div>
                        <p v-html="item.zhaiyao"></p>
                        <p>
                            <span>¥{{item.sell_price}}</span>
                            <del>¥{{item.market_price}}</del>
                        </p>
                    </router-link>
                </li>
		    </ul>    
		</div>
        <div class="bottonbox">
            <button type="button" @click="getMore" ref="loadMore" class="mui-btn mui-btn-success mui-btn-block mui-btn-outlined">加载更多</button>
        </div>
        
    </section>
</template>
<script>
import config from '../../js/config.js'
    export default{
        data(){
            return {
                list:[],
                pageindex:1
            }
        },
        methods:{
            getGoodsList:function(){
                let url=config.getGoodsList+this.pageindex;
                this.$http.get(url).then(resp=>{
                    if(resp.body.status==0 && resp.body.message.length>0){
                        this.list.push(...resp.body.message);
                        this.pageindex++;
                    }else if(resp.body.message.length==0){
                        this.$refs.loadMore.disabled = true;
                        this.$refs.loadMore.classList.add("buttonActive");
                        this.$refs.loadMore.innerText="已经到底了!";
                    }
                })
            },
            getMore(){
                this.getGoodsList();
            }
        },
        created(){
            this.getGoodsList();
        }
    }
</script>
<style lang="less">
    .mui-content>.mui-table-view:first-child{
        margin-top:0;
        padding-right:0;
    }
    .productList .mui-table-view.mui-grid-view{
        margin-bottom:0;
        .mui-table-view-cell{
            border:1px solid #f6f6f6;
            margin-right:0px;
            padding-bottom:10px;
            padding-right: 10px;
            .mui-media-object{
                width:80%;
            }
            p:last-child{
                text-align:left;
                margin-top:5px;
                span{
                    font-size:16px;
                    color:red;
                }

            }
        }
    }
    .productList {
        .bottonbox{
            padding:10px;
            button{
                 border:1px solid ##7ad2bc;
            }
            .buttonActive{
                border:1px solid #666;
                color:#666;
            }
        } 
    }
    
</style>