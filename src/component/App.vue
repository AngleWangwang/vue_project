<template>
    <div>
        <v-header></v-header>
        <router-view></router-view>
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