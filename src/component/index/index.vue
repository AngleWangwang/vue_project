<template>
    <section class="index">
        <v-swipe :list="lunbos"></v-swipe>
        <v-nav></v-nav>
    </section>
</template>

<script>
    import ComponentSwipe from '../common/swipe.vue';
    import ComponentNav from './nav.vue';
    import config from '../../js/config.js';
    import Http from '../../js/http/http.js';
    export default{
        components:{
            "v-swipe" : ComponentSwipe,
            "v-nav" : ComponentNav
        },
        data(){
            return {
                lunbos:[]
            } 
        },
        methods:{
            getList(){
                let url=config.getlunbo;
                Http.get(url,body=>{
                    this.lunbos=body.message;
                })
                // this.$http.get(config.getlunbo).then(resp=>{
                //     if(resp.status==200){
                //         this.lunbos=resp.body.message;
                //     }
                // })
            }
        },
        created(){
            this.getList();
        }
    }
</script>

<style lang="less">
  
</style>