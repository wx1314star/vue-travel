<template>
<div class="list">
    <div>
        <div class="list-title">A</div>
        <ul class="list-msg">
            <li class="list-item">
                阿坝藏族羌族自治区
            </li>
            <li class="list-item">
                阿克苏地区
            </li>
            <li class="list-item">
                阿拉尔
            </li>
            <li class="list-item">
                阿拉善盟
            </li>
            <li class="list-item">
                阿勒泰
            </li>
            <li class="list-item">
                阿里
            </li>
            <li class="list-item">
                安康
            </li>
            <li class="list-item">
                安庆
            </li>
            <li class="list-item">
                安顺
            </li>
            <li class="list-item">
                安阳
            </li>
            <li class="list-item">
                鞍山
            </li>
            <li class="list-item">
                澳门
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {

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
