<template>
<div class="vacation">
    <div class="vacation-title">
        周末去哪儿
    </div>
    <ul>
        <li class="vacation-item" v-for="item in vacationList" :key="item.id">
            <div class="vacation-img">
                <img :src="item.imgUrl" />
            </div>
            <div class="vacation-msg">
                <p>{{item.title}}</p>
                <p>{{item.msg}}</p>
            </div>
        </li>
        
    </ul>
</div>
</template>

<script>
export default {
    data(){
        return {
            vacationList:[
                {
                    id:"01",
                    imgUrl:require("@/assets/img/where1.jpg"),
                    title:"昆明必打卡",
                    msg:"走进春城，感受彩云之南"
                },{
                    id:"02",
                    imgUrl:require("@/assets/img/where2.jpg"),
                    title:"带娃出行",
                    msg:"宝贝们好喜欢这里哦"
                },{
                    id:"03",
                    imgUrl:require("@/assets/img/where3.jpg"),
                    title:"本地人在这玩",
                    msg:"四季如春的城市，浪漫色彩浓厚的城市，多民族融合的城市"
                },{
                    id:"04",
                    imgUrl:require("@/assets/img/where4.jpg"),
                    title:"昆明公园游",
                    msg:"到昆明，游公园，跑跑步"
                },{
                    id:"05",
                    imgUrl:require("@/assets/img/where5.jpg"),
                    title:"买花一日游",
                    msg:"带不走的云彩，带走的花儿"
                }
            ]
        }
    }
}
</script>

<style scoped lang="stylus">
    @import '~css/common.styl'
.vacation-title {
    font-size: .32rem;
    padding: .24rem;
}

.vacation-item {
    background-color: #fff;
    font-size: .28rem;
    margin-bottom: .1rem;
}

.vacation-img {
    width: 100%;
    height: 0;
    padding-bottom: 37.4375%;
}

.vacation-img img {
    width: 100%;
}

.vacation-msg {
    padding: .2rem 0 .2rem .2rem;
    
}

.vacation-msg p {
    margin-top: .2rem;
}

.vacation-msg p+p {
    color: #616161;
    font-size: .24rem;
    width:6rem;
    textOverflow();
}
</style>
