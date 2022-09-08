<template>
<div class="icons">

    <swiper :options="swiperOption">
        <swiper-slide v-for="(item,key) in page" :key="key">
            <div class="icons-item" v-for="page in item" :key="page.id">
                <img :src="page.imgUrl" />
                <p>{{page.title}}</p>
            </div>
        </swiper-slide>
    </swiper>

</div>
</template>

<script>
export default {
    data() {
        return {
            swiperOption: {},
            iconsList: [{
                    id: "01",
                    imgUrl: require("@/assets/img/icon1.png"),
                    title: "景点门票",
                },
                {
                    id: "02",
                    imgUrl: require("@/assets/img/icon2.png"),
                    title: "必游榜单",
                },
                {
                    id: "03",
                    imgUrl: require("@/assets/img/icon3.png"),
                    title: "夏日玩水",
                }, {
                    id: "04",
                    imgUrl: require("@/assets/img/icon4.png"),
                    title: "主题乐园",
                }, {
                    id: "05",
                    imgUrl: require("@/assets/img/icon5.png"),
                    title: "动植物园",
                }, {
                    id: "06",
                    imgUrl: require("@/assets/img/icon6.png"),
                    title: "故宫",
                }, {
                    id: "07",
                    imgUrl: require("@/assets/img/icon7.png"),
                    title: "一日游",
                }, {
                    id: "08",
                    imgUrl: require("@/assets/img/icon8.png"),
                    title: "公园",
                }, {
                    id: "09",
                    imgUrl: require("@/assets/img/icon9.png"),
                    title: "游乐场",
                }, {
                    id: "10",
                    imgUrl: require("@/assets/img/icon10.png"),
                    title: "全部玩乐",
                },
            ]
        }
    }
    ,
    //计算属性
    computed: {
        page() {
            let pages = [];
            this.iconsList.forEach((item, index) => {
                let idx = Math.floor(index / 8);
                if (!pages[idx]) {
                    pages[idx] = [];
                }
                pages[idx].push(item);
            })
            return pages;
        }
    }
}
</script>

<style scoped>
.icon {
    width: 100%;
    overflow: hidden;
}

.icons-item {
    width: 25%;
    padding-bottom: 25%;
    height: 0;
    float: left;
}

.icons-item img {
    width: 1.1rem;
    height: 1.1rem;
    display: block;
    margin: 0 auto;
    padding-top: .2rem;
}

.icons-item p {
    margin-top: .1rem;
    font-size: .28rem;
    text-align: center;
    color: #212121;
}
</style>
