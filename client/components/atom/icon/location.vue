<template>
  <div class="d-flex d-inline-flex location-header">
    <v-icon class="location-icon" aria-label="location" role="img" aria-hidden="false" size="12">
      {{ location }}
    </v-icon>
    <div class="location-name text-caption">
      {{ locationName }}
    </div>
  </div>
</template>

<script>
import { mdiMapMarker } from '@mdi/js'
export default {
  name: 'Location',
  props: {
    locationName: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      location: mdiMapMarker
    }
  }
}
</script>

<style scoped>
.location-header {
  width: 50%;
}
.location-icon {
  margin: 0.5rem;
}
.location-name {
  margin: 0.25rem;
  color: #3E3E3E;
}
</style>
