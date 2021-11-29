<template>
  <section class="row hero">
    <div class="hero__media">
      <video
        class="hero__media--video"
        loop=""
        muted=""
        autoplay=""
        playsinline=""
        poster="@/assets/images/hero.jpg"
      >
        <source
          data-src="@/assets/hero.webm"
          type="video/webm"
          src="@/assets/hero.webm"
        />
        Your browser doesn't support HTML5 video tag.
      </video>
    </div>
    <!-- <ul class="hero__title">
      <li class="hero__title--right">
        <p class="hero__title--text">
          A creative <br />
          digital house
        </p>
      </li>
    </ul> -->

    <!-- <div class="hero__bg">
      <div class="hero__bg--inner"></div>
    </div> -->
    <ul v-if="!isMobile" class="hero__title">
      <li class="hero__title--text">
        A creative <br />
        digital house
      </li>
      <li class="hero__title--divider"></li>
      <li class="hero__title--slug">we are</li>
    </ul>

    <ul v-if="isMobile" class="hero__title-mobile">
      <li class="hero__title-mobile--slug">we are</li>
      <li class="hero__title-mobile--divider-top"></li>
      <li class="hero__title-mobile--text">
        A creative <br />
        digital house
      </li>
      <li class="hero__title-mobile--divider-bottom"></li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ['isMobile']
}
</script>

<style scoped>
/* desktop */
.hero__title {
  position: absolute;
  bottom: 2rem;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row-reverse;
  z-index: 100;
  min-width: 10rem;
  margin-right: -10rem;
  margin-left: 5rem;
  list-style: none;
}

.hero__title--text {
  display: flex;
  flex: 5;
  justify-content: flex-start;
  align-items: center;

  padding-left: 1rem;
  font-size: 8rem;
  font-family: 'superiorBlack';
}

.hero__title--divider {
  display: flex;
  position: relative;
  flex: 2;
  justify-content: center;
  align-items: center;
}
.hero__title--divider::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 0.1rem;
  background: black;
}

.hero__title--slug {
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.5rem;
  padding-right: 1rem;
}

/* mobile */
.hero__title-mobile[data-v-9d9a21ac] {
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  z-index: 100;
  min-width: 5rem;
  top: 0;
  margin-top: 20rem;
  left: 0;
  justify-content: flex-end;
  list-style: none;
}

.hero__title-mobile--divider-top {
  height: 25rem;
  position: relative;
}

.hero__title-mobile--divider-top::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  background: black;
  width: 1px;
  left: 8rem;
}

.hero__title-mobile--text[data-v-9d9a21ac] {
  display: flex;
  font-size: 12rem;
  font-family: 'superiorBlack';
  align-items: center;
  flex: 2;
  max-height: 40rem;
}

.hero__title-mobile--divider-bottom {
  position: relative;
  height: 60rem;
}

.hero__title-mobile--divider-bottom::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background: black;
  left: 8rem;
}

.hero__title-mobile--slug[data-v-9d9a21ac] {
  display: flex;
  font-size: 5.5rem;
  height: 45rem;
  align-items: flex-end;
  padding-bottom: 3rem;
}
</style>
