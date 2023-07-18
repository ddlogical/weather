<script setup>
import { nextTick } from "vue";
import { useSearch } from "../composables/search";

const { search, searchCity, searchedCities } = useSearch();

const autompleteClickHandler = async (data) => {
  searchCity.value = data;
  await nextTick();
  search.value = `${data.name}, ${data.country}`;
};
</script>

<template>
  <div class="autocomplete">
    <input
      type="text"
      v-model="search"
      class="autocomplete-input"
      placeholder="Search your city..."
    />
    <ul class="autocomplete-results" v-if="searchedCities.length">
      <li
        class="autocomplete-result"
        v-for="searchedCity of searchedCities"
        @click="autompleteClickHandler(searchedCity)"
        :value="searchedCity"
      >
        {{ searchedCity.name }}, {{ searchedCity.country }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.autocomplete {
  position: relative;
  flex-direction: column;
  max-width: 50rem;
  margin: 0 auto;
}

.autocomplete-input {
  background-color: var(--color-accent-darkest);
  width: 100%;
  height: 4rem;
  border: none;
  border-radius: 10px;
  font-size: 2rem;
  padding: 1rem;
  color: var(--color-white);
}

.autocomplete-input:focus {
  outline: none;
}

.autocomplete-results {
  padding: 0;
  margin: 0;
  border: 1px solid var(--color-white);
  background-color: transparent;
  border-radius: 5px;
  padding: 1rem;
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  transform: translateY(100%);
  width: 100%;
  z-index: 1000;
}

.autocomplete-result {
  list-style: none;
  text-align: left;
  padding: 4px 0;
  cursor: pointer;
  transition: all 0.2s ease-in;
}

.autocomplete-result:hover {
  text-shadow: var(--color-gold) 1px 0 10px;
}
</style>
