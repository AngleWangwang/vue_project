<template>
    <section class="swipe">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item, i) in list" :key="i">
                <a :href="item.url">
                    <img :src="item.img" alt="">
                </a>
            </mt-swipe-item>
        </mt-swipe>
    </section>    
</template>
<script>
   
    export default{
        props:["list"]
    }
</script>
<style lang="less">
    .swipe{
          height:200px;
       a{
           display:block;
           img{
               display:block;
               width:100%;
           }
       }

       .mint-swipe-indicator.is-active{
           background:red;
       }
       .mint-swipe-indicator{
           opacity:0.6;
       }
   }
</style>