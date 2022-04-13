<template>
  <div>
    <NuxtLink to="/performances">
      back
    </NuxtLink>
    <h1>{{ performance.title }}</h1>
    <section>
      <!-- FIXME: WideImageから外部の画像を表示できていない模様なので、一時的にアイコンを表示している -->
      <!-- <AtomImageWideImage :src="performance.image_url" /> -->
      <AtomImageWideImage :src="link" />
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
              <AtomImageWideImage :src="link" />
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
    const link = '/profile.png'
    const names = performance.dancers.map((dancer) => {
      const { first_name_en: firstName, last_name_en: lastName } = dancer
      return `${firstName} ${lastName}`
    })
    return {
      performance,
      link,
      names
    }
  }
})
</script>
