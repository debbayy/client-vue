<template>
  <div>
    <h1>Halaman User</h1>
    <h1>angka dari store: {{ ambilDariStore }}</h1>
    
    <!-- input -->
    <v-text-field
      v-model="newAngka"
      type="number"
      label="Regular"
    ></v-text-field>
    
    <!-- tombol -->
    <v-btn
      @click="gantiAngka"
      color="primary"
      elevation="2"
    >
      Ganti angka
    </v-btn>

    <!-- tombol ganti warna -->
    <v-layout>
      <v-flex>
        <p>ganti warna</p>
      </v-flex>
      <v-flex>
        <v-btn color="#1976D2" @click="changeTheme('#1976D2')">
          Biru
        </v-btn>
      </v-flex>
      <v-flex>
        <v-btn color="#39AC37" @click="changeTheme('#39AC37')">
          Hijau
        </v-btn>
      </v-flex>
      <v-flex>
        <v-btn color="#DB9600" @click="changeTheme('#DB9600')">
          Oren
        </v-btn>
      </v-flex>
      <v-flex>
        <v-btn @click="changeDark">
          Gelap/Terang
        </v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'UserView',
  data() {
    return {
      newAngka: 0
    }
  },
  methods: {
    gantiAngka() {
      this.$store.dispatch("user/changeAngkaValue", this.newAngka)
    },
    changeTheme(color) {
      if (this.$vuetify.theme.dark) {
        this.$vuetify.theme.themes.dark.primary = color
      } else {
        this.$vuetify.theme.themes.light.primary = color
      }
      this.$vuetify.theme.themes.light.primary = color
    },
    changeDark() {
      if (this.$vuetify.theme.dark) {
        this.$vuetify.theme.themes.light.primary = this.$vuetify.theme.themes.dark.primary
      } else {
        this.$vuetify.theme.themes.dark.primary = this.$vuetify.theme.themes.light.primary
      }

      this.$vuetify.theme.dark = !this.$vuetify.theme.dark 
    }
  },
  computed: {
    ambilDariStore() {
      return this.$store.state.user.angka
    }
  }
}
</script>