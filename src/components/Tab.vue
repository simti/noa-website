<template>
  <section class="about__section about__section--summary">
    <div class="summary--tab">
      <span
        class="summary__tab--item"
        :class="{ active: isActive('about') }"
        @click.prevent="setActive('about')"
        >about</span
      >
      <span
        class="summary__tab--item"
        :class="{ active: isActive('mission') }"
        @click.prevent="setActive('mission')"
        >mission</span
      >
      <span
        class="summary__tab--item"
        :class="{ active: isActive('vision') }"
        @click.prevent="setActive('vision')"
        >vision</span
      >
    </div>

    <div class="summary--content">
      <div
        class="summary__content summary__content--about light-text"
        :class="{ active: isActive('about') }"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Tortor consequat id
        porta nibh venenatis cras sed. Mattis ullamcorper velit sed ullamcorper
        morbi tincidunt ornare massa eget. Ornare quam viverra orci sagittis eu
        volutpat. In ornare quam viverra orci sagittis. Non pulvinar neque
        laoreet suspendisse interdum. Tortor at auctor urna nunc id cursus. Id
        donec ultrices tincidunt arcu non sodales neque sodales ut. Ullamcorper
        morbi tincidunt ornare massa eget egestas purus viverra. Ac feugiat sed
        lectus vestibulum mattis ullamcorper. Aliquam eleifend mi in nulla
        posuere sollicitudin. Purus sit amet luctus venenatis lectus magna
        fringilla. Varius vel pharetra vel turpis nunc eget lorem. Et
        sollicitudin ac orci phasellus egestas tellus. Pellentesque massa
        placerat duis ultricies lacus sed turpis tincidunt id. Ultrices eros in
        cursus turpis massa tincidunt. Consectetur lorem donec massa sapien
        faucibus. Viverra justo nec ultrices dui sapien eget.
      </div>
      <div
        class="summary__content summary__content--mission light-text"
        :class="{ active: isActive('mission') }"
      >
        Green vines attached to the trunk of the tree had wound themselves
        toward the top of the canopy. Ants used the vine as their private
        highway, avoiding all the creases and crags of the bark, to freely move
        at top speed from top to bottom or bottom to top depending on their
        current chore. At least this was the way it was supposed to be.
        Something had damaged the vine overnight halfway up the tree leaving a
        gap in the once pristine ant highway.
      </div>
      <div
        class="summary__content summary__content--vision light-text"
        :class="{ active: isActive('vision') }"
      >
        Barbara had been waiting at the table for twenty minutes. it had been
        twenty long and excruciating minutes. David had promised that he would
        be on time today. He never was, but he had promised this one time. She
        had made him repeat the promise multiple times over the last week until
        she'd believed his promise. Now she was paying the price.
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeItem: 'home'
    }
  },
  methods: {
    isActive(menuItem) {
      console.log(menuItem)
      return this.activeItem === menuItem
    },
    setActive(menuItem) {
      this.activeItem = menuItem
    }
  },
  created() {
    return this.setActive('about')
  }
}
</script>

<style lang="scss" scoped></style>
