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
        <swiper :options="swiperOption">
            <swiper-slide v-for="item in bannerList" :key="item.id">
                <img :src="item.imgUrl" />
            </swiper-slide>

        </swiper>
        <div class="swiper-pagination" slot="pagination"></div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction',
                },
            },
            bannerList: [{
                id: "01",
                imgUrl: "/api/img/like1.jpg"
            }, {
                id: "02",
                imgUrl: "/api/img/like2.jpg"
            }, {
                id: "03",
                imgUrl: "/api/img/like3.jpg"
            }],
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

.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal>.swiper-pagination-bullets {
    bottom: .6rem;
    font-size: .32rem;
    color: #fff;
}
</style>
