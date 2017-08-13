<template>
    <section>
        <v-title :dTitle="title"></v-title>
        <div class="mui-card"  >
            <div class="mui-card-header">{{details.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner" v-html="details.content">
                </div>
            </div>
            <div class="mui-card-footer">
                <span>创建时间:{{details.add_time | formatDate("yyyy-mm-dd")}}</span>
                <span>点击量:{{details.click}}</span>
            </div>
        </div>
    </section>
</template>
<script>
    import config from '../../js/config.js';
    import ComponentTitle from '../common/title.vue';
    export default{
        data(){
            return {
                details:[],
                title:"新闻详情"
            }
        },
        methods:{
            getNewsDetails(){
                // console.log("详情页进啦!!")
                let url=config.getNewsDetails+this.$route.params.id;
                this.$http.get(url).then(resp=>{
                    resp.status==200 && (this.details=resp.body.message[0])
                })
            }
        },
        created(){
            this.getNewsDetails();
        },
        components:{
            "v-title": ComponentTitle
        }
    }
</script>
<style lang="less">
    
</style>