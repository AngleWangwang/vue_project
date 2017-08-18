<template>
    <section class="comment">
        <div class="mui-card">
            <div class="mui-card-header">提交评论</div>
            <div class="mui-card-content">
                <textarea id="textarea" rows="5" placeholder="你想评论点啥呢!!" v-model="content"></textarea>
            </div>
            <div class="submit-box">
                <button @click="submitComment" type="button" class="mui-btn mui-btn-success mui-btn-block">提交</button>
            </div>
            
        </div>

        <div class="mui-card">
            <div class="mui-card-header">评论列表</div>
            <div class="mui-card-content">
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell" v-for="(item,i) in list" :key="i">
                        <div>
                            <span>第{{i+1}}楼</span>
                            <span>{{item.user_name}}</span>
                            <span>添加时间:{{item.add_time | formatDate("YYYY-MM-DD") }}</span>
                        </div>
                        <p>{{item.content}}</p>
                    </li>
                </ul>
            </div>
            <div class="submit-box">
                <button @click="loadingMore"  ref='loadingMoreBtn' type="button" class="mui-btn mui-btn-block mui-btn-outlined">加载更多...</button>
            </div>
            
        </div>
    </section>
</template>
<script>
    import config from '../../js/config.js';
    import Http from '../../js/http/http.js'
    import { Toast } from 'mint-ui'
    export default{
        data(){
            return {
                content:'',
                pageindex:1,
                list:[]
            }
        },
        props:["Did"],
        methods:{
            submitComment:function(){
                // console.log("你好呀校门")
                let url=config.getCommentPut+this.Did;
                let data = {content:this.content};
                Http.post(url,data,{emulateJSON:true},body=>{
                    if(body.status==0){
                        //添加到评论列表中
                        this.list.unshift({
                            user_name:"who I am",
                            add_time:new Date(),
                            content:this.content
                        });
                        //调用第三方ui
                        Toast({
                            message: '评论成功!',
                            position: 'center',
                            duration: 1000
                        });
                        //清空评论区域
                        this.content="";
                    }else{
                        console.log("chucuole")
                    }
                })


                // this.$http.post(url,data,{emulateJSON:true}).then(resp=>{
                //     //调用第三方ui
                //     console.log(resp)
                //     if(resp.status==200){
                //         let instance = Toast('评论成功!!');
                //         setTimeout(() => {
                //         instance.close();
                //         }, 1000);
                //         //添加到评论列表中
                //         this.list.unshift({
                //             user_name:"who I am",
                //             add_time:new Date(),
                //             content:this.content
                //         })
                //         //清空评论区域
                //         this.content="";
                //     }
                // })
            }, 
            loadingMore:function(){
                let url=`${config.getMoreComment}${this.Did}?pageindex=${this.pageindex}`;
                Http.get(url,body=>{
                     if(body.status==0 && body.message.length>0){
                            this.list.push(...body.message);
                            this.pageindex++;
                    } else {
                        this.$refs.loadingMoreBtn.disabled=true; 
                        this.$refs.loadingMoreBtn.innerText="没有更多数据了....";
                        this.$refs.loadingMoreBtn.classList.add("unactive");
                    }
                })
                // this.$http.get(url).then(resp=>{
                //     if(resp.status==200 && resp.body.message.length>0){
                //             this.list.push(...resp.body.message);
                //             this.pageindex++;
                            
                //     } else {
                //         this.$refs.loadingMoreBtn.disabled=true; 
                //         this.$refs.loadingMoreBtn.innerText="没有更多数据了....";
                //         this.$refs.loadingMoreBtn.classList.add("unactive");
                //     }
                // })
            }
        },
        created(){
            this.loadingMore();
        }
    }
</script>
<style lang="less">
    .comment{
        .mui-card{
            .submit-box{
                padding:4px 15px;
            }
            .mui-btn-success{
              background: #7ad2bc; 
            }
            .mui-btn-outlined{
                border:1px solid #7ad2bc;
                color:#7ad2bc;
                padding:10px;
            }
            .unactive{
                border:1px solid #333;
                color:#333;
            }
        }
    }
</style>