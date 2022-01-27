<template>
  <v-row>
    <v-col v-for="(blog, i) in blogs" :key="i">
      <Card
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

export default {
  components: { Card },
  transition: 'slide-left',
  // middleware: 'auth',
  asyncData: async ({ $config }) => {
    const config = {
      CTF_SPACE_ID: $config.CTF_SPACE_ID,
      CTF_CDA_ACCESS_TOKEN: $config.CTF_CDA_ACCESS_TOKEN
    }

    const client = createClient(config)

    try {
      const entries = await client.getEntries($config.CTF_BLOG_POST_TYPE_ID)
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
