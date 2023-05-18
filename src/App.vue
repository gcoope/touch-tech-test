<script setup lang="ts"></script>

<template>
  <header>
    <h1>Demo Advisor Portal</h1>
  </header>

  <main>
    <div id="nav">
      <router-link to="/">Dashboard</router-link> |
      <router-link to="/client/0001">Client 1</router-link> |
      <router-link to="/asset/IE00B52L4369">Asset </router-link>
    </div>
    <Suspense>
      <router-view />
    </Suspense>
  </main>
</template>

<style scoped>
h1 {
  text-align: center;
}
@media (min-width: 1024px) {
  h1 {
    text-align: left;
  }
}
</style>
