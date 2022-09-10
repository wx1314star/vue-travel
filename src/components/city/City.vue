<template>
<div class="city">
    <city-header />
    <city-hot />
</div>
</template>

<script>
import CityHeader from './pages/Header'
import CityHot from './pages/Hot'
export default {
    components: {
        CityHeader,
        CityHot
    }
}
</script>

<style scoped>
.city{
    background-color: #f5f5f5;
}
</style>
