# Vue开发旅游网

###### 一、首先先在gitee仓库创建好项目并配置好公钥等

(具体可参考gitee官网公钥生成办法)

然后通过git克隆命令拉取到本地硬盘

![image-20220904103044396](/Users/wx/Documents/gitee/vue-travel/md/assets/image-20220904103044396.png)

同时在当前目录用vue命令创建脚手架项目

![image-20220904103530940](/Users/wx/Documents/gitee/vue-travel/md/assets/image-20220904103530940.png)

###### 二、添加好后用git命令添加项目、提交、推送到gitee仓库

```shell
# 添加当前所有内容
git add .
# 提交到仓库 
git commit -m '20220904-init'
# 推送到gitee仓库项目
git push
```

推送时需要填写gitee的用户名和密码

![image-20220904104635425](/Users/wx/Documents/gitee/vue-travel/md/assets/image-20220904104635425.png)

推送成功后的gitee仓库内容

![image-20220904104828524](/Users/wx/Documents/gitee/vue-travel/md/assets/image-20220904104828524.png)

###### 三、添加css和js

首先下载一个reset.css文件

![image-20220904110627947](/Users/wx/Documents/gitee/vue-travel/md/assets/image-20220904110627947.png)

![image-20220904110645403](/Users/wx/Documents/gitee/vue-travel/md/assets/image-20220904110645403.png)

文件另存到项目src/assets/css文件夹下，没有css文件夹新建一个

![image-20220904110727320](/Users/wx/Documents/gitee/vue-travel/md/assets/image-20220904110727320.png)

在reset.css文件里添加一下字体大小和去下划线

![image-20220904110755570](/Users/wx/Documents/gitee/vue-travel/md/assets/image-20220904110755570.png)

接着安装一下fastclick.js(解决click延迟300ms问题)

```
cnpm install fastclick --save
```

在main.js里添加引入css和js

```js
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//js
import FastClick from 'fastclick'
FastClick.attach(document.body);

//css
import './assets/css/reset.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
```

然后去iconfont下载需要的图标

没有账号的注册一个，然后新建一个项目，选择资源管理菜单--->我的项目

右上图标新建一个项目

![image-20220904215528257](/Users/wx/Documents/gitee/vue-travel/md/assets/image-20220904215528257.png)

新建好后去下载需要的图标，这里是下载的大麦的

![image-20220904215600881](/Users/wx/Documents/gitee/vue-travel/md/assets/image-20220904215600881.png)

![image-20220904215628559](/Users/wx/Documents/gitee/vue-travel/md/assets/image-20220904215628559.png)

![image-20220904215647717](/Users/wx/Documents/gitee/vue-travel/md/assets/image-20220904215647717.png)

添加完到购物车，然后选择下载到项目

![image-20220904215721765](/Users/wx/Documents/gitee/vue-travel/md/assets/image-20220904215721765.png)

然后在我的项目里下载到本地

![image-20220904215757368](/Users/wx/Documents/gitee/vue-travel/md/assets/image-20220904215757368.png)

解压后只需要css和字体文件即可

![image-20220904215833375](/Users/wx/Documents/gitee/vue-travel/md/assets/image-20220904215833375.png)

启动项目测试，能不能正常运行

好了之后提交到gitee

```shell
git add .
git commit -m '20220904-add css and js'
git push
```

###### 四、项目目录结构搭建

![image-20220904220720778](/Users/wx/Documents/gitee/vue-travel/md/assets/image-20220904220720778.png)

在src目录的组件文件夹里创建几个文件夹，分别放置首页和城市页面

Index.js修改

```js
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
```

home-->pages-->Home.vue

```vue
<template>
    <div>
        <home-header />
    </div>
</template>
<script>
    import HomeHeader from './pages/Header'
    export default{
        components:{
            HomeHeader
        }
    }
</script>
<style>

</style>
```

Header.vue默认内容

###### 五、添加头部布局

添加Header.vue内容(图标引入在iconfont项目里复制图标代码即可)

```vue
<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont">
                &#xe624;
            </span>
        </div>
        <div class="header-search">
            <span class="iconfont">
                &#xe632;
            </span>
            输入城市/景点/游玩主题
        </div>
        <div class="header-right">
            昆明<span class="iconfont">&#xe600;</span>
        </div>

    </div>
</template>
<script>

</script>
<style scoped>
.header {
    width: 100%;
    line-height: .88rem;
    background: #00bcd4;
    font-size: .36rem;
    color: #fff;
    display: flex;
}

.header-left {
    width: .4rem;
    padding: 0 .2rem;
    text-align: center;
    font-weight: 700;
}

.header-search {
    flex: 1;
    background: #fff;
    height: .6rem;
    margin: .14rem 0;
    border-radius: .1rem;
    color:#e4e7ea;
    line-height: .6rem;
    font-size: .28rem;
    padding-left: .2rem;
}
.header-right{
    font-size: .28rem;
    padding:0 .2rem;
}
</style>
```

![image-20220905084959653](/Users/wx/Documents/gitee/vue-travel/md/assets/image-20220905084959653.png)

###### 六、styuls的全局css组件安装

---安装最新版注意：需要报错需要降版本---

```shell
cnpm install stylus@0.54.5  stylus-loader@3.0.2 --save
```

在src-->assets-->css文件夹内创建var.styl文件

```stylus
$bgColor = #00bcd4
$textColor = #fff
```

配置全局访问路径

修改build-->web pack.base.conf.js文件内容,添加全局css路径

```js
resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'css': resolve('src/assets/css')
    }
  },
```

在Header.vue文件中使用

```css
<style scoped lang="stylus">
@import '~css/var.styl'

.header {
    width: 100%;
    line-height: .88rem;
    background: $bgColor;
    font-size: .36rem;
    color: $textColor;
    display: flex;
}

.header-left {
    width: .4rem;
    padding: 0 .2rem;
    text-align: center;
    font-weight: 700;
}

.header-search {
    flex: 1;
    background: #fff;
    height: .6rem;
    margin: .14rem 0;
    border-radius: .1rem;
    color:#e4e7ea;
    line-height: .6rem;
    font-size: .28rem;
    padding-left: .2rem;
}
.header-right{
    font-size: .28rem;
    padding:0 .2rem;
}
</style>
```

接着修改main.js里全局引入的css代码

```js
//css
import 'css/reset.css'
import 'css/iconfont.css'
```

检查代码运行并推送到gitee

```shell
git add .
git commit -m '20220905add stylu to header'
git push
```

###### 七、添加Swiper.vue缩略图组件和引入

home-->pages-->Swiper.vue，并在Home.vue中引入Swiper.vue

接着在github里搜索vue-swiper组件下载并引入

```shell
cnpm install swiper@4.5.1 vue-awesome-swiper@3.1.3 --save
```

main.js里引入swiper

```
//swiper组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
```

接着编写Swiper.vue里的内容(图片需下载到assets/img文件夹下,没有自己创建)

样式里的 xxx >>> 是样式穿透

```vue
<template>
    <div class="header-swiper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item in swiperList" :key="item.id">
                <img :src="item.imgUrl" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script >
    export default{
        data(){
            return{
                swiperList:[
                    {
                        id:"01",
                        imgUrl:require("@/assets/img/swiper1.jpg")
                    },
                    {
                        id:"02",
                        imgUrl:require("@/assets/img/swiper2.jpg")
                    },
                    {
                        id:"03",
                        imgUrl:require("@/assets/img/swiper3.jpg")
                    }
                ],
                swiperOption:{
                    pagination:{
                        el:'.swiper-pagination'
                    },
                    loop:true
                }
            }
        }
    }
</script>

<style scoped>
    .header-swiper{
        width: 100%;
        height: 2rem;
    }
    .header-swiper img{
        width: 100%;
        height: 100px;
        /*height: 100%;*/
    }
    
   .header-swiper >>> .swiper-pagination-bullet-active{
        background:#fff;
    }
</style>

```

如图片大则需要自己微调

```vue
<style scoped>
    .header-swiper{
       background: #ccc;
       height: 0;
       /* padding-bottom: 26.67%; */
       padding-bottom: 55%;
    }
    .header-swiper img{
        width: 100%;
        height: 100%;
    }
    
   .header-swiper >>> .swiper-pagination-bullet-active{
        background:#fff;
    }
</style>
```

###### 八、修复swiper图片掉块和颜色填充

掉块问题，利用浏览器网络设置成3G后，可以看到文字顶上去了

![image-20220905151502787](/Users/wx/Documents/gitee/vue-travel/md/assets/image-20220905151502787.png)

![image-20220905151524696](/Users/wx/Documents/gitee/vue-travel/md/assets/image-20220905151524696.png)

修改Swiper.vue中样式css内容

```css
  .header-swiper{
       background: #ccc;
       height: 0;
       padding-bottom: 26.67%;
    }
```

然后测试效果，解决掉块

![image-20220905151801596](/Users/wx/Documents/gitee/vue-travel/md/assets/image-20220905151801596.png)

删除掉Home.vue里添加的123示例文字，然后上传到gitee

```shell
git add .
git commit -m '20220905 add swiper掉块解决'
git push
```

###### 九、首页栏目样式布局

创建一个Icon.vue组件

