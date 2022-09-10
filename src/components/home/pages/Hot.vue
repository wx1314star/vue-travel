<template>
<div class="hot">
    <div class="hot-top">
        <img src="api/img/hot.png" />
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
    props:['hotList'],
    data() {
        return {
            
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
