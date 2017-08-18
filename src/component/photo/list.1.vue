<template>
    <section class="photoList">
        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"data-scroll="1">
            <div class="mui-scroll" >
                <a class="mui-control-item " href="#/photo/list/0" >
                    全部
                </a>
                <a class="mui-control-item " :href="'#/photo/list/'+item.id" v-for="item in categary" :key="item.id">
                    {{item.title}}
                </a>
            </div>
        </div>
        <a :href="'#/photo/details/'+item.id" v-for="item in list" :key="item.sort_id">
            <div class="mui-card" >
                <div class="mui-card-header mui-card-media" :style="getUrl(item)"></div>
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <p>发布时间 : {{item.add_time | formatDate("yyyy-mm-dd")}}</p>
                        <h4 v-html="item.seo_title"></h4>
                        <p style="color: #333;" v-html="item.seo_description"></p>
                    </div>
                </div>
            </div>
        </a>
        
    </section>
</template>
<script>
    import config from '../../js/config.js'
    export default{
        data(){
            return {
                categary:[],
                list:[]
            }
        },
        methods:{
            getImgList:function(id){
                let url=config.getPhotoList+id;
                this.$http.get(url).then(resp=>{
                    if(resp.body.status==0){
                        this.list=resp.body.message.map((el,i)=>{
                            el.img_url=config.imgDomain+el.img_url;
                            return el
                        })
                    }
                })
            },
            getImgCategary:function(){
                let url=config.getPhotoCategory;
                this.$http.get(url).then(resp=>{
                    if(resp.body.status==0){
                        this.categary=resp.body.message;
                        
                    }
                })
            },
            getUrl(url){
                return 'height:40vw; background-image:url("' + url.img_url + '")'
            }
        },
        created(){
            this.getImgList(0);
            this.getImgCategary();
        },
        watch:{
            $route() {
                this.getImgList(this.$route.params.id);
            }
        }
    }
</script>

<style lang="less">
    #sliderSegmentedControl{
        background-color:rgba(10,116,90,0.1);
    }
    .mui-card>.mui-card-content h4{
        font:400 18px/24px "microsoft YaHei";
        color:#7ad2bc;
    }
    .photoList{
        .mui-card{
            img{
                
            }
        }
    }
</style>