```vue
<template>
<div class="icons">

    <div class="icons-item" v-for="item in iconsList" :key="item.id">
        <img :src="item.imgUrl" />
        <p>{{item.title}}</p>
    </div>

</div>
</template>

<script>
export default {
    data() {
        return {
            iconsList: [{
                    id: "01",
                    imgUrl: require("@/assets/img/icon1.png"),
                    title: "景点门票",
                },
                {
                    id: "02",
                    imgUrl: require("@/assets/img/icon2.png"),
                    title: "必游榜单",
                },
                {
                    id: "03",
                    imgUrl: require("@/assets/img/icon3.png"),
                    title: "夏日玩水",
                }, {
                    id: "04",
                    imgUrl: require("@/assets/img/icon4.png"),
                    title: "主题乐园",
                }, {
                    id: "05",
                    imgUrl: require("@/assets/img/icon5.png"),
                    title: "动植物园",
                }, {
                    id: "06",
                    imgUrl: require("@/assets/img/icon6.png"),
                    title: "故宫",
                }, {
                    id: "07",
                    imgUrl: require("@/assets/img/icon7.png"),
                    title: "一日游",
                }, {
                    id: "08",
                    imgUrl: require("@/assets/img/icon8.png"),
                    title: "公园",
                }, {
                    id: "09",
                    imgUrl: require("@/assets/img/icon9.png"),
                    title: "游乐场",
                }, {
                    id: "10",
                    imgUrl: require("@/assets/img/icon10.png"),
                    title: "全部玩乐",
                },
            ]
        }
    }
}
</script>

<style scoped>
.icon {
    width: 100%;
    overflow: hidden;
}

.icons-item {
    width: 25%;
    padding-bottom: 25%;
    height: 0;
    float: left;
}

.icons-item img {
    width: 1.1rem;
    height: 1.1rem;
    display: block;
    margin: 0 auto;
    padding-top: .2rem;
}

.icons-item p {
    margin-top: .1rem;
    font-size: .28rem;
    text-align: center;
    color: #212121;
}
</style>
```

添加图片下载到文件夹并引入

页面展示效果

![image-20220907170309558](/Users/wx/Documents/gitee/vue-travel/md/assets/image-20220907170309558.png)

提交到gitee仓库

###### 十、栏目分页器逻辑判断

修改Icons.vue原来代码，加入computed计算属性，重新设计图标分二栏

```vue
<template>
<div class="icons">

    <swiper :options="swiperOption">
        <swiper-slide v-for="(item,key) in page" :key="key">
            <div class="icons-item" v-for="page in item" :key="page.id">
                <img :src="page.imgUrl" />
                <p>{{page.title}}</p>
            </div>
        </swiper-slide>
    </swiper>

</div>
</template>

<script>
export default {
    data() {
        return {
            swiperOption: {},
            iconsList: [{
                    id: "01",
                    imgUrl: require("@/assets/img/icon1.png"),
                    title: "景点门票",
                },
                {
                    id: "02",
                    imgUrl: require("@/assets/img/icon2.png"),
                    title: "必游榜单",
                },
                {
                    id: "03",
                    imgUrl: require("@/assets/img/icon3.png"),
                    title: "夏日玩水",
                }, {
                    id: "04",
                    imgUrl: require("@/assets/img/icon4.png"),
                    title: "主题乐园",
                }, {
                    id: "05",
                    imgUrl: require("@/assets/img/icon5.png"),
                    title: "动植物园",
                }, {
                    id: "06",
                    imgUrl: require("@/assets/img/icon6.png"),
                    title: "故宫",
                }, {
                    id: "07",
                    imgUrl: require("@/assets/img/icon7.png"),
                    title: "一日游",
                }, {
                    id: "08",
                    imgUrl: require("@/assets/img/icon8.png"),
                    title: "公园",
                }, {
                    id: "09",
                    imgUrl: require("@/assets/img/icon9.png"),
                    title: "游乐场",
                }, {
                    id: "10",
                    imgUrl: require("@/assets/img/icon10.png"),
                    title: "全部玩乐",
                },
            ]
        }
    }
    ,
    //计算属性
    computed: {
        page() {
            let pages = [];
            this.iconsList.forEach((item, index) => {
                let idx = Math.floor(index / 8);
                if (!pages[idx]) {
                    pages[idx] = [];
                }
                pages[idx].push(item);
            })
            return pages;
        }
    }
}
</script>

<style scoped>
.icon {
    width: 100%;
    overflow: hidden;
}

.icons-item {
    width: 25%;
    padding-bottom: 25%;
    height: 0;
    float: left;
}

.icons-item img {
    width: 1.1rem;
    height: 1.1rem;
    display: block;
    margin: 0 auto;
    padding-top: .2rem;
}

.icons-item p {
    margin-top: .1rem;
    font-size: .28rem;
    text-align: center;
    color: #212121;
}
</style>
```

展示的效果

![image-20220908084724199](/Users/wx/Documents/gitee/vue-travel/md/assets/image-20220908084724199.png)

调试好后提交代码到gitee

```shell
git add .
git commit -m '20220908 add computed Icons.vue icon'
git push
```

###### 十一、定位组件布局

新建Location.vue组件,并加入到Home.vue中

```vue
<template>
    <div>
        <home-header />
        <home-swiper />
        <home-icons />
        <home-location />
    </div>
</template>
<script>
    import HomeHeader from './pages/Header'
    import HomeSwiper from './pages/Swiper'
    import HomeIcons from './pages/Icons'
    import HomeLocation from './pages/Location'
    export default{
        components:{
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            HomeLocation
        }
    }
</script>
<style>

</style>
```

编辑Location.vue中内容

```vue
<template>
    <div class="location border-top">
        <div class="location-item border-right">
            <span class="iconfont">&#xe63f;</span>
            北京大兴
        </div>
        <div class="location-item">
            <span class="iconfont">&#xe844;</span>
            玩水季
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    .location{
        position: relative;
        display:flex;
    }
    .location>.location-item{
        flex:1;
        font-size: .28rem;
        text-align: center;
        /* background-color: red; */
        line-height: 1rem;
    }
</style>
```

添加到公共css----assets>css>reset.css内容中加入上和右边框内容

```css
/* http://meyerweb.com/eric/tools/css/reset/ */
/* v1.0 | 20080212 */

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, font, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td {
	margin: 0;
	padding: 0;
	border: 0;
	outline: 0;
	font-size: 100%;
	vertical-align: baseline;
	background: transparent;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

/* remember to define focus styles! */
:focus {
	outline: 0;
}

/* remember to highlight inserts somehow! */
ins {
	text-decoration: none;
}
del {
	text-decoration: line-through;
}

/* tables still need 'cellspacing="0"' in the markup */
table {
	border-collapse: collapse;
	border-spacing: 0;
}

html{
	font-size: 50px;
}

a{
	text-decoration: none;
}

.border-top::before{
	content: "";
	position: absolute;
	width: 100%;
	height: 1px;
	border-top: 1px solid #e0e0e0;
}
.border-right::before{
	content: "";
	position: absolute;
	width: 1px;
	height: 100%;
	border-right: 1px solid #e0e0e0;
	left: 50%;
}
```

页面展示效果

![image-20220908155839319](/Users/wx/Documents/gitee/vue-travel/md/assets/image-20220908155839319.png)

最后提交代码到gitee

```shell
git add .
git commit -m '20220908 add border to Location.vue'
git push
```

###### 十二、门票特卖组件布局

添加门票特卖组件Activity.vue

```vue
<template>
    <div class="activity border-top">
        <div class="activity-item border-right" v-for="item in iconList" :key="item.id">
            <img :src="item.imgUrl"/>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                iconList:[
                    {
                        id:"01",
                        imgUrl: require("@/assets/img/ticket1.png")
                    },
                    {
                        id:"02",
                        imgUrl: require("@/assets/img/ticket2.png")
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .activity{
        position: relative;
        display:flex;
        margin-top: .2rem;
        background-color: #fff;
    }
    .activity>.activity-item{
        flex:1;
        font-size: .28rem;
        text-align: center;
        /* background-color: red; */
        line-height: 1rem;
        height: 1.4rem;
    }
    .activity>.activity-item>img{
        width: 100%;
        height: 100%;
    }
</style>
```

修改Home.vue,加上背景颜色灰色做一个对比

```vue
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
```

修改对应的Location.vue和Icons.vue

```css
.location{
        position: relative;
        display:flex;
        background-color: #fff;
    }
```

```css
.icon {
    width: 100%;
    overflow: hidden;
    background-color: #fff;
}
```

![image-20220908163757278](/Users/wx/Documents/gitee/vue-travel/md/assets/image-20220908163757278.png)

提交代码到gitee

```shell
git add .
git commit -m '20220908 add ticket to Activity.vue'
git push
```

###### 十三、热门榜单布局

添加Hot.vue组件在pages文件夹里

添加Hot.vue组件注册到Home.vue里

编写Hot.vue内容

```vue
<template>
<div class="hot">
    <div class="hot-top">
        <img src="@/assets/img/hot.png" />
        <span class="hot-title-left">本周热门榜单</span>
        <span class="iconfont hot-title-right">全部榜单&#xe62d;</span>
    </div>

    <ul class="hot-list">
        <li class="hot-item" v-for="item in hotList" :key="item.id">
            <img :src="item.imgUrl" />
            <p>{{item.title}}</p>
            <p>
                <span class="hot-mark">￥{{item.mark}}</span>起
            </p>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    data() {
        return {
            hotList: [{
                id: "01",
                imgUrl: require('@/assets/img/list1.jpg'),
                title: "云南省博物馆",
                mark: 2.7
            }, {
                id: "02",
                imgUrl: require('@/assets/img/list2.jpg'),
                title: "云南民族村",
                mark: 79.0
            }, {
                id: "03",
                imgUrl: require('@/assets/img/list3.jpg'),
                title: "昆明融创海世界",
                mark: 180.0
            }, {
                id: "04",
                imgUrl: require('@/assets/img/list4.jpg'),
                title: "石林",
                mark: 0.4
            }, {
                id: "05",
                imgUrl: require('@/assets/img/list5.jpg'),
                title: "七彩云南欢乐世界",
                mark: 198
            }, {
                id: "06",
                imgUrl: require('@/assets/img/list6.jpg'),
                title: "云南野生动物园",
                mark: 100
            }, {
                id: "07",
                imgUrl: require('@/assets/img/list7.jpg'),
                title: "昆明西山龙门景区",
                mark: 75.0
            }, {
                id: "08",
                imgUrl: require('@/assets/img/list8.jpg'),
                title: "九乡风景名胜区",
                mark: 0.9
            }, {
                id: "09",
                imgUrl: require('@/assets/img/list9.jpg'),
                title: "滇池",
                mark: 89.0
            }, {
                id: "10",
                imgUrl: require('@/assets/img/list10.jpg'),
                title: "昆明动物园",
                mark: 20.0
            }, ]
        }
    }
}
</script>

<style scoped>
.hot {
    margin-top: .2rem;
    background-color: #fff;
    font-size: .28rem;
}

.hot-top {
    padding: .2rem;
}

.hot-top img {
    width: .3rem;
    height: .3rem;
}

.hot-title-left {
    font-size: .32rem;
    color: #212121;
}

.hot-title-right {
    position: absolute;
    right: .2rem;
    font-weight: 500;
    font-size: .28rem;
    color: #616161;
}

.hot-list {
    overflow-x: scroll;
    overflow-y: hidden;
    /* 强制不能换行 */
    white-space: nowrap;
    height: 3rem;
}

.hot-item {
    padding: 0 .2rem;
    width: 2rem;
    height: 2rem;
    display: inline-block;
}

.hot-item img {
    width: 100%;
    height: 100%;
}

.hot-item p {
    margin-top: .1rem;
    text-align: center;
}

.hot-item p .hot-mark {
    color: #ff8300;
    font-size: .32rem;
}
</style>
```

