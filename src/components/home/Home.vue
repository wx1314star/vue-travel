<template>
    <div class="home">
        <home-header />
        <home-swiper />
        <home-icons />
        <home-location />
        <home-activity />
        <home-hot />
        <home-like />
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
    export default{
        components:{
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            HomeLocation,
            HomeActivity,
            HomeHot,
            HomeLike
        }
    }
</script>
<style scoped>
    .home{
        background-color: #f5f5f5;
    }
</style>