<template>
  <h2>detail: {{iid}}</h2>
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