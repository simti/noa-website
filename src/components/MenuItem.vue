<template>
  <router-link
    :to="{ name: route }"
    style="text-decoration: none !important;color: initial !important;"
  >
    <li :t="t" class="menu__item" :class="{ open: menu_status }">
      <span class="menu__item--text">{{ text }}</span>
      <span class="menu__item--text-on-hover">{{ text }}</span>
      <div class="shape_container">
        <slot></slot>
      </div>
    </li>
  </router-link>
</template>
<script>
export default {
  props: ['t', 'text', 'route'],
  computed: {
    menu_status() {
      return this.$store.state.menu_open
    }
  }
}
</script>

<style lang="scss" scoped></style>
