<template>
    <footer class="footer">
        <div></div>
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item mui-active" to="/">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/product/list">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cate"></span>
				<span class="mui-tab-label">购买商品</span>
			</router-link>
			<router-link class="mui-tab-item" to="/buyCar/list">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">{{totalCar}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/mine">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>
    </footer>
</template>

<script>
	import goodsStorage from '../../js/locastorage/goods.js';
    export default{
		data(){
			return {
				totalCar:goodsStorage.get()
			}
		}
	}
</script>

<style lang="less">
   .footer>div{
       height:50px;
   }
   .mui-bar-tab .mui-tab-item.mui-active{
	   color:#7ad2bc;
   }
   .router-link-active{
	   color:#7ad2bc !important;
   }
</style>