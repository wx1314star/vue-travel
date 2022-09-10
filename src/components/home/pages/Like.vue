<template>
<div class="like">
    <div class="like-top">
        <img src="@/assets/img/like.png" />
        猜你喜欢
    </div>
    <ul>
        <li class="like-item border-bottom" v-for="item in likeList" :key="item.id">
            <div class="like-img">
                <img :src="item.imgUrl" />
            </div>
            <div class="like-text">
                <div class="like-title">{{item.title}}</div>
                <div class="like-message iconfont">&#xe62f;&#xe62f;&#xe62f;&#xe62f;&#xe62f;&nbsp;&nbsp;&nbsp;&nbsp;{{item.msg}}</div>
                <div class="like-map">
                    <span class="like-mark">￥<b>{{item.price}}</b></span>起
                    <span class="like-item-map">{{item.map}}</span>
                </div>
            </div>
        </li>

    </ul>
</div>
</template>

<script>
export default {
    data() {
        return {
            likeList: [{
                id: "01",
                imgUrl: require("@/assets/img/like1.jpg"),
                title: "梦幻联邦乐园",
                msg: "120条评论",
                price: "280",
                map: "西山区"
            }, {
                id: "02",
                imgUrl: require("@/assets/img/like2.jpg"),
                title: "云南民族村",
                msg: "29246条评论",
                price: "79",
                map: "西山区"
            }, {
                id: "03",
                imgUrl: require("@/assets/img/like3.jpg"),
                title: "七彩云南欢乐世界",
                msg: "23457条评论",
                price: "198",
                map: "晋宁县"
            }, {
                id: "04",
                imgUrl: require("@/assets/img/like4.jpg"),
                title: "七彩云南古滇精品湿地",
                msg: "868条评论",
                price: "185",
                map: "晋宁县"
            }, {
                id: "05",
                imgUrl: require("@/assets/img/like5.jpg"),
                title: "七彩云南古滇温泉山庄",
                msg: "1253条评论",
                price: "185",
                map: "晋宁县"
            }, {
                id: "06",
                imgUrl: require("@/assets/img/like6.jpg"),
                title: "昆明西山龙门景区",
                msg: "5434条评论",
                price: "75",
                map: "西山区"
            }, {
                id: "07",
                imgUrl: require("@/assets/img/like7.jpg"),
                title: "石林",
                msg: "18074条评论",
                price: "0.39",
                map: "石林彝族白族自治县"
            }]
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~css/common.styl'

.like {
    margin-top: .2rem;
    font-size: .28rem;
    background-color: #fff;
    padding: 0 .2rem;
}

.like-top {
    padding: .2rem 0;
    font-size: .32rem;
}

.like-top img {
    width: .3rem;
    height: .3rem;
}

.like-item {
    position: relative;
    padding: .2rem 0;
    overflow: hidden;
}

.like-img {
    float: left;
    overflow: hidden;
}

.like-img img {
    width: 2rem;
    height: 2rem;
}

.like-text {
    overflow: hidden;
    padding-left: .22rem;
    
}

.like-title {
    font-size: .36rem;
    color: #212121;
    margin-top: .4rem;
}

.like-message {
    margin-top: .3rem;
    color: #616161;
    font-size: .24rem;
}

.like-map {
    margin-top: .3rem;
    color: #616161;
    position: relative;
}

.like-mark {
    color: #ff8300;
}

.like-mark b {
    font-size: .4rem;
}

// 加入微调文字
.like-item-map {
    position: absolute;
    right: 0;
    font-size: .28rem;
    top: .1rem;
    width:1rem;
    textOverflow();
}
</style>
