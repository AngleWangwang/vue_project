<template>
    <section>
        <v-title :dTitle="title"></v-title>
        订单详情页面,敬请期待!
    </section>
</template>
<script>
    import ComponentTitle from '../common/title.vue'
    export default{
       data(){
           return {
               title:"订单详情"
           }
       },
        components:{
            "v-title":ComponentTitle
        }
    }
</script>
<style lang="less">
    
</style>