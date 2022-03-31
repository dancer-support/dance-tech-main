<template>
  <div>
    <div v-for="item in items" :key="item.id">
      <v-card class="mx-auto" max-width="344">
        <v-img
          rel="preload"
          as="image"
          class="white--text align-end"
          :src="item.image"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          contain
        >
          <div class="d-flex">
            <div v-text="item.text" />
            <div v-text="item.publishDate" />
          </div>
        </v-img>
      </v-card>
    </div>
    <v-card>
      <div v-html="data" />
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'PagePerformances',
  async asyncData ({ $axios, $config }) {
    const [data, items] = await Promise.all([
      $axios.$get('/performances'),
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
