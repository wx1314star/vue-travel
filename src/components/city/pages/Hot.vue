<template>
<div class="hot">
    <div class="hot-title">热门城市</div>
    <ul class="hot-list">
        <li class="hot-item" v-for="item in hotList" :key="item.id">
            {{item.cityName}}
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

<style scoped>
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
</style>
