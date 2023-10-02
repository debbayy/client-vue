<template>
  <c-container>
    <h1>Halaman Pokemon</h1>
    <h3>list pokemon:</h3>

    <!-- <li v-for="pokemon in listPokemon" :key="pokemon.name">
        {{ pokemon.name }}
      </li> -->
    <div>
      <v-table>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Url</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pokemon in listPokemon" :key="pokemon.name">
            <td>{{ pokemon.name }}</td>
            <td>{{ pokemon.url }}</td>
          </tr>
        </tbody>
      </v-table>
    </div>

    <button @click="fetchPokemon">fetch Pokemon</button>
  </c-container>
</template>

<script>
export default {
  name: "PokemonView",
  computed: {
    listPokemon() {
      return this.$store.state.pokemon.list;
    },
  },
  methods: {
    fetchPokemon() {
      this.$store.dispatch("pokemon/fetchList");
    },
  },
  mounted() {
    this.fetchPokemon();
  },
};
</script>
