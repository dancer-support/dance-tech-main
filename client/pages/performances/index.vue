<template>
  <v-container>
    <v-row v-for="performance in performances" :key="performance.id" class="mx-2">
      <PerformanceCard :performance="performance" :theater="theater" :location="location" :performance-time="performanceTime" />
    </v-row>
  </v-container>
</template>

<script>
const PerformanceCard = () => import('@/components/modules/card/performanceCard')

const components = {
  PerformanceCard
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
