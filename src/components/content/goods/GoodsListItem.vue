<template>
  <div class="goods-item" @click="goodsClick">
    <!-- <img :src="goodsItem.show.img" @load="imageLoad"> -->
    <img :src="goodsItem.show.img">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      iid: null
    }
  },
  methods: {
    // imageLoad() {
    //   this.$bus.$emit('itemImageLoad')
    // }
    goodsClick() {
      this.iid = this.goodsItem.iid
      this.$router.push("/detail/" + this.iid)
    }
  }
}
</script>

<style>
  .goods-item {
    /* position: relative; */
    width: 48%;
    padding-bottom: 10px;

  }
  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    /* position: absolute;
    bottom: 5px;
    left: 0;
    right: 0; */
    font-size: 12px;
    text-align: center;
    overflow: hidden;
  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~@/assets/img/common/collect.svg") 0/14px 14px;
}
</style>