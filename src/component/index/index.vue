<template>
    <section class="index">
        <v-swipe></v-swipe>
        <v-nav></v-nav>
    </section>
</template>

<script>
    import ComponentSwipe from './swipe.vue';
    import ComponentNav from './nav.vue';
    export default{
        components:{
            "v-swipe" : ComponentSwipe,
            "v-nav" : ComponentNav
        }
    }
</script>

<style>
   
</style>