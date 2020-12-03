/*
*   路由器 对象模块
*
* */
import Vue  from  'vue'
import VueRouter  from  'vue-router'

//引入四个组件
import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'
//声明使用插件
Vue.use(VueRouter)
//VueRouter库 是一个构造函数
//暴露一个路由器对象
export  default new VueRouter({
//  创建一个配置对象    就是 路由  而且是 所有路由   多个使用 routes
//  使用数组   数组的每一个元素  就代表路由的每一个配置
//  所有路由  路
    routes:[
      {
      //  路由是一个对象类型   对象里面有两个 属性  path:  component:
      //  component  引入 四个组件
      /*
      * meta 云数据
      * 简单来说就是给我当前的路由 添加一个属性   通过App.vue 里面的 $route 就能得到这个属性值
      * meta 是一个对象
      * meta  这个值默认就有，只是它是一个空的对象
      * 空对象去取值 得到的是false
      * */
        path:'/msite',
        component:Msite,
        meta:{
          showFooter:true
        }
      },
      {
        path:'/order',
        component:Order,
        meta:{
          showFooter:true
        }
      },
      {
        path:'/search',
        component:Search,
        meta:{
          showFooter:true
        }
      },
      {
        path:'/profile',
        component:Profile,
        meta:{
          showFooter:true
        }
      },
      {
        path:'/login',
        component:Login
      //  默认是false ,所以不用加 meta
      },
      {
        path:'/',
        redirect:'/msite'
        //默认  miste路由
      }
    ]
})
