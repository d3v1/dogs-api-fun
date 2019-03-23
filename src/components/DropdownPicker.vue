<template>
  <div v-if="items">
    <v-menu offset-y max-height="150" :allow-overflow="true">
      <template v-slot:activator="{ on }">
        <v-btn
          color="teal"
          dark
          v-on="on"
        >
          {{ pickerText }}
        </v-btn>
      </template>
      <v-list class="overflow-hidden">
        <v-list-tile
          v-for="(item, name) in items"
          :key="name"
          @click="chosen(name)"
        >
          <v-list-tile-title>{{ name }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: 'DropdownPicker',
  props: ['items', 'pickerText'],
  methods: {
    chosen(name) {
      this.$emit('chosen', name);
    },
  },
};
</script>

<style scoped>

</style>
