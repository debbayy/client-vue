<template>
  <v-container class="container">
    <nav class="d-flex flex-row mb-6 cene bg-surface-variant">
      <v-sheet class="ma-2 pa-2">
        <router-link class="linkNavbar" to="/">Home</router-link></v-sheet
      >
      <v-sheet class="ma-2 pa-2">
        <router-link to="/about">About</router-link></v-sheet
      >
      <v-sheet class="ma-2 pa-2">
        <router-link to="/setting">Setting</router-link>
      </v-sheet>
      <v-sheet class="ma-2 pa-2">
        <router-link to="/setting/privacy">Setting - Privacy </router-link>
      </v-sheet>
      <v-sheet class="ma-2 pa-2">
        <router-link to="/user">User</router-link>
      </v-sheet>
      <v-sheet class="ma-2 pa-2">
        <router-link to="/user/123">User Detail</router-link>
      </v-sheet>
      <v-sheet class="ma-2 pa-2">
        <router-link to="/pokemon">Pokemon</router-link>
      </v-sheet>
      <v-sheet class="ma-2 pa-2">
        <v-btn @click="changeDark"> Gelap/Terang </v-btn>
      </v-sheet>
    </nav>
    <div class="row">
      <router-view />
    </div>
  </v-container>
</template>

<script>
export default {
  name: "DefaultLayoutView",
  methods: {
    changeDark() {
      if (this.$vuetify.theme.dark) {
        this.$vuetify.theme.themes.light.primary =
          this.$vuetify.theme.themes.dark.primary;
      } else {
        this.$vuetify.theme.themes.dark.primary =
          this.$vuetify.theme.themes.light.primary;
      }

      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>

<style scoped>
.container {
  min-height: 100vh;
  width: 100%;
  /* background-color: whitesmoke; */
}
.row {
  margin-left: 50px;
}
</style>
