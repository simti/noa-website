<template>
  <main class="wrapper">
    <div class="summary--tab pb">
      <span
        class="summary__tab--item "
        :class="{ active: activeItemKey['web'] }"
        @click.prevent="setActive('web')"
        >web</span
      >
      <span
        class="summary__tab--item"
        :class="{ active: activeItemKey['marketing'] }"
        @click.prevent="setActive('marketing')"
        >marketing</span
      >
      <span
        class="summary__tab--item"
        :class="{ active: activeItemKey['branding'] }"
        @click.prevent="setActive('branding')"
        >branding</span
      >

      <span
        class="summary__tab--item"
        :class="{ active: activeItemKey['motion'] }"
        @click.prevent="setActive('motion')"
        >motion</span
      >
    </div>
    <div class="projects_container">
      <template v-if="activeItem === 'web'">
        <ProjectCard
          v-for="element in webProjects"
          :key="element.id"
          :project="element"
        />
      </template>
      <template v-else-if="activeItem === 'marketing'">
        <ProjectCard
          v-for="element in marketingProjects"
          :key="element.id"
          :project="element"
        />
      </template>
      <template v-else-if="activeItem === 'branding'">
        <ProjectCard
          v-for="element in brandingProjects"
          :key="element.id"
          :project="element"
        />
      </template>
      <template v-else>
        <ProjectCard
          v-for="element in motionProjects"
          :key="element.id"
          :project="element"
        />
      </template>
    </div>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import ProjectCard from '@/components/ProjectCard.vue'
export default {
  components: {
    ProjectCard
  },
  data() {
    return {
      baseUrl: process.env.VUE_APP_BASE_URL,
      activeItem: 'web'
    }
  },
  methods: {
    setActive(menuItem) {
      this.activeItem = menuItem
    }
  },
  computed: {
    activeItemKey() {
      return {
        web: this.activeItem === 'web',
        marketing: this.activeItem === 'marketing',
        branding: this.activeItem === 'branding',
        motion: this.activeItem === 'motion'
      }
    },
    webProjects() {
      return this.projects.filter(project => project.category === 'web')
    },
    marketingProjects() {
      return this.projects.filter(project => project.category === 'marketing')
    },
    brandingProjects() {
      return this.projects.filter(project => project.category === 'branding')
    },
    motionProjects() {
      return this.projects.filter(project => project.category === 'motion')
    },
    ...mapState(['projects'])
  },
  created() {
    // this.$store.dispatch('fetchProjects')
  },
  destroyed() {
    this.$store.dispatch('closeMenu')
  }
}
</script>

<style scoped>
.pb {
  padding-bottom: 5rem;
}
.wrapper {
  padding: 100px 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 786px;
  background: rgb(29, 28, 28);
}
.projects_container {
  display: inline-flex;
  flex-wrap: wrap;
  margin: 0;
  width: 100%;
  justify-content: center;
}
</style>
