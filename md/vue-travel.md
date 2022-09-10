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
            北京<span class="iconfont">&#xe600;</span>
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

