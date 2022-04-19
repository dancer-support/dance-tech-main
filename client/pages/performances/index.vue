<template>
  <v-container>
    <v-row
      v-for="performance in performances"
      :key="performance.id"
    >
      <v-card class="mx-auto performance-card" width="100%">
        <NuxtLink :to="`/performances/${performance.id}`">
          <p>{{ performance.title }}</p>
          <div class="d-flex">
            <Location :location-name="location" />
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
  import('@/components/atom/performance/phase1/performanceDate')

const components = {
  Location,
  PerformanceDate
}

export default {
  name: 'PagePerformances',
  components,
  async asyncData ({ $axios }) {
    const location = '東京'
    const theater = {
      id: '1',
      name: '新国立劇場'
    }

    const { performances } = await $axios.$get('/performances')
    return {
      performances,
      location,
      theater
    }
  }
}
</script>

<style scoped>
.performance-card {
  margin-bottom: 14px;
}
.performance-card > a {
  text-decoration: none;
}
</style>
