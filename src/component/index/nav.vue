<template>
    <section class="nav">
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#/news/list">
                    <span class="mui-icon mui-icon mui-icon-spinner mui-spin"></span>
                    <div class="mui-media-body">新闻资讯</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon mui-icon-image"></span>
                    <div class="mui-media-body">图片分享</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
                    <div class="mui-media-body">购买商品</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon-extra mui-icon-extra-heart"></span>
                    <div class="mui-media-body">留言反馈</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon mui-icon-videocam"></span>
                    <div class="mui-media-body">视频专区</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <span class="mui-icon mui-icon-extra mui-icon-extra-custom"></span>
                    <div class="mui-media-body">联系我们</div>
                </a>
            </li>

        </ul>
    </section>    
</template>
<script>
    export default{}
</script>
<style lang="less">
    .nav{
        li{
            a{
                 .mui-icon{
                    padding:10px;
                    border-radius:30px;
                    color:#fff;
                }  
            }
        };
        li:nth-of-type(1){
            a{
                .mui-icon{
                    background-color:#86b0fa;
                }
            }
        };
        li:nth-of-type(2){
            a{
                .mui-icon{
                    background-color:#fe874c;
                }
            }
        };
        li:nth-of-type(3){
            a{
                .mui-icon{
                    background-color:#3498db;
                }
            }
        }
        li:nth-of-type(4){
            a{
                .mui-icon{
                    background-color:#1fd59a;
                }
            }
        }
        li:nth-of-type(5){
            a{
                .mui-icon{
                    background-color:#fdbac3;
                }
            }
        }
        li:nth-of-type(6){
            a{
                .mui-icon{
                    background-color:#c4b9e1;
                }
            }
        }
        
        
    }
</style>