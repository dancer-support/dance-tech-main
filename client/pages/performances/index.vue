<template>
  <v-container>
    <v-row v-for="performance in performances" :key="performance.id">
      <v-card class="mx-auto performance-card" width="100%">
        <NuxtLink :to="`/performances/${performance.id}`">
          <div class="d-inline-block performance-date">
            <PerformanceDate :start-at="performance.start_at" />
          </div>
          <div class="d-inline-block performance-description">
            <p class="performance-title">
              {{ performance.title }}
            </p>
            <p class="performance-theater">{{ theater.name }}</p>
            <p class="performance-time">{{ performanceTime }}</p>
            <Location :location-name="location" />
          </div>
        </NuxtLink>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
const Location = () => import('@/components/atom/icon/location')
const PerformanceDate = () =>
  import('@/components/atom/performance/performanceDate')

const components = {
  Location,
  PerformanceDate
}

export default {
  name: 'PagePerformances',
  components,
  async asyncData ({ $axios }) {
    const location = '東京'
    const now = new Date()
    const time = `${now.getHours()}:${now.getMinutes()}`
    const performanceTime = `${time}-${time}`
    const theater = {
      id: '1',
      name: '新国立劇場'
    }

    const { performances } = await $axios.$get('/performances')
    return {
      performances,
      performanceTime,
      location,
      theater
    }
  }
}
</script>

<style scoped>
.performance-card {
  margin-bottom: 14px;
  padding: 10px 15px;
}
.performance-card > a {
  text-decoration: none;
}
.performance-card > a:hover {
  text-decoration: none;
}
.performance-description > p {
  display: flex;
  color: #3e3e3e;
  margin-bottom: 2px;
}
.performance-time {
  font-size: 11px;
  color: #3e3e3e;
}
.performance-theater {
  font-size: 11px;
  color: #3e3e3e;
}
.performance-date {
  vertical-align: top;
}
</style>
