<template>
  <main class="page">
    <carousel
      style="position: fixed;top: 0;bottom: 0;left: 0;right: 0;margin: auto;height:100%"
      :responsive="{
        0: { items: 1, nav: false },
        600: { items: 1, nav: false }
      }"
      :navigation="true"
      :dots="true"
      :autoplay="false"
      :autoplayTimeout="7000"
      :autoplayHoverPause="false"
      :loop="true"
    >
      <!-- Slider #social -->
      <kinesis-container class="items__inner">
        <kinesis-element
          :strength="0"
          axis="x"
          class="items__layer layer bellow"
        >
          <div class="items__item social-bg"></div>
        </kinesis-element>
        <kinesis-element
          :strength="10"
          class="items__layer layer middle"
          axis="x"
        >
          <div class="items__item social-obj"></div>
        </kinesis-element>
        <h4 class="slider__title">Social</h4>
        <h2 class="slider__description">
          <router-link :to="{ name: 'project-show', params: { id: 1 } }">
            See Projects
            <img style="width:12px" src="@/assets/images/next.svg" />
          </router-link>
        </h2>
      </kinesis-container>

      <!-- Slider #web -->
      <kinesis-container class="items__inner">
        <kinesis-element
          :strength="0"
          axis="x"
          class="items__layer layer bellow"
        >
          <div class="items__item web-bg"></div>
        </kinesis-element>
        <kinesis-element
          :strength="10"
          class="items__layer layer middle"
          axis="x"
        >
          <div class="items__item web-obj"></div>
        </kinesis-element>
        <h4 class="slider__title">Web</h4>
        <h2 class="slider__description">
          <router-link :to="{ name: 'project-show', params: { id: 1 } }">
            See Projects
            <img style="width:12px" src="@/assets/images/next.svg" />
          </router-link>
        </h2>
      </kinesis-container>

      <!-- Slider #motion -->
      <kinesis-container class="items__inner slider__motion">
        <kinesis-element
          :strength="0"
          axis="x"
          class="items__layer layer bellow"
        >
          <div class="items__item motion-bg"></div>
        </kinesis-element>
        <kinesis-element
          :strength="10"
          class="items__layer layer middle"
          axis="x"
        >
          <div class="items__item motion-obj"></div>
        </kinesis-element>
        <h4 class="slider__title">Motion</h4>

        <h2 class="slider__description sim">
          <router-link :to="{ name: 'project-show', params: { id: 1 } }">
            See Projects
            <img style="width:12px" src="@/assets/images/next.svg" />
          </router-link>
        </h2>
      </kinesis-container>

      <!-- Slider #graphic-->
      <kinesis-container class="items__inner">
        <kinesis-element :strength="0" class="items__layer layer bellow">
          <div class="items__item graphic-bg"></div>
        </kinesis-element>
        <kinesis-element
          :strength="10"
          class="items__layer layer middle graphic-obj-layer"
        >
          <div class="items__item graphic-obj"></div>
        </kinesis-element>

        <kinesis-element :strength="5" class="items__layer layer">
          <div class="items__item graphic-base"></div>
        </kinesis-element>
        <h4 class="slider__title">Graphic</h4>
        <h2 class="slider__description">
          <router-link :to="{ name: 'project-show', params: { id: 2 } }">
            See Projects
            <img style="width:12px" src="@/assets/images/next.svg" />
          </router-link>
        </h2>
      </kinesis-container>
    </carousel>
  </main>
</template>

