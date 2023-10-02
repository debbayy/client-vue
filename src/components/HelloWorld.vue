<template>
  <v-container>
    <v-row>ini apaan sih deby</v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({
    //
  }),
  metods: {
    changeTheme(color) {
      if (this.$vuetify.theme.dark) {
        this.$vuetify.theme.themes.dark.primary = color;
      } else {
        this.$vuetify.theme.themes.light.primary = color;
      }
      this.$vuetify.theme.themes.light.primary = color;
    },
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
//   data: () => ({
//     ecosystem: [
//       {
//         text: "vuetify-loader",
//         href: "https://github.com/vuetifyjs/vuetify-loader",
//       },
//       {
//         text: "github",
//         href: "https://github.com/vuetifyjs/vuetify",
//       },
//       {
//         text: "awesome-vuetify",
//         href: "https://github.com/vuetifyjs/awesome-vuetify",
//       },
//     ],
//     importantLinks: [
//       {
//         text: "Documentation",
//         href: "https://vuetifyjs.com",
//       },
//       {
//         text: "Chat",
//         href: "https://community.vuetifyjs.com",
//       },
//       {
//         text: "Made with Vuetify",
//         href: "https://madewithvuejs.com/vuetify",
//       },
//       {
//         text: "Twitter",
//         href: "https://twitter.com/vuetifyjs",
//       },
//       {
//         text: "Articles",
//         href: "https://medium.com/vuetify",
//       },
//     ],
//     whatsNext: [
//       {
//         text: "Explore components",
//         href: "https://vuetifyjs.com/components/api-explorer",
//       },
//       {
//         text: "Select a layout",
//         href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
//       },
//       {
//         text: "Frequently Asked Questions",
//         href: "https://vuetifyjs.com/getting-started/frequently-asked-questions",
//       },
//     ],
//   }),
// };
</script>
