<template>
<div class="hot">
    <div class="hot-top">
        <img src="@/assets/img/hot.png" />
        <span class="hot-title-left">本周热门榜单</span>
        <span class="iconfont hot-title-right">全部榜单&#xe62d;</span>
    </div>

    <ul class="hot-list">
        <li class="hot-item" v-for="item in hotList" :key="item.id">
            <img :src="item.imgUrl" />
            <p>{{item.title}}</p>
            <p>
                <span class="hot-mark">￥{{item.mark}}</span>起
            </p>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    data() {
        return {
            hotList: [{
                id: "01",
                imgUrl: require('@/assets/img/list1.jpg'),
                title: "云南省博物馆",
                mark: 2.7
            }, {
                id: "02",
                imgUrl: require('@/assets/img/list2.jpg'),
                title: "云南民族村",
                mark: 79.0
            }, {
                id: "03",
                imgUrl: require('@/assets/img/list3.jpg'),
                title: "昆明融创海世界",
                mark: 180.0
            }, {
                id: "04",
                imgUrl: require('@/assets/img/list4.jpg'),
                title: "石林",
                mark: 0.4
            }, {
                id: "05",
                imgUrl: require('@/assets/img/list5.jpg'),
                title: "七彩云南欢乐世界",
                mark: 198
            }, {
                id: "06",
                imgUrl: require('@/assets/img/list6.jpg'),
                title: "云南野生动物园",
                mark: 100
            }, {
                id: "07",
                imgUrl: require('@/assets/img/list7.jpg'),
                title: "昆明西山龙门景区",
                mark: 75.0
            }, {
                id: "08",
                imgUrl: require('@/assets/img/list8.jpg'),
                title: "九乡风景名胜区",
                mark: 0.9
            }, {
                id: "09",
                imgUrl: require('@/assets/img/list9.jpg'),
                title: "滇池",
                mark: 89.0
            }, {
                id: "10",
                imgUrl: require('@/assets/img/list10.jpg'),
                title: "昆明动物园",
                mark: 20.0
            }, ]
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~css/common.styl';

.hot {
    margin-top: .2rem;
    background-color: #fff;
    font-size: .28rem;
}

.hot-top {
    padding: .2rem;
}

.hot-top img {
    width: .3rem;
    height: .3rem;
}

.hot-title-left {
    font-size: .32rem;
    color: #212121;
}

.hot-title-right {
    position: absolute;
    right: .2rem;
    font-weight: 500;
    font-size: .28rem;
    color: #616161;
}

.hot-list {
    overflow-x: scroll;
    overflow-y: hidden;
    /* 强制不能换行 */
    white-space: nowrap;
    height: 3rem;
}

.hot-item {
    padding: 0 .2rem;
    width: 2rem;
    height: 2rem;
    display: inline-block;
}

.hot-item img {
    width: 100%;
    height: 100%;
}

.hot-item p {
    margin-top: .1rem;
    text-align: center;
    textOverflow();
}

.hot-item p .hot-mark {
    color: #ff8300;
    font-size: .32rem;
}
</style>
