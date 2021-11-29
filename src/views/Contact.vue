<template>
  <div class="wrapper dark-bg">
    <section class="row contactus contactus--info">
      <p class="description__title left">
        Contact us
      </p>
      <div class="contactus__info--body">
        <div class="contactus__info_body--content">
          <address>
            228 Grant Ave, 6th Fl.
            <br />
            San Francisco, CA 94108
          </address>
          <br />
          <span id="phone_number">
            <a href="tel:+981332233456">+98 1332233456</a>
          </span>
          <br />
          <span id="email">
            <a href="mailto:info@noa.agency">info@noa.agency</a>
          </span>
          <br />
          <span id="social">
            <a href="#" rel="instagram"><i class="fab fa-instagram"></i> </a>
            <a href="#"><i class="fab fa-behance"></i> </a>
            <a href="#"><i class="fab fa-dribbble"></i> </a>
            <a href="#"> <i class="fab fa-telegram"></i></a>
          </span>
        </div>
        <div
          class="contactus contactus--map"
          onclick="location.href=`https://www.google.com/maps/@37.2856731,49.5816619,16z` "
        ></div>
      </div>
    </section>
    <TheFooter />
  </div>
</template>

<script>
export default {
  destroyed() {
    this.$store.dispatch('closeMenu')
  }
}
</script>

<style scoped>
.wrapper {
  padding-top: 100px;
  padding-bottom: 100px;
  background: #131313;
  position: relative;
}
.contactus {
  position: relative;
  /* background: #f4f4f4; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.contactus--map {
  min-height: 30rem;
  height: auto;
  background-color: #f9f9f9;
  background: url('https://api.neshan.org/v2/static?key=service.TVVbRhTqepZK8lpMcUlqrL7zKnjZKSlEOhPFyJ6M&type=standard-night&zoom=17&center=37.285673,49.581662&width=1120&height=300&marker=violet');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  display: flex;
  flex: 1.5;
}

.contactus--map img {
  position: absolute;
  width: 100vw;
  cursor: pointer;
}

.contactus--info {
  display: flex;
  margin-top: 100px;
  margin-left: 10rem;
  margin-right: 10rem;
  justify-content: flex-start;
  height: auto;
  flex-direction: column;
  margin-bottom: 100px;
  padding-bottom: 70px;
  color: white;
}

.contactus__info--title {
  width: 100%;
  display: flex;
  font-size: 6rem;
  font-family: 'Superior Black', serif;
  font-weight: 900;
  letter-spacing: -4px;
  margin-top: -47px;
  color: #282828;
  position: relative;
  z-index: 1;
}

p.contactus__info_title--text {
  border-top: 1px solid #979797;
  /* margin-bottom: 30px; */
  padding-left: 50px;
  padding-top: 10px;
  text-align: right;
  /* background: yellow; */
  margin-top: 0;
  font-size: 2.5rem;
}

.contactus__info--body {
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  width: 100%;
}

.contactus__info_body--shape {
  width: 12rem;
  position: absolute;
  top: -25px;
  left: -48px;
  z-index: -1;
  animation: blobby-wiggle2 7s ease-in-out 0s infinite;
}

.contactus__info_body--shape img {
  width: 100%;
}

.contactus__info_body--content {
  z-index: 1;
  margin-top: 24px;
  padding: 0 50px 20px 50px;
  font-size: 2.5rem;
  text-align: right;
  line-height: 3.5rem;
  display: flex;
  flex: 1;
  flex-direction: column;
}

span#phone_number,
span#email,
span#social {
  font-size: 2rem;
}

.contactus__info_body--content a {
  text-decoration: none;
  color: inherit;
}
.description__title {
  display: flex;
  width: 100%;
  padding: 10px 0;
  margin: 0;
  text-align: right;
  color: white;
  font-size: 1.5rem;
  position: relative;
  font-family: 'faktMedium';
  padding-bottom: 5rem;
}

.description__title.left {
  justify-content: flex-start;
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

@media only screen and (max-width: 786px) {
  .description__title {
    font-size: 3.5rem;
  }
  .description__title.left::before {
    width: 20rem;
  }
  .contactus__info--body {
    flex-direction: column;
  }

  .contactus__info_body--content {
    padding: 50px 0;
    font-size: 4rem;
  }

  .contactus--info {
    padding-left: 5rem;
    padding-right: 5rem;
    margin-left: 0;
    margin-right: 0;
  }

  .contactus__info_body--content {
    font-size: 4rem;
    text-align: right;
    line-height: inherit;
  }
  span#phone_number,
  span#email,
  span#social {
    font-size: 3rem;
    margin-top: 0;
  }

  .contactus--map {
    min-height: 50rem;
  }
}
</style>
