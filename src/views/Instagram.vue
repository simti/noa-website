<template>
  <section class="instagram mb-10">
    <div
      class="d-flex flex-row flex-md-row flex-column flex-sm-column justify-center align-center"
    >
      <v-card
        v-for="(post, index) in posts"
        :key="index"
        tile
        class="pa-2 ma-2"
      >
        <a :href="post.href" class="post" rel="noopener" target="_blank">
          <img :src="post.url" width="100%" height="auto" />
        </a>
      </v-card>
    </div>
  </section>
</template>
<script>
import * as axios from 'axios'

const IG_API_URL = 'https://www.instagram.com/graphql/query/'
const IG_POST_URL = 'https://www.instagram.com/p'
const TIMELINE_QUERY_HASH = '9dcf6e1a98bc7f6e92953d5a61027b98'
const IMAGES_PER_PAGE = 5

export default {
  name: 'Instagram',
  data() {
    return {
      posts: [],
      imgProps: {
        w: 320,
        h: 320
      }
    }
  },
  async created() {
    const resp = await this.fetchData()
    if (
      !resp.data.hasOwnProperty('user') ||
      !resp.data.user.hasOwnProperty('edge_owner_to_timeline_media')
    ) {
      return
    }

    this.transformData(resp.data.user.edge_owner_to_timeline_media)
  },
  methods: {
    async fetchData() {
      const variables = { id: '20214540375', first: IMAGES_PER_PAGE }
      const api = axios.default.create()
      const resp = await api.get(IG_API_URL, {
        params: {
          query_hash: TIMELINE_QUERY_HASH,
          variables: JSON.stringify(variables)
        }
      })
      return resp.data
    },

    transformData(timeline) {
      if (!timeline.hasOwnProperty('edges')) {
        return
      }
      const edges = timeline.edges
      edges.forEach(edge => {
        if (
          !edge.hasOwnProperty('node') ||
          edge.node['__typename'] !== 'GraphImage'
        ) {
          return
        }
        const node = edge.node
        const thumbnails = node['thumbnail_resources']
        const urls = thumbnails.filter(
          t => t['config_width'] === this.imgProps.w
        )
        let url
        if (!urls || !urls.length) {
          url = thumbnails[0].src
        } else {
          url = urls[0].src
        }
        this.posts.push({
          url,
          href: `${IG_POST_URL}/${node['shortcode']}`
        })
      })
    }
  }
}
</script>
<style scoped>
.instagram {
  overflow: hidden;
}

@media all and (max-width: 640px) {
  .instagram {
    .ig-container {
      .columns {
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>
