<template>
  <div>
    <h1>Halaman Pokemon</h1>
    <h3>list pokemon:</h3>
    <ul>
      <li v-for="pokemon in listPokemon" :key="pokemon.name">
        {{ pokemon.name }}
      </li>
    </ul>
    <button @click="fetchPokemon">fetch Pokemon</button>
  </div>
</template>

<script>
export default {
  name: 'PokemonView',
  computed: {
    listPokemon() {
      return this.$store.state.pokemon.list
    }
  },
  methods: {
    fetchPokemon() {
      this.$store.dispatch("pokemon/fetchList");
    }
  },
  mounted() {
    this.fetchPokemon()
  }
}
</script>