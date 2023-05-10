<script setup>
import axios from 'axios'
import { reactive, watch } from 'vue'

const form = reactive({
  string: '',
  algorithm: '',
  realTime: false
})
const hashesObject = {
  md5: '',
  sha1: '',
  sha256: ''
}
const hashes = reactive({ ...hashesObject })

function resetHashesValues() {
  Object.assign(hashes, hashesObject)
}

function getHashFromAPI(algorithm = form.algorithm) {
  if (!form.string) return

  axios
    .post(import.meta.env.VITE_API_URL + '/api/hash', {
      string: form.string,
      algorithm: algorithm
    })
    .then((response) => {
      hashes[algorithm] = response.data.hash
    })
}

function getAllHashesFromAPI() {
  getHashFromAPI('md5')
  getHashFromAPI('sha1')
  getHashFromAPI('sha256')
}

watch(form, () => {
  resetHashesValues()

  if (!form.realTime) return

  getAllHashesFromAPI()
})
</script>

<template>
  <main id="content" class="fr-my-5v fr-my-md-14v" role="main">
    <div class="fr-container">
      <h1>Création d'un hash personnalisé</h1>
      <p class="fr-text--sm fr-mb-3w">Exercice n°2 et 3</p>
      <form id="hash" @submit.prevent="getHashFromAPI()">
        <fieldset class="fr-fieldset" id="hash-fieldset">
          <div class="fr-fieldset__element">
            <p class="fr-text--sm">
              Ce formulaire permet de hacher une chaine de caractère grâce aux fonctions de hachage
              md5, sha1 ou sha256.
            </p>
          </div>
          <div class="fr-fieldset__element">
            <fieldset class="fr-fieldset" id="credentials">
              <div class="fr-fieldset__element">
                <div class="fr-input-group">
                  <label class="fr-label" for="hash"> Chaîne de caractère </label>
                  <input
                    type="text"
                    v-model="form.string"
                    name="hash"
                    id="hash"
                    class="fr-input"
                    aria-required="true"
                    required
                  />
                </div>

                <div class="fr-toggle">
                  <input
                    type="checkbox"
                    v-model="form.realTime"
                    id="toggle"
                    class="fr-toggle__input"
                    aria-describedby="toggle-hint-text"
                  />
                  <label
                    for="toggle"
                    class="fr-toggle__label"
                    data-fr-checked-label="Activé"
                    data-fr-unchecked-label="Désactivé"
                  >
                    Activer le hachage en temps réel
                  </label>
                  <p class="fr-hint-text" id="toggle-hint-text">
                    Affiche en temps réel le résultat pour les 3 fonctions de hachage.
                  </p>
                </div>

                <div v-if="!form.realTime" class="fr-select-group">
                  <label class="fr-label" for="select"> Fonction de hachage </label>
                  <select v-model="form.algorithm" name="select" id="select" class="fr-select">
                    <option value="" selected disabled hidden>
                      Sélectionnez une fonction de hachage
                    </option>
                    <option value="md5">md5</option>
                    <option value="sha1">sha1</option>
                    <option value="sha256">sha256</option>
                  </select>
                </div>
              </div>
            </fieldset>
          </div>
          <div class="fr-fieldset__element" v-if="!form.realTime">
            <button class="fr-btn">Valider</button>
          </div>
          <div v-if="hashes" class="fr-messages-group" aria-live="assertive">
            <template v-for="(hash, algorithm) in hashes" :key="algorithm">
              <p v-if="hash">Hash ({{ algorithm }}) : {{ hash }}</p>
            </template>
          </div>
        </fieldset>
      </form>
    </div>
  </main>
</template>
