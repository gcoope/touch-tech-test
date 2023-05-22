<script setup lang="ts">
import BookmarkIcon from "../icons/BookmarkIcon.vue";
defineProps<{
  checked: boolean;
}>();
</script>

<template>
  <button
    @click="$emit('onClick')"
    aria-label="{{ `Bookmark toggle ${checked}` }}"
    title="Toggle bookmark"
  >
    <BookmarkIcon :class="{ filled: checked }" />
  </button>
</template>

<style scoped>
button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.filled {
  color: var(--c-brand-secondary);
}
</style>
