<template>
    <section class="details">
        <v-title :dTitle="title"></v-title>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in list">
                <router-link :to="'/news/details/'+item.id" class="">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body mui-ellipsis">
                        {{item.title}}
                        <p class="mui-ellipsis">{{item.zhaiyao}}</p>
                        <p>
                            <span>发布时间:{{item.add_time | formatDate("yyyy-mm-dd") }}</span>
                            <span>点击量:{{item.click}}</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </section>
</template>
<script>
    import config from '../../js/config.js';
    import ComponentTitle from '../common/title.vue';
    export default{
        data(){
            return {
                list:[],
                title:"新闻资讯"
            }
        },
        methods:{
            getNews(){
                this.$http.get(config.getNewsList).then(resp=>{
                    if(resp.status==200){
                        this.list=resp.body.message
                    }
                
                })
            }
        },
        created(){
           this.getNews() 
        },
        components:{
            "v-title":ComponentTitle,
        }
    }
</script>
<style lang="less">
    .details{
        .mui-media-body{
            span{
                color:#7ad2bc;
                font-size:14px;
            }
        }
    }
</style>