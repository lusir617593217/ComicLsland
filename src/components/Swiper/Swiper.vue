<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import '../../../node_modules/swiper/css/swiper.min.css'
export default {
  props: {
    autoplay: {
      type: Number,
      default: 0
    },
    loop: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    createSwiper () {
      this.swiper = new Swiper('.swiper-container', {
        loop: this.loop,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: this.autoplay ? {
          disableOnInteraction: false, // 手动滑动之后不打断播放
          delay: this.autoplay
        } : 0
      })
    }
  },
  updated () {
    if (!this.swiper) {
      this.$nextTick(() => {
        this.createSwiper()
      })
    }
  }
}
</script>
