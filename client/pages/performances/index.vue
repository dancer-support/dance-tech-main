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
            <Location :location-name="locations[i]" />
            <PerformanceDate :start-at="performance.start_at" />
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
    const { performances } = await $axios.$get('/performances')
    const links = performances.map(performance => `/performances/${performance.id}`)
    const locations = performances.map(performance => performance.theater?.location ?? '未定')
    return {
      performances,
      links,
      locations
    }
  }
}
</script>
