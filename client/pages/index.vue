<template>
  <div>
    <div v-for="performance in performances.data" :key="performance.id">
      <v-card class="mx-auto" max-width="343">
        <WideImage :src="performance.image" />
        <div class="d-flex">
          <Location :location-name="location" />
          <PerformanceDate :start-at="startAt" />
        </div>
      </v-card>
    </div>
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
  async asyncData ({ $axios }) {
    const startAt = '2022-04-07T11:52:37.344Z'
    const location = '東京'
    const [performances] = await Promise.all([
      $axios.$get('/performances'),
    ])
    return {
      performances,
      startAt,
      location
    }
  }
}
</script>
