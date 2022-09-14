<template>
<div class="header">
    <div class="header-return" v-show="showHeader">
        <span class="border-return"></span>
        <span class="iconfont return">
            &#xe624;
        </span>
    </div>

    <div class="header-top" v-show="!showHeader" :style="styleOpacity">
        <div class="header-left">
            <span class="iconfont">
                &#xe624;
            </span>
        </div>
        <span>野鸭湖风景区</span>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            showHeader: true,
            styleOpacity: {
                opacity: 0
            }
        }
    },
    mounted() {
        //闭包时声明另一个_this指向
        let _this = this;
        window.addEventListener("scroll", function () {
            let top = document.documentElement.scrollTop;
            if (top > 45) {
                let opacity = top / 130;
                opacity = opacity > 1 ? 1 : opacity;
                _this.styleOpacity = {
                    opacity
                }
                _this.showHeader = false;
            } else {
                _this.showHeader = true;
            }
        })
    },
}
</script>

<style lang="stylus" scoped>
@import '~css/var.styl';

.header-return {
    position: absolute;
    left: .1rem;
    top: .1rem;
    width: .72rem;
    height: .72rem;
}

.border-return {
    display: block;
    background-color: #000;
    width: .72rem;
    height: .72rem;
    opacity: .5;
    border-radius: .36rem;
}

.return {
    position: absolute;
    left: 0;
    top: 0;
    color: #fff;
    width: .72rem;
    line-height: .72rem;
    text-align: left;
    text-indent: .20rem;
    font-size: .32rem;
    font-weight: bold;
}

.header-top {
    position: fixed;
    top: 0;
    text-align: center;
    width: 100%;
    line-height: .88rem;
    background: $bgColor;
    font-size: .30rem;
    color: $textColor;
    z-index: 99;
}

// .header-top>span {
//     padding-right: 0.9rem;
// }

.header-left {
    position: absolute;
    left: 0;
    width: .4rem;
    padding: 0 .2rem;
    text-align: center;
    font-weight: 700;
}
</style>
