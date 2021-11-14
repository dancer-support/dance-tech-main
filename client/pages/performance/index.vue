<template>
  <client-only>
    <masonry
      :cols="{ default: 6, 1920: 4, 1200: 3, 1024: 3, 768: 3, 480: 3 }"
      :gutter="{
        default: '10px',
        1920: '10px',
        1200: '10px',
        1024: '10px',
        768: '6px',
        480: '5px',
      }"
    >
      <div v-for="(item, index) in items" :key="index">
        <v-img
          rel="preload"
          as="image"
          class="white--text align-end"
          :src="item.image"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          max-width="300"
          contain
        >
          <v-card-subtitle v-text="item.text" />
          <v-icon class="ml-2 mb-2">
            mdi-heart
          </v-icon>
          <span class="subheading ml-2 mb-2">{{ item.likes }}</span>
        </v-img>
      </div>
    </masonry>
  </client-only>
</template>

<script>
export default {
  name: 'PagePerformance',
  async asyncData ({ $axios }) {
    const photos = await $axios.$get('https://dummyapi.io/data/v1/post', {
      params: { limit: 50 },
      headers: {
        'app-id': process.env.DUMMY_APP_ID
      }
    })
    return {
      items: photos.data
    }
  }
}
</script>
