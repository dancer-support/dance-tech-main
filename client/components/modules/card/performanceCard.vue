<template>
  <v-card class="mx-auto performance-card">
    <NuxtLink :to="`/performances/${performance.id}`" class="performance-link">
      <div class="performance-date">
        <PerformanceDate :start-at="performance.start_at" />
      </div>
      <div class="performance-description">
        <p class="performance-title">
          {{ performance.title }}
        </p>
        <p class="performance-theater">
          {{ theater.name }}
        </p>
        <p class="performance-time">
          {{ performanceTime }}
        </p>
        <Location :location-name="location" />
      </div>
    </NuxtLink>
  </v-card>
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
  components,
  props: {
    performance: {
      type: Object,
      required: true
    },
    theater: {
      type: Object,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    performanceTime: {
      type: String,
      required: true
    }
  }
}
</script>
<style scoped>
.performance-card {
  margin-bottom: 14px;
  padding: 10px 15px;
  width: 100%;
}
.performance-link{
  display: flex;
}
.performance-card > a {
  text-decoration: none;
}
.performance-card > a:hover {
  text-decoration: none;
}
.performance-description {
  display: block;
  max-width: 200px;
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
  display: block;
  max-width: 50px;
  width: 100%;
}
</style>
