<template>
<div class="home">
    <home-header />
    <home-swiper :swiperList='swiperList'/>
    <home-icons :iconsList='iconsList'/>
    <home-location />
    <home-activity />
    <home-hot :hotList='hotList' />
    <home-like :likeList='likeList'/>
    <home-vacation :vacationList='vacationList'/>
</div>
</template>

<script>
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
        }
    },
    mounted() {
        this.$http.get("http://localhost:8300/static/mock/dataHome.json")
            .then((res) => {
                const data = res.data.data[0];
                this.swiperList = data.swiperList;
                this.hotList = data.hotList;
                this.iconsList = data.iconsList;
                this.likeList = data.likeList;
                this.vacationList = data.vacationList;
            })
    }
}
</script>

<style scoped>
.home {
    background-color: #f5f5f5;
}
</style>
