<template>
  <div id="app">
    <TheNavBar />
    <TheDrawer />
    <!-- <transition name="router-anim"> -->
    <router-view />
    <!-- </transition> -->
  </div>
</template>
<script>
import TheNavBar from '@/components/TheNavBar.vue'
export default {
  components: {
    TheNavBar,
    TheDrawer: () => import('@/components/TheDrawer.vue')
  }
}
</script>
