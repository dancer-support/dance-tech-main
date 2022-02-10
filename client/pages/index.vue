<template>
  <div>
    <div v-for="(item, index) in items" :key="index">
      <v-img
        rel="preload"
        as="image"
        class="white--text align-end"
        :src="item.image"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        contain
      >
        <v-card-subtitle v-text="item.text" />
        <v-icon class="ml-2 mb-2">
          mdi-heart
        </v-icon>
        <span class="subheading ml-2 mb-2">{{ item.likes }}</span>
      </v-img>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PagePerformance',
  async asyncData ({ $axios, $config }) {
    const photos = await $axios.$get('https://dummyapi.io/data/v1/post', {
      params: { limit: 50 },
      headers: {
        'app-id': $config.DUMMY_APP_ID
      }
    })
    return {
      items: photos.data
    }
  }
}
</script>