页面效果

![image-20220909093307221](/Users/wx/Documents/gitee/vue-travel/md/assets/image-20220909093307221.png)

###### 十四、解决文字溢出显示问题(文字超出范围显示...)

![image-20220909103742116](/Users/wx/Documents/gitee/vue-travel/md/assets/image-20220909103742116.png)

添加一个公共的common.styl编写溢出样式  assets>css文件夹下

```stylus
textOverflow()
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
```

编写Hot.vue内容

```vue
<template>
<div class="hot">
    <div class="hot-top">
        <img src="@/assets/img/hot.png" />
        <span class="hot-title-left">本周热门榜单</span>
        <span class="iconfont hot-title-right">全部榜单&#xe62d;</span>
    </div>

    <ul class="hot-list">
        <li class="hot-item" v-for="item in hotList" :key="item.id">
            <img :src="item.imgUrl" />
            <p>{{item.title}}</p>
            <p>
                <span class="hot-mark">￥{{item.mark}}</span>起
            </p>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    data() {
        return {
            hotList: [{
                id: "01",
                imgUrl: require('@/assets/img/list1.jpg'),
                title: "云南省博物馆",
                mark: 2.7
            }, {
                id: "02",
                imgUrl: require('@/assets/img/list2.jpg'),
                title: "云南民族村",
                mark: 79.0
            }, {
                id: "03",
                imgUrl: require('@/assets/img/list3.jpg'),
                title: "昆明融创海世界",
                mark: 180.0
            }, {
                id: "04",
                imgUrl: require('@/assets/img/list4.jpg'),
                title: "石林",
                mark: 0.4
            }, {
                id: "05",
                imgUrl: require('@/assets/img/list5.jpg'),
                title: "七彩云南欢乐世界",
                mark: 198
            }, {
                id: "06",
                imgUrl: require('@/assets/img/list6.jpg'),
                title: "云南野生动物园",
                mark: 100
            }, {
                id: "07",
                imgUrl: require('@/assets/img/list7.jpg'),
                title: "昆明西山龙门景区",
                mark: 75.0
            }, {
                id: "08",
                imgUrl: require('@/assets/img/list8.jpg'),
                title: "九乡风景名胜区",
                mark: 0.9
            }, {
                id: "09",
                imgUrl: require('@/assets/img/list9.jpg'),
                title: "滇池",
                mark: 89.0
            }, {
                id: "10",
                imgUrl: require('@/assets/img/list10.jpg'),
                title: "昆明动物园",
                mark: 20.0
            }, ]
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~css/common.styl';

.hot {
    margin-top: .2rem;
    background-color: #fff;
    font-size: .28rem;
}

.hot-top {
    padding: .2rem;
}

.hot-top img {
    width: .3rem;
    height: .3rem;
}

.hot-title-left {
    font-size: .32rem;
    color: #212121;
}

.hot-title-right {
    position: absolute;
    right: .2rem;
    font-weight: 500;
    font-size: .28rem;
    color: #616161;
}

.hot-list {
    overflow-x: scroll;
    overflow-y: hidden;
    /* 强制不能换行 */
    white-space: nowrap;
    height: 3rem;
}

.hot-item {
    padding: 0 .2rem;
    width: 2rem;
    height: 2rem;
    display: inline-block;
}

.hot-item img {
    width: 100%;
    height: 100%;
}

.hot-item p {
    margin-top: .1rem;
    text-align: center;
    textOverflow();
}

.hot-item p .hot-mark {
    color: #ff8300;
    font-size: .32rem;
}
</style>
```

修改原Icons.vue内容并添加common.styl文件导入

```vue
<template>
<div class="icons">

    <swiper :options="swiperOption">
        <swiper-slide v-for="(item,key) in page" :key="key">
            <div class="icons-item" v-for="page in item" :key="page.id">
                <img :src="page.imgUrl" />
                <p>{{page.title}}</p>
            </div>
        </swiper-slide>
    </swiper>

</div>
</template>

<script>
export default {
    data() {
        return {
            swiperOption: {},
            iconsList: [{
                    id: "01",
                    imgUrl: require("@/assets/img/icon1.png"),
                    title: "景点门票",
                },
                {
                    id: "02",
                    imgUrl: require("@/assets/img/icon2.png"),
                    title: "必游榜单",
                },
                {
                    id: "03",
                    imgUrl: require("@/assets/img/icon3.png"),
                    title: "夏日玩水",
                }, {
                    id: "04",
                    imgUrl: require("@/assets/img/icon4.png"),
                    title: "主题乐园",
                }, {
                    id: "05",
                    imgUrl: require("@/assets/img/icon5.png"),
                    title: "动植物园",
                }, {
                    id: "06",
                    imgUrl: require("@/assets/img/icon6.png"),
                    title: "故宫",
                }, {
                    id: "07",
                    imgUrl: require("@/assets/img/icon7.png"),
                    title: "一日游",
                }, {
                    id: "08",
                    imgUrl: require("@/assets/img/icon8.png"),
                    title: "公园",
                }, {
                    id: "09",
                    imgUrl: require("@/assets/img/icon9.png"),
                    title: "游乐场",
                }, {
                    id: "10",
                    imgUrl: require("@/assets/img/icon10.png"),
                    title: "全部玩乐",
                },
            ]
        }
    },
    //计算属性
    computed: {
        page() {
            let pages = [];
            this.iconsList.forEach((item, index) => {
                let idx = Math.floor(index / 8);
                if (!pages[idx]) {
                    pages[idx] = [];
                }
                pages[idx].push(item);
            })
            return pages;
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~css/common.styl';

.icon {
    width: 100%;
    overflow: hidden;
    background-color: #fff;
}

.icons-item {
    width: 25%;
    padding-bottom: 25%;
    height: 0;
    float: left;
}

.icons-item img {
    width: 1.1rem;
    height: 1.1rem;
    display: block;
    margin: 0 auto;
    padding-top: .2rem;
}

.icons-item p {
    margin-top: .1rem;
    font-size: .28rem;
    text-align: center;
    color: #212121;
    textOverflow();
}
</style>
```

提交代码到gitee

```shell
git add .
git commit -m '20220909 add font-overflow css to Hot.vue'
git push
```

###### 十五、猜你喜欢组件样式布局

创建一个Like.vue并加入到Home.vue中

编辑Like.vue组件中内容

```vue
<template>
<div class="like">
    <div class="like-top">
        <img src="@/assets/img/like.png" />
        猜你喜欢
    </div>
    <ul>
        <li class="like-item border-bottom" v-for="item in likeList" :key="item.id">
            <div class="like-img">
                <img :src="item.imgUrl" />
            </div>
            <div class="like-text">
                <div class="like-title">{{item.title}}</div>
                <div class="like-message iconfont">&#xe62f;&#xe62f;&#xe62f;&#xe62f;&#xe62f;&nbsp;&nbsp;&nbsp;&nbsp;{{item.msg}}</div>
                <div class="like-map">
                    <span class="like-mark">￥<b>{{item.price}}</b></span>起
                    <span class="like-item-map">{{item.map}}</span>
                </div>
            </div>
        </li>

    </ul>
</div>
</template>

<script>
export default {
    data() {
        return {
            likeList: [{
                id: "01",
                imgUrl: require("@/assets/img/like1.jpg"),
                title: "梦幻联邦乐园",
                msg: "120条评论",
                price: "280",
                map: "西山区"
            }, {
                id: "02",
                imgUrl: require("@/assets/img/like2.jpg"),
                title: "云南民族村",
                msg: "29246条评论",
                price: "79",
                map: "西山区"
            }, {
                id: "03",
                imgUrl: require("@/assets/img/like3.jpg"),
                title: "七彩云南欢乐世界",
                msg: "23457条评论",
                price: "198",
                map: "晋宁县"
            }, {
                id: "04",
                imgUrl: require("@/assets/img/like4.jpg"),
                title: "七彩云南古滇精品湿地",
                msg: "868条评论",
                price: "185",
                map: "晋宁县"
            }, {
                id: "05",
                imgUrl: require("@/assets/img/like5.jpg"),
                title: "七彩云南古滇温泉山庄",
                msg: "1253条评论",
                price: "185",
                map: "晋宁县"
            }, {
                id: "06",
                imgUrl: require("@/assets/img/like6.jpg"),
                title: "昆明西山龙门景区",
                msg: "5434条评论",
                price: "75",
                map: "西山区"
            }, {
                id: "07",
                imgUrl: require("@/assets/img/like7.jpg"),
                title: "石林",
                msg: "18074条评论",
                price: "0.39",
                map: "石林彝族白族自治县"
            }]
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~css/common.styl'

.like {
    margin-top: .2rem;
    font-size: .28rem;
    background-color: #fff;
    padding: 0 .2rem;
}

.like-top {
    padding: .2rem 0;
    font-size: .32rem;
}

.like-top img {
    width: .3rem;
    height: .3rem;
}

.like-item {
    position: relative;
    padding: .2rem 0;
    overflow: hidden;
}

.like-img {
    float: left;
    overflow: hidden;
}

.like-img img {
    width: 2rem;
    height: 2rem;
}

.like-text {
    overflow: hidden;
    padding-left: .22rem;
    
}

.like-title {
    font-size: .36rem;
    color: #212121;
    margin-top: .4rem;
}

.like-message {
    margin-top: .3rem;
    color: #616161;
    font-size: .24rem;
}

.like-map {
    margin-top: .3rem;
    color: #616161;
    position: relative;
}

.like-mark {
    color: #ff8300;
}

.like-mark b {
    font-size: .4rem;
}

// 加入微调文字
.like-item-map {
    position: absolute;
    right: 0;
    font-size: .28rem;
    top: .1rem;
    width:1rem;
    textOverflow();
}
</style>
```

