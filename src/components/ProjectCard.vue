<template>
  <transition name="fade" appear>
    <router-link :to="{ name: 'project-show', params: { id: project.id } }">
      <div class="item">
        <div
          class="grid__item--inner green-hover"
          :style="{ backgroundImage: 'url(' + imageUrl + ')' }"
        ></div>
        <div class="sub">
          <span class="sub--top">{{ project.title }}</span>
        </div>
      </div>
    </router-link>
  </transition>
</template>

<script>
export default {
  props: ['project'],
  data() {
    return {
      colors: ['red', 'blue', 'green']
    }
  },
  computed: {
    imageUrl() {
      return require('@/assets/images/' + this.project.image)
    },
    randomColor() {
      return this.colors[Math.floor(Math.random() * this.colors.length)]
    }
  }
}

// :class="{
//   'blue-hover': randomColor == 'blue',
//   'red-hover': randomColor == 'red',
//   'green-hover': randomColor == 'green'
// }"
</script>

<style scoped>
.grid__item--inner {
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center !important;
  width: 100%;
  height: 100%;
  transform: scale(1);
  transition: all 1s;
}

.grid__item--inner::before {
  content: '';
  position: absolute;
  top: 100%;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
}

.blue-hover::before {
  background-image: linear-gradient(to bottom right, #1418f2, #000000);
}

.red-hover::before {
  background-image: linear-gradient(to bottom right, #ff0000, #3a0000);
}

.green-hover::before {
  background-image: linear-gradient(to bottom right, #0dff00, #053a00);
}

.item {
  overflow: hidden;
  display: inline-block;
  padding: 0;
  width: 25rem;
  height: 25rem;
  margin: 10px;
  position: relative;
  cursor: pointer;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
  transition: all 0.3s ease-in;
}

@media only screen and (max-width: 540px) {
  .item {
    display: inline-block;
    padding: 0;
    width: 80vw;
    height: 80vw;
  }
  .sub {
    font-size: 10rem !important;
  }
}
@media only screen and (min-width: 541px) and (max-width: 752px) {
  .item {
    display: inline-block;
    padding: 0;
    width: 45vw;
    height: 45vw;
  }
}
.item:hover .grid__item--inner {
  transform: scale(1.2) !important;
}

.item:hover .grid__item--inner::before {
  opacity: 0.7;
}

.item:hover .sub {
  transform: translateY(0);
}

.item:hover .grid__item--inner {
  filter: blur(6px) !important;
}

.item:hover {
  transform: translateY(-10px);
}

.sub {
  position: absolute;
  font-size: 3rem;
  font-weight: bold;
  display: flex;
  height: 5rem;
  flex-direction: column;
  min-width: 80%;
  color: white;
  bottom: 0;
  left: 15px;
  transform: translateY(300%);
  transition: all 0.8s cubic-bezier(0, 1, 0.48, 1.03);
  width: auto;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-family: 'GiloryExtraBold';
  letter-spacing: 3px;
  text-align: center;
}

.sub--bottom::before {
  content: '';
  width: 13rem;
  height: 2px;
  background: white;
  position: absolute;
  top: 2.5rem;
}
</style>
