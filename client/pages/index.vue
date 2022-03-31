<template>
  <div>
    <div v-for="item in items.data" :key="item.id">
      <v-card class="mx-auto" max-width="343">
        <WideImage :src="item.image" />
        <Location :location-name="item.tags[0]" />
      </v-card>
    </div>
    <v-card>
      <div v-html="data" />
    </v-card>
  </div>
</template>

<script>
const Location = () => import('@/components/atom/icon/location')
const WideImage = () => import('@/components/atom/image/wideImage')
export default {
  name: 'PagePerformances',
  components: {
    WideImage,
    Location
  },
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
