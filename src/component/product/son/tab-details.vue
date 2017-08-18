<template>
    <div class="mui-card">
        <div class="mui-card-header">{{desc.title}}</div>
        <div class="mui-card-content">
            <div class="mui-card-content-inner" v-html="desc.content"></div>
        </div>
    </div>
</template>
<script>
    import config from '../../../js/config.js';
    export default{
        data(){
            return {
                desc:{}
            }
        },
        props:["Did"],
        methods:{
             getProductDesc:function(){
                let url=config.getGoodsDesc+this.Did;
                this.$http.get(url).then(resp=>{
                    if(resp.body.status==0){
                        this.desc=resp.body.message[0];
                    }
                });
            }
        },
        created(){
            this.getProductDesc();
        }

    }
</script>