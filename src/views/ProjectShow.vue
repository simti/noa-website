<template>
  <main class="wrapper">
    <transition name="fade" appear>
      <section class="project__container">
        <div class="project__description">
          <p class="description__title right">
            in brief
          </p>
          <p class="description__text">
            As the digital sphere becomes increasingly intertwined with the
            physical, basic human rights have become vulnerable on a whole new
            frontier. Jigsaw is a unit within Google that is using technology to
            identify, understand and confront developing digital threats to make
            people safer. We worked with the team at Jigsaw to develop a new
            brand, website and publishing platform capable of supporting their
            audacious and important work.
          </p>
          <p class="detail">
            client: {{ project.client }}<br />
            year: 2012 <br />
            category: {{ project.category }}
          </p>
        </div>
        <div
          class="big_title"
          v-rellax="{
            speed: 1.5
          }"
        >
          {{ project.title }}
        </div>
      </section>
    </transition>
    <section class="project__images">
      <p class="description__title left">
        screenshots
      </p>
      <div class="sc">
        <img class="screenshot" src="@/assets/images/project-bg2.png" />
      </div>
      <div class="sc">
        <img class="screenshot" src="@/assets/images/project-bg5.jpg" />
      </div>
      <div class="sc">
        <img class="screenshot" src="@/assets/images/project-bg.svg" />
      </div>
      <div class="sc">
        <img class="screenshot" src="@/assets/images/outro.jpg" />
      </div>
      <!-- <swiper class="swiper" :options="swiperOption">
        <swiper-slide>
          <img class="screenshot" src="@/assets/images/project-bg2.png" />
        </swiper-slide>
        <swiper-slide>
          <img class="screenshot" src="@/assets/images/project-bg5.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img class="screenshot" src="@/assets/images/project-bg.svg" />
        </swiper-slide>
        <swiper-slide>
          <img class="screenshot" src="@/assets/images/project-bg4.jpg" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper> -->
      <!-- Add Arrows -->
      <!-- <div class="bg-transition">
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div> -->
    </section>

    <TheFooter />
  </main>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import { mapState } from 'vuex'
