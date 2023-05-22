<script setup lang="ts"></script>

<template>
  <header>
    <router-link to="/"><h1>Demo Advisor Portal</h1></router-link>
  </header>
  <main>
    <!-- <Suspense> -->
    <router-view />
    <!-- </Suspense> -->
  </main>
</template>

<style scoped>
header {
  margin-bottom: 1em;
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

<style>
a,
a:visited {
  color: var(--c-link);
  text-decoration: none;
}

table {
  border-collapse: collapse;
}

table > tr > th {
  text-align: left;
  font-weight: 600;
}

table th,
table td {
  padding: var(--spacing-md);
  border-left: 1px solid var(--c-border-color);
}

table td:first-child,
table th:first-child {
  border-left: none;
}

table th:first-child {
  padding-left: 0;
}

table > tr:first-child {
  border-bottom: 1px solid var(--c-border-color);
}

table > tr:not(:first-child):nth-child(odd) {
  background-color: var(--c-offwhite);
}
</style>
