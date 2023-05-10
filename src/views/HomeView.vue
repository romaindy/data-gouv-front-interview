<script setup>
import axios from 'axios'
import { ref } from 'vue'

const randomHash = ref('')

axios.get(import.meta.env.VITE_API_URL + '/api/dummy-hash').then((response) => {
  randomHash.value = response.data?.random_hash
})
</script>

<template>
  <main id="content" class="fr-my-5v fr-my-md-14v" role="main">
    <div class="fr-container">
      <h1>Accueil</h1>
      <p class="fr-text--sm fr-mb-3w">Exercices 1 à 3</p>
      <h2>Exercice n°1</h2>
      <p>Random hash retourné par la route /dummy-hash de l'API : {{ randomHash }}</p>
      <h2>Exercices n°2 et n°3</h2>
      <p>
        <RouterLink to="/hash" class="fr-btn fr-btn--secondary">
          Obtenir un hash personnalisé
        </RouterLink>
      </p>
    </div>
  </main>
</template>