export default {
  components: {
    // Swiper,
    // SwiperSlide
  },
  directives: {
    swiper: directive
  },
  name: 'swiper-example-3d-coverflow',
  title: '3D Coverflow effect',
  data() {
    return {
      swiperOption: {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        keyboard: {
          enabled: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  props: ['id'],
  created() {
    this.$store.dispatch('fetchProject', this.id)
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
    ...mapState(['project'])
  },
  destroyed() {
    this.$store.dispatch('closeMenu')
  },
  mounted() {}
}
</script>

<style scoped>
.wrapper {
  padding-top: 100px;
  padding-bottom: 100px;
  background: #131313;
  position: relative;
}
.project__container {
  background: rgb(19, 19, 19);
  color: white;
  min-height: 50rem;
  display: flex;
  flex-wrap: wrap;
  position: relative;
}

.sc {
  height: 40rem;
  background: white;
  margin-bottom: 15px;
}

.project__description {
  display: flex;
  flex: 1;
  margin-top: 100px;
  flex-direction: column;
  padding: 0 20rem;
  z-index: 1;
}
.description__title {
  display: flex;
  height: 100px;
  padding: 10px 1px;
  margin: 0;
  text-align: right;
  color: white;
  font-size: 1.5rem;
  position: relative;
  font-family: 'faktMedium';
}

.description__title.left {
  justify-content: flex-start;
}
.description__title.right {
  justify-content: flex-end;
}

.description__title.right::before {
  content: '';
  background: #00ff5b;
  height: 2px;
  width: 7rem;
  position: absolute;
  top: 0;
  right: 0;
}

.description__title.left::before {
  content: '';
  background: #00ff5b;
  height: 2px;
  width: 10rem;
  position: absolute;
  top: 0;
  left: 0;
}

.description__text {
  display: flex;
  /* flex: 1; */
  margin: 0;
  font-size: 2.14rem;
  padding-right: 7rem;
  font-family: 'faktLight';
}

.big_title {
  position: absolute;
  bottom: -12rem;
  right: 0;
  left: 0;
  height: 22rem;
  text-transform: capitalize;
  white-space: nowrap;
  font-family: 'superiorBlack';
  font-size: 19rem;
  overflow: hidden;
  color: #1e1e1e;
  letter-spacing: -1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.project__detail {
  height: 20rem;
  color: white;
  display: flex;
  justify-content: flex-start;
  padding: 15px 8rem;
  font-size: 3rem;
  position: relative;
  z-index: 2;
  flex-direction: row;
}

.bg-transition {
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  padding: 20px 0;
  align-items: center;
}

.services {
  margin: 0 1.2rem;
}

.services--title {
  font-size: 1.5rem;
  margin-bottom: 20px;
  position: relative;
  text-align: center;
}

.services--title::before {
  content: '';
  position: absolute;
  height: 2px;
  background: #00ff5b;
  bottom: -5px;
  width: 80%;
  right: 10%;
  left: 10%;
}

.services--list {
  font-size: 1.2rem;
  text-align: center;
}

.project__images {
  min-height: 50rem;
  margin: auto;
  margin-bottom: 15rem;
  position: relative;
  padding: 50px 20rem;
}

.swiper {
  height: 100%;
  width: 100%;
}
.swiper .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 1.4rem;
  background-color: #131313;
  background-position: center;
  background-size: cover;
  color: white;
}
.swiper .swiper-pagination {
  position: absolute;
  text-align: center;
  transition: opacity 0.3s;
  transform: translateZ(0);
  z-index: 10;
}
.swiper
  .swiper
  .swiper-pagination
  .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background-color: #fff;
}

.screenshot {
  /* filter: grayscale(100%);
  -webkit-filter: grayscale(100%); */
  transition: all 0.41s;
  width: 100%;
  height: 100%;
}

.swiper-button-prev,
.swiper-button-next {
  color: #00ff5b;
  position: relative;
  margin: 0 35px;
}

.detail {
  font-size: 2rem;
}

/* .screenshot:hover {
  filter: grayscale(0%);
  -webkit-filter: grayscale(0%);
} */
@media screen and (max-width: 786px) and (orientation: landscape) {
  .big_title {
    font-size: 20rem !important;
  }
}
@media only screen and (max-width: 786px) {
  .big_title {
    position: absolute;
    bottom: -27rem;
    right: 0;
    left: 0;
    height: 22rem;
    text-transform: capitalize;
    white-space: nowrap;
    font-family: 'superiorBlack';
    font-size: 24rem;
    overflow: hidden;
    color: #1e1e1e;
    letter-spacing: -1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .detail {
    /* padding-left: 5rem; */
    font-size: 18px;
  }

  .sc {
    height: 50rem;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 10rem;
  }
  .description__text {
    display: flex;
    flex: 1;
    margin: 0;
    font-size: 18px;
    text-align: justify;
    /* padding: 0 5rem; */
    font-family: 'faktLight';
  }
  .description__title.right::before {
    width: 20rem;
  }

  .description__title.left::before {
    width: 30rem;
  }

  .description__title {
    display: flex;
    height: 65px;
    padding: 10px 1px;
    margin: 0;
    text-align: right;
    justify-content: flex-end;
    font-size: 4.5rem;
    position: relative;
    font-family: 'faktMedium';
  }

  .project__description {
    display: flex;
    flex: 1;
    margin-top: 40px;
    flex-direction: column;
    padding: 0 10rem;
    z-index: 1;
  }

  .project__images {
    padding: 50px 10rem;
  }

  .project__detail {
    height: 20rem;
    color: white;
    display: flex;
    justify-content: flex-start;
    padding: 15px 10rem;
    font-size: 6rem;
    position: relative;
    z-index: 2;
    flex-direction: row;
    margin-top: 30rem;
  }
  .services {
    margin: 0 2rem;
  }
  .services--title {
    font-size: 4rem;
    margin-bottom: 20px;
    position: relative;
    text-align: center;
  }

  .services--title::before {
    content: '';
    position: absolute;
    height: 2px;
    background: #00ff5b;
    bottom: -8px;
    width: 97%;
    right: 0;
    left: 0;
  }
  .services--list {
    font-size: 3.2rem;
    text-align: center;
  }

  .project__images {
    margin-bottom: 0;
    padding-bottom: 40rem;
  }
  .screenshot {
    filter: grayscale(0%);
    -webkit-filter: grayscale(0%);
  }
}
</style>
