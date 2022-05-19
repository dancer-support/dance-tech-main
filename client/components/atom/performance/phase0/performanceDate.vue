<template>
  <div class="d-block performance-header">
    {{ performanceDate }}
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
    performanceDate () {
      const date = new Date(this.startAt)
      return date.toLocaleDateString()
    }
  }
}
</script>

<style>
.performance-header {
  width: 50%;
  text-align: right;
  margin: 0.5rem;
  color: #3e3e3e;
}
</style>