页面展示效果

![image-20220910091054742](/Users/wx/Documents/gitee/vue-travel/md/assets/image-20220910091054742.png)

提交代码到gitee

```shell
git add. 
git commit -m '20220910 add Like.vue'
git push

```

###### 十六、周末去哪儿组件布局

添加Vacation.vue组件，并加入到Home.vue中

编写Vaction.vue组件内容

```vue
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
```

页面展示效果

![image-20220910100001873](/Users/wx/Documents/gitee/vue-travel/md/assets/image-20220910100001873.png)

提交代码到gitee

```shell
git add .
git commit -m '20220910 add Vacation.vue'
git push
```

###### 十七、把数据mock以及axios请求

首先先在static文件夹下创建一个mock文件夹,接着创建一个dataHome.json文件,把五个用到数据的vue中data内容剪切到dataHome.json文件中

```json
{
    "data": [
        {
            "city": "昆明",
            "swiperList": [
                {
                    "id": "01",
                    "imgUrl": "http://localhost:8300/static/mock/img/swiper1.jpg"
                },
                {
                    "id": "02",
                    "imgUrl": "http://localhost:8300/static/mock/img/swiper2.jpg"
                },
                {
                    "id": "03",
                    "imgUrl": "http://localhost:8300/static/mock/img/swiper3.jpg"
                }
            ],
            "iconsList": [
                {
                    "id": "01",
                    "imgUrl": "http://localhost:8300/static/mock/img/icon1.png",
                    "title": "景点门票"
                },
                {
                    "id": "02",
                    "imgUrl": "http://localhost:8300/static/mock/img/icon2.png",
                    "title": "必游榜单"
                },
                {
                    "id": "03",
                    "imgUrl": "http://localhost:8300/static/mock/img/icon3.png",
                    "title": "夏日玩水"
                },
                {
                    "id": "04",
                    "imgUrl": "http://localhost:8300/static/mock/img/icon4.png",
                    "title": "主题乐园"
                },
                {
                    "id": "05",
                    "imgUrl": "http://localhost:8300/static/mock/img/icon5.png",
                    "title": "动植物园"
                },
                {
                    "id": "06",
                    "imgUrl": "http://localhost:8300/static/mock/img/icon6.png",
                    "title": "故宫"
                },
                {
                    "id": "07",
                    "imgUrl": "http://localhost:8300/static/mock/img/icon7.png",
                    "title": "一日游"
                },
                {
                    "id": "08",
                    "imgUrl": "http://localhost:8300/static/mock/img/icon8.png",
                    "title": "公园"
                },
                {
                    "id": "09",
                    "imgUrl": "http://localhost:8300/static/mock/img/icon9.png",
                    "title": "游乐场"
                },
                {
                    "id": "10",
                    "imgUrl": "http://localhost:8300/static/mock/img/icon10.png",
                    "title": "全部玩乐"
                }
            ],
            "hotList": [
                {
                    "id": "01",
                    "imgUrl": "http://localhost:8300/static/mock/img/list1.jpg",
                    "title": "云南省博物馆",
                    "mark": 2.7
                },
                {
                    "id": "02",
                    "imgUrl": "http://localhost:8300/static/mock/img/list2.jpg",
                    "title": "云南民族村",
                    "mark": 79.0
                },
                {
                    "id": "03",
                    "imgUrl": "http://localhost:8300/static/mock/img/list3.jpg",
                    "title": "昆明融创海世界",
                    "mark": 180.0
                },
                {
                    "id": "04",
                    "imgUrl": "http://localhost:8300/static/mock/img/list4.jpg",
                    "title": "石林",
                    "mark": 0.4
                },
                {
                    "id": "05",
                    "imgUrl": "http://localhost:8300/static/mock/img/list5.jpg",
                    "title": "七彩云南欢乐世界",
                    "mark": 198
                },
                {
                    "id": "06",
                    "imgUrl": "http://localhost:8300/static/mock/img/list6.jpg",
                    "title": "云南野生动物园",
                    "mark": 100
                },
                {
                    "id": "07",
                    "imgUrl": "http://localhost:8300/static/mock/img/list7.jpg",
                    "title": "昆明西山龙门景区",
                    "mark": 75.0
                },
                {
                    "id": "08",
                    "imgUrl": "http://localhost:8300/static/mock/img/list8.jpg",
                    "title": "九乡风景名胜区",
                    "mark": 0.9
                },
                {
                    "id": "09",
                    "imgUrl": "http://localhost:8300/static/mock/img/list9.jpg",
                    "title": "滇池",
                    "mark": 89.0
                },
                {
                    "id": "10",
                    "imgUrl": "http://localhost:8300/static/mock/img/list10.jpg",
                    "title": "昆明动物园",
                    "mark": 20.0
                }
            ],
            "likeList": [
                {
                    "id": "01",
                    "imgUrl": "http://localhost:8300/static/mock/img/like1.jpg",
                    "title": "梦幻联邦乐园",
                    "msg": "120",
                    "price": "280",
                    "map": "西山区"
                },
                {
                    "id": "02",
                    "imgUrl": "http://localhost:8300/static/mock/img/like2.jpg",
                    "title": "云南民族村",
                    "msg": "29246",
                    "price": "79",
                    "map": "西山区"
                },
                {
                    "id": "03",
                    "imgUrl": "http://localhost:8300/static/mock/img/like3.jpg",
                    "title": "七彩云南欢乐世界",
                    "msg": "23457",
                    "price": "198",
                    "map": "晋宁县"
                },
                {
                    "id": "04",
                    "imgUrl": "http://localhost:8300/static/mock/img/like4.jpg",
                    "title": "七彩云南古滇精品湿地",
                    "msg": "868",
                    "price": "185",
                    "map": "晋宁县"
                },
                {
                    "id": "05",
                    "imgUrl": "http://localhost:8300/static/mock/img/like5.jpg",
                    "title": "七彩云南古滇温泉山庄",
                    "msg": "1253",
                    "price": "185",
                    "map": "晋宁县"
                },
                {
                    "id": "06",
                    "imgUrl": "http://localhost:8300/static/mock/img/like6.jpg",
                    "title": "昆明西山龙门景区",
                    "msg": "5434",
                    "price": "75",
                    "map": "西山区"
                },
                {
                    "id": "07",
                    "imgUrl": "http://localhost:8300/static/mock/img/like7.jpg",
                    "title": "石林",
                    "msg": "18074",
                    "price": "0.39",
                    "map": "石林彝族白族自治县"
                }
            ],
            "vacationList": [
                {
                    "id": "01",
                    "imgUrl": "http://localhost:8300/static/mock/img/where1.jpg",
                    "title": "昆明必打卡",
                    "msg": "走进春城，感受彩云之南"
                },
                {
                    "id": "02",
                    "imgUrl": "http://localhost:8300/static/mock/img/where2.jpg",
                    "title": "带娃出行",
                    "msg": "宝贝们好喜欢这里哦"
                },
                {
                    "id": "03",
                    "imgUrl": "http://localhost:8300/static/mock/img/where3.jpg",
                    "title": "本地人在这玩",
                    "msg": "四季如春的城市，浪漫色彩浓厚的城市，多民族融合的城市"
                },
                {
                    "id": "04",
                    "imgUrl": "http://localhost:8300/static/mock/img/where4.jpg",
                    "title": "昆明公园游",
                    "msg": "到昆明，游公园，跑跑步"
                },
                {
                    "id": "05",
                    "imgUrl": "http://localhost:8300/static/mock/img/where5.jpg",
                    "title": "买花一日游",
                    "msg": "带不走的云彩，带走的花儿"
                }
            ]
        },
        {
            "city": "北京"
        }
    ]
}
```

接着安装axios，已安装的忽略这步骤

```shell
npm install axios --save
```

在main.js主js中加入axios (放在swiper组件引入代码下)

```
//axios
import axios from 'axios'
Vue.prototype.$http = axios
```

然后在Home.vue父组件中加入

```vue
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
```

接着每个子组件用props接收自己对应List,这需要五个组件对应接收

```vue
<script >
    export default{
       props:['swiperList'],
        data(){
            return{
                swiperOption:{
                    pagination:{
                        el:'.swiper-pagination'
                    },
                    loop:true
                }
            }
        }
    }
</script>
```

接着把img文件夹移动到static--mock文件夹下

最近提交一下代码到gitee

```shell
git add .
git commit -m '20220910 add dataHome img Change'
git push
```

###### 十八、处理接口路径以及设置代理

Activity.vue有引入的@符号报错，需要加入到dataHome.json文件中

```json
,
            "activityList":[
                {
                    "id":"01",
                    "imgUrl": "api/img/ticket1.png"
                },
                {
                    "id":"02",
                    "imgUrl": "api/img/ticket2.png"
                }
            ]
```

然后在Home.vue中配置好

