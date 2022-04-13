<template>
  <h1>{{ id }}</h1>
</template>

<script>
export default ({
  asyncData ({ params }) {
    const id = params.id
    return { id }
  }
})
</script>
