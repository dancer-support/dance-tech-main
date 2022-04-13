<template>
  <div>
    <NuxtLink to="/performances">
      back
    </NuxtLink>
    <h1>{{ performance.title }}</h1>
    <div>
      <!-- FIXME: WideImageから外部の画像を表示できていない模様なので、一時的にアイコンを表示している -->
      <!-- <AtomImageWideImage :src="performance.image_url" /> -->
      <AtomImageWideImage :src="link" />
      <p>{{ performance.description }}</p>
    </div>
  </div>
</template>

<script>
export default ({
  async asyncData ({ params, $axios }) {
    const id = params.id
    const { performance } = await $axios.$get(`/performances/${id}`)
    const link = '/profile.png'
    return { performance, link }
  }
})
</script>
