<template>
<div class="home">
    <home-header />
    <home-swiper :swiperList='swiperList' />
    <home-icons :iconsList='iconsList' />
    <home-location />
    <home-activity :activityList='activityList' />
    <home-hot :hotList='hotList' />
    <home-like :likeList='likeList' />
    <home-vacation :vacationList='vacationList' />
</div>
</template>

<script>
import {
    mapState
} from 'vuex'
import HomeHeader from './pages/Header'
import HomeSwiper from './pages/Swiper'
import HomeIcons from './pages/Icons'
import HomeLocation from './pages/Location'
import HomeActivity from './pages/Activity'
import HomeHot from './pages/Hot'
import HomeLike from './pages/Like'
import HomeVacation from './pages/Vacation'
export default {
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeLocation,
        HomeActivity,
        HomeHot,
        HomeLike,
        HomeVacation
    },
    data() {
        return {
            swiperList: [],
            hotList: [],
            iconsList: [],
            likeList: [],
            vacationList: [],
            activityList: [],
            chanageCity: ''
        }
    },
    computed: {
        ...mapState(['city'])
    },
    methods: {
        getHttp() {
            this.$http.get("/api/dataHome.json")
                .then((res) => {
                    const dataList = res.data.data;
                    dataList.forEach((data, index) => {
                        if (data.city == this.city) {
                            this.swiperList = data.swiperList;
                            this.hotList = data.hotList;
                            this.iconsList = data.iconsList;
                            this.likeList = data.likeList;
                            this.vacationList = data.vacationList;
                            this.activityList = data.activityList;
                        }
                    });
                })
        },
    },
    mounted() {
        this.chanageCity = this.city;
        this.getHttp();
    },
    activated() {
        // ?????????????????????????????????????????????????????????
        if (this.chanageCity != this.city) {
            this.getHttp();
            this.chanageCity = this.city;
        }
    }
}
</script>

<style scoped>
.home {
    background-color: #f5f5f5;
}
</style>
