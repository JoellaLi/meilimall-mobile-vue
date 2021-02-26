<template>
  <h2>detail: 展示商品 编号为：{{iid}}</h2>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      iid: null
    }
  },
  created() {
    this.iid = this.$route.params.iid
  }
}
</script>

<style scoped>

</style>