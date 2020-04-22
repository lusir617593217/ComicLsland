<template>
  <ul class="cartoon-nav">
    <li
      :class="{ 'active': index===activeNum }"
      v-for="(item, index) in navList"
      :key="index"
      @click="onclick(item, index)"
    >{{ item.name }}</li>
  </ul>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      activeNum: 0
    }
  },
  props: {
    navList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    onclick (item, index) {
      this.activeNum = index
      this.$emit('change', item)
    }
  }
}
</script>

<style lang="scss" scoped>
.cartoon-nav {
  padding: 10px 0;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  li {
    width: 75px;
    height: 25px;
    text-align: center;
    line-height: 25px;
    font-size: 14px;
    color: #000;
  }
  &::after {
    content: "";
    height: 1px;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: #ccc;
    transform: scaleY(0.5);
  }
  .active {
    color: orangered;
  }
}
</style>
