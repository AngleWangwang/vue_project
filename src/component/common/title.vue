<template>
    <section class="title">
        <header class="mint-header" @click="rollback">
            <div class="mint-header-button is-left">
                <a href="#/" class="router-link-active">
                    <button class="mint-button mint-button--default mint-button--normal">
                        <span class="mint-button-icon"><i class="mintui mintui-back"></i></span> 
                        <label class="mint-button-text">返回</label>
                    </button>
                </a>
            </div>
            <h1 class="mint-header-title">{{dTitle}}</h1>
            <div class="mint-header-button is-right"></div>
        </header>
    </section>
</template>
<script>
    export default{
        props:["dTitle"],
        methods:{
            rollback(){
                this.$router.go(-1);
            }
        }
    }
</script>
<style lang="less">
    .title{
        .mint-header{
            background-color:#fff;
            font-size:18px;
            color:#000;
        }
    }
</style>