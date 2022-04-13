<template>
  <div>
    <NuxtLink to="/performances">
      back
    </NuxtLink>
    <h1>{{ performance.title }}</h1>
    <section>
      <AtomImageWideImage :src="performance.image_url" />
      <p>{{ performance.description }}</p>
    </section>
    <section>
      <h2>Dancers</h2>
      <v-container>
        <v-row>
          <v-col
            v-for="i in 3"
            :key="i"
            sm="4"
            no-gutters
          >
            <v-card v-if="i <= performance.dancers.length" class="pa-2">
              <AtomImageWideImage :src="imageUrls[i - 1]" />
              <p>{{ names[i - 1] }}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
export default ({
  async asyncData ({ params, $axios }) {
    const id = params.id
    const { performance } = await $axios.$get(`/performances/${id}`)
    const imageUrls = performance.dancers.map(dancer => dancer.image_url)
    const names = performance.dancers.map(dancer => dancer.name)
    return {
      performance,
      imageUrls,
      names
    }
  }
})
</script>
