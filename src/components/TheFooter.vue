<template>
  <footer>
    <!-- <slot name="summary"></slot>
    <slot name="slogan"></slot>
    <div class="footer">
      <div class="footer__container">
        <div class="footer__column">
          <ul class="footer__column--left">
            <li class="footer__item footer__item--header">header 1</li>
            <li class="footer__item">item 1</li>
            <li class="footer__item">item 2</li>
          </ul>
        </div>
        <div class="footer__column">
          <ul class="footer__column--middle">
            <li class="footer__item footer__item--header">header 2</li>
            <li class="footer__item">item 1</li>
            <li class="footer__item">item 2</li>
          </ul>
        </div>
        <div class="footer__column">
          <ul class="footer__column--right">
            <li class="footer__item footer__item--header">Latest</li>
            <li class="footer__item">instagram</li>
            <li class="footer__item">twitter</li>
            <li class="footer__item">telegram</li>
          </ul>
        </div>
      </div>
    </div> -->
    <span>
      <a href="https://instagram.com" target="_blank">
        <img src="@/assets/images/instagram.svg" />
      </a>
    </span>
    <span>
      <a href="https://instagram.com" target="_blank">
        <img src="@/assets/images/behance.svg" />
      </a>
    </span>
    <span>
      <a href="https://instagram.com" target="_blank">
        <img src="@/assets/images/dribbble.svg" />
      </a>
    </span>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
footer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 2rem 0;
}

footer span {
  width: 24px;
  height: 24px;
  margin: 5px;
}

span img {
  width: 100%;
  height: 100%;
}
</style>
