<template>
<div class="sort">
    <div class="sort-title">字母排序</div>
    <ul class="sort-list">
        <li class="sort-item" v-for="(item,index) in sortList" :key="index">
            {{item.name}}
        </li>
    </ul>
</div>
</template>

<script>
export default {
    data() {
        return {
            sortList: [{
                name: "A"
            }, {
                name: "B"
            }, {
                name: "C"
            }, {
                name: "D"
            }, {
                name: "E"
            }, {
                name: "F"
            }, {
                name: "G"
            }, {
                name: "H"
            }, {
                name: "J"
            }, {
                name: "K"
            }, {
                name: "L"
            }, {
                name: "M"
            }, {
                name: "N"
            }, {
                name: "P"
            }, {
                name: "Q"
            }, {
                name: "R"
            }, {
                name: "S"
            }, {
                name: "T"
            }, {
                name: "W"
            }, {
                name: "X"
            }, {
                name: "Y"
            }, {
                name: "Z"
            }]
        }
    }
}
</script>

<style scoped>
.sort-title {
    font-size: .24rem;
    color: #212121;
    padding: .2rem .3rem;
}

.sort-list {
    position: relative;
    color: #212121;
    background-color: #fff;
    font-size: .28rem;
    overflow: hidden;
}

.sort-item {
    text-align: center;
    height: .9rem;
    line-height: .9rem;
    float: left;
    width: 16.66666%;

}
</style>
