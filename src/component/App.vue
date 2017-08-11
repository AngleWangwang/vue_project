<template>
    <div>
        <v-header></v-header>
        <main>
            <router-index>我是首页</router-index>
        </main>
        <v-footer></v-footer>
    </div>
</template>
<script>
import ComponentHeader from './common/header.vue';
import ComponentFooter from './common/footer.vue';
    export default {
        components:{
            "v-header":ComponentHeader,
            "v-footer":ComponentFooter
        }
    }
</script>

<style>
    #main{
        height:500px;
        background:red;
    }
</style>