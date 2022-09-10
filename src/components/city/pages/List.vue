<template>
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
</template>

<script>
export default {
    props: ['cityList'],
}
</script>

<style lang="stylus" scoped>
@import '~css/common.styl'

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
</style>
