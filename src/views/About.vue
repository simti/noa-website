<template>
  <main class="dark-bg">
    <section class="about__section about__section--hero dark-bg">
      <transition name="fade" appear>
        <img src="@/assets/images/about/noateam1.jpg" />
      </transition>
    </section>
    <Tab />
    <section class="about__section about__section--team dark-bg">
      <div class="p-lr">
        <p class="description__title left">
          Our team
        </p>
      </div>
      <swiper ref="mySwiper" :options="teamSwiperOptions">
        <swiper-slide
          class="team__slider"
          v-for="item in team_members"
          :key="item.id"
        >
          <Member
            :name="item.name"
            :job_title="item.job_title"
            :avatar_name="item.avatar_title"
          ></Member>
        </swiper-slide>
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
      </swiper>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </section>
    <section class="about__section about__section--services dark-bg">
      <div v-if="!isMobile">
        <div class="l-OC" data-module="ContentBlock" data-prllx-module="">
          <div
            class="c-Card rellax"
            v-rellax="{
              speed: 2
            }"
            style="margin-bottom:-500px"
          >
            <div class="u-fullParent js-a" style="opacity: 1;">
              <div class="u-absolute o-Img">
                <img src="@/assets/images/about/web.png" />
              </div>
            </div>
          </div>
          <div
            class="c-CItem_Text rellax"
            v-rellax="{
              speed: 0
            }"
          >
            <h3
              class="o-H2 js-l"
              style="transform: translate(0px); opacity: 1;"
            >
              Web Development
            </h3>
            <div class="js-l" style="transform: translate(0px); opacity: 1;">
              <div class="o-SText o-P1 -L -light">
                <p>
                  For 10+ years now, we’ve mastered the top web technologies to
                  deliver projects that have raked in investments. <br />A
                  trusted market leader in developing high performing web fronts
                  for every business.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="l-OC reverse"
          data-module="ContentBlock"
          data-prllx-module=""
        >
          <div
            class="c-Card rellax"
            v-rellax="{
              speed: 2
            }"
            style="margin-bottom:-600px"
          >
            <div class="u-fullParent js-a" style="opacity: 1;">
              <div class="u-absolute o-Img">
                <img src="@/assets/images/about/social.png" />
              </div>
            </div>
          </div>
          <div
            class="c-CItem_Text rellax"
            v-rellax="{
              speed: 0
            }"
          >
            <h3
              class="o-H2 js-l"
              style="transform: translate(0px); opacity: 1;"
            >
              History
            </h3>
            <div class="js-l" style="transform: translate(0px); opacity: 1;">
              <div class="o-SText o-P1 -L -light">
                <p>
                  Delassus group has existed for more than 70 years. The
                  Delassus philosophy is rooted in the fields that are dedicated
                  to growing its crops.<br />Created in 1948 by French growers,
                  the company was made up of one small packhouse and few
                  hectares of clementine trees. The Bennani Smires family bought
                  the company in 1962 and since then they have continued
                  investing and developing it. Today, from a single company,
                  Delassus has become a Group.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="l-OC" data-module="ContentBlock" data-prllx-module="">
          <div
            class="c-Card rellax"
            v-rellax="{
              speed: 2
            }"
            style="margin-bottom:-900px"
          >
            <div class="u-fullParent js-a" style="opacity: 1;">
              <div class="u-absolute o-Img">
                <img src="@/assets/images/about/motion.png" />
              </div>
            </div>
          </div>
          <div
            class="c-CItem_Text rellax"
            v-rellax="{
              speed: 0
            }"
          >
            <h3
              class="o-H2 js-l"
              style="transform: translate(0px); opacity: 1;"
            >
              History
            </h3>
            <div class="js-l" style="transform: translate(0px); opacity: 1;">
              <div class="o-SText o-P1 -L -light">
                <p>
                  Delassus group has existed for more than 70 years. The
                  Delassus philosophy is rooted in the fields that are dedicated
                  to growing its crops.<br />Created in 1948 by French growers,
                  the company was made up of one small packhouse and few
                  hectares of clementine trees. The Bennani Smires family bought
                  the company in 1962 and since then they have continued
                  investing and developing it. Today, from a single company,
                  Delassus has become a Group.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="l-OC reverse"
          data-module="ContentBlock"
          data-prllx-module=""
        >
          <div
            class="c-Card rellax"
            v-rellax="{
              speed: 2
            }"
            style="margin-bottom:-1000px"
          >
            <div class="u-fullParent js-a" style="opacity: 1;">
              <div class="u-absolute o-Img">
                <img src="@/assets/images/about/graphic.png" />
              </div>
            </div>
          </div>
          <div
            class="c-CItem_Text rellax"
            v-rellax="{
              speed: 0
            }"
          >
            <h3
              class="o-H2 js-l"
              style="transform: translate(0px); opacity: 1;"
            >
              History
            </h3>
            <div class="js-l" style="transform: translate(0px); opacity: 1;">
              <div class="o-SText o-P1 -L -light">
                <p>
                  Delassus group has existed for more than 70 years. The
                  Delassus philosophy is rooted in the fields that are dedicated
                  to growing its crops.<br />Created in 1948 by French growers,
                  the company was made up of one small packhouse and few
                  hectares of clementine trees. The Bennani Smires family bought
                  the company in 1962 and since then they have continued
                  investing and developing it. Today, from a single company,
                  Delassus has become a Group.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="">
          <p class="section__title--dark">
            Our Services
          </p>
        </div>
        <div class="service__mobile">
          <div class="service__mobile--image" style="text-align:center">
            <img
              src="@/assets/images/about/web.png"
              alt="web"
              style="width:100%"
            />
          </div>
          <div class="service__mobile--caption">
            <div class="service__mobile--title">web</div>
            <div class="service__mobile--desc">
              web is a good thing and we are so good at it web is a good thing
              and we are so good at it web is a good thing and we are so good at
              it
            </div>
          </div>
        </div>

        <div class="service__mobile">
          <div class="service__mobile--image" style="text-align:center">
            <img
              src="@/assets/images/social-mobile.png"
              alt="social"
              style="width:90%"
            />
          </div>
          <div class="service__mobile--caption">
            <div class="service__mobile--title">social</div>
            <div class="service__mobile--desc">
              social is a good thing and we are so good at it social is a good
              thing and we are so good at it social is a good thing and we are
              so good at it
            </div>
          </div>
        </div>

        <div class="service__mobile">
          <div class="service__mobile--image" style="text-align:center">
            <img
              src="@/assets/images/motion-mobile.png"
              alt="motion"
              style="width:90%"
            />
          </div>
          <div class="service__mobile--caption">
            <div class="service__mobile--title">motion</div>
            <div class="service__mobile--desc">
              motion is a good thing and we are so good at it motion is a good
              thing and we are so good at it motion is a good thing and we are
              so good at it
            </div>
          </div>
        </div>

        <div class="service__mobile">
          <div class="service__mobile--image" style="text-align:center">
            <img
              src="@/assets/images/about/graphic.png"
              alt="graphic"
              style="width:100%"
            />
          </div>
          <div class="service__mobile--caption">
            <div class="service__mobile--title" style="margin-top:20px;">
              graphic
            </div>
            <div class="service__mobile--desc">
              graphic is a good thing and we are so good at it graphic is a good
              thing and we are so good at it graphic is a good thing and we are
              so good at it
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="about__section about__section--clients dark-bg">
      <div class="">
        <p class="description__title">
          Our Clients
        </p>
      </div>
      <div class="clients__section--list">
        <swiper ref="mySwiper" :options="customerSwiperOptions">
          <swiper-slide
            v-for="item in clients"
            :key="item.id"
            class="client__slider "
          >
            <span class="client__container  ">
              <img :src="require('@/assets/images/clients/' + item + '')" />
            </span>
          </swiper-slide>
        </swiper>
      </div>
      <TheFooter />
    </section>
  </main>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import Member from '../components/Member.vue'
