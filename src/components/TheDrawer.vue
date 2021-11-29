<template>
  <div class="menu__container " :class="{ open: menu_status }">
    <ul class="menu__layout " :class="{ open: menu_status }">
      <MenuItem t="work" text="the good stuff" route="projects">
        <img
          class="menu__hover menu__hover--N"
          src="@/assets/images/N-bg.png"
          alt=""
        />
      </MenuItem>
      <MenuItem t="about" text="who we are" route="about">
        <img
          class="menu__hover menu__hover--O"
          src="@/assets/images/N-bg.png"
          alt=""
        />
      </MenuItem>
      <MenuItem t="contact" text="let's do this" route="contact">
        <img
          class="menu__hover menu__hover--A"
          src="@/assets/images/N-bg.png"
          alt=""
        />
      </MenuItem>
    </ul>
    <div
      class="menu__button--close"
      :class="{ open: menu_status }"
      @click="closeMenu"
    >
      close
    </div>
  </div>
</template>

<script>
import MenuItem from './MenuItem.vue'
export default {
  computed: {
    menu_status() {
      return this.$store.state.menu_open
    }
  },
  components: {
    MenuItem
  },
  methods: {
    closeMenu() {
      this.$store.dispatch('closeMenu')
    }
  }
}
</script>

<style scoped></style>
