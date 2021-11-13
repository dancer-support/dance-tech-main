<template>
  <client-only>
    <masonry
      :cols="{ default: 3, 1500: 4, 1000: 2, 700: 1, 400: 1 }"
      :gutter="{ default: '30px', 700: '15px' }"
    >
      <div v-for="(item, index) in items" :key="index">
        <v-img
          rel="preload"
          as="image"
          class="white--text align-end"
          :lazy-src="item.url"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          max-width="300"
          contain
        >
          <v-card-title v-text="item.title" />
        </v-img>
      </div>
    </masonry>
  </client-only>
</template>

<script>
export default {
  name: 'PagePerformance',
  async asyncData ({ $axios }) {
    const photos = await $axios.$get(
      'https://jsonplaceholder.typicode.com/photos',
      {
        params: {
          _limit: 20
        }
      }
    )
    return {
      items: photos
    }
  }
}
</script>
