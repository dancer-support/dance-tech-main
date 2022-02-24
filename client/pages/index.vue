<template>
  <div>
    <div v-for="item in items" :key="item.id">
      <v-card class="mx-auto" max-width="344">
        <nuxt-img preload as="image" :src="item.image" height="163px" />
        <!-- <v-img
        rel="preload"
        as="image"
        class="white--text align-end"
        :src="item.image"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        contain
      >
      </v-img> -->
        <div class="d-flex">
          <div v-text="item.text" />
          <div v-text="item.publishDate" />
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PagePerformance',
  async asyncData ({ $axios, $config }) {
    const [data, items] = await Promise.all([
      $axios.$get('/performance'),
      $axios.$get('https://dummyapi.io/data/v1/post', {
        params: { limit: 50 },
        headers: {
          'app-id': $config.DUMMY_APP_ID
        }
      })
    ])
    return {
      data,
      items
    }
  }
}
</script>
