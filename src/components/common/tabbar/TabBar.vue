<template>
  <div class="tabbar">
    <slot name="tabbar"></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  components: {

  }
}
</script>

<style>
  .tabbar {
    display: flex;
    justify-content: space-around;
    text-align: center;
    background-color: #f6f6f6;
    height:49px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -1px 1px rgba(100,100,100,.2);
  }
</style>