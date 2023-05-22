<script setup lang="ts">
defineProps<{
  label: string;
}>();
</script>

<template>
  <button @click="$emit('onClick')" aria-label="{{ label }}">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  background-color: var(--c-brand-secondary);
  color: var(--c-white);
  border: none;
  cursor: pointer;
  padding: var(--spacing-md);
  border-radius: var(--border-radius);
}
</style>
