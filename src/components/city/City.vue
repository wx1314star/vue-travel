<template>
<div class="city">
    <city-header />
    <city-hot :hotList='hotList' />
    <city-sort />
    <city-list :cityList='cityList' />
</div>
</template>

<script>
import CityHeader from './pages/Header'
import CityHot from './pages/Hot'
import CitySort from './pages/Sort'
import CityList from './pages/List'
export default {
    data() {
        return {
            hotList: [],
            cityList: [],
        }
    },
    components: {
        CityHeader,
        CityHot,
        CitySort,
        CityList
    },
    mounted() {
        this.$http.get('/api/city.json')
            .then((res) => {
                let data = res.data;
                this.hotList = data.hotCityList;
                this.cityList = data.cityList;
            })
    }
}
</script>

<style scoped>
.city {
    background-color: #f5f5f5;
}
</style>
