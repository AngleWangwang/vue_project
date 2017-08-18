<template>
    <section class="photoDetails">
        <v-title :dTitle="title"></v-title>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <h4>{{info.title}}</h4>
                    <p>
                        <span>发布时间 : {{info.add_time | formatDate("yyyy-mm-dd")}}</span>
                        <span>浏览量 : {{info.click}}</span>
                    </p>
                    <ul class="mui-table-view mui-grid-view">
                        <li class="mui-table-view-cell mui-media mui-col-xs-4 " v-for="(item,i) in imgs" :key="i" >
                                <img class="mui-media-object preview-img" :src="item.src" @click="$preview.open(i,imgs)">
                        </li>
                    </ul>
                    <p style="color: #333;" v-html="info.content"></p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    import config from '../../js/config.js';
    import ComponentTitle from '../common/title.vue'
    export default{
        data(){
            return {
                info:[],
                imgs:[],
                title:"商品详情"
            }
        },
        components:{
            "v-title" : ComponentTitle
        },
        methods:{
            getInfo(){
                let url=config.getPhotoInfo+this.$route.params.id;
                this.$http.get(url).then(resp=>{
                    this.info=resp.body.message[0];
                })

            },
            getImgs(){
                let url=config.getPhotoImgs+this.$route.params.id;
                this.$http.get(url).then(resp=>{
                    this.imgs=resp.body.message.map((el,i)=>{
                        el.w=600;
                        el.h=400;
                        el.src=config.imgDomain+el.src;
                        return el;
                    })
                })
            }
        },
        created(){
            this.getImgs();
            this.getInfo();
        }
    }
</script>
<style lang="less">
    
</style>