```vue
<template>
<div class="home">
    <home-header />
    <home-swiper :swiperList='swiperList'/>
    <home-icons :iconsList='iconsList'/>
    <home-location />
    <home-activity :activityList='activityList'/>
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
            activityList:[],
        }
    },
    mounted() {


        this.$http.get("/api/dataHome.json")
            .then((res) => {
                const data = res.data.data[0];
                this.swiperList = data.swiperList;
                this.hotList = data.hotList;
                this.iconsList = data.iconsList;
                this.likeList = data.likeList;
                this.vacationList = data.vacationList;
                this.activityList=data.activityList;
            })
    }
}
</script>

<style scoped>
.home {
    background-color: #f5f5f5;
}
</style>
```

Activity.vue中修改

```vue
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
```

--在主配置文件config文件夹中配置index.js--

```js
proxyTable: {
      '/api':{
        target:"http://localhost:8300",
        pathRewrite:{
          '^/api':"/static/mock/"
        }
      }
    },
```

```然后重启项目调试并测试```

```shell
npm run dev
```

最后页面能展示图片

![image-20220910143822513](/Users/wx/Documents/gitee/vue-travel/md/assets/image-20220910143822513.png)

提交代码到gitee

```shell
git add .
git commit -m '20220910 add set proxy'
git push
```

###### 十九、创建城市组件和样式布局(另一个城市列表父模块)

创建City.vue组件---components-->city下

```vue
<template>
    <div>
        <city-header />
    </div>
</template>

<script>
    import CityHeader from './pages/Header'
    export default{
        components:{
            CityHeader
        }
    }
</script>

<style scoped>

</style>
```

注册到路由组件 router-->index.js

```vue
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import City from '@/components/city/City'

Vue.use(Router)

export default new Router({
  mode: 'history', // 去掉#，需要路由模式改为history
  //base: '/dist/', // 这个配置也很重要，否则会出现页面空白情况
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/city',
      name:'City',
      component:City
    }
  ]
})
```

创建子组件Header.vue  city-->pages-->Header.vue(可原用原来主页的Header.vue,然后修改一部分)

```vue
<template>
<!-- index-header -->
<div class="header">
    <div class="header-left" @click="toHome">
        <span class="iconfont">
            &#xe624;
        </span>
    </div>

    <div class="header-title">
        城市选择
    </div>
</div>
</template>

<script>
export default {
    methods: {
        toHome() {
            this.$router.push("/")
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~css/var.styl'

.header {
    width: 100%;
    line-height: .88rem;
    background: $bgColor;
    font-size: .32rem;
    color: $textColor;
    position: relative;
}

.header-left {
    width: .4rem;
    padding: 0 .2rem;
    text-align: center;
    font-weight: 700;
    position: absolute;
}

.header-title {
    text-align: center;
}
</style>
```

![image-20220910164521473](/Users/wx/Documents/gitee/vue-travel/md/assets/image-20220910164521473.png)

提交代码到gitee仓库

```shell
git add .
git commit -m '20220910 create City.vue and Header.vue'
git push
```

###### 二十、热门城市组件样式布局

创建Hot.vue组件到pages

注册到父组件City.vue中

编写Hot.vue组件内容

```vue
<template>
<div class="hot">
    <div class="hot-title">热门城市</div>
    <ul class="hot-list">
        <li class="hot-item" v-for="(item,index) in hotList" :key="index">
            {{item.name}}
        </li>
    </ul>
</div>
</template>

<script>
export default {
    data() {
        return {
            hotList: [{
                name: "北京"
            }, {
                name: "上海"
            }, {
                name: "三亚"
            }, {
                name: "丽江"
            }, {
                name: "杭州"
            }, {
                name: "广州"
            }, {
                name: "成都"
            }, {
                name: "深圳"
            }, {
                name: "苏州"
            }, {
                name: "桂林"
            }, {
                name: "西安"
            }, {
                name: "厦门"
            }]
        }
    }
}
</script>

<style scoped>
.hot-title {
    font-size: .26rem;
    color: #212121;
    padding: .3rem
}

.hot-list {
    position: relative;
    color: #212121;
    background-color: #fff;
    font-size: .28rem;
    overflow: hidden;
}

.hot-list ::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 33.33333%;
    left: 33.33333%;
    border-left: .02rem solid #ddd;
    border-right: .02rem solid #ddd;
}

.hot-item {
    text-align: center;
    height: .9rem;
    line-height: .9rem;
    float: left;
    width: 33.33333%;
    border-bottom: .02rem solid #ddd;
}
</style>
```

![image-20220910171047559](/Users/wx/Documents/gitee/vue-travel/md/assets/image-20220910171047559.png)

提交到gitee仓库

```shell
git add .
git commit -m '20220910 add city-hot vue'
git push
```

###### 二十一、字母排序组件样式布局

添加一个Sort.vue组件到pages文件夹下

编写Sort.vue内容

```vue
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
```

同时修改一下原来Header.vue中的部分css

```vue
.hot-title {
    font-size: .26rem;
    color: #212121;
    padding: .2rem .3rem;
}
```

页面效果

###### ![image-20220910185732868](/Users/wx/Documents/gitee/vue-travel/md/assets/image-20220910185732868.png)

提交到gitee

```shell
git add .
git commit -m '20220910 add Sort.vue to City'
git push
```



###### 二十二、城市首字母组件及布局

创建List.vue并注册到父组件City.vue

编写List.vue中内容

```vue
<template>
<div class="list">
    <div>
        <div class="list-title">A</div>
        <ul class="list-msg">
            <li class="list-item">
                阿坝藏族羌族自治区
            </li>
            <li class="list-item">
                阿克苏地区
            </li>
            <li class="list-item">
                阿拉尔
            </li>
            <li class="list-item">
                阿拉善盟
            </li>
            <li class="list-item">
                阿勒泰
            </li>
            <li class="list-item">
                阿里
            </li>
            <li class="list-item">
                安康
            </li>
            <li class="list-item">
                安庆
            </li>
            <li class="list-item">
                安顺
            </li>
            <li class="list-item">
                安阳
            </li>
            <li class="list-item">
                鞍山
            </li>
            <li class="list-item">
                澳门
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import '~css/common.styl'

.list-title {
    font-size: .24rem;
    color: #212121;
    padding: .2rem .3rem;
}

.list-msg {
    position: relative;
    background-color: #fff;
    overflow: hidden;
}

.list-msg ::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 25%;
    left: 25%;
    border-left: .02rem solid #ddd;
    border-right: .02rem solid #ddd;
}

.list-msg ::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 25%;
    left: 75%;
    border-left: .02rem solid #ddd;
}

.list-item {
    font-size: .28rem;
    text-align: center;
    line-height: .9rem;
    float: left;
    width: 25%;
    border-bottom: .02rem solid #ddd;
    textOverflow();
}
</style>
```

页面展示效果

![image-20220910192900781](/Users/wx/Documents/gitee/vue-travel/md/assets/image-20220910192900781.png)

提交代码到gitee

```shell
git add .
git commit -m '20220910 add List.vue to City.vue'
git push
```

###### 二十三、数据渲染

在mock文件夹里创建city.json文件

