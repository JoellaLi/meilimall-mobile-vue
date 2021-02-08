<template>
  <div class="tabbaritem" @click="itemClick">
    <div class="item-icon" v-show="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div class="item-icon-active" v-show="isActive">
      <slot name="item-icon-active"></slot>
    </div>
    <div class="item-text" :style="ActiveStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    ActiveColor: {
      type: String,
      default: '#ff5777',
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    ActiveStyle() {
      return this.isActive? {color: this.ActiveColor}: {}
    }
  }
}
</script>

<style>
  .tabbaritem {
    font-size: 14px;
  }
  .tabbaritem img{
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin: 3px 0 2px 0;
  }
</style>