import Vue from 'vue'
import Vuex from 'vuex'
import ProjectsService from '../services/ProjectService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu_open: false,
    projects: [
      {
        id: 1,
        title: 'NOA Website',
        description: "Let's clean up this beach",
        category: 'marketing',
        image: 'p-bg-2.jpg',
        client: 'NOA'
      },
      {
        id: 2,
        title: 'Project X',
        description: "Let's clean up this beach",
        category: 'marketing',
        image: 'p-bg-6.jpg',
        client: 'Iran'
      },
      {
        id: 3,
        title: 'Toyota WebGl',
        description: "Let's clean up this beach",
        category: 'web',
        image: 'p-bg-8.jpg',
        client: 'Toyota'
      },
      {
        id: 4,
        title: 'Nikfard Seo',
        description: "Let's clean up this beach",
        category: 'branding',
        image: 'p-bg-7.png',
        client: 'Nikfard'
      },
      {
        id: 9324485,
        category: 'branding',
        title: 'cataloge',
        description: 'sdf',
        image: 'p-bg-7.jpg',
        client: 'Deelbab'
      },
      {
        id: 6491816,
        category: 'branding',
        title: '7up redesign',
        description: 'second annuary conferance',
        image: 'p-bg-4.jpg',
        client: '7up'
      },
      {
        id: 24234,
        title: 'Nikfard Website',
        description: "Let's clean up this beach",
        category: 'web',
        image: 'p-bg-4.jpg',
        client: 'Nikfard'
      },
      {
        id: 8882974,
        category: 'web',
        title: 'Deelbab',
        description: 'rtfyrty',
        image: 'p-bg-3.png',
        client: 'Deelbab'
      },
      {
        id: 35,
        title: 'Jobinja',
        description: "Let's clean up this beach",
        category: 'motion',
        image: 'p-bg-9.png',
        client: 'Jobinja'
      },
      {
        id: 45,
        title: 'Digipay',
        description: "Let's clean up this beach",
        category: 'motion',
        image: 'p-bg-2.jpg',
        client: 'Digikala'
      },
      {
        id: 93245485,
        category: 'motion',
        title: 'Asre Jadid',
        description: 'sdf',
        image: 'p-bg-10.png',
        client: 'TV3'
      },
      {
        id: 64941816,
        category: 'motion',
        title: 'TalaHost',
        description: 'second annuary conferance',
        image: 'p-bg-1.jpg',
        client: 'talaHost'
      }
    ],
    project: {}
  },
  mutations: {
    OPEN_MENU(state) {
      state.menu_open = true
    },
    CLOSE_MENU(state) {
      state.menu_open = false
    },
    // SET_PROJECTS(state, projects) {
    //   state.projects = projects
    // },
    SET_PROJECT(state, id) {
      state.project = state.projects.find(project => project.id == id)
    }
  },
  actions: {
    openMenu({ commit }) {
      commit('OPEN_MENU')
    },
    closeMenu({ commit }) {
      commit('CLOSE_MENU')
    },
    // fetchProjects({ commit }) {
    //   ProjectsService.getProjects()
    //     .then(response => {
    //       commit('SET_PROJECTS', response.data)
    //     })
    //     .catch(error => {
    //       console.log(error.response)
    //     })
    // },
    fetchProject({ commit }, id) {
      commit('SET_PROJECT', id)
    }
  },
  getters: {
    getProjectById: state => id => {
      return state.projects.find(project => project.id === id)
    }
  },
  modules: {}
})
