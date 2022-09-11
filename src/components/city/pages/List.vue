<template>
<!-- better-scroll -->
<div ref="container" class="container">
    <div>
        <!-- hot -->
        <div class="hot">
            <div class="hot-title">热门城市</div>
            <ul class="hot-list">
                <li class="hot-item" v-for="item in hotList" :key="item.id">
                    {{item.cityName}}
                </li>
            </ul>
        </div>
        <!-- sort -->
        <div class="sort">
            <div class="sort-title">字母排序</div>
            <ul class="sort-list">
                <li class="sort-item" v-for="(item,index) in sortList" :key="index">
                    {{item.name}}
                </li>
            </ul>
        </div>
        <!-- list -->
        <div class="list">
            <div v-for="pages in cityList" :key="pages.id">
                <div class="list-title">{{pages.title}}</div>
                <ul class="list-msg">
                    <li class="list-item" v-for="item,index in pages.lists" :key="index">
                        {{item}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    props: ['cityList', 'hotList', 'sortList'],
    data() {
        return {
            bs: ''
        }
    },
    mounted() {
        let container = this.$refs['container'];
        this.bs = new BScroll(container)
    }
}
</script>

<style lang="stylus" scoped>
@import '~css/common.styl'

.container {
    position: absolute;
    overflow: hidden;
    left: 0;
    right: 0;
    bottom: 0;
    top: .88rem;
    background-color: #f5f5f5;
}

.list-title {
    font-size: .24rem;
    color: #212121;
    padding: .2rem .3rem;
}

.list-msg {
    position: relative;
    background-color: #fff;
    overflow: hidden;
}

.list-msg ::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 25%;
    left: 25%;
    border-left: .02rem solid #ddd;
    border-right: .02rem solid #ddd;
}

.list-msg ::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 25%;
    left: 75%;
    border-left: .02rem solid #ddd;
}

.list-item {
    font-size: .28rem;
    text-align: center;
    line-height: .9rem;
    float: left;
    width: 25%;
    border-bottom: .02rem solid #ddd;
    textOverflow();
}

// hot 
.hot-title {
    font-size: .26rem;
    color: #212121;
    padding: .2rem .3rem;
}

.hot-list {
    position: relative;
    color: #212121;
    background-color: #fff;
    font-size: .28rem;
    overflow: hidden;
}

.hot-list ::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 33.33333%;
    left: 33.33333%;
    border-left: .02rem solid #ddd;
    border-right: .02rem solid #ddd;
}

.hot-item {
    text-align: center;
    height: .9rem;
    line-height: .9rem;
    float: left;
    width: 33.33333%;
    border-bottom: .02rem solid #ddd;
}

// sort
.sort-title {
    font-size: .24rem;
    color: #212121;
    padding: .2rem .3rem;
}

.sort-list {
    position: relative;
    color: #212121;
    background-color: #fff;
    font-size: .28rem;
    overflow: hidden;
}

.sort-item {
    text-align: center;
    height: .9rem;
    line-height: .9rem;
    float: left;
    width: 16.66666%;

}
</style>
