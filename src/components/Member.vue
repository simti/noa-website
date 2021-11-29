<template>
  <div class="team__member">
    <div class="team__member--info light-text light-text">
      <div class="member__info--name">{{ name }}</div>
      <div class="member__info--job_title">{{ job_title }}</div>
    </div>
    <img :src="require('@/assets/images/team/' + avatar_name + '.jpg')" />
  </div>
</template>
<script>
export default {
  props: ['name', 'job_title', 'avatar_name']
}
</script>
