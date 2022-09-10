<template>
<div class="city">
    <city-header />
    <city-hot />
    <city-sort />
    <city-list />
</div>
</template>

<script>
import CityHeader from './pages/Header'
import CityHot from './pages/Hot'
import CitySort from './pages/Sort'
import CityList from './pages/List'
export default {
    components: {
        CityHeader,
        CityHot,
        CitySort,
        CityList
    }
}
</script>

<style scoped>
.city{
    background-color: #f5f5f5;
}
</style>
