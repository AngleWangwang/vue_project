<template>
    <section class="photoList">
        <div class="allSort">
            <div class="sortMenu clearfix">
                <ul class="sortMenu-ul" >
                    <li class="cell"  v-for="(item,index) in categary" :key="item.id" :class="{cur:iscur==index}" @click="iscur=index">
                        <a :href="'#/photo/list/'+item.id" >{{item.title}}</a>
                    </li>
                </ul>
            </div>
        </div>
        <a :href="'#/photo/details/'+item.id" v-for="item in list" :key="item.sort_id">
            <div class="mui-card" >
                <div class="mui-card-header mui-card-media" :style="getUrl(item)"></div>
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <h4 v-html="item.title"></h4>
                        <p v-html="item.zhaiyao"></p>
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
                list:[],
                iscur:0
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
                        resp.body.message.unshift({
                            id:0,
                            title:"全部"
                        })
                        this.categary=resp.body.message;
                    }
                })
            },
            getUrl(url){
                return 'height:40vw; background-image:url("' + url.img_url + '")'
            }
        },
        created(){
            this.getImgList(this.$route.params.id);
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
    .mui-card>.mui-card-content h4{
        font:400 18px/24px "microsoft YaHei";
        color:#7ad2bc;
    }
 .sortMenu{
    width: 100%; 
    background-color:#fff; 
    overflow-x: scroll; 
    -webkit-overflow-x: scroll;
    }
.sortMenu::-webkit-scrollbar{ 
    width: 0; 
    height: 0;   
    background-color: #fff;  
}
.sortMenu-ul { 
    min-width:500px; 
    display: flex;
    justify-content: flex-start;
    padding-left:10px;
    margin:5px 0;
}
.sortMenu .cell{ 
    display: inline-block; 
    font-size: 17px;
    margin: 0px 1em;
    height: 40px;
    line-height: 40px;
    text-align: center;
    position: relative;
    text-overflow: ellipsis;
    word-break: keep-all;
}
.sortMenu .cell a {
    color:#333;
}
.sortMenu>.sortMenu-ul>.cur>a{
    color:#7ad2bc; 
}
 
</style>