```json
{
    "cityList": [
        {
            "id": "1",
            "title": "A",
            "lists": [
                "阿坝",
                "阿拉善",
                "阿里",
                "安康",
                "安庆",
                "鞍山",
                "安顺",
                "安阳",
                "澳门"
            ]
        },
        {
            "id": "2",
            "title": "B",
            "lists": [
                "北京",
                "白银",
                "保定",
                "宝鸡",
                "保山",
                "包头",
                "巴中",
                "北海",
                "蚌埠",
                "本溪",
                "毕节",
                "滨州",
                "百色",
                "亳州"
            ]
        },
        {
            "id": "3",
            "title": "C",
            "lists": [
                "重庆",
                "成都",
                "长沙",
                "长春",
                "沧州",
                "常德",
                "昌都",
                "长治",
                "常州",
                "巢湖",
                "潮州",
                "承德",
                "郴州",
                "赤峰",
                "池州",
                "崇左",
                "楚雄",
                "滁州",
                "朝阳"
            ]
        },
        {
            "id": "4",
            "title": "D",
            "lists": [
                "大连",
                "东莞",
                "大理",
                "丹东",
                "大庆",
                "大同",
                "大兴安岭",
                "德宏",
                "德阳",
                "德州",
                "定西",
                "迪庆",
                "东营"
            ]
        },
        {
            "id": "5",
            "title": "E",
            "lists": [
                "鄂尔多斯",
                "恩施",
                "鄂州"
            ]
        },
        {
            "id": "6",
            "title": "F",
            "lists": [
                "福州",
                "防城港",
                "佛山",
                "抚顺",
                "抚州",
                "阜新",
                "阜阳"
            ]
        },
        {
            "id": "7",
            "title": "G",
            "lists": [
                "广州",
                "桂林",
                "贵阳",
                "甘南",
                "赣州",
                "甘孜",
                "广安",
                "广元",
                "贵港",
                "果洛"
            ]
        },
        {
            "id": "8",
            "title": "H",
            "lists": [
                "杭州",
                "哈尔滨",
                "合肥",
                "海口",
                "呼和浩特",
                "海北",
                "海东",
                "海南",
                "海西",
                "邯郸",
                "汉中",
                "鹤壁",
                "河池",
                "鹤岗",
                "黑河",
                "衡水",
                "衡阳",
                "河源",
                "贺州",
                "红河",
                "淮安",
                "淮北",
                "怀化",
                "淮南",
                "黄冈",
                "黄南",
                "黄山",
                "黄石",
                "惠州",
                "葫芦岛",
                "呼伦贝尔",
                "湖州",
                "菏泽"
            ]
        },
        {
            "id": "9",
            "title": "J",
            "lists": [
                "济南",
                "佳木斯",
                "吉安",
                "江门",
                "焦作",
                "嘉兴",
                "嘉峪关",
                "揭阳",
                "吉林",
                "金昌",
                "晋城",
                "景德镇",
                "荆门",
                "荆州",
                "金华",
                "济宁",
                "晋中",
                "锦州",
                "九江",
                "酒泉"
            ]
        },
        {
            "id": "10",
            "title": "K",
            "lists": [
                "昆明",
                "开封"
            ]
        },
        {
            "id": "11",
            "title": "L",
            "lists": [
                "兰州",
                "拉萨",
                "来宾",
                "莱芜",
                "廊坊",
                "乐山",
                "凉山",
                "连云港",
                "聊城",
                "辽阳",
                "辽源",
                "丽江",
                "临沧",
                "临汾",
                "临夏",
                "临沂",
                "林芝",
                "丽水",
                "六安",
                "六盘水",
                "柳州",
                "陇南",
                "龙岩",
                "娄底",
                "漯河",
                "洛阳",
                "泸州",
                "吕梁"
            ]
        },
        {
            "id": "12",
            "title": "M",
            "lists": [
                "马鞍山",
                "茂名",
                "眉山",
                "梅州",
                "绵阳",
                "牡丹江"
            ]
        },
        {
            "id": "13",
            "title": "N",
            "lists": [
                "南京",
                "南昌",
                "南宁",
                "宁波",
                "南充",
                "南平",
                "南通",
                "南阳",
                "那曲",
                "内江",
                "宁德",
                "怒江"
            ]
        },
        {
            "id": "14",
            "title": "P",
            "lists": [
                "盘锦",
                "攀枝花",
                "平顶山",
                "平凉",
                "萍乡",
                "莆田",
                "濮阳"
            ]
        },
        {
            "id": "15",
            "title": "Q",
            "lists": [
                "青岛",
                "黔东南",
                "黔南",
                "黔西南",
                "庆阳",
                "清远",
                "秦皇岛",
                "钦州",
                "齐齐哈尔",
                "泉州",
                "曲靖",
                "衢州"
            ]
        },
        {
            "id": "16",
            "title": "R",
            "lists": [
                "日喀则",
                "日照"
            ]
        },
        {
            "id": "17",
            "title": "S",
            "lists": [
                "上海",
                "深圳",
                "苏州",
                "沈阳",
                "石家庄",
                "三门峡",
                "三明",
                "三亚",
                "商洛",
                "商丘",
                "上饶",
                "山南",
                "汕头",
                "汕尾",
                "韶关",
                "绍兴",
                "邵阳",
                "十堰",
                "朔州",
                "四平",
                "绥化",
                "遂宁",
                "随州",
                "宿迁",
                "宿州"
            ]
        },
        {
            "id": "18",
            "title": "T",
            "lists": [
                "天津",
                "太原",
                "泰安",
                "泰州",
                "台州",
                "唐山",
                "天水",
                "铁岭",
                "铜川",
                "通化",
                "通辽",
                "铜陵",
                "铜仁",
                "台湾"
            ]
        },
        {
            "id": "19",
            "title": "W",
            "lists": [
                "武汉",
                "乌鲁木齐",
                "无锡",
                "威海",
                "潍坊",
                "文山",
                "温州",
                "乌海",
                "芜湖",
                "乌兰察布",
                "武威",
                "梧州"
            ]
        },
        {
            "id": "20",
            "title": "X",
            "lists": [
                "厦门",
                "西安",
                "西宁",
                "襄樊",
                "湘潭",
                "湘西",
                "咸宁",
                "咸阳",
                "孝感",
                "邢台",
                "新乡",
                "信阳",
                "新余",
                "忻州",
                "西双版纳",
                "宣城",
                "许昌",
                "徐州",
                "香港",
                "锡林郭勒",
                "兴安"
            ]
        },
        {
            "id": "21",
            "title": "Y",
            "lists": [
                "银川",
                "雅安",
                "延安",
                "延边",
                "盐城",
                "阳江",
                "阳泉",
                "扬州",
                "烟台",
                "宜宾",
                "宜昌",
                "宜春",
                "营口",
                "益阳",
                "永州",
                "岳阳",
                "榆林",
                "运城",
                "云浮",
                "玉树",
                "玉溪",
                "玉林",
                "鹰潭"
            ]
        },
        {
            "id": "22",
            "title": "Z",
            "lists": [
                "杂多县",
                "赞皇县",
                "枣强县",
                "枣阳市",
                "枣庄",
                "泽库县",
                "增城市",
                "曾都区",
                "泽普县",
                "泽州县",
                "札达县",
                "扎赉特旗",
                "扎兰屯市",
                "扎鲁特旗",
                "扎囊县",
                "张北县",
                "张店区",
                "章贡区",
                "张家港",
                "张家界",
                "张家口",
                "漳平市",
                "漳浦县",
                "章丘市",
                "樟树市",
                "张湾区",
                "彰武县",
                "漳县",
                "张掖",
                "漳州",
                "长子县",
                "湛河区",
                "湛江",
                "站前区",
                "沾益县",
                "诏安县",
                "召陵区",
                "昭平县",
                "肇庆",
                "昭通",
                "赵县",
                "昭阳区",
                "招远市",
                "肇源县",
                "肇州县",
                "柞水县",
                "柘城县",
                "浙江",
                "镇安县",
                "振安区",
                "镇巴县",
                "正安县",
                "正定县",
                "正定新区",
                "正蓝旗",
                "正宁县",
                "蒸湘区",
                "正镶白旗",
                "正阳县",
                "郑州",
                "镇海区",
                "镇江",
                "浈江区",
                "镇康县",
                "镇赉县",
                "镇平县",
                "振兴区",
                "镇雄县",
                "镇原县",
                "志丹县",
                "治多县",
                "芝罘区",
                "枝江市",
                "芷江侗族自治县",
                "织金县",
                "中方县",
                "中江县",
                "钟楼区",
                "中牟县",
                "中宁县",
                "中山",
                "中山区",
                "钟山区",
                "钟山县",
                "中卫",
                "钟祥市",
                "中阳县",
                "中原区",
                "周村区",
                "周口",
                "周宁县",
                "舟曲县",
                "舟山",
                "周至县",
                "庄河市",
                "诸城市",
                "珠海",
                "珠晖区",
                "诸暨市",
                "驻马店",
                "准格尔旗",
                "涿鹿县",
                "卓尼",
                "涿州市",
                "卓资县",
                "珠山区",
                "竹山县",
                "竹溪县",
                "株洲",
                "株洲县",
                "淄博",
                "子长县",
                "淄川区",
                "自贡",
                "秭归县",
                "紫金县",
                "自流井区",
                "资溪县",
                "资兴市",
                "资阳"
            ]
        }
    ],
    "hotCityList": [
        {
            "id": "01",
            "cityName": "北京"
        },
        {
            "id": "02",
            "cityName": "上海"
        },
        {
            "id": "03",
            "cityName": "三亚"
        },
        {
            "id": "04",
            "cityName": "香港"
        },
        {
            "id": "05",
            "cityName": "杭州"
        },
        {
            "id": "06",
            "cityName": "广州"
        },
        {
            "id": "07",
            "cityName": "成都"
        },
        {
            "id": "08",
            "cityName": "深圳"
        },
        {
            "id": "09",
            "cityName": "苏州"
        },
        {
            "id": "10",
            "cityName": "桂林"
        },
        {
            "id": "11",
            "cityName": "西安"
        },
        {
            "id": "12",
            "cityName": "厦门"
        }
    ]
}
```

然后在City.vue父组件里请求数据

```vue
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
```

在Hot.vue和List.vue里props接收并v-for迭代

```vue
<template>
<div class="hot">
    <div class="hot-title">热门城市</div>
    <ul class="hot-list">
        <li class="hot-item" v-for="item in hotList" :key="item.id">
            {{item.cityName}}
        </li>
    </ul>
</div>
</template>

<script>
export default {
    props:['hotList'],
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>
.hot-title {
    font-size: .26rem;
    color: #212121;
    padding: .2rem .3rem;
}

.hot-list {
    position: relative;
    color: #212121;
    background-color: #fff;
    font-size: .28rem;
    overflow: hidden;
}

.hot-list ::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 33.33333%;
    left: 33.33333%;
    border-left: .02rem solid #ddd;
    border-right: .02rem solid #ddd;
}

.hot-item {
    text-align: center;
    height: .9rem;
    line-height: .9rem;
    float: left;
    width: 33.33333%;
    border-bottom: .02rem solid #ddd;
}
</style>
```

```vue
<template>
<div class="list">
    <div v-for="pages in cityList" :key="pages.id">
        <div class="list-title">{{pages.title}}</div>
        <ul class="list-msg" >
            <li class="list-item" v-for="item,index in pages.lists" :key="index">
                {{item}}
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    props: ['cityList'],
}
</script>

<style lang="stylus" scoped>
@import '~css/common.styl'

.list-title {
    font-size: .24rem;
    color: #212121;
    padding: .2rem .3rem;
}

.list-msg {
    position: relative;
    background-color: #fff;
    overflow: hidden;
}

.list-msg ::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 25%;
    left: 25%;
    border-left: .02rem solid #ddd;
    border-right: .02rem solid #ddd;
}

.list-msg ::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 25%;
    left: 75%;
    border-left: .02rem solid #ddd;
}

.list-item {
    font-size: .28rem;
    text-align: center;
    line-height: .9rem;
    float: left;
    width: 25%;
    border-bottom: .02rem solid #ddd;
    textOverflow();
}
</style>
```

页面数据展示

![image-20220910205429881](/Users/wx/Documents/gitee/vue-travel/md/assets/image-20220910205429881.png)

提交到gitee

```shell
git add .
git commit -m '20220910 add city data'
git push
```

###### 二十四、页面滑动插件scroll的使用

把city文件夹下的Hot.vue,Sort.vue内容移入到List.vue中

同时在static-->mock-->city.json里加入原sort.vue中静态数据

