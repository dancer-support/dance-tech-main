<template>
  <v-row>
    <v-col v-for="(blog, i) in blogs" :key="i">
      <card
        :title="blog.fields.title"
        :text="blog.fields.text"
        :thumbnail="blog.fields.thumbnail"
        :person="blog.fields.person"
      />
    </v-col>
  </v-row>
</template>
<script>
import Card from '~/components/Card'
import { createClient } from '~/plugins/contentful'

const client = createClient()

export default {
  components: { Card },
  transition: 'slide-left',
  asyncData: async ({ env }) => {
    try {
      const entries = await client.getEntries(env.CTF_BLOG_POST_TYPE_ID)
      // TODO: filter when fetch?
      return {
        blogs: entries.items.filter(
          item => item.sys.contentType.sys.id === 'blog'
        )
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    }
  }
}
</script>
