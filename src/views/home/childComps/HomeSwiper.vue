<template>
      <van-swipe :autoplay="4000" indicator-color="#ff5777">
        <van-swipe-item v-for="(item, index) in banners" :key="index">
          <a :href="item.link">
            <img :src="item.image" />
          </a>
        </van-swipe-item>
      </van-swipe>
</template>

<script>
export default {
  name: "Swipe",
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
  .van-swipe {
    width: 100%;
  }

  .van-swipe .van-swipe-item img {
    width: 100%;
  }
</style>