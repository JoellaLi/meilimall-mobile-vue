<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item, index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
 .recommend {
   display: flex;
   width: 100%;
   text-align: center;
   font-size: 14px;
   border-bottom: 8px solid #eee;
 }

 .recommend-item {
   flex: 1;
   padding: 10px 5px 20px 5px; 
 }

.recommend-item a {
  display: block;
}

.recommend-item img {
  width: 100%;
  margin-bottom: 10px;
}

</style>