<template>
  <div>
    <div v-for="item in items.data" :key="item.id">
      <v-card class="mx-auto" max-width="343">
        <WideImage :src="item.image" />
        <div class="d-flex">
          <Location :location-name="location" />
          <PerformanceDate :start-at="startAt" />
        </div>
      </v-card>
    </div>
    <v-card>
      <div v-html="data" />
    </v-card>
  </div>
</template>

<script>
const Location = () => import('@/components/atom/icon/location')
const PerformanceDate = () =>
  import('@/components/atom/performance/phase0/performanceDate')
export default {
  name: 'PagePerformances',
  components: {
    Location,
    PerformanceDate
  },
  async asyncData ({ $axios, $config }) {
    const startAt = '2022-04-07T11:52:37.344Z'
    const location = '東京'
    const [data, items] = await Promise.all([
      $axios.$get('/performances'),
      $axios.$get('https://dummyapi.io/data/v1/post', {
        params: { limit: 10 },
        headers: {
          'app-id': $config.DUMMY_APP_ID
        }
      })
    ])
    return {
      data,
      items,
      startAt,
      location
    }
  }
}
</script>
