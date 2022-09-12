<template>
<!-- better-scroll -->
<div ref="container" class="container">
    <div>
        <!-- hot -->
        <div class="hot">
            <div class="hot-title">热门城市</div>
            <ul class="hot-list">
                <li class="hot-item" v-for="item in hotList" :key="item.id" @click="changeCityName(item.cityName)">
                    {{item.cityName}}
                </li>
            </ul>
        </div>
        <!-- sort -->
        <div class="sort">
            <div class="sort-title">字母排序</div>
            <ul class="sort-list">
                <li class="sort-item" v-for="(val,key) in sortList" :key="key" @click="changeSort(val.name)">
                    {{val.name}}
                </li>
            </ul>
        </div>
        <!-- list -->
        <div class="list">
            <div v-for="pages in cityList" :key="pages.id" :ref="pages.title">
                <div class="list-title">{{pages.title}}</div>
                <ul class="list-msg">
                    <li class="list-item" v-for="cityName,index in pages.lists" :key="index" @click="changeCityName(cityName)">
                        {{cityName}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapMutations
} from 'vuex';
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
    },
    methods: {
        // 点击字母跳到指定位置
        changeSort(sortName) {
            // https://better-scroll.github.io/docs-v1/doc/zh-hans/api.html
            // scrollToElement(el, time, offsetX, offsetY, easing)
            // 滚动到指定的目标元素 
            this.bs.scrollToElement(this.$refs[sortName][0])
        },
        changeCityName(cityName) {
            this.changeCity(cityName);
            this.$router.push('/')
        },
        ...mapMutations(['changeCity'])
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
    left: 74.7%;
    /* border-left: 0.02rem solid #ddd; */
    border-right: 0.02rem solid #ddd;
}

.list-msg ::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 0%;
    left: 75%;
    //border-left: .02rem solid #ddd;
}

.list-item {
    position: relative;
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
    /* width: 100%; */
    left: 100%;
    /* border-left: 0.02rem solid #ddd; */
    border-right: 0.02rem solid #ddd;
}

.hot-item {
    position: relative;
    width: 33.33333%;
    text-align: center;
    height: 0.9rem;
    line-height: 0.9rem;
    float: left;
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
