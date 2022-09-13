<template>
<div class="banner">

    <div @click="showSwiper">
        <div class="banner-img">
            <img src="/api/img/like1.jpg" />
        </div>
        <div class="banner-title">
            野鸭湖风景区(AAAA景区)
        </div>
    </div>

    <div class="img-swiper" v-show="imgSwiper" @click="hideSwiper">
        <img src="/api/img/like1.jpg" />
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            imgSwiper: false
        }
    },
    methods: {
        showSwiper() {
            this.imgSwiper = true;
        },
        hideSwiper() {
            this.imgSwiper = false;
        }
    }
}
</script>

<style scoped>
.banner {
    position: relative;
}

.banner-img {
    width: 100%;
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
}

.banner-img img {
    width: 100%;
}

.banner-title {
    position: absolute;
    bottom: .4rem;
    left: .3rem;
    font-size: .36rem;
    color: #fff;
}

.img-swiper {
    background-color: #000;
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.img-swiper>img {
    width: 100%;
}
</style>
