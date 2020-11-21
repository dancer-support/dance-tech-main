<template>
  <main>
    <h1>{{ title }}</h1>
    <img :src="`${thumbnail.fields.file.url}`" :alt="`${thumbnail.fields.title}`">
    <div>{{ text }}</div>
    <NuxtLink to="/">
      一覧に戻る
    </NuxtLink>
  </main>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    thumbnail: {
      type: Object,
      default: () => ({ fields: { title: '', file: { url: '' } } })
    }
  }
}
</script>
