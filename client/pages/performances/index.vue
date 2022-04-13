<template>
  <v-container>
    <v-row
      v-for="performance, i in performances"
      :key="performance.id"
    >
      <v-card class="mx-auto" width="100%">
        <NuxtLink :to="links[i]">
          <p>{{ performance.title }}</p>
          <div class="d-flex">
            <Location :location-name="location" />
            <PerformanceDate :start-at="startAt" />
          </div>
        </NuxtLink>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
const Location = () => import('@/components/atom/icon/location')
const PerformanceDate = () =>
  import('@/components/atom/performance/phase0/performanceDate')

const components = {
  Location,
  PerformanceDate
}

export default {
  name: 'PagePerformances',
  components,
  async asyncData ({ $axios }) {
    const startAt = '2022-04-07T11:52:37.344Z'
    const location = '東京'
    const { performances } = await $axios.$get('/performances')
    const links = performances.map(performance => `/performances/${performance.id}`)
    return {
      performances,
      links,
      startAt,
      location
    }
  }
}
</script>
