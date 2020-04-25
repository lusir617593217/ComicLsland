<template>
  <div id="app">
    <transition mode="out-in" enter-active-class="fadeIn" leave-active-class="fadeOut">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 0;
  }
}

.fadeIn {
  animation: fadeIn 0.5s;
}
.fadeOut {
  animation: fadeOut 1s;
}
</style>
