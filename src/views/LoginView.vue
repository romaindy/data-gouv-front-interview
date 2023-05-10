<script setup>
import { reactive, ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const user = useUserStore()
const displayPassword = ref(false)
const form = reactive({
  username: '',
  password: ''
})
const errors = reactive({
  username: '',
  global: ''
})

function login() {
  errors.global = ''

  axios
    .post(import.meta.env.VITE_API_URL + '/api/login', {
      username: form.username,
      password: form.password
    })
    .then((response) => {
      user.username = form.username
      user.token = response.data?.token
      router.push('/account')
    })
    .catch(() => {
      errors.global = 'Vos identifiants sont incorrects.'
    })
}
</script>
<template>
  <main id="content" class="fr-my-5v fr-my-md-14v" role="main">
    <div class="fr-container">
      <div class="fr-grid-row fr-grid-row-gutters fr-grid-row--center">
        <div class="fr-col-12 fr-col-md-9 fr-col-lg-4">
          <h1>Connexion</h1>
          <div>
            <div v-if="errors.global" class="fr-alert fr-alert--error fr-mb-5v">
              <h3 class="fr-alert__title">Erreur</h3>
              <p>{{ errors.global }}</p>
            </div>
            <form @submit.prevent="login()" id="login">
              <fieldset class="fr-fieldset" id="login-fieldset">
                <div class="fr-fieldset__element">
                  <p class="fr-text--sm">
                    Ce formulaire permet d'accéder à un espace membre fictif.
                  </p>
                </div>
                <div class="fr-fieldset__element">
                  <fieldset class="fr-fieldset" id="credentials">
                    <div class="fr-fieldset__element">
                      <span class="fr-hint-text"
                        >Sauf mention contraire, tous les champs sont obligatoires.</span
                      >
                    </div>
                    <div class="fr-fieldset__element">
                      <div class="fr-input-group">
                        <label class="fr-label" for="username">
                          Identifiant
                          <span class="fr-hint-text">Format attendu : nom@domaine.fr</span>
                        </label>
                        <input
                          type="email"
                          v-model="form.username"
                          name="username"
                          id="username"
                          class="fr-input"
                          autocomplete="username"
                          aria-required="true"
                          required
                        />
                      </div>
                    </div>
                    <div class="fr-fieldset__element">
                      <div class="fr-password" id="password">
                        <label class="fr-label" for="password-input"> Mot de passe </label>
                        <div class="fr-input-wrap">
                          <input
                            :type="displayPassword ? 'text' : 'password'"
                            v-model="form.password"
                            name="password"
                            id="password-input"
                            class="fr-password__input fr-input"
                            autocomplete="current-password"
                            aria-required="true"
                            required
                          />
                        </div>
                        <div class="fr-password__checkbox fr-checkbox-group fr-checkbox-group--sm">
                          <input
                            v-model="displayPassword"
                            aria-label="Afficher le mot de passe"
                            id="password-show"
                            type="checkbox"
                          />
                          <label class="fr-password__checkbox fr-label" for="password-show">
                            Afficher
                          </label>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div class="fr-fieldset__element">
                  <ul class="fr-btns-group">
                    <li>
                      <button class="fr-btn">Se connecter</button>
                    </li>
                  </ul>
                </div>
              </fieldset>
            </form>
          </div>
          <hr />
          <h2>Vous n’avez pas de compte&nbsp;?</h2>
          <ul class="fr-btns-group">
            <li>
              <RouterLink class="fr-btn fr-btn--secondary" to="/register"
                >Créer un compte
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>
