<template>
  <div class="d-flex d-inline-flex location-header">
    <v-icon class="location-icon" aria-label="location" role="img" aria-hidden="false" size="10">
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
  width: 250px;
  height: 25px;
}
.location-icon {
  margin: 0.5rem;
  margin-left: 0;
}
.location-name {
  width: 100%;
  margin: 0.25rem;
  color: #3E3E3E;
}
</style>