import Tab from '@/components/Tab.vue'
import 'swiper/css/swiper.css'
export default {
  components: {
    Swiper,
    SwiperSlide,
    Tab,
    Member
  },
  directives: {
    swiper: directive
  },
  name: 'carrousel',
  data() {
    return {
      clients: [
        'logo-facebook.svg',
        'logo-github.svg',
        'logo-patagonia.svg',
        'client-logos-robinhood.svg',
        'client-logos-2017_niantic.svg',
        'client-logos-2017_instagram.svg',
        'logo-youtube.svg'
      ],
      team_members: [
        {
          name: 'Elyas Pourreza',
          job_title: 'CEO / Art Director',
          avatar_title: 'elyas'
        },
        {
          name: 'Milad Hosseini',
          job_title: 'Motion Artist',
          avatar_title: 'milad'
        },
        {
          name: 'Mahboobeh Rashid',
          job_title: 'Graphic Designer / Illustrator',
          avatar_title: 'mahbube'
        },
        {
          name: 'Mahyar Moradmand',
          job_title: 'Web Developer',
          avatar_title: 'mahyar'
        },
        {
          name: 'Shadi Malekakhlagh',
          job_title: 'Photographer',
          avatar_title: 'shadi'
        },
        {
          name: 'Arian Zebardast',
          job_title: 'Film Director',
          avatar_title: 'arian'
        },
        {
          name: 'Narges Beigi',
          job_title: 'Account and Project Manager',
          avatar_title: 'narges'
        },
        {
          name: 'Shayan Khaleghparast',
          job_title: 'Web Developer',
          avatar_title: 'shayan'
        },
        {
          name: 'Reza Hamidzadeh',
          job_title: 'Public Relations',
          avatar_title: 'reza'
        }
      ],
      isMobile: window.innerWidth <= 786 ? true : false,
      teamSwiperOptions: {
        centeredSlides: false,
        pagination: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          768: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          540: {
            slidesPerView: 2,
            spaceBetween: 50
          }
        }
      },
      customerSwiperOptions: {
        centeredSlides: false,
        autoplay: {
          delay: 500,
          disableOnInteraction: true
        },

        breakpoints: {
          768: {
            slidesPerView: 6,
            spaceBetween: 0
          },
          540: {
            slidesPerView: 2,
            spaceBetween: 0
          }
        }
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
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy() {
    // Unregister the event listener before destroying this Vue instance
    window.removeEventListener('resize', this.onResize)
  },
  destroyed() {
    this.$store.dispatch('closeMenu')
  },
  methods: {
    onResize() {
      if (window.innerWidth <= 786) this.isMobile = true
      else this.isMobile = false
    }
  }
}
</script>

<style scoped>
/* .about__section--hero {
  background: rgb(44, 44, 44) url('../assets/images/noateam1.jpg') no-repeat;
  background-size: contain;
  background-position: center;
} */
.about {
  visibility: visible;
}
.description__title {
  display: flex;
  height: 100px;
  padding: 10px 1px;
  margin: 0;
  text-align: right;
  color: white;
  font-size: 4.5rem;
  position: relative;
  font-family: 'faktMedium';
  justify-content: center;
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
  height: 3px;
  width: 22rem;
  position: absolute;
  top: 0;
  right: 0;
}
.description__title.left::before {
  content: '';
  background: #00ff5b;
  height: 3px;
  width: 22rem;
  position: absolute;
  top: 0;
  left: 0;
}
.p-lr {
  padding: 0 15rem;
}
@media only screen and (max-width: 786px) {
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
    justify-content: center;
    font-size: 4.5rem;
    position: relative;
    font-family: 'faktMedium';
  }

  .p-lr {
    padding: 0 10rem;
  }

  .service__mobile {
    margin-bottom: 80px;
  }
  .service__mobile--title {
    font-size: 8rem;
    color: white;
    margin-bottom: 15px;
  }

  .service__mobile--caption {
    padding: 0 20px;
  }
  .service__mobile--desc {
    font-size: 3.5rem;
    line-height: 25px;
    color: white;
    text-align: justify;
  }

  .section__title--dark {
    font-size: 12rem;
    color: #404040;
    text-align: center;
    font-weight: bolder;
    font-family: 'faktMedium';
  }
}

/* new */
.l-OC.reverse {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  flex-direction: row-reverse;
}

.l-OC {
  border-left-width: 0;
  border-right-width: 0;
  width: 70vw;
  padding-bottom: 100px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  margin-bottom: 100px;
}

@media screen and (max-width: 786px) and (orientation: landscape) {
  .service__mobile--desc {
    font-size: 2.5rem !important;
  }
  .service__mobile--title {
    font-size: 4.5rem !important;
  }
}

@media only screen and (max-width: 786px) {
  .l-OC {
    margin-bottom: 0 !important;
    flex-direction: column;
  }

  .service__mobile--desc {
    font-size: 3.5rem;
  }
}

.c-Card,
.c-CItem_Text {
  width: 32.55vw;
}

.c-Card {
  position: relative;
}

.c-Card::before {
  display: block;
  width: 100%;
  content: '';
  padding-top: 126.75%;
}

.u-overflow-h {
  overflow: hidden;
}
.u-fullParent {
  position: absolute;
  top: 0;
  left: 0;
}
.u-fullParent,
.u-fullSize {
  width: 100%;
  height: 100%;
}

.c-CItem_BgHide {
  position: absolute;
  top: -2%;
  left: -2%;
  width: 140%;
  height: 140%;
  background: #fafafa;
  -webkit-transform-origin: top;
  transform-origin: top;
}

.l-OC :last-child {
  margin-bottom: 0;
}
.u-fullParent {
  position: absolute;
  top: 0;
  left: 0;
}
.u-fullParent,
.u-fullSize {
  width: 100%;
  height: 100%;
}

.o-Img {
  width: 118.72%;
  height: 69.69%;
  top: 25%;
  left: -9%;
  position: absolute;
  background-size: contain;
}

.o-Img img {
  width: 100%;
}

.c-CItem_Text {
  color: white;
}

.CItem_Text--reverse {
  padding-right: 10rem;
}

.CItem_Text--reverse {
  padding-left: 10rem;
}

.o-H2 {
  font-size: 1.8rem;
  line-height: 1.5;
  margin-bottom: 0.5555555556em;
}

.o-P1.-L {
  font-size: 1.8rem;
}

.o-P1.-light {
  opacity: 0.8;
}

.u-absolute.o-Img {
  width: 118.72%;
  height: 69.69%;
  top: 25%;
  left: -9%;
}

.swiper-button-prev::after,
.swiper-button-next::after {
  color: #00ff5b;
}

.swiper-button-next {
  right: 20px;
}

.swiper-button-prev {
  left: 20px;
}
</style>
