<template>

  <div v-if="images.length > 0">

    <v-layout>
      <v-flex xs12>
        <v-card>
          <v-container grid-list-sm fluid>
            <v-layout row wrap>
              <v-flex
                v-for="(image, i) in images"
                :key="i"
                xs4
                d-flex
              >
                <v-card flat tile class="d-flex"
                        @click="favourite(image)"
                        :class="{ 'elevation-5 ma-3': $store.getters.isImageFavourite(image) }">
                  <v-img
                    :src="image"
                    :lazy-src="image"
                    aspect-ratio="1"
                    class="grey lighten-2"
                  >
                    <template v-slot:placeholder>
                      <v-layout
                        fill-height
                        align-center
                        justify-center
                        ma-0
                      >
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                      </v-layout>
                    </template>
                  </v-img>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>

  </div>
</template>

<script>
export default {
  name: 'ImageGrid',
  props: ['category', 'images'],
  methods: {
    // logic for whether this favourites or removes from favourites
    // is in the store
    favourite(image) {
      this.$store.dispatch('favouriteAction', {
        title: this.category,
        image,
      });
    },
  },
};
</script>
