<template>
<div class="activity border-top">
    <div class="activity-item border-right" v-for="item in activityList" :key="item.id">
        <img :src="item.imgUrl" />
    </div>
</div>
</template>

<script>
export default {
    props: ['activityList'],
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.activity {
    position: relative;
    display: flex;
    margin-top: .2rem;
    background-color: #fff;
}

.activity>.activity-item {
    flex: 1;
    font-size: .28rem;
    text-align: center;
    /* background-color: red; */
    line-height: 1rem;
    height: 1.4rem;
}

.activity>.activity-item>img {
    width: 100%;
    height: 100%;
}
</style>
