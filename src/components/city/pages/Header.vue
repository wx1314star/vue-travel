<template>
<!-- index-header -->
<div class="header">
    <div class="header-left" @click="toHome">
        <span class="iconfont">
            &#xe624;
        </span>
    </div>

    <div class="header-title">
        城市选择
    </div>
</div>
</template>

<script>
export default {
    methods: {
        toHome() {
            this.$router.push("/")
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~css/var.styl'

.header {
    width: 100%;
    line-height: .88rem;
    background: $bgColor;
    font-size: .32rem;
    color: $textColor;
    position: relative;
}

.header-left {
    width: .4rem;
    padding: 0 .2rem;
    text-align: center;
    font-weight: 700;
    position: absolute;
}

.header-title {
    text-align: center;
}
</style>
