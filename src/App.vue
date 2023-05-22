<script setup lang="ts"></script>

<template>
  <header>
    <router-link to="/"><h1>Demo Advisor Portal</h1></router-link>
  </header>
  <main>
    <router-view />
  </main>
</template>

<style scoped>
header {
  margin-bottom: var(--spacing-lg);
}
h1 {
  text-align: center;
}
@media (min-width: 1024px) {
  h1 {
    text-align: left;
  }
}
</style>