<script>
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
import carousel from 'vue-owl-carousel'
export default {
  components: {
    KinesisContainer,
    KinesisElement,
    carousel
  },
  data() {
    return {
      isMobile: window.innerWidth <= 786 ? true : false
    }
  },
  methods: {
    onResize() {
      if (window.innerWidth <= 786) this.isMobile = true
      else this.isMobile = false
    }
  },
  beforeMount() {
    // this.next()
  },
  mounted() {
    // Register an event listener when the Vue component is ready
    window.addEventListener('resize', this.onResize)
  },

  beforeDestroy() {
    // Unregister the event listener before destroying this Vue instance
    window.removeEventListener('resize', this.onResize)
  },
  destroyed() {
    this.$store.dispatch('closeMenu')
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
}

.items__inner {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.slider__motion {
  align-items: flex-end !important;
}

.slider__motion h2,
.slider__motion h4 {
  padding-left: 0px;
  padding-right: 100px;
}

.slider .slider__motion h4:hover a {
  color: red !important;
}

.layer {
  width: 100%;
  height: 100%;
  position: absolute;
  /* overflow: hidden; */
}

.social-bg {
  background: rgb(44, 44, 44) url('../assets/images/social-bg.jpg');
  top: 0;
  left: 0;
  bottom: 0;
  width: 100% !important;
  height: 100% !important;
  background-position-x: 0%;
  background-position-y: 0%;
  background-repeat: repeat;
  background-size: auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.social-obj {
  background: url('../assets/images/social-home.png');
  width: 101% !important;
  height: 100% !important;
  background-position: center !important;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-repeat: no-repeat;
  background-size: cover;
}

@media only screen and (max-width: 650px) {
  .social-obj {
    background-position: left -50rem bottom 30% !important;
    background-size: contain;
    width: 150% !important;
  }
}

.web-bg {
  background: rgb(44, 44, 44) url('../assets/images/web-bg.jpg');
  top: 0;
  left: 0;
  bottom: 0;
  width: 100% !important;
  height: 100% !important;
  background-position-x: 0%;
  background-position-y: 0%;
  background-repeat: repeat;
  background-size: auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.web-obj {
  background: url('../assets/images/web-home3.png');
  width: 100% !important;
  height: 100% !important;
  background-position: center;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-repeat: no-repeat;
  background-size: cover;
}

@media only screen and (max-width: 650px) {
  .web-obj {
    background-size: contain;
    width: 200% !important;
    background-position: left -52.5rem bottom 20% !important;
  }
}

.graphic-bg {
  background: rgb(44, 44, 44) url('../assets/images/graphic-bg.jpg');
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-position-x: 0%;
  background-position-y: 0%;
  background-repeat: repeat;
  background-size: auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.graphic-obj {
  background: url('../assets/images/graphic-home.png');
  width: 100% !important;
  height: 100% !important;
  background-position: center bottom !important;
  margin: auto;
  top: 0;
  left: 0;
  background-repeat: no-repeat;
  background-size: cover;
}

.graphic-obj-layer {
  z-index: 100;
}

.graphic-base {
  background: url('../assets/images/graphic-base.png');
  width: 100% !important;
  height: 100% !important;
  background-position: center !important;
  margin: auto;
  top: 0;
  left: 0;
  background-repeat: no-repeat;
  background-size: cover;
}

@media only screen and (max-width: 700px) {
  .graphic-base {
    width: 200% !important;
    background-position: left -50rem bottom !important;
    background-size: contain;
  }

  .graphic-obj {
    background-size: contain;
    width: 200% !important;
    background-position: left -50rem bottom 50px !important;
  }
}

.motion-bg {
  background: rgb(44, 44, 44) url('../assets/images/motion-bg.jpg');
  top: 0 !important;
  left: 0 !important;
  bottom: 0 !important;
  width: 100% !important;
  height: 100% !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
}

.motion-obj {
  background: url('../assets/images/motion-home5.png');
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 100% !important;
  height: 100% !important;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

@media only screen and (max-width: 700px) {
  .motion-obj {
    background-size: contain;
    width: 140% !important;
    top: 40rem;
  }
}

@media only screen and (min-width: 700px) {
  .motion-obj {
    background-size: contain;
    width: 130% !important;
    top: 5rem;
  }
}

@media only screen and (min-width: 768px) {
  .motion-obj {
    width: 140% !important;
    height: 100% !important;
  }
}

@media only screen and (min-width: 992px) {
  .motion-obj {
    width: 120% !important;
    height: 100% !important;
  }
}

@media only screen and (min-width: 1200px) {
  .motion-obj {
    width: 100% !important;
    height: 100% !important;
  }
}

@media only screen and (max-width: 650px) {
  .slider__title {
    padding-left: 40px !important;
  }

  .slider__description {
    padding-left: 40px !important;
  }

  .slider__motion {
    align-items: flex-start !important;
  }

  .slider__motion h4,
  .slider__motion h2 {
    padding-right: inherit !important;
  }
}

/* owl */

.owl-carousel div:not(.owl-controls) {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.slide {
  height: 100vh;
}
</style>
