<template>
    <div class="home">
        <home-header />
        <home-swiper />
        <home-icons />
        <home-location />
        <home-activity />
    </div>
</template>
<script>
    import HomeHeader from './pages/Header'
    import HomeSwiper from './pages/Swiper'
    import HomeIcons from './pages/Icons'
    import HomeLocation from './pages/Location'
    import HomeActivity from './pages/Activity'
    export default{
        components:{
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            HomeLocation,
            HomeActivity
        }
    }
</script>
<style scoped>
    .home{
        background-color: #f5f5f5;
    }
</style>