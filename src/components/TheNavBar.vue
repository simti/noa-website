<template>
  <!-- <router-link to="/" class="brand">NOA</router-link>
    <nav>
      <router-link :to="{ name: 'projects' }">Projects</router-link> |
      <router-link :to="{ name: 'contact' }">Contact</router-link> |
      <router-link :to="{ name: 'about-us' }">About</router-link>
    </nav> -->

  <nav>
    <button class="btn btn__nav" @click="openMenu">
      <img src="@/assets/images/bars_white.svg" />
    </button>
    <div class="logo__container">
      <router-link
        :to="{ name: 'home' }"
        style="text-decoration: none !important;color: initial !important;width:100px"
      >
        <img class="logo" src="@/assets/images/logo-dark.png" />
        <template> </template>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    openMenu() {
      this.$store.dispatch('openMenu')
    }
  }
}
</script>

<style>
nav {
  position: fixed;
  left: 0;
  right: 0;
  align-items: center;
  min-height: 100px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  z-index: 1000;
  padding: 0 10px;
}

button.btn.btn__nav {
  height: 45px;
  width: 45px;
  background: transparent;
  border: 0;
  cursor: pointer;
  display: flex;
  margin-right: 15px;
}

button.btn.btn__nav img {
  width: 100%;
  height: 100%;
}

.logo__container {
  height: 100%;
  width: 70px;
  margin-left: 15px;
}

/* @media only screen and (max-width: 700px) {
  .logo__container {
    height: 100%;
    width: 75px;
  }
} */

@media only screen and (max-width: 540px) {
  .logo__container {
    height: 100%;
    width: 60px;
    margin-top: -10px;
    margin-left: 0px;
  }

  button.btn.btn__nav {
    margin-right: 0px !important;
  }
}

img.logo {
  width: 100%;
  height: 100%;
}

@media only screen and (max-width: 786px) {
  button.btn.btn__nav {
    width: 50px;
    height: 50px;
  }
}
</style>
