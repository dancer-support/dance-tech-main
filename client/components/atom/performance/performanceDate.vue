<template>
  <div class="performance-block">
    <div class="d-flex performance-date">
      {{ performanceDate }}
    </div>
    <div class="d-flex performance-month">
      {{ performanceMonth }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'PerformanceDate',
  props: {
    startAt: {
      type: String,
      required: true
    }
  },
  computed: {
    performanceMonth () {
      const date = new Date(this.startAt)
      return date.toLocaleDateString('en-US', {
        month: 'long'
      })
    },
    performanceDate () {
      const date = new Date(this.startAt)
      return date.toLocaleDateString('en-US', {
        day: 'numeric'
      })
    }
  }
}
</script>

<style scoped>
.performance-block {
  width: 53px;
  height: 71px;
}

.performance-date {
  margin: 0 auto;
  font-size: 32px;
  color: #3e3e3e;
  text-align: center;
}

.performance-month {
  margin: 0 auto;
  font-size: 16px;
  text-align: center;
  color: #3e3e3e;
}
</style>
