

const domain="http://139.199.192.48:8888";

export default{
    imgDomain: 'http://ofv795nmp.bkt.clouddn.com/',
    domain:domain,
    getlunbo:domain+"/api/getlunbo",
    //新闻
    getNewsList:domain+"/api/getnewslist",
    getNewsDetails:domain+"/api/getnew/",
    //评论
    getCommentPut:domain+"/api/postcomment/",
    getMoreComment:domain+"/api/getcomments/",
    //图片
    getPhotoList:domain+"/api/getimages/",
    getPhotoCategory:domain+"/api/getimgcategory",
    getPhotoImgs:domain+"/api/getthumimages/",
    getPhotoInfo:domain+"/api/getimageInfo/",
    //商品列表
    getGoodsList:domain+"/api/getgoods?pageindex=",
    getGoodsInfo:domain+"/api/goods/getinfo/",
    getGoodsDesc:domain+"/api/goods/getdesc/",

    // 购物车
    getBurCarList:domain+"/api/goods/getshopcarlist/"
}