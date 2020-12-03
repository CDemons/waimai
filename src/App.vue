<template>
    <div id="app">
<!--      显示路由组件-->
      <router-view/>
      <FooterGuide v-show="$route.meta.showFooter"/>
<!--      $route    当前路由   route.meta.showFooter 只有 showFooter 为 true 才会显示-->
    </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
    //映射成标签
    components : {
      FooterGuide
    }
}
</script>
<!--声明 告诉 WebStorm 里面写的是什么语法
应用根组件 vue
-->

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>
