<script setup>
import { RouterView } from 'vue-router'
import AppHeader from '@/components/HeaderComponent.vue'
import AppFooter from '@/components/FooterComponent.vue'
</script>

<template>
  <AppHeader />
  <RouterView />
  <AppFooter />
</template>
