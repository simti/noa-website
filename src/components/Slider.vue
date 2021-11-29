<template>
  <section class="row works">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <div class="work_container">
          <div class="item_box">
            <div class="items__inner" id="js-scene1">
              <div class="items__layer layer bellow" data-depth="1">
                <div class="items__item"></div>
              </div>
            </div>
          </div>
          <div class="item_btn">Project X</div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="work_container">
          <div class="item_box">
            <div class="items__inner" id="js-scene1">
              <div class="items__layer layer top2" data-depth="0.25">
                <div class="items__item"></div>
              </div>
              <div class="items__layer layer top3" data-depth="0.5">
                <div class="items__item"></div>
              </div>
            </div>
          </div>
          <div class="item_btn">Project Y</div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="work_container">
          <div class="item_box">
            <div class="items__inner" id="js-scene1">
              <div class="items__layer layer middle" data-depth="0.80">
                <div class="items__item"></div>
              </div>
            </div>
          </div>
          <div class="item_btn">Project Z</div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  name: 'carrousel',
  data() {
    return {
      swiperOptions: {
        centeredSlides: false,
        loop: false
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    this.swiper.slideTo(0, 2000, false)
  }
}
</script>

<style scoped></style>
