<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const user = useUserStore()

function logout() {
  user.logout()
  router.push('/')
}
</script>

<template>
  <main id="content" class="fr-my-md-14v" role="main">
    <div class="fr-container fr-container--fluid">
      <h1>Bienvenue dans votre espace membre</h1>
      <p>
        <button @click="logout()" class="fr-btn fr-btn--secondary">Déconnexion</button>
      </p>
    </div>
  </main>
</template>
