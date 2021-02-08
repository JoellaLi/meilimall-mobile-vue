<template>
  <div class="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>美丽街</div>
      </template>
    </nav-bar>
  <!-- <scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="true" :list="showGoods" @scroll="contentScroll" @pullingUp="loadMore"> -->
    <home-swiper :banners="banners" id="home-swiper"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <home-feature-view></home-feature-view>
    <!-- <tab-control :titles="['流行', '新款', '精选']" :class="{fixed: isFixed}" id="tabControl"></tab-control> -->
    <van-sticky :offset-top="44">
      <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick"></tab-control>
    </van-sticky>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多商品了"
      @load="onLoad"
    >
      <goods-list class="goods" :goods="showGoods"/>
    </van-list>
  <!-- </scroll> -->
    <back-top ref="backtop" @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper.vue'
import HomeRecommendView from './childComps/HomeRecommendView.vue'
import HomeFeatureView from './childComps/HomeFeatureView.vue'

import NavBar from '@/components/common/navbar/NavBar.vue'
import TabControl from '@/components/content/tabControl/TabControl.vue'
import GoodsList from '@/components/content/goods/GoodsList.vue'
// import Scroll from '@/components/common/scroll/Scroll.vue'
import BackTop from '@/components/content/backTop/BackTop.vue'

import { getHomeMultidata, getHomeGoods } from '../../services/home'

export default {
  name: "Home",
  components: { 
    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView,
    NavBar,
    TabControl,
    GoodsList,
    BackTop,
    // Scroll
   },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {
          page: 0,
          list: []
        },
        'new': {
          page: 0,
          list: []
        },
        'sell': {
          page: 0,
          list: []
        }
      },
      // isFixed: ''
      currentType: 'pop',
      loading: false,
      finished: false,
      isShowBackTop: false,
      scrollTop: 0,
      saveY: 0
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType]? this.goods[this.currentType].list: []
    }
  },
  created() {
    this.getHomeMultidata(),
    this.getHomeGoods('pop'),
    this.getHomeGoods('new'),
    this.getHomeGoods('sell')
  },
  // mounted() {
  //   this.$bus.$on('itemImageLoad', () => {
  //     console.log('itemImageLoad---');
  //     console.log(this.$refs.scroll);
  //     // this.$refs.scroll.refresh()
  //   })
  // },
  // mounted() {
  //   document.addEventListener('scroll', this.fixedTabBar)
  // },
  // destroyed() {
  //   document.removeEventListener('scroll', this.fixedTabBar)
  // },
   mounted() {
    //回到顶部
    window.addEventListener("scroll",this.contentScroll,true)
  },
  activated() {
    // console.log("activated");
    // console.log(this.saveY);
     document.documentElement.scrollTop = document.body.scrollTop = this.saveY
  },
  deactivated() {
    this.saveY = this.scrollTop
    // console.log("deactivated");
    // console.log(this.scrollTop);
  },
  methods: {
    /**
    ** 事件监听相关的方法
    */
    tabClick(index) {
      switch(index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        default: 
          this.currentType = 'sell';
      }
    },
    onLoad() {
      this.getHomeGoods(this.currentType)
    },
    // contentScroll() {
    //   console.log("contentScroll");
    // },
    /**
      * 回到顶部功能实现过程：
      * 1. 获取页面当前距离顶部的滚动距离（虽然IE不常用了，但还是需要考虑一下兼容性的）
      * 2. 计算出每次向上移动的距离，用负的滚动距离除以5，因为滚动的距离是一个正数，想向上移动就是做一个减法
      * 3. 用当前距离加上计算出的距离，然后赋值给当前距离，就可以达到向上移动的效果
      * 4. 最后记得在移动到顶部时，清除定时器
    */
    backClick() {
      // 回到顶部
      this.isShowBackTop = false
      // this.$refs.box.scrollTop = 0
      this.$refs.backtop.backtop()
    },
    contentScroll() {
      // console.log("scroll");
      // console.log(this.$refs.box.scrollTop);
      // this.isShowBackTop = this.$refs.box.scrollTop > 1000
      // let that = this;
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      this.isShowBackTop = this.scrollTop > 800
    },
    /**
     * 网络请求相关的方法
     */
    // fixedTabBar() {
    //   var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    //   let tabbar = document.querySelector('#tabControl')
    //   let swiper = document.querySelector('#home-swiper ')
    //   let tabbarTop = tabbar.offsetTop - swiper.offsetTop
    //   scrollTop >= tabbarTop ? this.isFixed = true : this.isFixed = false
    // },
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.data.banner.list
        this.recommends = res.data.data.recommend.list
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        if(res.data.success) {
          this.goods[type].list.push(...res.data.data.list)
          this.goods[type].page += 1
          // // 结束下拉加载
          // this.$refs.scroll.finishPullUp()
          // 加载状态结束
          this.loading = false
        } else {
          this.finished = true
          console.log('加载完了');
        }
      })
    }

  }
}
</script>

<style>
  .home {
    /* position: relative; */
    padding-top: 44px;
    padding-bottom: 50px;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    font-size: 20px;

    position: fixed;
    top: 0;
    left:0;
    right: 0;
    z-index: 999;
  }
  .tab-control {
    z-index: 999;
  }
  /* .fixed {
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
  } */
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
  }
  /* .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  } */
</style>