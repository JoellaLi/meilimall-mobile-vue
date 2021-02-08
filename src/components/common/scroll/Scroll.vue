<template>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <slot></slot>
      </div>
    </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'

BScroll.use(Pullup)

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    },
    click: {
      type: Boolean,
      default: true
    },
    list: {
      type: Array,
      default: null
    },
    // refreshDelay: {
    //   type: Number,
    //   default: 20
    // }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this._initScroll()
    })
  },
  updated() { // 当数据更新时重计算滑动值
    this.scroll.refresh();
  },
  methods: {
    _initScroll() {
      if(!this.$refs.wrapper) {
        return
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click,
        pullUpLoad: this.pullUpLoad
      })
      if(this.probeType === 2 || this.probeType === 3) {
        this.scroll.on('scroll', (pos) => {
          this.$emit('scroll', pos)
        })
      }
      if(this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp')
        })
      }
    },
    scrollTo(x, y, time=300) {
      this.scroll&&this.scroll.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.scroll&&this.scroll.finishPullUp()
    },
    refresh() {
      this.scroll&&this.scroll.refresh()
    }
  },
  // watch: {
  //   list() {
  //     setTimeout(() => {
  //       this.refresh()
  //     }, this.refreshDelay)
  //   }
  // }
}
</script>

<style scoped>

</style>