```json
{
    "cityList": [
        {
            "id": "1",
            "title": "A",
            "lists": [
                "阿坝",
                "阿拉善",
                "阿里",
                "安康",
                "安庆",
                "鞍山",
                "安顺",
                "安阳",
                "澳门"
            ]
        },
        {
            "id": "2",
            "title": "B",
            "lists": [
                "北京",
                "白银",
                "保定",
                "宝鸡",
                "保山",
                "包头",
                "巴中",
                "北海",
                "蚌埠",
                "本溪",
                "毕节",
                "滨州",
                "百色",
                "亳州"
            ]
        },
        {
            "id": "3",
            "title": "C",
            "lists": [
                "重庆",
                "成都",
                "长沙",
                "长春",
                "沧州",
                "常德",
                "昌都",
                "长治",
                "常州",
                "巢湖",
                "潮州",
                "承德",
                "郴州",
                "赤峰",
                "池州",
                "崇左",
                "楚雄",
                "滁州",
                "朝阳"
            ]
        },
        {
            "id": "4",
            "title": "D",
            "lists": [
                "大连",
                "东莞",
                "大理",
                "丹东",
                "大庆",
                "大同",
                "大兴安岭",
                "德宏",
                "德阳",
                "德州",
                "定西",
                "迪庆",
                "东营"
            ]
        },
        {
            "id": "5",
            "title": "E",
            "lists": [
                "鄂尔多斯",
                "恩施",
                "鄂州"
            ]
        },
        {
            "id": "6",
            "title": "F",
            "lists": [
                "福州",
                "防城港",
                "佛山",
                "抚顺",
                "抚州",
                "阜新",
                "阜阳"
            ]
        },
        {
            "id": "7",
            "title": "G",
            "lists": [
                "广州",
                "桂林",
                "贵阳",
                "甘南",
                "赣州",
                "甘孜",
                "广安",
                "广元",
                "贵港",
                "果洛"
            ]
        },
        {
            "id": "8",
            "title": "H",
            "lists": [
                "杭州",
                "哈尔滨",
                "合肥",
                "海口",
                "呼和浩特",
                "海北",
                "海东",
                "海南",
                "海西",
                "邯郸",
                "汉中",
                "鹤壁",
                "河池",
                "鹤岗",
                "黑河",
                "衡水",
                "衡阳",
                "河源",
                "贺州",
                "红河",
                "淮安",
                "淮北",
                "怀化",
                "淮南",
                "黄冈",
                "黄南",
                "黄山",
                "黄石",
                "惠州",
                "葫芦岛",
                "呼伦贝尔",
                "湖州",
                "菏泽"
            ]
        },
        {
            "id": "9",
            "title": "J",
            "lists": [
                "济南",
                "佳木斯",
                "吉安",
                "江门",
                "焦作",
                "嘉兴",
                "嘉峪关",
                "揭阳",
                "吉林",
                "金昌",
                "晋城",
                "景德镇",
                "荆门",
                "荆州",
                "金华",
                "济宁",
                "晋中",
                "锦州",
                "九江",
                "酒泉"
            ]
        },
        {
            "id": "10",
            "title": "K",
            "lists": [
                "昆明",
                "开封"
            ]
        },
        {
            "id": "11",
            "title": "L",
            "lists": [
                "兰州",
                "拉萨",
                "来宾",
                "莱芜",
                "廊坊",
                "乐山",
                "凉山",
                "连云港",
                "聊城",
                "辽阳",
                "辽源",
                "丽江",
                "临沧",
                "临汾",
                "临夏",
                "临沂",
                "林芝",
                "丽水",
                "六安",
                "六盘水",
                "柳州",
                "陇南",
                "龙岩",
                "娄底",
                "漯河",
                "洛阳",
                "泸州",
                "吕梁"
            ]
        },
        {
            "id": "12",
            "title": "M",
            "lists": [
                "马鞍山",
                "茂名",
                "眉山",
                "梅州",
                "绵阳",
                "牡丹江"
            ]
        },
        {
            "id": "13",
            "title": "N",
            "lists": [
                "南京",
                "南昌",
                "南宁",
                "宁波",
                "南充",
                "南平",
                "南通",
                "南阳",
                "那曲",
                "内江",
                "宁德",
                "怒江"
            ]
        },
        {
            "id": "14",
            "title": "P",
            "lists": [
                "盘锦",
                "攀枝花",
                "平顶山",
                "平凉",
                "萍乡",
                "莆田",
                "濮阳"
            ]
        },
        {
            "id": "15",
            "title": "Q",
            "lists": [
                "青岛",
                "黔东南",
                "黔南",
                "黔西南",
                "庆阳",
                "清远",
                "秦皇岛",
                "钦州",
                "齐齐哈尔",
                "泉州",
                "曲靖",
                "衢州"
            ]
        },
        {
            "id": "16",
            "title": "R",
            "lists": [
                "日喀则",
                "日照"
            ]
        },
        {
            "id": "17",
            "title": "S",
            "lists": [
                "上海",
                "深圳",
                "苏州",
                "沈阳",
                "石家庄",
                "三门峡",
                "三明",
                "三亚",
                "商洛",
                "商丘",
                "上饶",
                "山南",
                "汕头",
                "汕尾",
                "韶关",
                "绍兴",
                "邵阳",
                "十堰",
                "朔州",
                "四平",
                "绥化",
                "遂宁",
                "随州",
                "宿迁",
                "宿州"
            ]
        },
        {
            "id": "18",
            "title": "T",
            "lists": [
                "天津",
                "太原",
                "泰安",
                "泰州",
                "台州",
                "唐山",
                "天水",
                "铁岭",
                "铜川",
                "通化",
                "通辽",
                "铜陵",
                "铜仁",
                "台湾"
            ]
        },
        {
            "id": "19",
            "title": "W",
            "lists": [
                "武汉",
                "乌鲁木齐",
                "无锡",
                "威海",
                "潍坊",
                "文山",
                "温州",
                "乌海",
                "芜湖",
                "乌兰察布",
                "武威",
                "梧州"
            ]
        },
        {
            "id": "20",
            "title": "X",
            "lists": [
                "厦门",
                "西安",
                "西宁",
                "襄樊",
                "湘潭",
                "湘西",
                "咸宁",
                "咸阳",
                "孝感",
                "邢台",
                "新乡",
                "信阳",
                "新余",
                "忻州",
                "西双版纳",
                "宣城",
                "许昌",
                "徐州",
                "香港",
                "锡林郭勒",
                "兴安"
            ]
        },
        {
            "id": "21",
            "title": "Y",
            "lists": [
                "银川",
                "雅安",
                "延安",
                "延边",
                "盐城",
                "阳江",
                "阳泉",
                "扬州",
                "烟台",
                "宜宾",
                "宜昌",
                "宜春",
                "营口",
                "益阳",
                "永州",
                "岳阳",
                "榆林",
                "运城",
                "云浮",
                "玉树",
                "玉溪",
                "玉林",
                "鹰潭"
            ]
        },
        {
            "id": "22",
            "title": "Z",
            "lists": [
                "杂多县",
                "赞皇县",
                "枣强县",
                "枣阳市",
                "枣庄",
                "泽库县",
                "增城市",
                "曾都区",
                "泽普县",
                "泽州县",
                "札达县",
                "扎赉特旗",
                "扎兰屯市",
                "扎鲁特旗",
                "扎囊县",
                "张北县",
                "张店区",
                "章贡区",
                "张家港",
                "张家界",
                "张家口",
                "漳平市",
                "漳浦县",
                "章丘市",
                "樟树市",
                "张湾区",
                "彰武县",
                "漳县",
                "张掖",
                "漳州",
                "长子县",
                "湛河区",
                "湛江",
                "站前区",
                "沾益县",
                "诏安县",
                "召陵区",
                "昭平县",
                "肇庆",
                "昭通",
                "赵县",
                "昭阳区",
                "招远市",
                "肇源县",
                "肇州县",
                "柞水县",
                "柘城县",
                "浙江",
                "镇安县",
                "振安区",
                "镇巴县",
                "正安县",
                "正定县",
                "正定新区",
                "正蓝旗",
                "正宁县",
                "蒸湘区",
                "正镶白旗",
                "正阳县",
                "郑州",
                "镇海区",
                "镇江",
                "浈江区",
                "镇康县",
                "镇赉县",
                "镇平县",
                "振兴区",
                "镇雄县",
                "镇原县",
                "志丹县",
                "治多县",
                "芝罘区",
                "枝江市",
                "芷江侗族自治县",
                "织金县",
                "中方县",
                "中江县",
                "钟楼区",
                "中牟县",
                "中宁县",
                "中山",
                "中山区",
                "钟山区",
                "钟山县",
                "中卫",
                "钟祥市",
                "中阳县",
                "中原区",
                "周村区",
                "周口",
                "周宁县",
                "舟曲县",
                "舟山",
                "周至县",
                "庄河市",
                "诸城市",
                "珠海",
                "珠晖区",
                "诸暨市",
                "驻马店",
                "准格尔旗",
                "涿鹿县",
                "卓尼",
                "涿州市",
                "卓资县",
                "珠山区",
                "竹山县",
                "竹溪县",
                "株洲",
                "株洲县",
                "淄博",
                "子长县",
                "淄川区",
                "自贡",
                "秭归县",
                "紫金县",
                "自流井区",
                "资溪县",
                "资兴市",
                "资阳"
            ]
        }
    ],
    "hotCityList": [
        {
            "id": "01",
            "cityName": "北京"
        },
        {
            "id": "02",
            "cityName": "上海"
        },
        {
            "id": "03",
            "cityName": "三亚"
        },
        {
            "id": "04",
            "cityName": "香港"
        },
        {
            "id": "05",
            "cityName": "杭州"
        },
        {
            "id": "06",
            "cityName": "广州"
        },
        {
            "id": "07",
            "cityName": "成都"
        },
        {
            "id": "08",
            "cityName": "深圳"
        },
        {
            "id": "09",
            "cityName": "苏州"
        },
        {
            "id": "10",
            "cityName": "桂林"
        },
        {
            "id": "11",
            "cityName": "西安"
        },
        {
            "id": "12",
            "cityName": "厦门"
        }
    ],
    "sortList": [
        {
            "name": "A"
        },
        {
            "name": "B"
        },
        {
            "name": "C"
        },
        {
            "name": "D"
        },
        {
            "name": "E"
        },
        {
            "name": "F"
        },
        {
            "name": "G"
        },
        {
            "name": "H"
        },
        {
            "name": "J"
        },
        {
            "name": "K"
        },
        {
            "name": "L"
        },
        {
            "name": "M"
        },
        {
            "name": "N"
        },
        {
            "name": "P"
        },
        {
            "name": "Q"
        },
        {
            "name": "R"
        },
        {
            "name": "S"
        },
        {
            "name": "T"
        },
        {
            "name": "W"
        },
        {
            "name": "X"
        },
        {
            "name": "Y"
        },
        {
            "name": "Z"
        }
    ]
}
```

