<template>
  <v-img
    :aspect-ratio="16 / 9"
    rel="preload"
    as="image"
    class="white--text align-end"
    :src="src"
    contain
  />
</template>

<script>
export default {
  name: 'WideImage',
  props: {
    src: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
</style>
