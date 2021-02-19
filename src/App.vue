<template>
  <div id="app">
    <keep-alive exclude="Detail">
       <router-view></router-view>
    </keep-alive>
    <main-tab-bar v-if="$route.meta.showTab"></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from '@/components/content/mainTabbar/MainTabBar.vue'
import router from '@/router'

export default {
  name: 'App',
  router,
  components: {
    MainTabBar
    
  }
}
</script>

<style>
  @import "~@/assets/css/main.css";
</style>
