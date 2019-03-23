<template>
  <v-app>
    <v-toolbar app class="pa-2 elevation-0 teal darken-4 white--text">
      <v-toolbar-title class="headline text-uppercase">
        <span>My Favourite Dogs</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

};
</script>
