<template>
<div class="city">
    <city-header />
    <city-list :cityList='cityList' :hotList='hotList' :sortList='sortList' />
</div>
</template>

<script>
import CityHeader from './pages/Header'
import CityList from './pages/List'
export default {
    data() {
        return {
            hotList: [],
            cityList: [],
            sortList: [],
        }
    },
    components: {
        CityHeader,
        CityList
    },
    mounted() {
        this.$http.get('/api/city.json')
            .then((res) => {
                let data = res.data;
                this.hotList = data.hotCityList;
                this.cityList = data.cityList;
                this.sortList = data.sortList;
            })
    }
}
</script>

<style scoped>
.city {
    background-color: #f5f5f5;
}
</style>
