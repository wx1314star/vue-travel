<template>
<!-- index-header -->
<div class="header">
    <div class="header-left">
        <span class="iconfont">
            &#xe624;
        </span>
    </div>
    <div class="header-search">
        <span class="iconfont">
            &#xe632;
        </span>
        输入城市/景点/游玩主题
    </div>
    <div class="header-right">
        <router-link to="/city">
            昆明<span class="iconfont">&#xe600;</span>
        </router-link>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import '~css/var.styl'

.header {
    width: 100%;
    line-height: .88rem;
    background: $bgColor;
    font-size: .36rem;
    color: $textColor;
    display: flex;
}

.header-left {
    width: .4rem;
    padding: 0 .2rem;
    text-align: center;
    font-weight: 700;
}

.header-search {
    flex: 1;
    background: #fff;
    height: .6rem;
    margin: .14rem 0;
    border-radius: .1rem;
    color: #e4e7ea;
    line-height: .6rem;
    font-size: .28rem;
    padding-left: .2rem;
}

.header-right {
    font-size: .28rem;
    padding: 0 .2rem;
}

.header-right a {
    color: #fff;
}
</style>
