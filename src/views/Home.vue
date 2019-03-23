<template>
  <div>
    <v-container my-4>

      <!--terrible ui attempt...-->
      <!--<dropdown-picker :items="dogs" picker-text="Choose a dog" @chosen="loadImages(name)"></dropdown-picker>-->

      <v-card>
        <v-card-title class="headline font-weight-regular teal white--text">Doggo-favourite-o-matic</v-card-title>
        <v-card-text>
          <v-subheader class="pa-0">What dog breed would you like to see?</v-subheader>
          <v-autocomplete
            v-model="model"
            :items="Object.keys(dogs)"
            :readonly="false"
            persistent-hint
            @change="loadImages(model)"
          >
            <template v-slot:item="data">
              <v-list-tile-content v-text="data.item" class="text-capitalize"></v-list-tile-content>
            </template>
            <template v-slot:selection="data">
              <v-list-tile-content v-text="data.item" class="text-capitalize"></v-list-tile-content>
            </template>
          </v-autocomplete>
        </v-card-text>
      </v-card>

      <image-grid :category="model" :images="images"></image-grid>


    </v-container>

    <v-footer class="pa-3 teal white--text mt-5">
      <v-spacer></v-spacer>
      <div>A bit of fun with code</div>
    </v-footer>
  </div>
</template>

<script>
import ImageGrid from '../components/ImageGrid.vue';
// import DropdownPicker from '../components/DropdownPicker.vue';

export default {
  name: 'App',
  components: {
    ImageGrid,
    // DropdownPicker,
  },
  computed: {
    dogs() {
      return this.$store.getters.dogs;
    },
  },
  data() {
    return {
      images: [],
      model: null,
    };
  },
  methods: {
    loadImages(name) {
      axios.get(`https://dog.ceo/api/breed/${name}/images/random/9`)
        .then((response) => {
          this.images = response.data.message;
        })
        .catch((error) => {
          this.$logger.error(error);
        });
    },
  },
};
</script>
