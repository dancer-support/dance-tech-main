<template>
  <v-lazy
    :options="{
      threshold: 0.5,
    }"
    min-height="200"
    transition="fade-transition"
  >
    <v-card id="post.id" class="mx-auto" max-width="344">
      <v-img
        :src="`${thumbnail.fields.file.url}`"
        :alt="`${thumbnail.fields.title}`"
        gradient="to top, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        class="white--text align-start"
        height="200px"
      >
        <v-card-title>{{ title }}</v-card-title>
      </v-img>

      <v-card-subtitle>{{ text }}</v-card-subtitle>

      <v-card-actions>
        <v-list-item class="grow">
          <v-list-item-avatar color="grey lighten-5">
            <v-img class="elevation-6" :src="`${imageUrl}`" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ person.fields.name }}</v-list-item-title>
          </v-list-item-content>
          <v-row align="center" justify="end">
            <v-badge inline content="100" color="pink darken-1">
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
            </v-badge>
            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-row>
        </v-list-item>
      </v-card-actions>
    </v-card>
  </v-lazy>
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
    },
    person: {
      type: Object,
      default: () => ({ fields: { image: {}, name: '', twitter: '', shortBio: '' } })
    }
  },
  computed: {
    imageUrl () {
      return this.person.fields.image.fields.file.url
    }
  }
}
</script>
