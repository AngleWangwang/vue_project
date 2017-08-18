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
        <v-comment :Did="id"></v-comment>
    </section> 
</template>
<script>
    import config from '../../js/config.js';
    import ComponentTitle from '../common/title.vue';
    import ComponentComment from '../common/comment.vue';
    export default{
        data(){
            return {
                details:[],
                title:"新闻详情",
                id:this.$route.params.id
            }
        },
        methods:{
            getNewsDetails(){
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
            "v-title": ComponentTitle,
            "v-comment" : ComponentComment
        }
    }
</script>
<style lang="less">
    
</style>