修改City.vue父组件内容，删除子组件并传值给List.vue

```vue
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
```

修改List.vue加入原Hot和Sort代码,还有css等

```vue
<template>
<div>
    <!-- hot -->
    <div class="hot">
        <div class="hot-title">热门城市</div>
        <ul class="hot-list">
            <li class="hot-item" v-for="item in hotList" :key="item.id">
                {{item.cityName}}
            </li>
        </ul>
    </div>
    <!-- sort -->
    <div class="sort">
        <div class="sort-title">字母排序</div>
        <ul class="sort-list">
            <li class="sort-item" v-for="(item,index) in sortList" :key="index">
                {{item.name}}
            </li>
        </ul>
    </div>
    <!-- list -->
    <div class="list">
        <div v-for="pages in cityList" :key="pages.id">
            <div class="list-title">{{pages.title}}</div>
            <ul class="list-msg">
                <li class="list-item" v-for="item,index in pages.lists" :key="index">
                    {{item}}
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['cityList', 'hotList', 'sortList'],

}
</script>

<style lang="stylus" scoped>
@import '~css/common.styl'

.list-title {
    font-size: .24rem;
    color: #212121;
    padding: .2rem .3rem;
}

.list-msg {
    position: relative;
    background-color: #fff;
    overflow: hidden;
}

.list-msg ::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 25%;
    left: 25%;
    border-left: .02rem solid #ddd;
    border-right: .02rem solid #ddd;
}

.list-msg ::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 25%;
    left: 75%;
    border-left: .02rem solid #ddd;
}

.list-item {
    font-size: .28rem;
    text-align: center;
    line-height: .9rem;
    float: left;
    width: 25%;
    border-bottom: .02rem solid #ddd;
    textOverflow();
}

// hot 
.hot-title {
    font-size: .26rem;
    color: #212121;
    padding: .2rem .3rem;
}

.hot-list {
    position: relative;
    color: #212121;
    background-color: #fff;
    font-size: .28rem;
    overflow: hidden;
}

.hot-list ::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 33.33333%;
    left: 33.33333%;
    border-left: .02rem solid #ddd;
    border-right: .02rem solid #ddd;
}

.hot-item {
    text-align: center;
    height: .9rem;
    line-height: .9rem;
    float: left;
    width: 33.33333%;
    border-bottom: .02rem solid #ddd;
}

// sort
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
```

配置好后启动页面查看，能正常展示原内容

接着去github下载一个插件

![image-20220911225743214](/Users/wx/Documents/gitee/vue-travel/md/assets/image-20220911225743214.png)

接着npm安装

```shell
npm install better-scroll@1.8.4 --save
```

下载好后编辑List.vue文件

```vue
<template>
<!-- better-scroll -->
<div ref="container" class="container">
    <div>
        <!-- hot -->
        <div class="hot">
            <div class="hot-title">热门城市</div>
            <ul class="hot-list">
                <li class="hot-item" v-for="item in hotList" :key="item.id">
                    {{item.cityName}}
                </li>
            </ul>
        </div>
        <!-- sort -->
        <div class="sort">
            <div class="sort-title">字母排序</div>
            <ul class="sort-list">
                <li class="sort-item" v-for="(item,index) in sortList" :key="index">
                    {{item.name}}
                </li>
            </ul>
        </div>
        <!-- list -->
        <div class="list">
            <div v-for="pages in cityList" :key="pages.id">
                <div class="list-title">{{pages.title}}</div>
                <ul class="list-msg">
                    <li class="list-item" v-for="item,index in pages.lists" :key="index">
                        {{item}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    props: ['cityList', 'hotList', 'sortList'],
    data() {
        return {
            bs: ''
        }
    },
    mounted() {
        let container = this.$refs['container'];
        this.bs = new BScroll(container) 
    }
}
</script>

<style lang="stylus" scoped>
@import '~css/common.styl'

.container {
    position: absolute;
    overflow: hidden;
    left: 0;
    right: 0;
    bottom: 0;
    top: .88rem;
    background-color: #f5f5f5;
}

.list-title {
    font-size: .24rem;
    color: #212121;
    padding: .2rem .3rem;
}

.list-msg {
    position: relative;
    background-color: #fff;
    overflow: hidden;
}

.list-msg ::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 25%;
    left: 25%;
    border-left: .02rem solid #ddd;
    border-right: .02rem solid #ddd;
}

.list-msg ::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 25%;
    left: 75%;
    border-left: .02rem solid #ddd;
}

.list-item {
    font-size: .28rem;
    text-align: center;
    line-height: .9rem;
    float: left;
    width: 25%;
    border-bottom: .02rem solid #ddd;
    textOverflow();
}

// hot 
.hot-title {
    font-size: .26rem;
    color: #212121;
    padding: .2rem .3rem;
}

.hot-list {
    position: relative;
    color: #212121;
    background-color: #fff;
    font-size: .28rem;
    overflow: hidden;
}

.hot-list ::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 33.33333%;
    left: 33.33333%;
    border-left: .02rem solid #ddd;
    border-right: .02rem solid #ddd;
}

.hot-item {
    text-align: center;
    height: .9rem;
    line-height: .9rem;
    float: left;
    width: 33.33333%;
    border-bottom: .02rem solid #ddd;
}

// sort
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
```

页面效果，注意是拖动页面不是上下划动了^_^

![image-20220912002633027](/Users/wx/Documents/gitee/vue-travel/md/assets/image-20220912002633027.png)

提交代码到gitee

```shell
git add .
git commit -m '20220911 add better-scroll to CityList'
git push
```

```上面滚动还是有小Bug,刚打开时样式不动拖动不了,需手动改动画效果再刷新才能拖动```

###### 二十五、点击字母跳转到相应内容

官方文档位置

https://better-scroll.github.io/docs-v1/doc/zh-hans/api.html

在List.vue中添加需要滚动的位置和内容

```vue
<template>
<!-- better-scroll -->
<div ref="container" class="container">
    <div>
        <!-- hot -->
        <div class="hot">
            <div class="hot-title">热门城市</div>
            <ul class="hot-list">
                <li class="hot-item" v-for="item in hotList" :key="item.id">
                    {{item.cityName}}
                </li>
            </ul>
        </div>
        <!-- sort -->
        <div class="sort">
            <div class="sort-title">字母排序</div>
            <ul class="sort-list">
                <li class="sort-item" v-for="(val,key) in sortList" :key="key" @click="changeSort(val.name)">
                    {{val.name}}
                </li>
            </ul>
        </div>
        <!-- list -->
        <div class="list">
            <div v-for="pages in cityList" :key="pages.id" :ref="pages.title">
                <div class="list-title">{{pages.title}}</div>
                <ul class="list-msg">
                    <li class="list-item" v-for="item,index in pages.lists" :key="index">
                        {{item}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    props: ['cityList', 'hotList', 'sortList'],
    data() {
        return {
            bs: ''
        }
    },
    mounted() {
        let container = this.$refs['container'];
        this.bs = new BScroll(container)
    },
    methods: {
        // 点击字母跳到指定位置
        changeSort(sortName) {
            // https://better-scroll.github.io/docs-v1/doc/zh-hans/api.html
            // scrollToElement(el, time, offsetX, offsetY, easing)
            // 滚动到指定的目标元素 
            this.bs.scrollToElement(this.$refs[sortName][0])
        },
    }
}
</script>

<style lang="stylus" scoped>
@import '~css/common.styl'

.container {
    position: absolute;
    overflow: hidden;
    left: 0;
    right: 0;
    bottom: 0;
    top: .88rem;
    background-color: #f5f5f5;
}

.list-title {
    font-size: .24rem;
    color: #212121;
    padding: .2rem .3rem;
}

.list-msg {
    position: relative;
    background-color: #fff;
    overflow: hidden;
}

.list-msg ::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 25%;
    left: 25%;
    border-left: .02rem solid #ddd;
    border-right: .02rem solid #ddd;
}

.list-msg ::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 25%;
    left: 75%;
    border-left: .02rem solid #ddd;
}

.list-item {
    font-size: .28rem;
    text-align: center;
    line-height: .9rem;
    float: left;
    width: 25%;
    border-bottom: .02rem solid #ddd;
    textOverflow();
}

// hot 
.hot-title {
    font-size: .26rem;
    color: #212121;
    padding: .2rem .3rem;
}

.hot-list {
    position: relative;
    color: #212121;
    background-color: #fff;
    font-size: .28rem;
    overflow: hidden;
}

.hot-list ::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 33.33333%;
    left: 33.33333%;
    border-left: .02rem solid #ddd;
    border-right: .02rem solid #ddd;
}

.hot-item {
    text-align: center;
    height: .9rem;
    line-height: .9rem;
    float: left;
    width: 33.33333%;
    border-bottom: .02rem solid #ddd;
}

// sort
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
```

提交代码到gitee

```shell
git add .
git commit -m '20220912 add scroll to location'
git push
```

