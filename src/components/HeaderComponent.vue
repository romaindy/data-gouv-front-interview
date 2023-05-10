<script setup>
import { useUserStore } from '@/stores/user'

const user = useUserStore()
</script>

<template>
  <header role="banner" class="fr-header">
    <div class="fr-header__body">
      <div class="fr-container">
        <div class="fr-header__body-row">
          <div class="fr-header__brand fr-enlarge-link">
            <div class="fr-header__brand-top">
              <div class="fr-header__logo">
                <p class="fr-logo">
                  Data.gouv<br />
                  TEST INTERVIEW
                </p>
              </div>
            </div>
            <div class="fr-header__service">
              <RouterLink to="/" title="Accueil - Data.gouv - Test Interview">
                <p class="fr-header__service-title">Data.gouv - Test front-end</p>
              </RouterLink>
              <p class="fr-header__service-tagline">Test technique Data.gouv - Romain Divandary</p>
            </div>
          </div>
          <div class="fr-header__tools">
            <div class="fr-header__tools-links">
              <ul class="fr-btns-group">
                <li v-if="!user.isConnected">
                  <RouterLink class="fr-btn fr-icon-lock-line" to="/login">
                    Se connecter
                  </RouterLink>
                </li>
                <li v-if="!user.isConnected">
                  <RouterLink class="fr-btn fr-icon-account-line" to="/register">
                    S’enregistrer
                  </RouterLink>
                </li>
                <li v-if="user.isConnected">
                  <RouterLink class="fr-btn fr-icon-account-line" to="/account">
                    Espace membre
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
