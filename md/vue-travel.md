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

