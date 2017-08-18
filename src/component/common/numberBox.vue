<template>
    <div class="mui-numbox">
        <button class="mui-btn mui-btn-numbox-minus" type="button" @click="substract">-</button>
        <input class="mui-input-numbox" type="number" v-model="value">
        <button class="mui-btn mui-btn-numbox-plus" type="button" @click="add">+</button>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                value: this.initCar || 0,
            }
        },
        props:["initCar"],
        methods:{
            add(){
                this.value++;
            },
            substract(){
                this.value && this.value--;
            }
        },
        //当value的值发生变化是,通过$emit将事件沿着作用域链向上派送,也就是想父组件派送
        watch:{
            value:function(){
                this.$emit("change",this.value);
            }
            
        }
    }
</script>

