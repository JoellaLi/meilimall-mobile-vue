<template>
  <div class="back-top">
    <img src="~@/assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: "BackTop",
  methods: {
    backtop() {
      var timer = setInterval(function(){
        let osTop = document.documentElement.scrollTop || document.body.scrollTop;
        let ispeed = Math.floor(-osTop / 5); 
        document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
        if(osTop === 0){
          clearInterval(timer);
        }
      },30)
    }
  }
}
</script>

<style scoped>
  .back-top {
    position: fixed;
    right: 8px;
    bottom: 55px;
  }

  .back-top img{
    width: 43px;
    height: 43px;
  }

</style>