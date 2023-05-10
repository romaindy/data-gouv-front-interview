import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const username = ref('')
  const token = ref('')
  const isConnected = computed(() => token.value !== '')

  function logout() {
    username.value = ''
    token.value = ''
  }

  return { username, token, isConnected, logout }
})
